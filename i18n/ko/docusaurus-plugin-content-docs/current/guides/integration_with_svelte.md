---
sidebar_label: Svelte와의 통합
title: Svelte와의 통합
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Svelte와의 통합에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# Svelte와의 통합

:::tip
이 문서를 읽기 전에 **Svelte**의 기본 개념과 패턴에 익숙해야 합니다. 지식을 다시 확인하려면 [**Svelte documentation**](https://svelte.dev/docs/svelte/overview)을 참고하세요.
:::

DHTMLX Kanban은 **Svelte**와 호환됩니다. DHTMLX Kanban을 **Svelte**와 함께 사용하는 방법에 대한 코드 예제를 준비했습니다. 자세한 내용은 [**Example on GitHub**](https://github.com/DHTMLX/svelte-kanban-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 만들기 전에 [**Vite**](https://vite.dev/) (선택 사항)와 [**Node.js**](https://nodejs.org/en/)를 설치해야 합니다.
:::

**Svelte** 프로젝트를 만드는 방법은 여러 가지가 있습니다:

- [**SvelteKit**](https://kit.svelte.dev/)을 사용할 수 있습니다.

또는

- **Svelte와 Vite**를 사용할 수도 있습니다(SvelteKit 없이):

~~~json
npm create vite@latest
~~~

자세한 내용은 [관련 문서](https://svelte.dev/docs/svelte/overview)를 참고하세요.

### 의존성 설치

프로젝트 이름을 **my-svelte-kanban-app**으로 지정하고 앱 디렉터리로 이동합니다:

~~~json
cd my-svelte-kanban-app
~~~

의존성을 설치하고 개발 서버를 실행합니다. 패키지 매니저를 사용하세요:

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우, 다음 명령어를 실행하세요:

~~~json
yarn
yarn start
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우, 다음 명령어를 실행하세요:

~~~json
npm install
npm run dev
~~~

앱은 localhost에서 실행됩니다(예: `http://localhost:3000`).

## Kanban 생성

이제 DHTMLX Kanban 소스 코드를 받아야 합니다. 먼저 앱을 중지하고 Kanban 패키지 설치를 진행하세요.

### 1단계. 패키지 설치

[**trial Kanban package**](/how_to_start/#npm-또는-yarn을-통한-kanban-설치)를 다운로드하고, README 파일에 안내된 단계를 따르세요. trial Kanban은 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

이제 Svelte 컴포넌트를 만들어 애플리케이션에 Toolbar가 포함된 Kanban을 추가해야 합니다. ***src/*** 디렉터리에 새 파일을 만들고 이름을 ***Kanban.svelte***로 지정합니다.

#### 소스 파일 가져오기

***Kanban.svelte*** 파일을 열고 Kanban 소스 파일을 import 합니다. 참고:

- PRO 버전을 사용하고 Kanban 패키지를 로컬 폴더에서 설치한 경우, import 경로는 다음과 같습니다:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

사용하는 패키지에 따라 소스 파일이 minified 되어 있을 수 있습니다. 이 경우 **kanban.min.css** 파일을 import하는지 확인하세요.

- trial 버전을 사용하는 경우, 다음 경로를 지정하세요:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
<script>
~~~

이 튜토리얼에서는 **trial** 버전의 Kanban을 구성하는 방법을 안내합니다.

#### 컨테이너 설정 및 Toolbar와 함께 Kanban 추가

페이지에 Toolbar와 함께 Kanban을 표시하려면 Kanban과 Toolbar용 컨테이너를 만들고, 해당 생성자를 사용해 컴포넌트를 초기화해야 합니다:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // Kanban 및 Toolbar용 컨테이너 초기화
let kanban, toolbar;

onMount(() => {
    // Kanban 컴포넌트 초기화
    kanban = new Kanban(kanban_container, {})

    // Toolbar 컴포넌트 초기화
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // Kanban 내부 API 제공
        // 기타 설정 속성
    })
});

onDestroy(() => {
    kanban.destructor(); // Kanban 소멸
    toolbar.destructor(); // Toolbar 소멸
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### 데이터 로딩

Kanban에 데이터를 추가하려면 데이터 세트를 제공해야 합니다. ***src/*** 디렉터리에 ***data.js*** 파일을 만들고 데이터를 추가하세요:

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

그런 다음 ***App.svelte*** 파일을 열고, 데이터를 import하여 새로 만든 `<Kanban/>` 컴포넌트에 **props**로 전달하세요:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

***Kanban.svelte*** 파일로 이동하여 전달된 **props**를 Kanban 설정 객체에 적용하세요:

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
        // 기타 설정 속성
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // Kanban 내부 API 제공
        // 기타 설정 속성
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

또한 Svelte의 `onMount()` 메서드 내에서 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 또는 [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 사용해 Kanban에 데이터를 로드할 수 있습니다. `setConfig` 또는 `parse()` 메서드는 변경이 적용될 때마다 데이터 리로딩을 제공합니다.

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
        // 기타 설정 속성
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // Kanban 내부 API 제공
        // 기타 설정 속성
    })

    kanban.setConfig({ columns, cards, rows });
    // 또는 kanban.parse({ columns, cards, rows });
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

이제 Kanban 컴포넌트를 사용할 준비가 되었습니다. 요소가 페이지에 추가되면 Kanban이 데이터와 함께 초기화됩니다. 필요에 따라 설정을 추가할 수 있습니다. 사용 가능한 전체 속성 목록은 [Kanban API docs](/api/overview/properties_overview/)를 참고하세요.

#### 이벤트 처리

사용자가 Kanban에서 작업을 수행하면 이벤트가 발생합니다. 이러한 이벤트를 사용하여 작업을 감지하고 원하는 코드를 실행할 수 있습니다. [이벤트 전체 목록](/api/overview/events_overview/)을 참고하세요.

***Kanban.svelte***를 열고 `onMount()` 메서드를 다음과 같이 완성하세요:

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

컴포넌트를 앱에 추가하려면 **App.svelte** 파일을 열고 기본 코드를 다음과 같이 교체하세요:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

이제 앱을 실행하면 Kanban이 데이터와 함께 페이지에 로드됩니다.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Svelte"
    className="img_border"
/>

이제 DHTMLX Kanban을 Svelte와 통합하는 방법을 알게 되었습니다. 필요에 맞게 코드를 커스터마이즈할 수 있습니다. 최종 고급 예제는 [**GitHub**](https://github.com/DHTMLX/svelte-kanban-demo)에서 확인할 수 있습니다.
