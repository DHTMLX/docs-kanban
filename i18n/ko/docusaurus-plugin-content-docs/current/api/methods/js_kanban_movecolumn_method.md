---
sidebar_label: moveColumn()
title: moveColumn Method API
description: DHTMLX Kanban의 moveColumn 메서드 API를 확인하세요. 열을 새 위치로 이동하는 방법을 알아봅니다.
---

# moveColumn()

### 설명

@short: 컬럼을 새로운 위치로 이동합니다.

### 사용법

~~~jsx {}
moveColumn({
    id: string | number,
    before?: string | number
}): void;
~~~

### 매개변수

- `id` - (필수) 이동할 컬럼의 ID
- `before` - (선택) 이동할 컬럼이 위치할 대상 컬럼의 ID. `before` 파라미터를 지정하지 않으면 컬럼은 보드의 끝에 배치됩니다.

### 예제

~~~jsx {7-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "backlog" 컬럼을 이동하여 "done" 컬럼 앞에 배치
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**변경 로그:** 이 메서드는 v1.1에 추가되었습니다.