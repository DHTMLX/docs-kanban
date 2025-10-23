---
sidebar_label: 테마
title: 테마 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 테마 구성에 대해 배울 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# 테마

### 설명

@short: 선택 사항입니다. Kanban에 적용할 테마입니다.

### 사용법

~~~jsx {}
theme?: {
    name: string, // "material" (기본값) | "willow" | "willow-dark"
    fonts?: boolean
};
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

또는 skins 폴더에서 필요한 테마를 페이지에 포함시킬 수 있습니다:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 매개변수

**theme**를 구성할 때 다음 매개변수를 사용할 수 있습니다.

- `theme` - (선택 사항) 테마 설정이 포함된 객체입니다. 다음 매개변수를 지정할 수 있습니다:
    - `name` - (필수) Kanban에 적용할 테마 이름
    - `fonts` - (선택 사항) CDN에서 글꼴(wxi 글꼴) 로딩을 활성화/비활성화합니다.

:::tip
**Willow** 및 **Willow-Dark** 테마도 적용할 수 있습니다. 현재 테마를 동적으로 변경하려면 [`setTheme()`](api/methods/js_kanban_settheme_method.md) 메서드를 사용하세요.
:::

### 기본 구성

기본적으로 Kanban은 **Material** 테마를 사용합니다.

~~~jsx {}
theme: {
    name: "material",
    fonts: true
}
~~~

### 예제

~~~jsx {5-8}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    theme: {
        name: "willow-dark", // 초기 설정되는 "willow-dark" 테마
        fonts: false
    }
    // 기타 매개변수
});
~~~

**변경 기록:** 이 속성은 v1.4에서 추가되었습니다.

**관련 문서:** [스타일링](guides/stylization.md)

**관련 샘플:** [Kanban. CSS 클래스를 통한 테마 변경](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)