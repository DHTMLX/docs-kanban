---
sidebar_label: 시작 방법
title: 시작 방법
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 DHTMLX Kanban을 시작하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제 및 라이브 데모를 시도해보고, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# 시작 방법

여기 웹 페이지에서 완전히 동작하는 Kanban 보드를 설정하는 과정을 단계별로 안내하는 간단한 튜토리얼이 있습니다.

![JS Kanban Main](/assets/js_kanban_editor.png)

## 1단계. 소스 파일 포함하기

먼저, HTML 파일을 만들어 *index.html*로 이름을 지정하세요. 그 다음, Kanban 소스 파일을 이 파일에 추가합니다.

필요한 파일은 두 가지입니다:

- Kanban JS 파일
- Kanban CSS 파일

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

### Kanban을 npm 또는 yarn으로 설치하기

Kanban은 `yarn`이나 `npm`을 사용하여 프로젝트에 가져올 수도 있습니다.

#### npm 또는 yarn으로 평가판 Kanban 설치하기

:::info
평가판의 경우, [**trial Kanban package**](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml)를 다운로드한 후, *README* 파일의 지침을 따르세요. 평가판은 30일 동안 사용 가능합니다.
:::

#### npm 또는 yarn으로 PRO Kanban 설치하기

:::info
DHTMLX의 비공개 **npm** 접근은 [Client's Area](https://dhtmlx.com/clients/)에서 제공되며, 여기서 **npm**을 위한 로그인과 비밀번호를 생성할 수 있습니다. 설치 단계도 이곳에 안내되어 있습니다. 참고로, 비공개 **npm** 접근은 귀하의 Kanban 라이선스가 활성화된 동안에만 가능합니다.
:::

## 2단계. Kanban 생성하기

파일을 포함했으면, 이제 페이지에 Kanban을 추가할 차례입니다. Kanban 보드와 툴바를 위한 DIV 컨테이너를 추가하세요:

- *index.html* 파일에 두 개의 DIV 컨테이너를 추가하세요
- **kanban.Kanban**과 **kanban.Toolbar** 생성자를 사용해 Kanban과 툴바를 초기화합니다

:::info
툴바는 Kanban 인터페이스에서 선택 사항입니다. Kanban 보드만 필요하다면, 하나의 DIV와 **kanban.Kanban** 생성자만 사용하세요.
:::

생성자는 Kanban과 툴바가 표시될 HTML 컨테이너의 ID, 그리고 설정 객체를 인자로 받습니다.

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

이제 Kanban이 시작될 때의 모습과 동작을 설정할 수 있습니다.

동작을 시작하려면 **cards**와 **columns**(필요하다면 *rows*도 포함)의 초기 데이터를 추가하세요.
데이터와 함께 [cards](/guides/configuration#카드), [editor](/guides/configuration#편집기), [toolbar](/guides/configuration#툴바)의 디자인도 조정할 수 있습니다.

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

이렇게 세 가지 간단한 단계만으로 여러분의 워크플로우를 시각화하고 관리할 수 있는 간단한 도구가 준비되었습니다. 이제 작업을 바로 시작하거나, JavaScript Kanban의 다양한 기능을 더 깊이 탐구해보세요.
