---
sidebar_label: set-sort
title: set-sort Event API
description: DHTMLX Kanban의 set-sort 이벤트 API를 확인하세요. 카드 정렬 시 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# set-sort

### 설명

@short: 카드 정렬 시 발생하는 이벤트

### 사용법

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### 매개변수

**set-sort** 이벤트의 콜백은 *null* 값 또는 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `by` - (선택 사항) 정렬에 사용할 카드 필드 (*string* 또는 *function*)
- `dir` - (선택 사항) 정렬 순서. 가능한 값은 *"asc"* 와 *"desc"*
- `preserve` - (선택 사항) 정렬 상태 유지 활성화/비활성화
- `columnId` - (선택 사항) 정렬할 열의 ID

:::info
내부 이벤트 처리를 위해서는 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "set-sort" 이벤트 구독
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**변경 이력:** 이 이벤트는 v1.2에 추가되었습니다.