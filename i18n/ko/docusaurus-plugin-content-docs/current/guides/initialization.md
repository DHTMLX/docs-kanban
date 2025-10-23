---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript Kanban 라이브러리의 초기화에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 초기화

이 가이드는 Kanban 보드의 기능으로 애플리케이션을 확장할 수 있도록 페이지에 Kanban을 생성하는 방법을 단계별로 안내합니다. 아래 단계를 따라 사용 준비가 완료된 컴포넌트를 만들 수 있습니다.

1. [Kanban 소스 파일을 페이지에 포함하기](#including-source-files)
2. [Kanban 컨테이너 생성하기](#creating-container)
3. [생성자를 사용해 Kanban 초기화하기](#initializing-kanban)

## 소스 파일 포함하기

[패키지 다운로드](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml) 후 프로젝트의 폴더에 압축을 해제합니다.

Kanban을 생성하려면 두 개의 소스 파일을 페이지에 포함해야 합니다.

- *kanban.js*
- *kanban.css*

소스 파일의 상대 경로가 올바른지 확인하세요.

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## 컨테이너 생성하기

Kanban을 위한 컨테이너를 추가하고, 예를 들어 *"root"*와 같은 ID를 지정하세요.

~~~jsx title="index.html"
<div id="root"></div>
~~~

*Toolbar*와 함께 위젯을 생성하려면, 별도의 컨테이너도 추가해야 합니다.

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Toolbar용 컨테이너
<div id="root"></div> // Kanban용 컨테이너
~~~

## Kanban 초기화하기

**kanban.Kanban** 생성자를 사용해 Kanban을 초기화합니다. 이 생성자는 두 개의 파라미터를 받습니다.

- HTML 컨테이너 (HTML 컨테이너의 ID)
- 설정 속성이 포함된 객체. [전체 속성 목록 보기](#configuration-properties)

~~~jsx title="index.html"
// Kanban 생성
new kanban.Kanban("#root", {
    // 설정 속성
});
~~~

*Toolbar*와 함께 위젯을 생성하려면, **kanban.Toolbar** 생성자를 별도로 사용해 초기화해야 합니다. 이 생성자도 두 개의 파라미터를 받습니다.

- HTML 컨테이너 (HTML 컨테이너의 ID)
- 설정 속성이 포함된 객체

~~~jsx {6-8} title="index.html"
// Kanban 생성
const board = new kanban.Kanban("#root", {
    // 설정 속성
});

new kanban.Toolbar("#toolbar", {
    // 설정 속성
});
~~~

:::info
Kanban의 Toolbar 구성에 대해 더 자세히 알고 싶다면 [**Configuration**](guides/configuration.md/#toolbar) 섹션을 참고하세요.
:::

### 설정 속성

:::note
**Kanban**의 전체 설정 속성 목록은 [**여기**](api/overview/properties_overview.md)에서 확인할 수 있습니다. <br/> 
**Kanban의 Toolbar** 설정 속성 전체 목록은 [**여기**](api/overview/toolbar_properties_overview.md)에서 확인할 수 있습니다.
:::

## 예제

아래 코드 스니펫에서는 초기 데이터와 함께 **Kanban**을 초기화하는 방법을 확인할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>