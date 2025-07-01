---
sidebar_label: add-row
title: add-row 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 add-row 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# add-row

### 설명

@short: 새 행이 추가될 때마다 발생합니다.

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

**add-row** 이벤트의 콜백은 다음과 같은 선택적 속성을 가진 객체를 받습니다:

- `id` - 새 행의 식별자
- `row` - 새 행을 나타내는 데이터 객체입니다. **row** 매개변수의 전체 목록은 [**여기**](/api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.
- `before` - 새 행이 삽입될 기존 행의 ID
- `skipProvider` - 서버로의 요청을 차단할지 허용할지를 제어합니다.

:::info
내부 이벤트 관리를 위해서는 [**Event Bus 메서드**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용하는 것을 권장합니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-row" 이벤트 리스닝
board.api.on("add-row", (obj) => {
    console.log(obj.id);
});
~~~

**변경 기록**: **id**, **before**, 그리고 **row** 매개변수는 v1.1 버전에서 추가되었습니다.
