---
sidebar_label: Vue와의 통합
title: Vue와의 통합
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Vue와의 통합 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 직접 실행해 보고, 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Vue와의 통합

:::tip
여기 내용을 시작하기 전에 [**Vue**](https://vuejs.org/)의 기본 개념과 패턴에 익숙해지는 것이 도움이 됩니다. 복습이 필요하다면 [**Vue 3 공식 문서**](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX Kanban은 **Vue**와 잘 작동합니다. **Vue 3**와 함께 DHTMLX Kanban을 사용하는 코드 샘플이 제공됩니다. 자세한 내용은 [**GitHub의 예제**](https://github.com/DHTMLX/vue-kanban-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

**Vue** 프로젝트를 시작하려면 다음 명령어를 사용하세요:

~~~json
npm create vue@latest
~~~

이 명령어는 공식 **Vue** 프로젝트 스캐폴딩 도구인 `create-vue`를 설치하고 실행합니다. 더 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)에서 확인할 수 있습니다.

프로젝트 이름은 **my-vue-kanban-app**으로 지정할 수 있습니다.

### 의존성 설치

앱 폴더로 이동하세요:

~~~json
cd my-vue-kanban-app
~~~

다음으로, 의존성을 설치하고 개발 서버를 실행하세요. 패키지 매니저를 선택할 수 있습니다:

- [**yarn**](https://yarnpkg.com/)을 사용하는 경우:

~~~jsx
yarn
yarn start // 또는 yarn dev
~~~

- [**npm**](https://www.npmjs.com/)을 사용하는 경우:

~~~json
npm install
npm run dev
~~~

앱이 이제 로컬에서 실행됩니다(예: `http://localhost:3000`).

## Kanban 생성

DHTMLX Kanban을 시작하려면 먼저 소스 코드를 받아야 합니다. 앱을 일시정지하고 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 Kanban 패키지**](/how_to_start/#kanban을-npm-또는-yarn으로-설치하기)를 다운로드한 후, README 파일의 안내를 따르세요. 평가판은 30일간 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

다음으로, 앱에 Kanban과 Toolbar를 추가할 Vue 컴포넌트를 설정합니다. ***src/components/*** 폴더에 ***Kanban.vue*** 파일을 새로 만드세요.

#### 소스 파일 임포트

***Kanban.vue***를 열고 Kanban 파일을 임포트합니다. 아래와 같이 작성합니다:

- PRO 버전의 경우, Kanban을 로컬 폴더에서 설치했다면 임포트 경로는 다음과 같습니다.

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

패키지에 minified 파일이 포함되어 있다면 **kanban.min.css**를 임포트해야 합니다.

- 평가판 버전의 경우, 아래 경로를 사용하세요:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

이 가이드에서는 **평가판** Kanban 설치 방법을 설명합니다.

#### 컨테이너 설정 및 Kanban과 Toolbar 추가

Kanban과 Toolbar를 표시하려면 컨테이너를 설정하고, 해당 컴포넌트를 생성자와 함께 초기화하세요:

~~~html {2,7-8,10-14} title="Kanban.vue"
<script>
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default {
    mounted() {
        // Kanban 컴포넌트 초기화
        this.kanban = new Kanban(this.$refs.kanban_container, {});

        // Toolbar 컴포넌트 초기화
        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, // Kanban 내부 API 전달
            // 기타 설정 속성
        });
    },

    unmounted() {
        this.kanban.destructor(); // Kanban 파괴
        this.toolbar.destructor(); // Toolbar 파괴
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

Kanban이 올바르게 표시되도록, 주요 css 파일에 Kanban 및 컨테이너용 스타일을 추가하세요:

~~~css title="main.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#app { /* #app 루트 컨테이너 사용 */
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Kanban 및 Toolbar 컨테이너 스타일 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Kanban 컨테이너 스타일 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 불러오기

Kanban에 데이터를 채우려면 ***src/***에 ***data.js*** 파일을 만들고 샘플 데이터를 추가하세요:

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

그 다음, ***App.vue***를 열고 데이터를 임포트한 뒤, 내부 `data()` 메서드에서 설정하세요. 이후, `<Kanban/>` 컴포넌트에 **props**로 데이터를 전달합니다:

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

이제 ***Kanban.vue***에서 해당 **props**를 Kanban 설정 객체에 적용하세요:

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
            // 기타 설정 속성
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // 기타 설정 속성
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

또한 [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 Vue의 `mounted()` 내에서 사용해 Kanban에 데이터를 로드할 수도 있습니다:

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
            // 기타 설정 속성
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // 기타 설정 속성
        });

        this.kanban.parse({ 
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

`parse(data)` 메서드를 사용하면 데이터가 변경될 때마다 다시 로드됩니다.

이제 Kanban 컴포넌트가 준비되었습니다. 요소가 페이지에 추가되면 설정한 데이터로 Kanban이 초기화됩니다. 필요에 따라 다양한 설정을 추가할 수 있습니다. 사용 가능한 모든 속성은 [Kanban API 문서](/api/overview/properties_overview/)를 참조하세요.

#### 이벤트 처리

Kanban에서 어떤 동작이 발생하면 이벤트가 트리거됩니다. 이를 활용해 사용자 동작에 맞춰 직접 코드를 실행할 수 있습니다. [이벤트 전체 목록](/api/overview/events_overview/)을 확인하세요.

***Kanban.vue***를 열고, 아래와 같이 `mounted()` 메서드를 업데이트하세요:

~~~html {8-10} title="Kanban.vue"
<script>
// ...
export default {
    // ...
    mounted() {
        this.kanban = new Kanban(this.$refs.cont, {});

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

이제 앱을 실행하면 Kanban 보드가 데이터와 함께 표시됩니다.

![Kanban initialization](/assets/trial_kanban.png)

이것으로 DHTMLX Kanban과 Vue의 통합이 완료됩니다. 필요에 따라 코드를 수정하거나 확장할 수 있습니다. 좀 더 발전된 예제는 [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo)에서 확인할 수 있습니다.
