---
sidebar_label: 테마
title: 테마 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 (Toolbar) 테마 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 테마

### 설명

@short: 선택 사항입니다. Toolbar에 적용할 테마입니다.

### 사용법

~~~jsx {}
theme?: string; // "material" | "willow" | "willow-dark"
~~~

:::important
`theme` 속성을 사용하는 것 외에도, 위젯 컨테이너에 해당 *css* 클래스를 추가하여 필요한 테마를 적용할 수 있습니다:

- **Material 테마**
~~~html {}
    <!-- Kanban 툴바 -->
    <div id="toolbar" class="wx-material-theme"></div>
    <!-- Kanban 컨테이너 -->
    <div id="root" class="wx-material-theme"></div>
~~~

- **Willow 테마**
~~~html {}
    <!-- Kanban 툴바 -->
    <div id="toolbar" class="wx-willow-theme"></div>
    <!-- Kanban 컨테이너 -->
    <div id="root" class="wx-willow-theme"></div>
~~~

- **Willow-Dark 테마**
~~~html {}
    <!-- Kanban 툴바 -->
    <div id="toolbar" class="wx-willow-dark-theme"></div>
    <!-- Kanban 컨테이너 -->
    <div id="root" class="wx-willow-dark-theme"></div>
~~~

또는 skins 폴더에서 필요한 테마를 페이지에 포함할 수도 있습니다:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 기본 설정

기본적으로 Toolbar는 **Material** 테마를 사용합니다. **Willow** 및 **Willow-Dark** 테마로도 설정할 수 있습니다.

:::tip
현재 테마를 동적으로 변경하려면 [**setConfig()**](api/methods/toolbar_setconfig_method.md) 메서드를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5,11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: "willow-dark" // 초기에는 "willow-dark" 테마가 설정됩니다
    // 기타 매개변수
});
// Toolbar 생성
new Toolbar("#toolbar", {
    api: board.api,
    theme: "willow-dark", // 초기에는 "willow-dark" 테마가 설정됩니다
});
~~~

**변경 로그:** 이 속성은 v1.4에 추가되었습니다.

**관련 문서:** [스타일링](guides/stylization.md)

**관련 샘플:** [Kanban. CSS 클래스를 통한 테마 변경](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)