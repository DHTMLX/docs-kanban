---
sidebar_label: select-card
title: select-card Event API
description: DHTMLX Kanban의 select-card 이벤트 API를 확인하세요. 카드 선택 시 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# select-card

### 설명

@short: 카드가 선택될 때 발생합니다.

### 사용법

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### 매개변수

**select-card** 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 선택된 카드의 ID
- `groupMode` - (선택) 다중 선택 여부 (기본값은 false)

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
// "select-card" 이벤트 구독
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~