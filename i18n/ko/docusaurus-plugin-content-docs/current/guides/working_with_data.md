---
sidebar_label: 데이터 작업하기
title: 데이터 작업하기
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 데이터 작업 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해 보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 데이터 작업하기

## 초기 데이터 로딩

Kanban을 설정할 때 [**columns**](/api/config/js_kanban_columns_config.md), [**cards**](/api/config/js_kanban_cards_config.md), [**rows**](/api/config/js_kanban_rows_config.md), [**links**](/api/config/js_kanban_links_config.md)에 대한 시작 데이터를 전달할 수 있습니다.

~~~jsx {1,17,81,94,106-109}
const columns = [ // 컬럼 데이터
    {
        label: "Backlog",
        id: "backlog"
    },
    {
        label: "In progress",
        id: "inprogress"
    },
    {
        label: "Testing",
        id: "testing"
    },
    {...}
];

const cards = [ // 카드 데이터
    {
        id: 1,
        label: "Integration with React",
        priority: 1,
        color: "#65D3B3",
        description: "Some description...",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        progress: 25,
        users: [1,2,3,4],
        sprint: "1.0",
        column: "backlog",
        type: "feature",
        css: "red",
        votes: [4,6,9],
        comments: [
            {
                id: 1,
                userId: 9,
                cardId: 6,
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays.",
                date: new Date(),
            },{...}
        ]
    },
    {
        id: 2,
        label: "Archive the cards/boards ",
        priority: 2,
        color: "#FFC975",

        start_date: new Date("01/05/2021"),
        end_date: new Date("01/15/2021"),

        sprint: "1.0",
        column: "backlog",
        type: "feature"
    },
    {
        label: "Searching and filtering",
        priority: 1,
        color: "#65D3B3",

        start_date: new Date("01/05/2021"),

        sprint: "1.2",
        column: "backlog",
        type: "task"
    },
    {
        label: "Set the tasks priorities",
        priority: 2,
        color: "#58C3FE",

        sprint: "1.2",
        column: "inprogress",
        type: "feature"
    },
    {...}
];

const rows = [ // 행 데이터
    {
        label: "Feature",
        id: "feature"
    },
    {
        label: "Task",
        id: "task",
        collapsed: true
    },
    {...}
];

const links = [
    {
        id: "link_1",
        masterId: 1,
        slaveId: 2,
        relation: "relatesTo",
    },
    {...}
];

// 컬럼, 카드, 행에 대한 초기 데이터를 사용해 Kanban 초기화
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## 로컬 소스에서 데이터 불러오기

***columns***, ***rows***, ***cards*** 데이터를 로컬 소스에서 불러오기 위해 [`parse()`](/api/methods/js_kanban_parse_method.md) 메서드를 사용할 수 있습니다. 필요한 데이터를 포함한 객체만 전달하면 됩니다.

~~~js {4}
const board = new kanban.Kanban("#root", {});

// Kanban에 데이터 로딩
board.parse({ columns, cards, rows });
~~~

## Kanban 데이터를 Gantt 및 Scheduler와 동기화하기

아래는 Kanban 데이터를 [**Gantt**](https://dhtmlx.com/docs/products/dhtmlxGantt/) 및 [**Scheduler**](https://dhtmlx.com/docs/products/dhtmlxScheduler/)와 같은 다른 DHTMLX 위젯과 동기화하는 예제입니다:

<iframe src="https://snippet.dhtmlx.com/i7j5668s?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Kanban 데이터 가져오기

Kanban 데이터를 얻기 위한 여러 메서드가 있습니다:

- [`getAreaCards()`](/api/methods/js_kanban_getareacards_method.md) - 특정 컬럼(및 행)의 모든 카드 데이터 객체 배열 반환
- [`getCard()`](/api/methods/js_kanban_getcard_method.md) - 카드 ID로 카드 데이터 객체 반환
- [`serialize()`](/api/methods/js_kanban_serialize_method.md) - Kanban 데이터를 JSON으로 직렬화

## Kanban 상태 가져오기

Kanban의 상태를 확인하려면 다음 메서드들을 사용할 수 있습니다:

- [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method.md) - *StateStore*의 반응형 속성을 가진 객체 반환
- [`api.getState()`](/api/internal/js_kanban_getstate_method.md) - *StateStore*의 현재 속성을 가진 객체 반환
- [`api.getStores()`](/api/internal/js_kanban_getstores_method.md) - *StateStore*와 *DataStore* 객체 모두를 포함하는 객체를 반환

## Kanban 데이터 내보내기

Kanban 데이터를 내보내려면 아래를 사용할 수 있습니다:

- [`export.json()`](/api/internal/js_kanban_json_method.md) - Kanban 데이터를 JSON 파일로 내보냄

## 새 항목 추가하기

새 *cards*, *columns*, *rows*는 아래 메서드로 생성할 수 있습니다:

- [`addCard()`](/api/methods/js_kanban_addcard_method.md) - Kanban에 새 카드 생성
- [`addColumn()`](/api/methods/js_kanban_addcolumn_method.md) - Kanban에 새 컬럼 생성
- [`addRow()`](/api/methods/js_kanban_addrow_method.md) - Kanban에 새 행 생성

## 항목 수정하기

*cards*, *columns*, *rows*를 수정해야 한다면 다음 메서드를 사용할 수 있습니다:

- [`updateCard()`](/api/methods/js_kanban_updatecard_method.md) - 카드 ID로 카드 데이터 수정
- [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method.md) - 컬럼 ID로 컬럼 데이터 수정
- [`updateRow()`](/api/methods/js_kanban_updaterow_method.md) - 행 ID로 행 데이터 수정

## 항목 삭제하기

*cards*, *columns*, *rows*를 삭제하려면 아래 메서드를 사용할 수 있습니다:

- [`deleteCard()`](/api/methods/js_kanban_deletecard_method.md) - 카드 ID로 Kanban에서 카드 삭제
- [`deleteColumn()`](/api/methods/js_kanban_deletecolumn_method.md) - 컬럼 ID로 Kanban에서 컬럼 삭제
- [`deleteRow()`](/api/methods/js_kanban_deleterow_method.md) - 행 ID로 Kanban에서 행 삭제

## 항목 이동하기

*cards*, *columns*, *rows*의 위치를 변경하려면 다음 메서드를 사용할 수 있습니다:

- [`moveCard()`](/api/methods/js_kanban_movecard_method.md) - 카드를 특정 컬럼 및 행으로 이동
- [`moveColumn()`](/api/methods/js_kanban_movecolumn_method.md) - 컬럼을 원하는 위치로 이동
- [`moveRow()`](/api/methods/js_kanban_moverow_method.md) - 행을 원하는 위치로 이동

## 예제

아래는 Kanban API를 사용해 데이터를 관리하는 방법을 보여주는 코드 스니펫입니다:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
