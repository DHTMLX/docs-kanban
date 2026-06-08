---
sidebar_label: deleteColumn()
title: deleteColumn 메서드 API
description: DHTMLX Kanban의 deleteColumn 메서드 API를 살펴보세요. ID로 보드에서 컬럼을 제거하는 방법을 알아봅니다.
---

# deleteColumn()

### 설명

@short: Kanban의 데이터스토어에서 지정된 열을 제거합니다.

### 사용법

~~~jsx {}
deleteColumn({ id: string | number }): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 열의 ID

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID로 열 삭제
board.deleteColumn({ id: "backlog" });
~~~