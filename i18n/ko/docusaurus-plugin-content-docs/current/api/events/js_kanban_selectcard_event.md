---
sidebar_label: select-card
title: select-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 select-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# select-card

### 설명

@short: 카드가 선택될 때 발생합니다.

### 사용법

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### 매개변수

**select-card** 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 선택된 카드의 ID
- `groupMode` - (선택) 다중 선택 여부 (기본값은 false)

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
// "select-card" 이벤트 구독
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~