---
sidebar_label: getSelection()
title: getSelection 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getSelection 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getSelection()

### 설명

@short: 선택된 카드의 ID를 배열로 가져옵니다.

### 사용법

~~~jsx {}
getSelection(): array;
~~~

### 반환값

선택된 카드의 ID가 담긴 배열을 반환합니다.

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 선택된 카드의 ID 배열을 가져옵니다.
board.getSelection();
~~~