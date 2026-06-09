---
sidebar_label: getSelection()
title: getSelection Method API
description: DHTMLX Kanban의 getSelection 메서드 API를 확인하세요. 현재 선택된 카드의 ID를 가져오는 방법을 알아봅니다.
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