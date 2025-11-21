---
sidebar_label: Vue와의 통합
title: Vue와의 통합
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 Vue와의 통합 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제 및 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# Vue와의 통합

:::tip
이 문서를 읽기 전에 [**Vue**](https://vuejs.org/)의 기본 개념과 패턴에 익숙해야 합니다. 지식을 다시 확인하려면 [**Vue 3 문서**](https://vuejs.org/guide/introduction.html#getting-started)를 참고하세요.
:::

DHTMLX Kanban은 **Vue**와 호환됩니다. **Vue 3**에서 DHTMLX Kanban을 사용하는 방법에 대한 코드 예제가 준비되어 있습니다. 자세한 내용은 [**GitHub의 예제**](https://github.com/DHTMLX/vue-kanban-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 생성하기 전에 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

**Vue** 프로젝트를 생성하려면 다음 명령어를 실행하세요:

~~~json
npm create vue@latest
~~~

이 명령어는 공식 **Vue** 프로젝트 스캐폴딩 툴인 `create-vue`를 설치하고 실행합니다. 자세한 내용은 [Vue.js 빠른 시작](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)을 참고하세요.

프로젝트 이름은 **my-vue-kanban-app**으로 지정하겠습니다.

### 의존성 설치

앱 디렉토리로 이동하세요:

~~~json
cd my-vue-kanban-app
~~~

의존성을 설치하고 개발 서버를 시작하세요. 패키지 매니저에 따라 아래 명령어를 사용합니다:

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

앱은 로컬호스트(예: `http://localhost:3000`)에서 실행됩니다.

## Kanban 생성

이제 DHTMLX Kanban 소스 코드를 준비해야 합니다. 먼저 앱을 중지한 후 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 Kanban 패키지**](/how_to_start/#npm-또는-yarn을-통한-kanban-설치)를 다운로드하고, README 파일에 안내된 단계를 따르세요. 평가판 Kanban은 30일간만 사용 가능합니다.

### 2단계. 컴포넌트 생성

이제 Kanban과 Toolbar를 앱에 추가할 Vue 컴포넌트를 생성해야 합니다. ***src/components/*** 디렉토리에 ***Kanban.vue*** 파일을 새로 만드세요.

#### 소스 파일 가져오기

***Kanban.vue*** 파일을 열고 Kanban 소스 파일을 import 하세요. 참고:

- PRO 버전을 사용하고 Kanban 패키지를 로컬 폴더에서 설치한 경우, import 경로는 다음과 같습니다:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
</script>
~~~

패키지에 따라 소스 파일이 minified 되어 있을 수 있습니다. 이 경우 CSS 파일을 **kanban.min.css**로 import 해야 합니다.

- Kanban 평가판을 사용하는 경우, 아래와 같이 경로를 지정하세요:

~~~html title="Kanban.vue"
<script>
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css';
</script>
~~~

이 튜토리얼에서는 **평가판** Kanban의 설정 방법을 보여줍니다.

#### 컨테이너 설정 및 Kanban + Toolbar 추가

Kanban과 Toolbar를 페이지에 표시하려면 각 컨테이너를 생성하고, 해당 생성자를 사용해 컴포넌트를 초기화해야 합니다:

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
            api: this.kanban.api, // Kanban 내부 API 제공
            // 기타 설정
        });
    },

    unmounted() {
        this.kanban.destructor(); // Kanban 해제
        this.toolbar.destructor(); // Toolbar 해제
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

Kanban이 올바르게 표시되도록, 프로젝트의 메인 css 파일에 Kanban 및 컨테이너에 대한 중요한 스타일을 지정해야 합니다:

~~~css title="main.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#app { /* #app 루트 컨테이너 사용 확인 */
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

#### 데이터 로딩

Kanban에 데이터를 추가하려면 데이터셋을 제공해야 합니다. ***src/*** 디렉토리에 ***data.js*** 파일을 만들고 데이터를 추가하세요:

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

그 다음 ***App.vue*** 파일을 열고, 데이터를 import 한 뒤 내부 `data()` 메서드로 초기화하세요. 이후 새로 만든 `<Kanban/>` 컴포넌트에 **props**로 데이터를 전달할 수 있습니다:

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

***Kanban.vue*** 파일을 열고 전달받은 **props**를 Kanban 설정 객체에 적용하세요:

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
            // 기타 설정
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // 기타 설정
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

또한 Vue의 `mounted()` 메서드 내에서 [`setConfig()`](/api/methods/js_kanban_setconfig_method/) 또는 [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 사용해 Kanban에 데이터를 로드할 수 있습니다. `setConfig` 또는 `parse()` 메서드는 변경 사항이 적용될 때마다 데이터 리로딩을 제공합니다.

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
            // 기타 설정
        });

        this.toolbar = new Toolbar(this.$refs.toolbar_container, {
            api: this.kanban.api, 
            // 기타 설정
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

이제 Kanban 컴포넌트 사용 준비가 완료되었습니다. 요소가 페이지에 추가되면, 데이터와 함께 Kanban이 초기화됩니다. 필요한 설정을 추가로 지정할 수 있습니다. 사용 가능한 속성의 전체 목록은 [Kanban API 문서](/api/overview/properties_overview/)를 참고하세요.

#### 이벤트 처리

사용자가 Kanban에서 어떤 동작을 하면 이벤트가 발생합니다. 이 이벤트를 활용해 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [이벤트 전체 목록](/api/overview/events_overview/)을 확인하세요.

***Kanban.vue*** 파일을 열고 `mounted()` 메서드를 다음과 같이 완성하세요:

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

이제 앱을 실행하면 Kanban이 데이터와 함께 페이지에 로드되는 것을 확인할 수 있습니다.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Vue"
    className="img_border"
/>

이제 DHTMLX Kanban을 Vue와 통합하는 방법을 알게 되었습니다. 필요에 따라 코드를 커스터마이즈할 수 있습니다. 최종 고급 예제는 [**GitHub**](https://github.com/DHTMLX/vue-kanban-demo)에서 확인할 수 있습니다.
