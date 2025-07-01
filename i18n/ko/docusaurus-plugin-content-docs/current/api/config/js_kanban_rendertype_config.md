---
sidebar_label: renderType
title: renderType 구성
description: DHTMLX JavaScript Kanban 라이브러리의 renderType 구성에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# renderType

### 설명

@short: 선택 사항입니다. 카드가 렌더링되는 방식을 지정합니다.

:::info
이 설정은 많은 수의 카드를 처리할 때 유용합니다. *"lazy"*로 설정하면 위젯이 보드에 현재 보이는 카드만 렌더링하여 성능을 크게 향상시킬 수 있습니다.
:::

### 사용법

~~~jsx {}
renderType?: "default" | "lazy";
~~~  

:::important
`renderType: "lazy"`를 [`scrollType: "default"`](/api/config/js_kanban_scrolltype_config.md)와 함께 사용할 때는 [`cardHeight`](/api/config/js_kanban_cardheight_config.md) 속성으로 카드의 고정 높이를 설정해야 합니다. 그렇지 않으면 카드가 제대로 표시되지 않을 수 있습니다.
:::

### 기본 구성

~~~jsx {}
renderType: "default"
~~~

### 예제

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    // 기타 매개변수
});
~~~

**변경 로그:** 이 속성은 v1.2에서 도입되었습니다.

**관련 문서:** [구성](/guides/configuration#카드)

**관련 샘플:** [Kanban. 고정 헤더, 지연 렌더링 및 열 스크롤](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
