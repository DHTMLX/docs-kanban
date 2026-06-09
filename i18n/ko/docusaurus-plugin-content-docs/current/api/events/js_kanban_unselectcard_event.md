---
sidebar_label: unselect-card
title: unselect-card Event API
description: DHTMLX Kanban의 unselect-card 이벤트 API를 확인하세요. 카드 선택 해제 시 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# unselect-card

### 설명

@short: 카드 선택 해제 시 발생하는 이벤트

### 사용법

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### 매개변수

**unselect-card** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 선택 해제할 카드의 ID

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
// "unselect-card" 이벤트 구독
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~