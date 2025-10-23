---
sidebar_label: scrollType
title: scrollType 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 scrollType 구성에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# scrollType

### 설명

@short: 선택 사항입니다. 스크롤 유형을 정의합니다.

### 사용법

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
`scrollType: "column"` 설정을 사용하면 각 열을 개별적으로 스크롤할 수 있습니다.
:::

### 기본 구성

~~~jsx {}
scrollType: "default"
~~~

:::important
[`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md)와 `scrollType: "default"` 설정을 함께 사용할 경우, [`cardHeight`](api/config/js_kanban_cardheight_config.md) 속성을 통해 카드의 고정 높이를 반드시 지정해야 합니다. 지정하지 않으면 카드가 표시되지 않습니다.
:::

### 예제

~~~jsx {5}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    scrollType: "column",
    // 기타 매개변수
});
~~~

**변경 로그:** 이 속성은 v1.2에서 추가되었습니다.

**관련 문서:** [구성](guides/configuration.md#cards)

**관련 샘플:** [Kanban. 고정 헤더, 지연 렌더링 및 열 스크롤](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)