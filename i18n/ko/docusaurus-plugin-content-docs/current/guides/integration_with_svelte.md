---
sidebar_label: Svelte와의 통합
title: Svelte와의 통합
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Svelte와의 통합에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# Svelte와의 통합

:::tip
이 가이드로 바로 들어가기 전에 **Svelte**에 대한 기본적인 이해가 있으면 도움이 됩니다. 빠르게 복습하려면 [**Svelte 공식 문서**](https://svelte.dev/)를 참고하세요.
:::

DHTMLX Kanban은 **Svelte**와 매끄럽게 작동합니다. Svelte 환경에서 DHTMLX Kanban을 사용하는 방법을 보여주는 코드 예제가 있습니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/svelte-kanban-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Vite**](https://vite.dev/) (선택 사항)와 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

**Svelte** 프로젝트를 설정하는 방법은 여러 가지가 있습니다:

- [**SvelteKit**](https://kit.svelte.dev/) 사용

또는

- **Svelte와 Vite**만 사용 (SvelteKit 없이):

~~~json
npm create vite@latest
~~~

더 자세한 방법은 [관련 문서](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit)에서 확인할 수 있습니다.

### 의존성 설치

프로젝트를 **my-svelte-kanban-app**이라고 하고 해당 디렉토리로 이동합니다:

~~~json
cd my-svelte-kanban-app
~~~

의존성을 설치하고 개발 서버를 시작하려면 선호하는 패키지 매니저를 사용하세요:

- [**yarn**](https://yarnpkg.com/) 사용 시:

~~~json
yarn
yarn start
~~~

- [**npm**](https://www.npmjs.com/) 사용 시:

~~~json
npm install
npm run dev
~~~

앱은 로컬에서 `http://localhost:3000` 등에서 접근할 수 있습니다.

## Kanban 생성

이제 DHTMLX Kanban 소스 코드를 사용할 준비가 필요합니다. 앱을 잠시 중지하고 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[**Kanban 평가판 패키지**](/how_to_start/#kanban을-npm-또는-yarn으로-설치하기)를 다운로드한 후 README의 안내를 따라 설치하세요. 참고로, 평가판은 30일간 사용 가능합니다.

### 2단계. 컴포넌트 생성

이제 Kanban과 Toolbar가 포함된 Svelte 컴포넌트를 앱에 추가할 차례입니다. ***src/*** 아래에 ***Kanban.svelte*** 파일을 새로 만드세요.

#### 소스 파일 가져오기

***Kanban.svelte*** 파일을 열고 Kanban 소스 파일을 가져옵니다. 참고:

- PRO 버전에서 로컬 패키지로 설치했다면 import 경로는 다음과 같습니다:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

패키지에 따라 소스 파일이 minified 되어 있을 수 있습니다. 이 경우 **kanban.min.css**를 import해야 합니다.

- 평가판을 사용할 경우 import 경로는 다음과 같습니다:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

이 가이드의 예제는 **평가판** 버전을 기준으로 설명합니다.

#### 컨테이너 설정 및 Kanban과 Toolbar 추가

Kanban과 Toolbar를 보여주기 위해 두 컴포넌트의 컨테이너를 만들고 각각을 생성자와 함께 초기화합니다:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // Kanban과 Toolbar용 컨테이너 초기화
let kanban, toolbar;

onMount(() => {
    // Kanban 컴포넌트 초기화
    kanban = new Kanban(kanban_container, {})

    // Toolbar 컴포넌트 초기화
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // Kanban 내장 API 제공
        // 추가 설정
    })
});

onDestroy(() => {
    kanban.destructor(); // Kanban 소멸자 호출
    toolbar.destructor(); // Toolbar 소멸자 호출
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### 데이터 불러오기

Kanban에 데이터를 넣으려면 데이터셋이 필요합니다. ***src/*** 디렉토리에 ***data.js*** 파일을 만들고 예시 데이터를 추가하세요:

~~~jsx {2,14,37,48} title="data.js"
export function getData() {
    const columns = [
        {
            label: "Backlog",
            id: "backlog"
        },
        {
            label: "In progress",
            id: "inprogress"
        },
        // ...
    ];

    const cards = [
        {
            id: 1,
            label: "Integration with Angular/React",
            priority: 1,
            color: "#65D3B3",
            start_date: new Date("01/07/2021"),
            users: [3, 2],
            column: "backlog",
            type: "feature",
        },
        {
            label: "Archive the cards/kanbans ",
            priority: 3,
            color: "#58C3FE",
            users: [4],
            progress: 1,
            column: "backlog",
            type: "feature",
        },
        // ...
    ];

    const rows = [
        {
            label: "Feature",
            id: "feature",
        },
        {
            label: "Task",
            id: "task",
        }
    ];

    return { columns, cards, rows };
}
~~~

이제 ***App.svelte***를 열고 데이터를 import한 뒤, 새 `<Kanban/>` 컴포넌트에 **props**로 전달합니다:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

***Kanban.svelte***로 이동해 이 **props**들을 Kanban 설정에 사용하세요:

~~~html {6-8,15-17} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar, defaultEditorShape } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container;
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns, 
        cards,
        rows,
        rowKey: "type",
        // 추가 설정
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // Kanban 내장 API 제공
        // 추가 설정
    })
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

또는, Svelte의 `onMount()`에서 [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 사용해 Kanban에 데이터를 불러올 수도 있습니다:

~~~html {6-8,27} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar} from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export let columns;
export let cards;
export let rows;

let toolbar_container, kanban_container; 
let kanban, toolbar;

onMount(() => {
    kanban = new Kanban(kanban_container, {
        columns: [],
        cards: [],
        rows: [],
        rowKey: "type",
        // 추가 설정
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // Kanban 내장 API 제공
        // 추가 설정
    })

    kanban.parse({ columns, cards, rows });
});

onDestroy(() => {
    kanban.destructor(); 
    toolbar.destructor(); 
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

`parse(data)` 메서드는 데이터가 변경될 때마다 다시 불러오는 데 유용합니다.

이 시점에서 Kanban 컴포넌트의 기본 구성이 완료되었습니다. 페이지에 추가하면 데이터와 함께 초기화됩니다. 필요한 기타 설정은 자유롭게 추가할 수 있습니다. 모든 옵션에 대한 자세한 정보는 [Kanban API 문서](/api/overview/properties_overview/)에서 확인하세요.

#### 이벤트 처리

Kanban에서 동작이 발생하면 이벤트가 발생합니다. 이를 통해 사용자 액션에 반응하거나 커스텀 로직을 실행할 수 있습니다. [이벤트 전체 리스트](/api/overview/events_overview/)도 참고하세요.

***Kanban.svelte***에서 `onMount()` 내부에 이벤트 처리를 추가해보세요:

~~~html {8-10} title="Kanban.svelte"
<script>
// ...
let kanban;

onMount(() => {
    kanban = new Kanban(kanban_container, {})

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
});

onDestroy(() => {
    kanban.destructor();
});
</script>

// ...
~~~

### 3단계. Kanban을 앱에 추가

앱에서 컴포넌트를 보여주려면 **App.svelte**를 열어 코드를 업데이트하세요:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

이제 앱을 시작하면 제공한 데이터로 Kanban이 동작하는 모습을 볼 수 있습니다.

![Kanban initialization](/assets/trial_kanban.png)

이것으로 DHTMLX Kanban을 Svelte 앱에 통합하는 방법을 모두 다루었습니다. 코드를 자유롭게 수정해 원하는 방식으로 사용할 수 있습니다. 좀 더 발전된 예제가 필요하다면 [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo)를 참고하세요.
