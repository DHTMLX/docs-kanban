---
sidebar_label: move-row
title: move-row Event API
description: DHTMLX Kanban의 move-row 이벤트 API를 확인하세요. 행 이동 시 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# move-row

### 설명

@short: 행이 이동될 때 발생합니다

### 사용법

~~~jsx {}
"move-row": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**move-row** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 이동할 행의 ID
- `before` - (선택) 이동할 행이 위치할 대상 행의 ID. `before` 매개변수를 지정하지 않으면 행이 보드의 끝에 배치됩니다.
- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지할지 여부를 설정합니다.

:::info
내부 이벤트 처리를 위해 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {8-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// "move-row" 이벤트 구독
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**변경 로그:** 이 이벤트는 v1.1에서 추가되었습니다