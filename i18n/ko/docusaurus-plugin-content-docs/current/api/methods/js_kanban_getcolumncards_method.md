---
sidebar_label: getColumnCards()
title: getColumnCards 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getColumnCards 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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