---
sidebar_label: 데이터 작업하기
title: 데이터 작업하기
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 데이터 작업 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 데이터 작업하기

이 가이드에서는 Kanban의 데이터 작업을 다룹니다: 초기 데이터 로딩, 데이터 읽기 및 내보내기, 카드·컬럼·행·링크 수정, 댓글 및 선택 항목 관리.

## 초기 데이터 로딩

Kanban을 초기화할 때, [`columns`](api/config/js_kanban_columns_config.md), [`cards`](api/config/js_kanban_cards_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) 속성을 통해 초기 데이터를 전달합니다.

다음 코드 스니펫은 컬럼, 카드, 행, 링크 데이터를 Kanban 생성자에 전달합니다:

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
        source: 1,
        target: 2,
        relation: "relatesTo",
    },
    {...}
];

// 초기 데이터로 Kanban 초기화
new kanban.Kanban("#root", {
    columns, 
    cards, 
    rows,
    links 
});
~~~

## 로컬 소스에서 데이터 로딩 {#load-data-from-a-local-source}

초기화 이후에 컬럼, 행, 카드, 링크 데이터를 불러오려면 [`setConfig()`](api/methods/js_kanban_setconfig_method.md) 또는 [`parse()`](api/methods/js_kanban_parse_method.md)를 사용합니다:

~~~js {4}
const board = new kanban.Kanban("#root", {});

// load data into Kanban
board.setConfig({ columns, cards, rows });

// or board.parse({ columns, cards, rows });
~~~

## Gantt 및 Scheduler와 데이터 동기화

멀티 위젯 통합에 대해서는 [DHTMLX 위젯과의 통합](guides/integration.md#gantt-and-scheduler)을 참고하세요.

## 데이터 가져오기

- [`getAreaCards()`](api/methods/js_kanban_getareacards_method.md) — 지정한 컬럼(및 선택적으로 행)의 모든 카드 데이터 객체를 반환합니다
- [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md) — 지정한 컬럼의 모든 카드 데이터 객체를 반환합니다
- [`getCard()`](api/methods/js_kanban_getcard_method.md) — ID로 카드 데이터 객체를 반환합니다
- [`serialize()`](api/methods/js_kanban_serialize_method.md) — Kanban 데이터를 JSON 객체로 반환합니다

## 상태 가져오기

- [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) — *DataStore*의 반응형 속성을 반환합니다
- [`api.getState()`](api/internal/js_kanban_getstate_method.md) — *DataStore*의 현재 속성을 반환합니다
- [`api.getStores()`](api/internal/js_kanban_getstores_method.md) — `{ data: DataStore }`를 반환합니다

## 데이터 내보내기

- [`export.json()`](api/internal/js_kanban_json_method.md) — Kanban 데이터를 JSON 파일로 다운로드합니다

## 새 항목 추가

- [`addCard()`](api/methods/js_kanban_addcard_method.md) — 새 카드를 추가합니다
- [`addColumn()`](api/methods/js_kanban_addcolumn_method.md) — 새 컬럼을 추가합니다
- [`addRow()`](api/methods/js_kanban_addrow_method.md) — 새 행을 추가합니다
- [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) — ID로 카드를 복제합니다

## 항목 업데이트

- [`updateCard()`](api/methods/js_kanban_updatecard_method.md) — ID로 카드를 업데이트합니다
- [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) — ID로 컬럼을 업데이트합니다
- [`updateRow()`](api/methods/js_kanban_updaterow_method.md) — ID로 행을 업데이트합니다

## 항목 삭제

- [`deleteCard()`](api/methods/js_kanban_deletecard_method.md) — ID로 카드를 삭제합니다
- [`deleteColumn()`](api/methods/js_kanban_deletecolumn_method.md) — ID로 컬럼을 삭제합니다
- [`deleteRow()`](api/methods/js_kanban_deleterow_method.md) — ID로 행을 삭제합니다

## 항목 이동

- [`moveCard()`](api/methods/js_kanban_movecard_method.md) — 카드를 대상 컬럼과 행으로 이동합니다
- [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) — 컬럼을 새 위치로 이동합니다
- [`moveRow()`](api/methods/js_kanban_moverow_method.md) — 행을 새 위치로 이동합니다

## 댓글 관리

- [`addComment()`](api/methods/js_kanban_addcomment_method.md) — ID로 카드에 댓글을 추가합니다
- [`updateComment()`](api/methods/js_kanban_updatecomment_method.md) — ID로 댓글을 업데이트합니다
- [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md) — ID로 댓글을 삭제합니다

## 링크 관리

- [`addLink()`](api/methods/js_kanban_addlink_method.md) — 카드 간에 새 링크를 추가합니다
- [`deleteLink()`](api/methods/js_kanban_deletelink_method.md) — ID로 링크를 삭제합니다

## 카드 선택 관리

- [`getSelection()`](api/methods/js_kanban_getselection_method.md) — 현재 선택된 카드의 ID를 반환합니다
- [`selectCard()`](api/methods/js_kanban_selectcard_method.md) — ID로 카드를 선택합니다
- [`unselectCard()`](api/methods/js_kanban_unselectcard_method.md) — ID로 카드 선택을 해제합니다

## 예제

다음 스니펫은 Kanban API를 사용하여 런타임에 데이터를 조작하는 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/61crsls3?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
