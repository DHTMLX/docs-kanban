---
sidebar_label: deleteCard()
title: deleteCard 메서드 API
description: DHTMLX Kanban의 deleteCard 메서드 API를 살펴보세요. ID로 보드에서 카드를 제거하는 방법을 알아봅니다.
---

# deleteCard()

### 설명

@short: Kanban의 데이터 저장소에서 지정된 카드를 제거합니다.

### 사용법

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 카드의 ID

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 카드 ID로 카드 제거
board.deleteCard({ id: 1 });
~~~