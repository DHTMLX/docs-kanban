---
sidebar_label: drag-card
title: drag-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 drag-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# drag-card

### 설명

@short: 이 이벤트는 카드가 드래그 앤 드롭으로 이동될 때마다 발생합니다.

### 사용법

~~~jsx {}
"drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source: array
}) => void;
~~~

### 매개변수

**drag-card** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `id` - (필수) 드래그되는 카드의 ID
- `columnId` - (필수) 카드가 현재 위치한 열의 ID
- `rowId` - (선택) 카드가 현재 위치한 행의 ID
- `before` - (선택) 드래그된 카드 바로 뒤에 위치하는 카드의 ID
- `source` - (선택) 이동된 카드들의 ID를 포함하는 배열

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "drag-card" 이벤트 구독
board.api.on("drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**변경 내역:** 이 이벤트는 버전 1.4부터 제공됩니다.

**관련 샘플:** [Kanban. 특정 열에 대한 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
