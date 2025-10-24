---
sidebar_label: move-card
title: move-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 move-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# move-card

### 설명

@short: 카드 이동 시 발생하는 이벤트

### 사용법

~~~jsx {}
"move-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**move-card** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 이동할 카드의 ID
- `columnId` - (필수) 카드를 배치할 열의 ID
- `rowId` - (선택) 카드를 배치할 행의 ID
- `before` - (선택) 새 카드가 배치될 카드의 ID (이 카드 앞에 위치)
- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지할지 여부를 설정

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
// "move-card" 이벤트 구독
board.api.on("move-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**관련 샘플:** [Kanban. 특정 열에 대한 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)