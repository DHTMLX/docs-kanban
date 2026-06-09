---
sidebar_label: getColumnCards()
title: getColumnCards Method API
description: DHTMLX Kanban의 getColumnCards 메서드 API를 확인하세요. 열의 모든 카드를 데이터 객체 배열로 가져오는 방법을 알아봅니다.
---

# getColumnCards()

### 설명

@short: 특정 열에 있는 모든 카드의 데이터 객체를 저장하는 배열을 가져옵니다.

### 사용법

~~~jsx {}
getColumnCards(id: string | number): array;
~~~

### 매개변수

- `id` - (필수) 대상 열의 ID

### 반환값

이 메서드는 특정 열에 있는 모든 카드의 데이터 객체를 저장하는 배열을 반환합니다.

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 열 내 모든 카드의 데이터 객체 가져오기
const cards_data = board.getColumnCards(1);
console.log(cards_data);
~~~

**변경 로그**: 이 메서드는 v1.7에 추가되었습니다.