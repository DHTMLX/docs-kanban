---
sidebar_label: Svelte와의 통합
title: Svelte와의 통합
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Svelte와의 통합에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# Svelte와의 통합

:::tip
이 가이드는 Svelte의 개념과 패턴에 익숙하다고 가정합니다. 기본 내용은 [Svelte documentation](https://svelte.dev/docs/svelte/overview)을 참고하세요.
:::

DHTMLX Kanban은 Svelte와 호환됩니다. 전체 코드 예제는 [GitHub](https://github.com/DHTMLX/svelte-kanban-demo)에서 확인할 수 있습니다.

## 프로젝트 생성

:::info
프로젝트를 만들기 전에 [Vite](https://vite.dev/) (선택 사항)와 [Node.js](https://nodejs.org/en/)를 설치하세요.
:::

Svelte 프로젝트를 만드는 방법은 두 가지입니다:

- [SvelteKit](https://kit.svelte.dev/) 사용 — 권장
- Svelte와 Vite 사용(SvelteKit 없이) — 다음 명령어를 실행합니다:

~~~json
npm create vite@latest
~~~

자세한 내용은 [Svelte documentation](https://svelte.dev/docs/svelte/overview)을 참고하세요.

### 의존성 설치

프로젝트 이름을 *my-svelte-kanban-app*으로 지정합니다. 앱 디렉터리로 이동합니다:

~~~json
cd my-svelte-kanban-app
~~~

패키지 매니저 중 하나를 사용해 의존성을 설치하고 개발 서버를 실행하세요:

- [yarn](https://yarnpkg.com/)의 경우:

~~~json
yarn
yarn start
~~~

- [npm](https://www.npmjs.com/)의 경우:

~~~json
npm install
npm run dev
~~~

앱은 localhost 주소에서 실행됩니다(예: `http://localhost:3000`).

## Kanban 생성

개발 서버를 중지하고 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[trial Kanban package](/how_to_start/#installing-kanban-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. trial 버전은 30일 동안 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

Kanban과 Toolbar를 마운트하는 Svelte 컴포넌트를 만듭니다. *src/* 디렉터리에 새 *Kanban.svelte* 파일을 추가하세요.

#### 소스 파일 가져오기

*Kanban.svelte* 파일을 열고 Kanban 소스 파일을 import 합니다. import 경로는 패키지 버전에 따라 다릅니다:

- 로컬 폴더에서 설치한 PRO 버전의 경우:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

패키지에 minified 소스 파일이 포함된 경우 CSS 파일을 *kanban.min.css*로 import 하세요.

- trial 버전의 경우:

~~~html title="Kanban.svelte"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

이 튜토리얼은 trial 버전의 Kanban을 사용합니다.

#### 컨테이너 설정 및 Kanban 초기화

Toolbar와 함께 Kanban을 표시하려면 두 개의 컨테이너를 만들고 생성자를 호출합니다. 다음 코드 스니펫은 컨테이너를 바인딩하고 `onMount()` 내에서 컴포넌트를 인스턴스화합니다:

~~~html {3,6,10-11,13-17,27-28} title="Kanban.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

let toolbar_container, kanban_container; // initialize containers for Kanban and Toolbar
let kanban, toolbar;

onMount(() => {
    // initialize the Kanban component
    kanban = new Kanban(kanban_container, {})

    // initialize the Toolbar component
    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })
});

onDestroy(() => {
    kanban.destructor(); // destroy Kanban
    toolbar.destructor(); // destroy Toolbar
});
</script>

<div class="component_container">
    <div bind:this={toolbar_container}></div>
    <div bind:this={kanban_container} style="height: calc(100% - 56px);"></div>
</div>
~~~

#### 데이터 로딩

Kanban에 데이터를 채우려면 데이터 세트를 제공하세요. *src/* 디렉터리에 *data.js* 파일을 만듭니다:

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
            label: "Archive the cards/boards",
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

*App.svelte* 파일을 열고 데이터 세트를 import하여 새 `<Kanban/>` 컴포넌트에 props로 전달하세요:

~~~html {3,5,8} title="App.svelte"
<script>
import Kanban from "./Kanban.svelte";
import { getData } from "./data.js";

const { cards, columns, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

*Kanban.svelte* 파일을 열고 props를 Kanban 설정 객체에 적용하세요:

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
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
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

또는 인스턴스를 생성한 후 `onMount()` 내에서 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 또는 [`parse()`](/api/methods/js_kanban_parse_method/)를 사용해 데이터를 로드할 수 있습니다:

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
        // other configuration properties
    })

    toolbar = new Toolbar(toolbar_container, {
        api: kanban.api, // provide Kanban inner API
        // other configuration properties
    })

    kanban.setConfig({ columns, cards, rows });
    // or kanban.parse({ columns, cards, rows });
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

이제 Kanban 컴포넌트가 준비되었습니다. 요소가 렌더링되면 Kanban이 데이터와 함께 초기화됩니다. 지원되는 전체 설정 속성 목록은 [Kanban API 레퍼런스](/api/overview/properties_overview/)를 참고하세요.

#### 이벤트 처리

Kanban에서 사용자 작업이 발생하면 이벤트가 트리거됩니다. 이벤트를 수신하여 특정 작업에 반응할 수 있습니다. 전체 목록은 [Kanban 이벤트 레퍼런스](/api/overview/events_overview/)를 참고하세요.

*Kanban.svelte* 파일을 열고 `onMount()` 콜백을 확장하세요:

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

컴포넌트를 등록하려면 *App.svelte* 파일을 열고 기본 코드를 교체하세요:

~~~html title="App.svelte"
<script>
    import Kanban from "./Kanban.svelte";
    import { getData } from "./data.js";
    
    const { columns, cards, rows } = getData();
</script>

<Kanban {cards} {columns} {rows} />
~~~

앱을 실행하면 Kanban 보드가 데이터와 함께 페이지에 표시됩니다.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Svelte"
  className="img_border"
/>

전체 프로젝트는 [GitHub](https://github.com/DHTMLX/svelte-kanban-demo)에서 확인하세요.
