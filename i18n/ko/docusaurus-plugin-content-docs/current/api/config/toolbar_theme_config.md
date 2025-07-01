---
sidebar_label: theme
title: theme 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 (Toolbar) theme 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험 버전을 다운로드할 수 있습니다.
---

# theme

### 설명

@short: 선택 사항입니다. Toolbar에 적용할 테마를 지정합니다.

### 사용법

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
`theme` 속성 설정 외에도, 위젯 컨테이너에 해당 *css* 클래스를 추가하여 원하는 테마를 적용할 수 있습니다:

- **Material 테마**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow 테마**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark 테마**
~~~html {}
    <!-- Kanban toolbar -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban container -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

또는 skins 폴더에서 원하는 테마 스타일시트를 포함시켜 사용할 수도 있습니다:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 기본 구성

Toolbar의 기본 테마는 **Material**입니다. **Willow** 또는 **Willow-Dark** 테마로도 전환할 수 있습니다.

:::tip
실시간으로 테마를 변경하려면 [**setConfig()**](../../methods/toolbar_setconfig_method) 메서드를 사용하세요.
:::

### 예제

~~~jsx {5,11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // 초기 테마를 "willow-dark"로 설정
    // 기타 매개변수
});
// Toolbar 생성
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // 초기 테마를 "willow-dark"로 설정
});
~~~

**변경 로그:** 이 속성은 v1.4에서 도입되었습니다.

**관련 문서:** [스타일링](/guides/stylization)

**관련 샘플:**
- [Kanban. 테마 사용하기](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. 테마를 스타일시트로 포함하기](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. CSS 클래스로 테마 변경하기](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
