---
sidebar_label: add-card
title: add-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 add-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# add-card

### 설명

@short: 새 카드를 추가할 때 발생합니다.

### 사용법

~~~jsx {}
"add-card": ({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object,
    skipProvider?: boolean,
}) => void;
~~~

### 매개변수

**add-card** 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `columnId` - (필수) 대상 열의 ID
- `id` - (선택) 새 카드의 ID
- `rowId` - (선택) 대상 행의 ID
- `before` - (선택) 새 카드가 배치될 기존 카드의 ID
- `select` - (선택) 새로 추가된 카드 선택 활성화/비활성화
- `card` - (선택) 새 카드의 데이터 객체. 카드 매개변수 전체 목록은 [여기](api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
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
// "add-card" 이벤트 구독
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~