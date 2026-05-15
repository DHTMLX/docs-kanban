---
sidebar_label: Vue와의 통합
title: Vue와의 통합
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 Vue와의 통합 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제 및 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# Vue와의 통합

:::tip
이 가이드는 [Vue](https://vuejs.org/)의 개념과 패턴에 익숙하다고 가정합니다. 배경 지식은 [Vue 3 문서](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX Kanban은 Vue와 호환됩니다. Vue 3에 대한 전체 코드 예제는 [GitHub](https://github.com/DHTMLX/vue-kanban-demo)에서 확인할 수 있습니다.

## 프로젝트 생성

:::info
프로젝트를 생성하기 전에 [Node.js](https://nodejs.org/en/)를 설치하세요.
:::

다음 명령어로 새 Vue 프로젝트를 생성합니다:

~~~json
npm create vue@latest
~~~

이 명령어는 공식 Vue 프로젝트 스캐폴딩 툴인 `create-vue`를 실행합니다. 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)을 참고하세요.

프로젝트 이름은 *my-vue-kanban-app*으로 지정합니다.

### 의존성 설치

앱 디렉토리로 이동하세요:

~~~json
cd my-vue-kanban-app
~~~

패키지 매니저 중 하나로 의존성을 설치하고 개발 서버를 시작하세요:

- [yarn](https://yarnpkg.com/)의 경우:

~~~jsx
yarn
yarn start // 또는 yarn dev
~~~

- [npm](https://www.npmjs.com/)의 경우:

~~~json
npm install
npm run dev
~~~

앱은 로컬호스트 주소(예: `http://localhost:3000`)에서 실행됩니다.

## Kanban 생성

개발 서버를 중지하고 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[평가판 Kanban 패키지](/how_to_start/#installing-kanban-via-npm-or-yarn)를 다운로드하고 README 파일의 단계를 따르세요. 평가판은 30일간 사용 가능합니다.

### 2단계. 컴포넌트 생성

Kanban과 Toolbar를 마운트하는 Vue 컴포넌트를 생성합니다. *src/components/* 디렉토리에 *Kanban.vue* 파일을 새로 추가하세요.

#### 소스 파일 가져오기

*Kanban.vue*를 열고 Kanban 소스 파일을 import 하세요. import 경로는 패키지 버전에 따라 다릅니다:

- 로컬 폴더에서 설치한 PRO 버전의 경우:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

패키지에 minified 소스 파일이 포함된 경우, CSS 파일을 *kanban.min.css*로 import 하세요.

- 평가판의 경우:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

이 튜토리얼에서는 Kanban 평가판을 사용합니다.

#### 컨테이너 설정 및 Kanban 초기화

Kanban과 Toolbar를 표시하려면 두 개의 컨테이너를 생성하고 생성자를 호출하세요. 다음 코드는 refs를 연결하고 `mounted()` 내부에서 컴포넌트를 인스턴스화합니다:

~~~html {2,7-8,10-14} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    mounted() {
        // initialize the Kanban component
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        // initialize the Toolbar component
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, // provide Kanban inner API
            // other configuration properties
        });
    },

    unmounted() {
        this.kanban.destructor(); // destroy Kanban
        this.toolbar.destructor(); // destroy Toolbar
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

#### 스타일 추가

메인 CSS 파일에 Kanban과 컨테이너에 대한 스타일을 추가하세요:

~~~css title="main.css"
/* specify styles for initial page */
html,
body,
#app { /* make sure that you use the #app root container */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for Kanban and Toolbar container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* specify styles for Kanban container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 로딩

Kanban에 데이터를 채우려면 데이터셋을 제공하세요. *src/* 디렉토리에 *data.js* 파일을 생성하세요:

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

*App.vue*를 열고 데이터셋을 import 하세요. 내부 `data()` 메서드를 통해 값을 초기화한 후, 새 `<Kanban/>` 컴포넌트에 props로 전달하세요:

~~~html {3,8,10-12,19} title="App.vue"
<script>
import Kanban from "./components/Kanban.vue";
import { getData } from "./data";

export default {
    components: { Kanban },
    data() {
        const { columns, cards, rows } = getData();
        return { 
            columns, 
            cards,
            rows
        };
    }
};
</script>

<template>
    <Kanban :columns="columns" :cards="cards" :rows="rows"/>
</template>
~~~

*Kanban.vue*를 열고 props를 Kanban 설정 객체에 적용하세요:

~~~html {6,10-12} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            cards: this.cards,
            columns: this.columns,
            rows: this.rows,
            rowKey: "type",
            // other configuration properties
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // other configuration properties
        });
    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

또는 `mounted()` 내부에서 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 또는 [`parse()`](/api/methods/js_kanban_parse_method/)를 사용해 인스턴스 생성 후 데이터를 로드할 수 있습니다:

~~~html {6,22-26} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    props: ["cards", "columns", "rows"],

    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // other configuration properties
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // other configuration properties
        });

        this.kanban.setConfig({ 
            cards: this.cards,
            columns: this.columns,
            rows: this.rows
        });

    },

    unmounted() {
        this.kanban.destructor(); 
        this.toolbar.destructor(); 
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="toolbar_container"></div>
        <div ref="kanban_container" class="widget"></div>
    </div>
</template>
~~~

이제 Kanban 컴포넌트 준비가 완료되었습니다. 요소가 렌더링되면 Kanban이 데이터와 함께 초기화됩니다. 지원되는 설정 속성의 전체 목록은 [Kanban API 레퍼런스](/api/overview/properties_overview/)를 참고하세요.

#### 이벤트 처리

Kanban에서의 사용자 동작은 이벤트를 발생시킵니다. 이벤트를 수신해 특정 동작에 반응하세요. 전체 목록은 [Kanban 이벤트 레퍼런스](/api/overview/events_overview/)를 참고하세요.

*Kanban.vue*를 열고 `mounted()` 메서드를 다음과 같이 확장하세요:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        this.kanban.api.on("add-card", (obj) => {
            console.log(obj.columnId);
        });
    },

    unmounted() {
        this.kanban.destructor();
    }
}
</script>

// ...
~~~

앱을 실행하면 페이지에 데이터가 채워진 Kanban 보드를 확인할 수 있습니다.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Vue"
  className="img_border"
/>

완성된 프로젝트는 [GitHub](https://github.com/DHTMLX/vue-kanban-demo)에서 확인할 수 있습니다.
