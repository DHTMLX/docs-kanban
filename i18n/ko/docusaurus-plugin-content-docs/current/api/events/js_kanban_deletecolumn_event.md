---
sidebar_label: delete-column
title: delete-column Event API
description: DHTMLX Kanban의 delete-column 이벤트 API를 읽어보세요. 열 삭제 시 발생하는 이벤트를 처리하는 방법을 알아볼 수 있습니다.
---

# delete-column

### 설명

@short: 컬럼이 삭제될 때 발생합니다

### 사용법

~~~jsx {}
"delete-column": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-column** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 삭제할 컬럼의 ID
- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지할지 여부를 설정

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "delete-column" 이벤트 구독
board.api.on("delete-column", (obj) => {
    console.log(obj.id);
});
~~~