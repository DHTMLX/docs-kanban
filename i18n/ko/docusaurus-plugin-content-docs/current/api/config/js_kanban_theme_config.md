---
sidebar_label: 테마
title: 테마 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 테마 구성 옵션을 확인하세요. 개발자 가이드, API 참조, 라이브 데모를 살펴보고 DHTMLX Kanban의 무료 30일 체험판을 이용해 보세요.
---

# 테마

### 설명

@short: 선택 사항입니다. Kanban 보드에 적용할 테마를 정의합니다.

### 사용법

~~~jsx {}
theme?: {
    name: string, // "material" (기본값) | "willow" | "willow-dark"
    fonts?: boolean
};
~~~

:::important
`theme` 속성을 설정하는 것 외에도, 위젯 컨테이너에 적절한 *css* 클래스를 직접 추가하여 테마를 적용할 수 있습니다:

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

또는 skins 폴더에서 테마의 스타일시트를 링크하여 원하는 테마를 포함할 수 있습니다:

~~~html {}
<link type="stylesheet" href="path/to/kanban/skins/willow-dark.css"/>
~~~
:::

### 매개변수

**theme** 구성에 사용할 수 있는 매개변수는 다음과 같습니다:

- `theme` - (선택 사항) 테마 설정을 포함하는 객체입니다. 지원하는 속성:
    - `name` - (필수) Kanban에 적용할 테마 이름
    - `fonts` - (선택 사항) CDN에서 폰트(wxi 폰트)를 로드할지 여부를 제어

:::tip
**Willow** 및 **Willow-Dark** 테마도 사용 가능합니다. 테마를 동적으로 변경하려면 [`setTheme()`](../../methods/js_kanban_settheme_method) 메서드를 사용할 수 있습니다.
:::

### 기본 구성

Kanban 보드는 기본적으로 **Material** 테마를 사용합니다.

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
        name: "willow-dark", // 초기 테마로 "willow-dark" 설정
        fonts: false
    }
    // 기타 매개변수
});
~~~

**변경 로그:** 이 속성은 v1.4에 도입되었습니다.

**관련 문서:** [스타일링](/guides/stylization)

**관련 샘플:**
- [Kanban. 테마 사용하기](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. 테마를 스타일시트로 포함하기](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. CSS 클래스로 테마 변경하기](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
