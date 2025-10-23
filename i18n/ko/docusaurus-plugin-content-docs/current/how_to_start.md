---
sidebar_label: 시작하기
title: 시작하기
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 DHTMLX Kanban을 시작하는 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 시작하기

이 명확하고 종합적인 튜토리얼은 페이지에 완전한 기능의 Kanban을 구현하기 위해 거쳐야 할 단계들을 안내합니다.

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="JS Kanban Main"
    className="img_border"
/>

## 1단계. 소스 파일 포함하기

먼저 *index.html*이라는 HTML 파일을 생성하세요. 그런 다음 생성한 파일에 Kanban 소스 파일을 포함합니다.

필수 파일은 두 가지입니다:

- Kanban의 JS 파일
- Kanban의 CSS 파일

~~~html {5-6} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">
    </head>
    <body>
        <script>
        // your code will be here
        </script>
    </body>
</html>
~~~

### npm 또는 yarn을 통한 Kanban 설치

`yarn` 또는 `npm` 패키지 관리자를 사용하여 JavaScript Kanban을 프로젝트에 가져올 수 있습니다.

#### npm 또는 yarn을 통한 평가판 Kanban 설치

:::info
Kanban의 평가판을 사용하려면 [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml)를 다운로드하고 *README* 파일에 안내된 단계를 따르세요. 평가판 Kanban은 30일 동안만 사용 가능합니다.
:::

#### npm 또는 yarn을 통한 PRO Kanban 설치

:::info
[Client's Area](https://dhtmlx.com/clients/)에서 **npm**용 로그인과 비밀번호를 생성하여 DHTMLX의 프라이빗 **npm**에 직접 접근할 수 있습니다. 자세한 설치 가이드도 그곳에서 확인할 수 있습니다. 프라이빗 **npm** 접근은 Kanban 라이선스가 활성화된 기간 동안만 제공됩니다.
:::

## 2단계. Kanban 생성하기

이제 페이지에 Kanban을 추가할 준비가 되었습니다. 먼저 Kanban과 Toolbar를 위한 DIV 컨테이너를 만듭니다. 다음 단계를 따라주세요:

- *index.html* 파일에 두 개의 DIV 컨테이너를 지정합니다.
- **kanban.Kanban** 및 **kanban.Toolbar** 생성자를 사용해 Kanban과 Toolbar를 초기화합니다.

:::info
Toolbar는 Kanban 인터페이스의 선택적 요소입니다. Toolbar 없이 Kanban을 만들고 싶다면, 단 하나의 DIV 컨테이너만 지정하고 **kanban.Kanban** 생성자를 통해 위젯을 초기화하면 됩니다.  
:::

생성자는 Kanban과 Toolbar가 배치될 HTML 컨테이너의 ID와 관련 설정 객체를 매개변수로 받습니다.

~~~html {9-10,13-15,17-19} title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with Kanban</title>
        <script src="./dist/kanban.js"></script>   
        <link href="./dist/kanban.css" rel="stylesheet">  
    </head>
    <body>
        <div id="toolbar"></div>
        <div id="root"></div>

        <script>
            const board = new kanban.Kanban("#root", {
                // configuration properties
            });

            new kanban.Toolbar("#toolbar", {
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## 3단계. Kanban 설정하기

이제 Kanban 컴포넌트가 초기화될 때 적용할 설정 속성을 지정할 수 있습니다.

Kanban을 사용하려면 먼저 **cards**와 **columns**(그리고 *rows*)에 대한 초기 데이터를 제공해야 합니다.
초기 데이터 외에도 [cards](guides/configuration.md#카드), [editor](guides/configuration.md#에디터), [toolbar](guides/configuration.md#툴바)의 외관을 설정할 수 있습니다.

~~~jsx {2-7,11-18}
const board = new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    rowKey: "row",
    cardShape,
    editorShape
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        "search",
        "spacer",
        "sort",
        "addColumn",
        "addRow"
    ]
});
~~~

## 다음 단계

이제 끝입니다. 세 단계만 거치면 시각적으로 워크플로우를 관리할 수 있는 편리한 도구를 갖추게 됩니다. 이제 작업을 시작하거나 JavaScript Kanban의 다양한 기능을 더 탐색해 볼 수 있습니다.