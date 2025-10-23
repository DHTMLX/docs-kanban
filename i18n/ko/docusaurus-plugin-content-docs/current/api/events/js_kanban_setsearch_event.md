---
sidebar_label: set-search
title: set-search 이벤트
description: DHTMLX JavaScript Kanban 라이브러리의 set-search 이벤트에 대해 알아보세요. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# set-search

### 설명

@short: 카드 검색 시 발생하는 이벤트

### 사용법

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### 매개변수

**set-search** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `value` - (필수) 검색할 값
- `by` - (선택) 검색할 카드 필드

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "set-search" 이벤트 구독
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~