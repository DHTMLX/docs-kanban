---
sidebar_label: api.getReactiveState()
title: getReactiveState 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getReactiveState 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.getReactiveState()

### 설명

@short: Kanban 보드의 반응형 속성을 포함하는 객체를 반환합니다.

### 사용법

~~~jsx {}
api.getReactiveState(): object;
~~~

### 반환값

이 메서드는 다음 속성을 가진 객체를 반환합니다:

~~~jsx {}
{
    areasMeta: {
        subscribe: any,
        update: any,
        set: any
    },
    before: {...},
    cardHeight: {...},
    cardShape: {...},
    cards: {...},
    cardsMap: {...},
    cardsMeta: {...},
    columnKey: {...},
    columnShape: {...},
    columns: {...},
    currentUser: {...},
    dragItemId: {...},
    dragItemsCoords: {...},
    edit: {...},
    history: {...},
    layout: {...},
    links: {...},
    overAreaId: {...},
    readonly: {...},
    rowKey: {...},
    rowShape: {...},
    rows: {...},
    scroll: {...},
    search: {...},
    selected: {...},
    sort: {...}
}
~~~

### 예제

~~~jsx {7-37}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// Kanban 보드의 반응형 상태에 접근
const state = board.api.getReactiveState();

// columns 변경 구독 및 업데이트된 배열 로그 출력
state.columns.subscribe((data) => {
    console.log(data);
});

// cards 변경 구독 및 업데이트된 배열 로그 출력
state.cards.subscribe((data) => {
    console.log(data);
});

// rows 변경 구독 및 업데이트된 배열 로그 출력
state.rows.subscribe((data) => {
    console.log(data);
});

// 카드 선택 변경 구독 및 선택된 카드 ID 로그 출력
state.selected.subscribe((data) => {
    console.log(data);
});

// 새로운 선택 설정
state.selected.set([1, 2]);

// 선택에 다른 카드 ID 추가하여 업데이트
state.selected.update((data) => {
    data.push(3);
    return data;
});
~~~

**변경 로그:** 이 메서드는 버전 1.4에서 업데이트되었습니다.
