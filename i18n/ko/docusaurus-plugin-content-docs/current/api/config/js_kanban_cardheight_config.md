---
sidebar_label: cardHeight
title: cardHeight 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 cardHeight 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# cardHeight

### 설명

@short: 선택 사항입니다. 카드의 높이입니다.

### 사용법

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
[`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md)와 [`scrollType: "default"`](api/config/js_kanban_scrolltype_config.md) 설정을 함께 사용하는 경우, `cardHeight` 속성을 통해 카드의 고정 높이를 반드시 지정해야 합니다. 지정하지 않으면 카드가 표시되지 않습니다.  
또한 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md)와 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md)을 함께 사용할 때도 `cardHeight` 속성을 통해 카드의 높이를 고정해야 합니다. 이 레이아웃에서는 카드의 가변 높이가 지원되지만, 커스텀 카드 콘텐츠와 함께 사용할 경우 안정적으로 동작하지 않을 수 있습니다.
:::

### 예제

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    cardHeight: 150, // px
    // 기타 매개변수
});
~~~

**변경 내역:** 이 속성은 v1.2에 추가되었습니다.

**관련 문서:** [설정](guides/configuration.md#cards)

**관련 샘플:** [Kanban. Lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
