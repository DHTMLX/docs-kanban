---
sidebar_label: getAreaCards()
title: getAreaCards 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getAreaCards 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# getAreaCards()

### 설명

@short: 지정된 열(및 행) 내의 모든 카드에 대한 데이터 객체 배열을 가져옵니다.

### 사용법

~~~jsx {}
getAreaCards(
    columnId: string | number,
    rowId?: string | number
): array;
~~~

### 매개변수

- `columnId` - (필수) 대상 열의 ID  
- `rowId` - (선택) 대상 행의 ID

### 반환값

이 메서드는 카드들을 나타내는 데이터 객체 배열을 반환합니다.

:::info
Kanban 보드에 **행이 없는 열들**만 있을 경우, ***columnId*** 매개변수만 필요합니다. 이 경우 이 메서드는 해당 열에 있는 모든 카드 데이터 객체를 포함하는 배열을 반환합니다.

Kanban 보드에 **열과 행이 모두 있는 경우**, ***columnId***와 ***rowId*** 매개변수를 모두 제공해야 합니다. 그러면 이 메서드는 지정된 열과 행에 위치한 카드들의 데이터 객체 배열을 반환합니다.
:::

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 지정된 열과 행에서 카드 데이터 객체 배열을 가져옴
board.getAreaCards("column_id", "row_id");
~~~
