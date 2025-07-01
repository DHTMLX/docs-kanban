---
sidebar_label: columnShape
title: columnShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 columnShape 구성을 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 샘플과 라이브 데모를 테스트하며 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# columnShape

### 설명

@short: 선택 사항입니다. 열의 모양을 사용자 정의하기 위한 설정 객체입니다.

### 사용법

~~~jsx {}
columnShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled?: boolean,
                onClick?: ({ id, item, column }) => void
            },
            {...}
        ] | ({ column, columnIndex, columns, store }) => array | boolean
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(column => {
        return "확장된 상태의 열 헤더에 대한 HTML 템플릿";
    }),
    collapsedTemplate?: template(column => {
        return "축소된 상태의 열 헤더에 대한 HTML 템플릿";
    }),
    confirmDeletion?: boolean
};
~~~

### 매개변수

열을 스타일링하기 위해 **columnShape** 객체는 다음 옵션들을 지원합니다:

- `menu` - (선택 사항) 열 컨텍스트 메뉴 설정입니다. 포함 항목은 다음과 같습니다:
    - `show` - (선택 사항) 열 컨텍스트 메뉴를 켜거나 끕니다
    - `items` - (선택 사항) 메뉴 항목을 정의하는 배열입니다. 각 항목은 다음을 가질 수 있습니다:
        - `id` - (선택 사항) 메뉴 항목 ID입니다. 내장 동작에 사용할 수 있는 값:
            - ***"add-card"*** - 새 카드 추가
            - ***"set-edit"*** - 열 이름 편집
            - ***"move-column:left"*** - 열을 왼쪽으로 이동
            - ***"move-column:right"*** - 열을 오른쪽으로 이동
            - ***"delete-column"*** - 열 삭제
        - `icon` - (선택 사항) 메뉴 항목의 아이콘 클래스 예: *mdi-delete*
        - `text` - (선택 사항) 메뉴 항목 라벨
        - `disabled` - (선택 사항) 메뉴 항목 활성화 또는 비활성화 여부 설정
        - `onClick` - (선택 사항) 콜백 함수, 인자는 다음과 같습니다:
            - ***id*** - 현재 메뉴 항목 ID
            - ***item*** - 현재 메뉴 항목 데이터 객체
            - ***column*** - 대상 열 데이터 객체

:::info
`items`를 함수로 설정할 수도 있습니다. 함수는 다음을 받습니다:

- ***column*** - 현재 열 데이터
- ***columnIndex*** - 현재 열의 인덱스
- ***columns*** - 모든 열 데이터 배열
- ***store*** - *dataStore* 객체

이를 통해 열마다 맞춤 메뉴를 설정하거나 특정 열에 대해 메뉴를 숨길 수 있습니다. *null* 또는 *false*를 반환하면 메뉴가 표시되지 않습니다:

~~~jsx {}
    items: ({ column, columnIndex, columns, store }) => {
        if(column.id === "inprogress")
            return null

        if (column.id === "backlog")
            return [
                { id: "set-edit", icon: "wxi-edit", text: "이름 변경" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "카드 삭제"
                }
            ]
    }
~~~
:::

- `fixedHeaders` - (선택 사항) 세로 스크롤 시 열 헤더를 고정하여 항상 보이도록 합니다 (기본값 *true*). 참고: Kanban에서 스크롤이 활성화된 상태여야 하며(높이 제한 필요) 사용 가능합니다.
- `css` - (선택 사항) 조건부 열 스타일링을 위한 CSS 클래스 문자열을 반환하는 함수
- `headerTemplate` - (선택 사항) 확장된 상태의 열 헤더용 HTML 템플릿
- `collapsedTemplate` - (선택 사항) 축소된 상태의 열 헤더용 HTML 템플릿
- `confirmDeletion` - (선택 사항) 열 삭제 시 확인 대화상자를 표시할지 여부

### 기본 구성

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, store }) => [
    { id: "add-card", icon: "wxi-plus", text: "새 카드 추가" },
    { id: "set-edit", icon: "wxi-edit", text: "이름 변경" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "왼쪽으로 이동",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "오른쪽으로 이동",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", text: "삭제" }
];
const columnShape = {
    menu: {
        show: true,
        items: getDefaultColumnMenuItems
    },
    fixedHeaders: true,
    confirmDeletion: true
};
~~~

### 예제

~~~jsx {1-58,64}
const columnShape = {
    menu: {
        show: true,
        items: [
            {
                id: "color",
                text: "색상",
                items: [
                    {
                        id:"yellow",
                        text: "노란색",
                        onClick: ({ column }) => changeColumnColor(column, "yellow")
                    },
                    {
                        id:"red",
                        text: "빨간색",
                        onClick: ({ column }) => changeColumnColor(column, "red")
                    },
                    {
                        id:"green",
                        text: "초록색",
                        onClick: ({ column }) => changeColumnColor(column, "green")
                    }
                ]
            }
        ]
    },
    fixedHeaders: false,
    css: (column, cards) => column.id == "inprogress" && cards.length < 5 ? "green" : "red",
    headerTemplate: template(column => {
        return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-label" data-action="rename">
                                ${escapeHTML(column.column.label)}
                                (${column.columnState.cardsCount})
                            </div>`
                        : ""
                }
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-menu" data-menu-id=${column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""
                }`;
    }),
    collapsedTemplate: template(column => {
        return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(column.column.label)} (${
                        column.columnState?.cardsCount
                    })</div>
                </div>`;
    }),
    confirmDeletion: true
};

new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    columnShape,
    // 기타 매개변수
});
~~~

**변경 기록:**
- ***css*** 옵션은 v1.4에 추가되었습니다.
- ***menu.items[0].label***이 ***menu.items[0].text***로 v1.4에서 이름이 변경되었습니다.
- ***fixedHeaders*** 옵션은 v1.5에 추가되었습니다.
- ***headerTemplate*** 및 ***collapsedTemplate*** 옵션은 v1.6에 추가되었습니다.

**관련 문서:** [Configuration](/guides/configuration)

**관련 샘플:**
- [Kanban. 사용자가 정의한 메뉴를 통한 열 색상 변경](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. 고정 헤더, 지연 렌더링 및 열 스크롤](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. 열 헤더를 위한 템플릿](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
