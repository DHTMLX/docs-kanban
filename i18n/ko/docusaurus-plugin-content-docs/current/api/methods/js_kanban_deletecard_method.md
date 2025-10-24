---
sidebar_label: deleteCard()
title: deleteCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 deleteCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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