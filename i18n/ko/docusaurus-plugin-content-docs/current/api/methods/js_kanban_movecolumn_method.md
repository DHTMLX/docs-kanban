---
sidebar_label: moveColumn()
title: moveColumn 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 moveColumn 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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