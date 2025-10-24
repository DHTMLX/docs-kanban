---
sidebar_label: api.getState()
title: getState 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getState 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.getState()

### 설명

@short: Kanban의 StateStore 속성을 가진 객체를 가져옵니다.

### 사용법

~~~jsx {}
api.getState(): object;
~~~

### 반환값

이 메서드는 다음과 같은 매개변수를 포함하는 객체를 반환합니다:

~~~jsx {}
{
    cardHeight: number | null,
    cards: array,
    cardShape: object,
    columnKey: string,
    columns: array,
    columnShape: object,
    currentUser: number | string | null,
    links: array,
    readonly: object,
    rowKey: string,
    rows: array,
    rowShape: object,
    editorShape: array,
    history: object,
    search: object,
    selected: array,
    sort: object,

    // 제거된 매개변수
    /*    
        fromAreaMeta: object,
        dropAreaItemsCoords: array,
        dropAreasCoords: array,
        overAreaMeta: object,
        before: string | number,
        dragItemId: string | number,
        dragItemsCoords: array,
        overAreaId: string | number,
    /*

    // 비공개 매개변수
    /*
        edit -> _edit: object,
        layout -> layout: string,
        cardsMap -> _cardsMap: object,
        cardsMeta -> _cardsMeta: object,
        areasMeta -> _areasMeta: object,
        scroll -> _scroll: object,
    */
}
~~~

:::warning
이 상태 속성들은 읽기 전용입니다. 예기치 않은 동작을 방지하기 위해 변경하지 마세요!
:::

### 예제

~~~jsx {7-12}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Kanban 상태 가져오기
const state = board.api.getState();
console.log(state.cards); // 카드 데이터 출력
console.log(state.columns); // 컬럼 데이터 출력
console.log(state.rows); // 행 데이터 출력
console.log(state.cardShape); // 카드 구성 출력
//...
~~~

**변경 로그:** 이 메서드는 v1.7에서 업데이트되었습니다.