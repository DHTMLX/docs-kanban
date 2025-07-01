---
sidebar_label: 초기화
title: 초기화
description: DHTMLX JavaScript Kanban 라이브러리의 초기화에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 확인하고, 코드 예제와 라이브 데모를 체험해보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 초기화

아래의 단계에 따라 Kanban을 페이지에 빠르게 설정하고, 모든 보드 기능을 앱에 추가할 수 있습니다. 컴포넌트를 작동시키기 위해 다음 절차를 따라주세요:

1. [Kanban 소스 파일을 페이지에 포함하기](#소스-파일-포함하기)
2. [Kanban용 컨테이너 생성하기](#컨테이너-생성하기)
3. [생성자를 사용하여 Kanban 초기화하기](#kanban-초기화하기)

## 소스 파일 포함하기

먼저, [패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxKanban/download.shtml)하여 프로젝트 폴더 내에 압축을 해제하세요.

Kanban을 사용하려면 아래 두 파일을 페이지에 추가해야 합니다:

- *kanban.js*
- *kanban.css*

파일 경로가 올바른지 확인하세요:

~~~html title="index.html"
<script type="text/javascript" src="./dist/kanban.js"></script>  
<link rel="stylesheet" href="./dist/kanban.css">
~~~

## 컨테이너 생성하기

Kanban을 위한 컨테이너 요소를 추가하고, *"root"*와 같은 ID를 할당하세요:

~~~jsx title="index.html"
<div id="root"></div>
~~~

Kanban 보드에 *Toolbar*를 추가하고 싶다면, 별도의 컨테이너도 추가하세요:

~~~jsx {1} title="index.html"
<div id="toolbar"></div> // Toolbar용 컨테이너
<div id="root"></div> // Kanban용 컨테이너
~~~

## Kanban 초기화하기

Kanban은 **kanban.Kanban** 생성자를 사용하여 초기화합니다. 이 생성자는 두 개의 인자를 받습니다:

- HTML 컨테이너(HTML 컨테이너의 ID)
- 설정 속성을 담은 객체. [전체 속성 목록 보기](#설정-속성)

~~~jsx title="index.html"
// Kanban 생성
new kanban.Kanban("#root", {
    // 설정 속성
});
~~~

*Toolbar*도 추가할 경우, **kanban.Toolbar** 생성자를 사용해 별도로 초기화해야 합니다. 역시 두 개의 인자가 필요합니다:

- HTML 컨테이너(HTML 컨테이너의 ID)
- 설정 속성을 담은 객체

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
Kanban Toolbar 설정 방법에 대한 자세한 내용은 [**Configuration**](/guides/configuration.md/#툴바) 섹션에서 확인할 수 있습니다.
:::

### 설정 속성

:::note
**Kanban**의 전체 설정 옵션 목록은 [**여기**](/api/overview/properties_overview.md)에서 확인할 수 있습니다. <br /> 
**Kanban의 Toolbar**에 대한 전체 속성 목록은 [**여기**](/api/overview/toolbar_properties_overview.md)에서 확인할 수 있습니다.
:::

## 예시

아래는 일부 초기 데이터와 함께 Kanban을 초기화하는 코드 예시입니다:

<iframe src="https://snippet.dhtmlx.com/gb50vyip?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
