---
sidebar_label: cardHeight
title: cardHeight Config API
description: DHTMLX Kanban의 cardHeight 구성 API를 읽어보세요. 고정 카드 높이가 레이아웃 및 지연 렌더링을 지원하는 방법을 알아볼 수 있습니다.
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

`cardHeight`를 지정하지 않은 경우, 위젯은 [`cardShape`](api/config/js_kanban_cardshape_config.md)에 선언된 표시 필드를 기반으로 카드 높이를 실험적으로 추정합니다. 커스텀 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)을 사용하는 경우에는 이 추정이 적용되지 않으므로, `cardHeight`를 명시적으로 설정하거나 커스텀 [`getCardHeight`](api/config/js_kanban_getcardheight_config.md) 함수를 제공해야 합니다.
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
