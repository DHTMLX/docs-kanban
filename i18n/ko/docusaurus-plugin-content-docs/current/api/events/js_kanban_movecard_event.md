---
sidebar_label: move-card
title: move-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 move-card 이벤트에 대해 배울 수 있습니다. 개발자 가이드와 API 참조를 살펴보고 코드 예제와 라이브 데모를 시도해 보세요. 또한 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# move-card

### 설명

@short: 카드가 이동될 때 발생합니다.

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

**move-card** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `id` - (필수) 이동되는 카드의 ID
- `columnId` - (필수) 카드가 배치될 열의 ID
- `rowId` - (선택) 카드가 배치될 행의 ID
- `before` - (선택) 이동된 카드가 삽입될 카드의 바로 앞 카드 ID
- `skipProvider` - (선택) 서버로의 요청을 막을지 여부를 제어

:::info
내부 이벤트를 관리하려면 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
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

**관련 샘플:** [Kanban. 특정 열에 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
