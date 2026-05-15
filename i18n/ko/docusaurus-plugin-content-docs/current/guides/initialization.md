---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript Kanban 라이브러리의 초기화에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 초기화

페이지에 Kanban 위젯을 세 단계로 생성합니다.

1. [소스 파일 포함하기](#include-source-files)
2. [컨테이너 생성하기](#create-a-container)
3. [Kanban 초기화하기](#initialize-kanban)

## Include source files

[패키지 다운로드](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) 후 프로젝트의 폴더에 압축을 해제합니다.

다음 소스 파일을 페이지에 포함하세요.

- *kanban.js*
- *kanban.css*

두 파일의 상대 경로가 올바른지 확인하세요.

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## Create a container

Kanban을 위한 컨테이너를 추가하고, 예를 들어 `root`와 같은 ID를 지정하세요.

~~~jsx title="index.html"
<div id="root"></div>
~~~

Toolbar와 함께 위젯을 생성하려면, Toolbar를 위한 별도의 컨테이너도 추가하세요.

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // container for Toolbar
<div id="root"></div> // container for Kanban
~~~

## Initialize Kanban

`kanban.Kanban` 생성자를 사용해 Kanban을 초기화합니다. 생성자는 두 개의 파라미터를 받습니다.

- HTML 컨테이너의 CSS 선택자 (또는 컨테이너 요소 자체)
- 설정 객체 ([전체 속성 목록](#configuration-properties) 참고)

다음 코드 스니펫은 Kanban 인스턴스를 생성합니다.

~~~jsx title="index.html"
// Kanban 생성
new kanban.Kanban("#root", {
    // 설정 속성
});
~~~

Toolbar와 함께 위젯을 생성하려면, `kanban.Toolbar` 생성자를 사용해 Toolbar를 별도로 초기화하세요. Toolbar 컨트롤은 [`api`](api/config/toolbar_api_config.md) 파라미터를 통해 Kanban 인스턴스와 연동됩니다. `board.api`를 전달하여 Toolbar를 보드에 연결하세요.

~~~jsx {7} title="index.html"
// Kanban 생성
const board = new kanban.Kanban("#root", {
    // 설정 속성
});

new kanban.Toolbar("#toolbar", {
    api: board.api, // required: links Toolbar controls to the Kanban instance
    // other configuration properties
});
~~~

:::info
Toolbar 구성에 대한 자세한 내용은 [Configuration](guides/configuration.md#toolbar) 섹션을 참고하세요.
:::

### Configuration properties

전체 설정 레퍼런스는 다음을 참고하세요.

- [Kanban properties overview](api/overview/properties_overview.md) — 전체 Kanban 설정 속성
- [Toolbar properties overview](api/overview/toolbar_properties_overview.md) — 전체 Toolbar 설정 속성

## 예제

다음 스니펫은 샘플 데이터와 함께 Kanban을 초기화합니다.

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
