---
sidebar_label: moveColumn()
title: moveColumn 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 moveColumn 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# moveColumn()

### 설명

@short: 보드 내에서 열의 위치를 새 위치로 이동합니다.

### 사용법

~~~jsx {}
moveColumn({
    id: string | number,
    before: string | number
}): void;
~~~

### 매개변수

- `id` - (필수) 이동할 열의 ID
- `before` - (필수) 이동하는 열이 삽입될 대상 열의 ID

### 예제

~~~jsx {7-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "backlog" 열을 이동하여 "done" 열 앞에 배치
board.moveColumn({
    id: "backlog",
    before: "done"
});
~~~

**변경 로그:** 이 메서드는 v1.1에 도입되었습니다
