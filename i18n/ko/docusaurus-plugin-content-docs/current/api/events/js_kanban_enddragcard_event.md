---
sidebar_label: end-drag-card
title: end-drag-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 end-drag-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# end-drag-card

### 설명

@short: 카드 드래그 작업이 종료될 때 발생합니다.

### 사용법

~~~jsx {}
"end-drag-card": ({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number,
    source?: array
}) => void;
~~~

### 매개변수

**end-drag-card** 이벤트의 콜백은 다음과 같은 정보를 담은 객체를 받습니다:

- `id` - (필수) 드래그된 카드의 ID
- `columnId` - (필수) 카드가 현재 위치한 컬럼의 ID
- `rowId` - (선택) 카드가 위치한 행의 ID
- `before` - (선택) 컬럼 내에서 드래그된 카드 다음에 오는 카드의 ID
- `source` - (선택) 이동된 카드 ID들을 담은 배열

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
// "end-drag-card" 이벤트 리스닝
board.api.on("end-drag-card", (obj) => {
    console.log(obj.columnId);
});
~~~

**변경 기록:** 이 이벤트는 v1.4 버전부터 제공됩니다.

**관련 샘플:** [Kanban. 특정 컬럼에 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
