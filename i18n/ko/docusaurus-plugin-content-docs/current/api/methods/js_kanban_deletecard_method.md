---
sidebar_label: deleteCard()
title: deleteCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 deleteCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# deleteCard()

### 설명

@short: Kanban의 데이터 저장소에서 특정 카드를 삭제합니다.

### 사용법

~~~jsx {}
deleteCard({ id: string | number }): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 카드의 고유 식별자

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// id로 카드 삭제
board.deleteCard({ id: 1 });
~~~
