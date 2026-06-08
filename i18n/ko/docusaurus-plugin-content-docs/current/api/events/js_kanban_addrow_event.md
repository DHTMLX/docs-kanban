---
sidebar_label: add-row
title: add-row Event API
description: DHTMLX Kanban의 add-row 이벤트 API를 읽어보세요. 새 행 추가 시 발생하는 이벤트를 처리하는 방법을 알아볼 수 있습니다.
---

# add-row

### 설명

@short: 새 행이 추가될 때 발생합니다.

### 사용법

~~~jsx {}
"add-row": ({
    id?: string | number,
    row?: object,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**add-row** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (선택 사항) 새 행의 ID
- `row` - (선택 사항) 새 행의 데이터 객체. **row** 매개변수 전체 목록은 [**여기**](api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.
- `before` - (선택 사항) 새 행이 배치될 이전 행의 ID
- `skipProvider` - (선택 사항) 서버로 요청 전송을 방지할지 여부를 활성화/비활성화합니다.

:::info
내부 이벤트를 처리할 때는 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-row" 이벤트 구독
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**변경 로그**: **id**, **before**, **row** 매개변수는 v1.1에서 추가되었습니다.