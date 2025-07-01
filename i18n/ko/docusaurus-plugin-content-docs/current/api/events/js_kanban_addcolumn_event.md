---
sidebar_label: add-column
title: add-column 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 add-column 이벤트를 살펴보세요. 개발자 가이드, API 참조를 확인하고, 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
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

**add-column** 이벤트의 콜백은 다음과 같은 선택적 속성을 가진 객체를 전달받습니다:

- `id` - 새로 추가된 열에 할당된 ID
- `column` - 새 열을 나타내는 데이터 객체입니다. **column** 매개변수의 전체 목록은 [**여기**](/api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
- `before` - 새 열이 삽입될 이전 열의 ID
- `skipProvider` - 서버로의 요청을 차단할지 여부를 제어합니다.

:::info
내부 이벤트를 다룰 때는 [**Event Bus 메서드**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-column" 이벤트 리스닝
board.api.on("add-column", (obj) => {
    console.log(obj.label);
});
~~~

**변경 로그**: **id**, **before**, 그리고 **column** 매개변수는 v1.1에서 도입되었습니다.
