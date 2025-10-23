---
sidebar_label: getAreaCards()
title: getAreaCards 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getAreaCards 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getAreaCards()

### 설명

@short: 지정된 열(column)과 행(row)의 모든 카드 데이터 객체를 배열로 가져옵니다.

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

이 메서드는 카드들의 데이터 객체를 포함하는 배열을 반환합니다.

:::info
Kanban에 **행(rows)** 없이 **열(columns)** 만 포함된 경우, ***columnId*** 매개변수만 전달하면 됩니다. 이 경우, 메서드는 지정된 열의 모든 카드를 포함하는 데이터 객체 배열을 반환합니다.

Kanban에 **열(columns)** 과 **행(rows)** 이 모두 포함된 경우, ***columnId*** 와 ***rowId*** 두 매개변수를 모두 전달할 수 있습니다. 이 경우, 메서드는 특정 열과 행의 모든 카드를 포함하는 데이터 객체 배열을 반환합니다.
:::

### 예제

~~~jsx {8}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 지정된 열과 행의 카드 데이터 객체 배열 가져오기
board.getAreaCards("column_id", "row_id");
~~~