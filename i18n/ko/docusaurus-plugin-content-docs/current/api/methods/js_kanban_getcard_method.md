---
sidebar_label: getCard()
title: getCard Method API
description: DHTMLX Kanban의 getCard 메서드 API를 확인하세요. ID로 카드 데이터 객체를 가져오는 방법을 알아봅니다.
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