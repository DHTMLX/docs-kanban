---
sidebar_label: add-card
title: add-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리에서 add-card 이벤트가 어떻게 작동하는지 알아보세요. 개발자 가이드, API 참고 문서, 테스트 코드 샘플을 탐색하고 라이브 데모를 확인한 후 DHTMLX Kanban의 무료 30일 체험판을 이용해 보세요.
---

# add-card

### 설명

@short: 새 카드가 추가될 때 트리거됩니다

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

**add-card** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `columnId` - (필수) 카드가 추가될 열의 ID
- `id` - (선택) 새 카드에 할당된 ID
- `rowId` - (선택) 카드가 배치될 행의 ID
- `before` - (선택) 새 카드가 삽입될 대상 카드의 ID
- `select` - (선택) 새로 추가된 카드를 선택할지 여부
- `card` - (선택) 새 카드를 나타내는 데이터 객체. 카드 매개변수에 대한 자세한 내용은 [여기](/api/config/js_kanban_cards_config.md)에서 확인하세요
- `skipProvider` - (선택) 서버 요청을 생략할지 여부를 제어

:::info
내부 이벤트 관리는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-card" 이벤트 리스닝
board.api.on("add-card", (obj) => {
    console.log(obj.columnId);
});
~~~
