---
sidebar_label: duplicate-card
title: duplicate-card Event API
description: DHTMLX Kanban의 duplicate-card 이벤트 API를 확인하세요. 카드 복제 시 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# duplicate-card

### 설명

@short: 카드 복제 시 발생하는 이벤트입니다.

### 사용법

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### 매개변수

**duplicate-card** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 복제할 카드의 ID
- `card` - (선택) 새 카드의 데이터 객체. 카드 매개변수 전체 목록은 [여기](api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
- `select` - (선택) 새로 추가된 카드 선택 활성화/비활성화

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
// "duplicate-card" 이벤트 구독
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**변경 사항:** `select` 매개변수는 v1.5.10에 추가되었습니다.