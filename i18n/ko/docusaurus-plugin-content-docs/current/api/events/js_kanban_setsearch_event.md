---
sidebar_label: set-search
title: set-search Event API
description: DHTMLX Kanban의 set-search 이벤트 API를 확인하세요. 카드 검색 시 발생하는 이벤트를 처리하는 방법을 알아보세요.
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