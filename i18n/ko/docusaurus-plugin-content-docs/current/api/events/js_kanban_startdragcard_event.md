---
sidebar_label: start-drag-card
title: start-drag-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 start-drag-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# start-drag-card

### 설명

@short: 카드 드래그가 시작될 때 트리거됩니다.

### 사용법

~~~jsx {}
"start-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### 매개변수

**start-drag-card** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 드래그 중인 카드의 ID
- `columnId` - (필수) 카드가 현재 위치한 열의 ID
- `rowId` - (선택) 카드가 현재 위치한 행의 ID
- `before` - (선택) 열에서 드래그 중인 카드 다음에 위치한 카드의 ID
- `source` - (선택) 이동 중인 카드들의 ID를 포함하는 배열

:::info
내부 이벤트와 작업하려면 [**Event Bus 메서드**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "start-drag-card" 이벤트 구독
board.api.on("start-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**변경 로그:** 이 이벤트는 버전 1.4에서 도입되었습니다.

**관련 샘플:** [Kanban. 특정 열에 대한 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
