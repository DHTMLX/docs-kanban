---
sidebar_label: moveCard()
title: moveCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 moveCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# moveCard()

### 설명

@short: 카드를 지정한 열(및 행)로 이동합니다.

### 사용법

~~~jsx {}
moveCard({
    id: string | number,
    columnId: string | number,
    rowId?: string | number,
    before?: string | number
}): void;
~~~

### 매개변수

- `id` - (필수) 이동할 카드의 ID
- `columnId` - (필수) 카드를 배치할 열의 ID
- `rowId` - (선택) 카드를 배치할 행의 ID
- `before` - (선택) 새 카드가 배치될 카드의 ID (이 카드 앞에 배치됨)

:::info
위젯 구성에서 **rowKey** 속성을 지정한 경우, **moveCard()** 메서드의 **rowId** 매개변수는 *필수*입니다!
:::

### 예제

~~~jsx {9-14}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드를 이동
// 아이템은 "inprogress" 열과 "feature" 행에 배치되며,
// ID가 8인 카드 앞에 위치합니다.
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~