---
sidebar_label: add-column
title: add-column Event API
description: DHTMLX Kanban의 add-column 이벤트 API를 읽어보세요. 새 열 추가 시 발생하는 이벤트를 처리하는 방법을 알아볼 수 있습니다.
---

# add-column

### 설명

@short: 새 열이 추가될 때 발생합니다.

### 사용법

~~~jsx {}
"add-column": ({
    id?: string | number,
    column?: object,
    before?: string | number,
    skipProvider?: boolean,
}) => void;
~~~

### 매개변수

**add-column** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (선택 사항) 새 열의 ID
- `column` - (선택 사항) 새 열의 데이터 객체. **column** 매개변수의 전체 목록은 [**여기**](api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
- `before` - (선택 사항) 새 열이 위치할 대상 열의 ID
- `skipProvider` - (선택 사항) 서버로 요청이 전송되는 것을 방지할지 여부를 설정합니다.

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
// "add-column" 이벤트 구독
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**변경 로그**: v1.1 버전에서 **id**, **before**, **column** 매개변수가 추가되었습니다.