---
sidebar_label: unselect-card
title: unselect-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 unselect-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# unselect-card

### 설명

@short: 카드 선택 해제 시 발생하는 이벤트

### 사용법

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### 매개변수

**unselect-card** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 선택 해제할 카드의 ID

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
// "unselect-card" 이벤트 구독
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~