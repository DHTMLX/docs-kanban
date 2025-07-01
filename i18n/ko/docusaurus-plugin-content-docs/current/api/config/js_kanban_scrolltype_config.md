---
sidebar_label: scrollType
title: scrollType 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 scrollType 구성 옵션을 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# scrollType

### 설명

@short: 선택 사항입니다. 스크롤 동작 방식을 지정합니다.

### 사용법

~~~jsx {}
scrollType?: "default" | "column";
~~~  

:::note
`scrollType`이 `"column"`으로 설정되면 각 열을 독립적으로 스크롤할 수 있습니다.
:::

### 기본 구성

~~~jsx {}
scrollType: "default"
~~~

:::important
[`renderType: "lazy"`](/api/config/js_kanban_rendertype_config.md)와 `scrollType: "default"`를 함께 사용하는 경우, [`cardHeight`](/api/config/js_kanban_cardheight_config.md) 속성으로 고정된 카드 높이를 반드시 설정해야 합니다. 그렇지 않으면 카드가 표시되지 않습니다.
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

**변경 로그:** 이 속성은 v1.2에서 도입되었습니다.

**관련 문서:** [구성](/guides/configuration#카드)

**관련 샘플:** [Kanban. 고정 헤더, 지연 렌더링 및 열 스크롤](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
