---
sidebar_label: React와의 통합
title: React와의 통합
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 React와의 통합에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 참고하고, 코드 예제와 라이브 데모를 직접 사용해 보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드해볼 수 있습니다.
---

# React와의 통합

:::tip
이 문서를 시작하기 전에 [**React**](https://react.dev)의 기본 개념을 이해하고 있으면 도움이 됩니다. React를 복습하고 싶다면 [**React 공식 문서**](https://reactjs.org/docs/getting-started.html)를 참고하세요.
:::

DHTMLX Kanban은 **React**와 잘 호환됩니다. DHTMLX Kanban을 React 프로젝트에서 사용하는 코드 샘플도 제공됩니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/react-kanban-demo)를 확인하세요.

## 프로젝트 생성

:::info
새 프로젝트를 시작하기 전에 [**Vite**](https://vite.dev/) (선택 사항)와 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

표준 **React** 프로젝트로 시작하거나, **React와 Vite**를 함께 사용할 수도 있습니다. 본 가이드에서는 프로젝트 명을 **my-react-kanban-app**으로 설정합니다:

~~~json
npx create-react-app my-react-kanban-app
~~~

### 의존성 설치

앱 디렉터리로 이동하세요:

~~~json
cd my-react-kanban-app
~~~

의존성을 추가하고 개발 서버를 실행합니다. 원하는 패키지 관리 도구를 사용할 수 있습니다:

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

앱은 보통 `http://localhost:3000`에서 로컬로 확인할 수 있습니다.

## Kanban 생성

이제 DHTMLX Kanban 소스 코드를 가져와야 합니다. 먼저 앱을 중지한 후 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[**Kanban 평가판 패키지**](/how_to_start/#kanban을-npm-또는-yarn으로-설치하기)를 다운로드하고, README 파일의 안내를 따라 설치합니다. 평가판은 30일 동안 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

React 컴포넌트로 Kanban 보드를 앱에 추가합니다. ***src/*** 디렉터리 안에 ***Kanban.jsx*** 파일을 만드세요.

#### 소스 파일 임포트

***Kanban.jsx***를 열고 Kanban 소스 파일을 임포트합니다. 다음 사항을 참고하세요:

- PRO 버전을 로컬에 설치한 경우, 다음과 같이 임포트합니다:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

패키지에 따라 CSS 파일이 압축(minified)되어 있을 수 있으니, 이 경우 ***kanban.min.css***를 사용하세요.

- 평가판에서는 다음과 같이 임포트 경로를 사용합니다:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

이 가이드는 **평가판** 기준으로 설명합니다.

#### 컨테이너 설정 및 Kanban, Toolbar 추가

페이지에 Kanban과 Toolbar를 표시하려면, 각각의 컨테이너를 설정하고 생성자에서 초기화하세요:

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // Kanban 스타일 포함

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // Toolbar 컨테이너 초기화
    let kanban_container = useRef(); // Kanban 컨테이너 초기화

    useEffect(() => {
        // Kanban 컴포넌트 초기화
        const kanban = new Kanban(kanban_container.current, {});

        // Toolbar 컴포넌트 초기화
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // Kanban의 내부 API 제공
            // 기타 설정 속성
        });

        return () => {
            kanban.destructor(); // Kanban 소멸자 호출
            toolbar.destructor(); // Toolbar 소멸자 호출
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### 스타일 추가

Kanban이 올바르게 보이도록, 주요 스타일을 메인 CSS 파일에 추가하세요:

~~~css title="index.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#root {
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

Kanban에 데이터를 표시하려면 데이터셋이 필요합니다. ***src/***에 ***data.js*** 파일을 만들고 다음과 같이 작성하세요:

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
            label: "Archive the cards/boards ",
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

이제 ***App.js***에서 데이터를 임포트하여 `<Kanban/>` 컴포넌트에 **props**로 전달하세요:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

***Kanban.jsx***에서는 이 props를 사용하여 Kanban을 설정합니다:

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // 컬럼 데이터 적용
            cards: props.cards, // 카드 데이터 적용
            rows: props.rows, // 행 데이터 적용
            rowKey: "type",
            // 기타 설정 속성
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // 기타 설정 속성
        });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

만약 [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 사용하여 `useEffect()` 내부에서 Kanban에 데이터를 로드하고 싶다면, 다음과 같이 할 수 있습니다:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns; // 컬럼 데이터
    let cards = props.cards; // 카드 데이터
    let rows = props.rows; // 행 데이터

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // 기타 설정 속성
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // 기타 설정 속성
        });
    
        kanban.parse({ columns, cards, rows });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

`parse(data)`를 사용하면 데이터가 변경될 때마다 Kanban 데이터를 다시 로드할 수 있습니다.

이제 Kanban 컴포넌트가 완성되었습니다. 렌더링 시 데이터와 함께 초기화되며, 필요에 따라 더 많은 설정을 추가할 수 있습니다. 설정 옵션에 대한 자세한 내용은 [Kanban API 문서](/api/overview/properties_overview/)를 참고하세요.

#### 이벤트 처리

사용자가 Kanban을 조작하면 다양한 이벤트가 발생합니다. 이 이벤트를 통해 사용자 동작에 반응하거나 원하는 코드를 실행할 수 있습니다. 이벤트 전체 목록은 [문서](/api/overview/events_overview/)에서 확인할 수 있습니다.

***Kanban.jsx***에서 간단한 이벤트 핸들러를 설정하는 방법은 다음과 같습니다:

~~~jsx {5-7} title="Kanban.jsx"
// ...
useEffect(() => {
    const kanban = new Kanban(kanban_container.current, {});

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
    
    return () => {
        kanban.destructor();
    };
}, []);
// ...
~~~

이제 앱을 실행하면 Kanban 보드가 데이터와 함께 표시됩니다.

![Kanban initialization](/assets/trial_kanban.png)

이와 같은 방식으로 DHTMLX Kanban을 React 환경에 적용할 수 있습니다. 필요에 따라 코드를 더 확장하거나 수정할 수 있습니다. 더 발전된 예제는 [**GitHub**](https://github.com/DHTMLX/react-kanban-demo)에서 확인해보세요.
