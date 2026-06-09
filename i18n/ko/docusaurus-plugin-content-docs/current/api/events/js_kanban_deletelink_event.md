---
sidebar_label: delete-link
title: delete-link Event API
description: DHTMLX Kanban의 delete-link 이벤트 API를 읽어보세요. 링크 삭제 시 발생하는 이벤트를 처리하는 방법을 알아볼 수 있습니다.
---

# delete-link

### 설명

@short: 링크가 제거될 때 발생합니다

### 사용법

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-link** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 삭제할 링크의 ID
- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지할지 여부를 설정합니다

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다
:::

### 예제

~~~jsx {8-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// "delete-link" 이벤트 구독
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에 추가되었습니다