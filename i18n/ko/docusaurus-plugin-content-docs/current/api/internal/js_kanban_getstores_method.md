---
sidebar_label: api.getStores()
title: getStores 메서드 API
description: DHTMLX Kanban의 getStores 메서드 API를 살펴보세요. 보드의 DataStore 속성을 포함하는 객체를 가져오는 방법을 알아봅니다.
---

# api.getStores()

### 설명

@short: Kanban의 DataStore 속성을 가진 객체를 가져옵니다.

### 사용법

~~~jsx {}
api.getStores(): object;
~~~

### 반환값

이 메서드는 **DataStore** 매개변수를 포함하는 객체를 반환합니다:

~~~jsx {}
{
    data: DataStore // ( 매개변수 객체 )
}
~~~

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban의 DataStore 객체 가져오기
const store = board.api.getStores();
console.log(store);
~~~

**변경 로그:** 이 메서드는 v1.2에서 업데이트되었습니다.