---
sidebar_label: end-drag-card
title: end-drag-card Event API
description: DHTMLX Kanban의 end-drag-card 이벤트 API를 확인하세요. 카드 드래그를 중지할 때 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# end-drag-card

### 설명

@short: 카드 드래그를 중지할 때 발생합니다.

### 사용법

~~~jsx {}
"end-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### 매개변수

**end-drag-card** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 드래그된 카드의 ID
- `columnId` - (필수) 카드가 현재 위치한 열의 ID
- `rowId` - (선택) 카드가 현재 위치한 행의 ID
- `before` - (선택) 드래그된 카드 뒤에 현재 위치한 카드의 ID
- `source` - (선택) 이동된 카드들의 ID 배열

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
// "end-drag-card" 이벤트 구독
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**변경 내역:** 이 이벤트는 v1.4에서 추가되었습니다.

**관련 샘플:** [Kanban. 특정 열에 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)