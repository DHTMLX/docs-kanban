---
sidebar_label: getCard()
title: getCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# getCard()

### 설명

@short: 지정된 ID로 카드의 데이터 객체를 가져옵니다.

### 사용법

~~~jsx {}
getCard(id: string | number): object;
~~~

### 매개변수

- `id` - (필수) 대상 카드의 ID

### 반환값

지정된 ID를 가진 카드의 데이터 객체를 반환합니다.

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드의 데이터 객체를 가져옵니다
const card_data = board.getCard(1);
console.log(card_data);
~~~