---
sidebar_label: undo
title: undo Event API
description: DHTMLX Kanban의 undo 이벤트 API를 확인하세요. Kanban에서 마지막 작업을 되돌릴 때 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# undo

### 설명

@short: Kanban에서 마지막 작업을 되돌릴 때 발생합니다.

### 사용법

~~~jsx {}
"undo": () => void;
~~~

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "undo" 이벤트 구독
board.api.on("undo", () => {
    console.log("Undo operation");
});
~~~

**변경 로그**: 이 이벤트는 v1.7에 추가되었습니다.