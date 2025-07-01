---
sidebar_label: moveCard()
title: moveCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 moveCard 메서드를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 평가판을 이용해 보세요.
---

# moveCard()

### 설명

@short: 카드를 지정한 열(및 행)으로 이동합니다.

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
- `columnId` - (필수) 카드를 배치할 대상 열의 ID
- `rowId` - (선택) 카드를 배치할 대상 행의 ID
- `before` - (선택) 이동할 카드가 삽입될 기준이 되는 카드의 ID

:::info
위젯 구성에 **rowKey** 속성이 설정되어 있으면, **moveCard()** 메서드에서 **rowId**를 제공하는 것이 *필수*입니다!
:::

### 예제

~~~jsx {9-14}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드를 이동
// "inprogress" 열과 "feature" 행 안에 배치되며,
// ID가 8인 카드 앞에 위치합니다.
board.moveCard({
    id: 1,
    columnId: "inprogress",
    rowId: "feature",
    before: 8
});
~~~
