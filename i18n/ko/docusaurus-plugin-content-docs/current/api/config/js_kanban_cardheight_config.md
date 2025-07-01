---
sidebar_label: cardHeight
title: cardHeight 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 cardHeight 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# cardHeight

### 설명

@short: 선택 사항입니다. 카드의 높이를 정의합니다.

### 사용법

~~~jsx {}
cardHeight?: number; // px
~~~

:::important
[`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md)와 [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md)를 함께 사용할 때는 `cardHeight` 속성으로 카드의 고정 높이를 설정하는 것이 중요합니다. 설정하지 않으면 카드가 보이지 않습니다.
:::

### 예제

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    cardHeight: 150, // px
    // other parameters
});
~~~

**변경 내역:** 이 속성은 버전 1.2에서 도입되었습니다.

**관련 문서:** [구성](/guides/configuration#카드)

**관련 샘플:** [Kanban. Lazy rendering and column scroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
