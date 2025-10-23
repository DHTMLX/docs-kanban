---
sidebar_label: update-row
title: update-row 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 update-row 이벤트에 대해 알아보세요. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# update-row

### 설명

@short: 행 데이터가 업데이트될 때 발생합니다.

### 사용법

~~~jsx {}
"update-row": ({
    id: string | number,
    row?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**update-row** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 업데이트할 행의 ID
- `row` - (선택) 행의 새로운 데이터 객체. **row** 매개변수의 전체 목록은 [**여기**](api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 데이터 전체 교체 활성화/비활성화

    :::note
    `replace` 매개변수를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 대체됩니다. 그렇지 않으면 전달한 값만 업데이트됩니다.
    :::

- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지하는 기능 활성화/비활성화

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
// "update-row" 이벤트 구독
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**변경 내역**:
- **id** 및 **row** 매개변수는 v1.1에 추가되었습니다.
- **replace** 매개변수는 v1.3에 추가되었습니다.