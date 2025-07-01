---
sidebar_label: moveRow()
title: moveRow 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 moveRow 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 볼 수 있으며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# moveRow()

### 설명

@short: 보드 내에서 행을 새로운 위치로 이동합니다.

### 사용법

~~~jsx {}
moveRow({
    id: string | number,
    before: string | number
}): void;
~~~

### 매개변수

- `id` - (필수) 이동할 행의 ID
- `before` - (필수) 이동한 행이 위치할 행의 ID (이 행 앞에 배치됨)

### 예제

~~~jsx {8-11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    row
});
// "task" 스윔레인을 "feature" 스윔레인 앞에 이동
board.moveRow({
    id: "task",
    before: "feature"
});
~~~

**변경 로그:** 이 메서드는 v1.1에 추가되었습니다.
