---
sidebar_label: deleteRow()
title: deleteRow Method API
description: DHTMLX Kanban의 deleteRow 메서드 API를 확인하세요. ID로 보드에서 행을 제거하는 방법을 알아봅니다.
---

# deleteRow()

### 설명

@short: Kanban의 데이터 저장소에서 지정된 행을 제거합니다.

### 사용법

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 행의 ID

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID로 행 제거
board.deleteRow({ id: "feature" });
~~~