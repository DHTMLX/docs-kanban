---
sidebar_label: redo
title: redo Event API
description: DHTMLX Kanban의 redo 이벤트 API를 확인하세요. undo 작업으로 되돌린 동작을 다시 실행할 때 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# redo

### 설명

@short: undo 작업으로 되돌린 동작을 다시 실행할 때 발생합니다.

### 사용법

~~~jsx {}
"redo": () => void;
~~~

:::info
내부 이벤트 처리를 위해 [**Event Bus 메서드**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "redo" 이벤트 구독
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**변경 로그**: 이 이벤트는 v1.7에 추가되었습니다.