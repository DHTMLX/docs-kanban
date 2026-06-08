---
sidebar_label: serialize()
title: serialize Method API
description: DHTMLX Kanban의 serialize 메서드 API를 확인하세요. 보드 데이터를 JSON으로 직렬화하는 방법을 알아봅니다.
---

# serialize()

### 설명

@short: Kanban 데이터를 JSON으로 직렬화합니다

### 사용법

~~~jsx {}
serialize(): object;
~~~

### 반환값

이 메서드는 Kanban 데이터 객체를 반환합니다  

~~~jsx {}
{
    cards: [{...}, {...}, ...],
    rows: [{...}, {...}, ...],
    columns: [{...}, {...}, ...],
    links: [{...}, {...}, ...]
}
~~~

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban 데이터 객체 가져오기
board.serialize();
~~~