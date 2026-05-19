---
sidebar_label: columnShape
title: columnShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 columnShape 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# columnShape

### 설명

@short: 선택 사항입니다. 컬럼 모양 관리를 위한 설정 객체입니다.

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
                onClick?: ({ id, item, column }) => void,
                data?: array // 메뉴 하위 항목 배열
            }, 
            {...}
        ] | ({ column, columnIndex, columns, readonly }) => array | null
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(props => {
        return "확장된 상태의 컬럼 헤더 HTML 템플릿";
    }),
    collapsedTemplate?: template(props => {
        return "축소된 상태의 컬럼 헤더 HTML 템플릿";
    }),
    confirmDeletion?: boolean
};
~~~

### 매개변수 {#parameters}

컬럼 모양을 구성하려면 **columnShape** 객체에서 다음 매개변수를 지정할 수 있습니다:

- `menu` - (선택 사항) 컬럼 컨텍스트 메뉴의 매개변수 객체입니다. 다음 매개변수를 지정할 수 있습니다:
    - `show` - (선택 사항) 컬럼 컨텍스트 메뉴 활성화/비활성화
    - `items` - (선택 사항) 컬럼 컨텍스트 메뉴 항목 매개변수를 담은 객체 배열입니다. 각 항목에 대해 다음 매개변수를 지정할 수 있습니다:
        - `id` - (선택 사항) 메뉴 항목 ID입니다. 내장 동작을 구현하려면 다음 값을 지정해야 합니다:
            - ***"add-card"*** - 새 카드 추가 동작 정의
            - ***"set-edit"*** - 컬럼 이름 편집 동작 정의
            - ***"move-column:left"*** - 컬럼을 왼쪽으로 이동하는 동작 정의
            - ***"move-column:right"*** - 컬럼을 오른쪽으로 이동하는 동작 정의
            - ***"delete-column"*** - 컬럼 삭제 동작 정의

        - `icon` - (선택 사항) 메뉴 항목 아이콘 클래스 이름입니다. 아이콘 폰트 관련 아이콘을 지정할 수 있습니다 (*mdi-delete* 등)
        - `text` - (선택 사항) 메뉴 항목 이름
        - `disabled` - (선택 사항) 메뉴 항목 상태 (*active* 또는 *disabled*, boolean 값에 따라 결정)
        - `onClick` - (선택 사항) 다음 인자를 받는 사용자 정의 콜백 함수:
            - ***id*** - 현재 메뉴 항목 ID
            - ***item*** - 현재 메뉴 항목 데이터 객체
            - ***column*** - 대상 컬럼 데이터 객체

        - `data` - (선택 사항) 메뉴 하위 항목을 나타내는 객체 배열

    :::info
    `menu.items` 매개변수에 다음 인자를 받는 사용자 정의 함수도 지정할 수 있습니다:
    - ***column*** - 현재 컬럼 데이터 객체
    - ***columnIndex*** - 현재 컬럼 인덱스
    - ***columns*** - 모든 컬럼 데이터를 담은 객체 배열
    - ***readonly*** - 읽기 전용 [상태 속성](api/internal/js_kanban_getstate_method.md) 객체

    이 함수는 특정 컬럼에 대해 메뉴를 맞춤 설정하거나 특정 컬럼에 대해 메뉴를 숨길 수 있습니다 (null 또는 false 반환):

    ~~~jsx {}
    items: ({ column }) => {
        if(column.id === "inprogress"){
            return null;
        } 
        if (column.id === "backlog"){
            return [
                { id: "set-edit", icon: "wxi-edit", text: "이름 변경" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "카드 제거"
                }
            ];
        }       
    }
    ~~~
    :::

- `fixedHeaders` - (선택 사항) 수직 스크롤 시 컬럼 헤더 고정 (기본값 *true*). Kanban 자체에서 스크롤이 활성화되어야 하며 (높이 제한 필요)
- `css` - (선택 사항) 조건에 따라 컬럼에 적용할 CSS 클래스를 반환하는 함수
- `headerTemplate` - (선택 사항) 확장된 상태의 컬럼 헤더 HTML 템플릿입니다. 이 함수는 다음 속성을 가진 `props` 객체를 받습니다:
    - `column` - (object) 컬럼 데이터 (구조는 [`columns`](api/config/js_kanban_columns_config.md) 참조)
    - `columnState` - (object) 컬럼의 현재 상태. 항상 다음을 포함합니다:
        - ***columnId*** - (string | number) 컬럼 ID
        - ***column*** - (object) 컬럼 데이터 (`props.column`과 동일)
        - ***cardsCount*** - (number) 컬럼 내 카드 수
        - ***noFreeSpace*** - (boolean) 컬럼이 더 이상 카드를 받을 수 없을 때 ***true***

        [`columns[i].limit`](api/config/js_kanban_columns_config.md) 매개변수가 활성화된 경우 추가로 포함됩니다:
        - ***totalLimit*** - (number) 설정된 카드 한도
        - ***isOverLimit*** - (boolean) 카드 수가 한도를 초과할 때 ***true***

        컬럼이 스윔레인(row)에 속하는 경우 추가로 포함됩니다:
        - ***rowId*** - (string | number) row ID
        - ***row*** - (object) row 데이터 (구조는 [`rows`](api/config/js_kanban_rows_config.md) 참조)
        - ***height*** - (number) 영역 높이
    - `isMenuVisible` - (boolean) 해당 컬럼 헤더에 메뉴를 표시해야 할 때 ***true***
    - `renaming` - (boolean) 컬럼 이름 편집 입력이 활성화될 때 ***true***
    - `readonly` - (boolean) 컬럼 편집이 비활성화될 때 ***true*** (`!readonly.edit`과 동일, [`readonly`](api/config/js_kanban_readonly_config.md) 속성 참조)
- `collapsedTemplate` - (선택 사항) 축소된 상태의 컬럼 헤더 HTML 템플릿입니다. 이 함수는 다음 속성을 가진 `props` 객체를 받습니다:
    - `column` - (object) 컬럼 데이터 ([`columns`](api/config/js_kanban_columns_config.md) 참조)
    - `columnState` - (object) 컬럼의 현재 상태. 형태는 위의 [`headerTemplate`](#parameters) 매개변수의 `columnState`와 동일합니다
- `confirmDeletion` - (선택 사항) 컬럼 삭제 확인 대화상자 표시 여부

### 기본 구성

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, readonly }) => [
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
                data: [
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
    headerTemplate: template(props => {
        return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${props.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                    !props.column.collapsed
                        ?   `<div class="wx-label" data-action="rename">
                                ${escapeHTML(props.column.label)}
                                (${props.columnState.cardsCount})
                            </div>`
                        : ""
                }
                ${
                    !props.column.collapsed
                        ?   `<div class="wx-menu" data-menu-id=${props.column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""
                }`;
    }),
    collapsedTemplate: template(props => {
        return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(props.column.label)} (${
                        props.columnState?.cardsCount
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
- ***css*** 매개변수가 v1.4에 추가됨
- ***menu.items[0].label*** 매개변수가 v1.4에 ***menu.items[0].text*** 매개변수로 대체됨
- ***menu.items[0].items*** 매개변수가 v1.4에 ***menu.items[0].data*** 매개변수로 대체됨
- ***fixedHeaders*** 매개변수가 v1.5에 추가됨
- ***headerTemplate*** 및 ***collapsedTemplate*** 매개변수가 v1.6에 추가됨
- ***menu.items[0].label*** 및 ***menu.items[0].items*** 매개변수가 v1.7에 제거됨
- ***menu.items*** 함수가 업데이트되어 v1.7에서 **store** 매개변수가 **readonly**로 대체됨

**관련 문서:** [구성](guides/configuration.md)

**관련 샘플:**
- [Kanban. 사용자 정의 메뉴를 통한 컬럼 색상 변경](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. 고정 헤더, 지연 렌더링 및 컬럼 스크롤](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. 컬럼 헤더 템플릿](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
