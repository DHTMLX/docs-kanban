---
sidebar_label: serialize()
title: serialize 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 serialize 메서드에 대해 배울 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시험해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# serialize()

### 설명

@short: Kanban 데이터를 JSON 형식으로 변환합니다.

### 사용법

~~~jsx {}
serialize(): object;
~~~

### 반환값

이 메서드는 Kanban 데이터를 포함하는 객체를 반환합니다:

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...]
}
~~~

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban 데이터 객체를 가져오기
board.serialize();
~~~
