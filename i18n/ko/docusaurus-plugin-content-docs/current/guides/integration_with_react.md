---
sidebar_label: React와의 통합
title: React와의 통합
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 React와의 통합 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# React와의 통합

:::tip
이 문서를 읽기 전에 [**React**](https://react.dev)의 기본 개념과 패턴에 익숙해야 합니다. 지식이 필요하다면 [**React 문서**](https://react.dev/learn)를 참고하세요.
:::

DHTMLX Kanban은 **React**와 호환됩니다. DHTMLX Kanban을 **React**에서 사용하는 방법에 대한 코드 예제를 준비해두었습니다. 더 자세한 내용은 [**GitHub의 예제**](https://github.com/DHTMLX/react-kanban-demo)를 참고하세요.

## 프로젝트 생성

:::info
새 프로젝트를 만들기 전에 [**Vite**](https://vite.dev/) (선택 사항)와 [**Node.js**](https://nodejs.org/en/)를 설치하세요.
:::

기본 **React** 프로젝트를 생성하거나 **Vite와 함께 React**를 사용할 수 있습니다. 프로젝트 이름은 **my-react-kanban-app**으로 지정하겠습니다:

~~~json
npx create-react-app my-react-kanban-app
~~~

### 의존성 설치

새로 생성된 앱 디렉터리로 이동합니다:

~~~json
cd my-react-kanban-app
~~~

의존성을 설치하고 개발 서버를 시작하세요. 패키지 매니저를 사용합니다:

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

앱이 로컬호스트(예: `http://localhost:3000`)에서 실행되어야 합니다.

## Kanban 생성

이제 DHTMLX Kanban 소스 코드를 받아야 합니다. 먼저 앱을 중지하고 Kanban 패키지를 설치합니다.

### 1단계. 패키지 설치

[**평가판 Kanban 패키지**](/how_to_start/#installing-kanban-via-npm-or-yarn)를 다운로드하고 README 파일의 지침을 따르세요. 평가판 Kanban은 30일 동안만 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

이제 React 컴포넌트를 만들어 애플리케이션에 Kanban을 추가해야 합니다. ***src/*** 디렉터리에 새 파일을 만들고 이름을 ***Kanban.jsx***로 지정하세요.

#### 소스 파일 가져오기

***Kanban.jsx*** 파일을 열고 Kanban 소스 파일을 import 하세요. 다음 사항에 유의하세요:

- PRO 버전을 사용하고 Kanban 패키지를 로컬 폴더에서 설치한 경우, import 경로는 다음과 같습니다:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

사용하는 패키지에 따라 소스 파일이 minify 되어 있을 수 있습니다. 이 경우 CSS 파일을 ***kanban.min.css***로 import하는지 확인하세요.

- Kanban 평가판을 사용하는 경우, 다음 경로를 지정하세요:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

이 튜토리얼에서는 **평가판** Kanban을 구성하는 방법을 설명합니다.

#### 컨테이너 설정 및 Kanban과 Toolbar 추가

페이지에 Kanban과 Toolbar를 표시하려면 Kanban과 Toolbar를 위한 컨테이너를 만들고, 해당 생성자를 사용하여 컴포넌트를 초기화해야 합니다:

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // Kanban 스타일 포함

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // Toolbar용 컨테이너 초기화
    let kanban_container = useRef(); // Kanban용 컨테이너 초기화

    useEffect(() => {
        // Kanban 컴포넌트 초기화
        const kanban = new Kanban(kanban_container.current, {});

        // Toolbar 컴포넌트 초기화
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // Kanban 내부 API 제공
            // 기타 설정 속성
        });

        return () => {
            kanban.destructor(); // Kanban 해제
            toolbar.destructor(); // Toolbar 해제
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### 스타일 추가

Kanban이 올바르게 표시되도록, 프로젝트의 메인 css 파일에 Kanban 및 컨테이너에 대한 주요 스타일을 지정해야 합니다:

~~~css title="index.css"
/* 초기 페이지 스타일 지정 */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Kanban과 Toolbar 컨테이너 스타일 */
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

Kanban에 데이터를 추가하려면 데이터 셋을 제공해야 합니다. ***src/*** 디렉터리에 ***data.js*** 파일을 만들고 데이터를 추가하세요:

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

그런 다음 ***App.js*** 파일을 열고 데이터를 import 하세요. 이후 새로 생성한 `<Kanban/>` 컴포넌트에 **props**로 데이터를 전달할 수 있습니다:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

***Kanban.jsx*** 파일로 이동하여 전달된 **props**를 Kanban 설정 객체에 적용하세요:

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

또한 React의 `useEffect()` 안에서 [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 사용하여 Kanban에 데이터를 로드할 수 있습니다:

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

`parse(data)` 메서드는 변경 사항이 적용될 때마다 데이터를 다시 로드할 수 있도록 해줍니다.

이제 Kanban 컴포넌트가 준비되었습니다. 요소가 페이지에 추가되면 데이터를 가진 Kanban이 초기화됩니다. 필요한 설정 옵션도 제공할 수 있습니다. 사용 가능한 전체 속성 목록은 [Kanban API 문서](/api/overview/properties_overview/)를 참고하세요.

#### 이벤트 처리

사용자가 Kanban에서 어떤 동작을 하면 이벤트가 발생합니다. 이러한 이벤트를 활용하여 동작을 감지하고 원하는 코드를 실행할 수 있습니다. [이벤트 전체 목록](/api/overview/events_overview/)을 참고하세요.

***Kanban.jsx*** 파일을 열고 `useEffect()` 메서드를 다음과 같이 완성하세요:

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

이제 앱을 시작하면 Kanban이 데이터와 함께 페이지에 표시됩니다.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with React"
    className="img_border"
/>

이제 DHTMLX Kanban을 React에 통합하는 방법을 알게 되었습니다. 필요에 따라 코드를 자유롭게 커스터마이즈할 수 있습니다. 최종 고급 예제는 [**GitHub**](https://github.com/DHTMLX/react-kanban-demo)에서 확인하실 수 있습니다.