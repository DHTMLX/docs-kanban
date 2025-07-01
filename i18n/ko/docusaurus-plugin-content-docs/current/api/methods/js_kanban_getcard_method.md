---
sidebar_label: getCard()
title: getCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getCard()

### 설명

@short: 지정된 ID를 사용하여 카드의 데이터 객체를 가져옵니다.

### 사용법

~~~jsx {}
getCard(id: string | number): object;
~~~

### 매개변수

- `id` - (필수) 접근하려는 카드의 ID

### 반환값

이 메서드는 주어진 ID로 식별된 카드와 연결된 데이터 객체를 반환합니다.

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드의 데이터 객체 가져오기
board.getCard(1);
~~~
