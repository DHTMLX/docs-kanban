---
sidebar_label: set-edit
title: set-edit 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 set-edit 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# set-edit

### 설명

@short: 에디터 전환 시 발생합니다.

### 사용법

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### 매개변수

**set-edit** 이벤트의 콜백은 *null* 값이거나 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `cardId` - (필수) 편집할 카드의 ID
- `eventSource` - (선택) ***"select-card"*** 액션으로, ***set-edit*** 이벤트를 호출하는 경우

:::note
에디터를 닫을 때는 ***null*** 값이 사용됩니다.
:::

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
// 사용자가 카드를 한 번 클릭했을 때 편집을 방지
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**변경 로그:**
    - 이벤트는 v1.2에 추가되었습니다.
    - ***eventSource*** 매개변수는 v1.6에 추가되었습니다.

**관련 샘플:** [Kanban. 작업을 더블 클릭하여 에디터 열기](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)