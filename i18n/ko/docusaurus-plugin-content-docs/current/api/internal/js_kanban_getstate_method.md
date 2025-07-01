---
sidebar_label: api.getState()
title: getState 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 getState 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.getState()

### 설명

@short: Kanban의 StateStore 속성을 포함하는 객체를 반환합니다.

### 사용법

~~~jsx {}
api.getState(): object;
~~~

### 반환값

이 메서드는 다음 속성을 포함하는 객체를 반환합니다:

~~~jsx {}
{    
    areasMeta: object, 
    before: string | number, 
    cardHeight: number | null, 
    cards: array,
    cardShape: object,
    cardsMap: object,
    cardsMeta: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    dragItemId: string | number, 
    dragItemsCoords: array, 
    edit: object,
    history: object,
    layout: string,
    links: array,
    overAreaId: string | number, 
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    scroll: object,
    search: object,
    selected: array, 
    sort: object,
    // deprecated options
    fromAreaMeta: object, // v.1.2에서 삭제됨
    editorShape: array, // v.1.4에서 삭제됨
    dropAreaItemsCoords: array, // v1.4에서 사용 중단됨
    dropAreasCoords: array, // v1.4에서 사용 중단됨 
    overAreaMeta: object, // v1.4에서 사용 중단됨
}
~~~

### 예제

~~~jsx {7-12}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 현재 Kanban 상태 가져오기
const state = board.api.getState();
console.log(state.cards); // 카드 데이터 출력
console.log(state.columns); // 컬럼 데이터 출력
console.log(state.rows); // 행 데이터 출력
console.log(state.cardShape); // 카드 구성 출력
//...
~~~

**변경 로그:**
v1.4에서 메서드가 업데이트되었습니다. 다음 매개변수들이 사용 중단되었습니다:
- ***dropAreaItemsCoords***
- ***dropAreasCoords***
- ***overAreaMeta***
***editorShape*** 매개변수는 제거되었습니다
