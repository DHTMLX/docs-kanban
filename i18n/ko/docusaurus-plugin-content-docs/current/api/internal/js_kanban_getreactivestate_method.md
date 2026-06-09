---
sidebar_label: api.getReactiveState()
title: getReactiveState 메서드 API
description: DHTMLX Kanban의 getReactiveState 메서드 API를 살펴보세요. 보드의 반응형 속성을 포함하는 객체를 가져오는 방법을 알아봅니다.
---

# api.getReactiveState()

### 설명

@short: Kanban의 반응형 속성을 포함하는 객체를 가져옵니다.

### 사용법

~~~jsx {}
api.getReactiveState(): object;
~~~

### 반환값

이 메서드는 다음과 같은 매개변수를 포함하는 객체를 반환합니다:

~~~jsx {}
{
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    history: {...},
    links: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    editorShape: {...},
    rows: {...},
    search: {...},
    selected: {...},
    sort: {...},

    // 제거된 매개변수
    /*  
        fromAreaMeta: {...},
        dropAreaItemsCoords: {...},
        dropAreasCoords: {...},
        overAreaMeta: {...},  
        before: {...},
        dragItemId: {...},
        dragItemsCoords: {...},
        overAreaId: {...},
    /*

    // 비공개 매개변수
    /*
        edit -> _edit: {...},
        layout -> layout: {...},
        cardsMap -> _cardsMap: {...},
        cardsMeta -> _cardsMeta: {...},
        areasMeta -> _areasMeta: {...},
        scroll -> _scroll: {...},
    */
}
~~~  

:::warning
이 상태 속성들은 읽기 전용입니다. 예기치 않은 동작을 방지하기 위해 변경하지 마십시오!
:::

### 예제

~~~jsx {7-37}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Kanban의 반응형 상태 가져오기
const state = board.api.getReactiveState();

// columns 변경 구독 및 columns 배열 출력
state.columns.subscribe((data) => {
    console.log(data);
});

// cards 변경 구독 및 cards 배열 출력
state.cards.subscribe((data) => {
    console.log(data);
});

// rows 변경 구독 및 rows 배열 출력
state.rows.subscribe((data) => {
    console.log(data);
});

// 카드 선택 구독 및 선택된 카드 ID 출력
state.selected.subscribe((data) => {
    console.log(data);
});
~~~

**변경 로그:** 이 메서드는 v1.7에서 업데이트되었습니다.