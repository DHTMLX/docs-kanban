---
sidebar_label: api.getStores()
title: getStores 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getStores 메서드에 대해 알아보세요. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.getStores()

### 설명

@short: Kanban의 DataStore 속성을 포함하는 객체를 반환합니다.

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

**변경 기록:** 이 메서드는 v1.2에서 업데이트되었습니다.
