---
sidebar_label: moveRow()
title: moveRow Method API
description: DHTMLX Kanban의 moveRow 메서드 API를 확인하세요. 행을 새 위치로 이동하는 방법을 알아봅니다.
---

# moveRow()

### 설명

@short: 행을 새 위치로 이동합니다

### 사용법

~~~jsx {}
moveRow({
    id: string | number,
    before?: string | number
}): void;
~~~

### 매개변수

- `id` - (필수) 이동할 행의 ID
- `before` - (선택) 이동된 행이 위치할 대상 행의 ID. `before` 매개변수를 지정하지 않으면 행은 보드의 끝에 배치됩니다.

### 예제

~~~jsx {8-11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// "task" 스윔레인을 "feature" 스윔레인 위(앞)에 배치하여 이동
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**변경 이력:** 이 메서드는 v1.1에 추가되었습니다