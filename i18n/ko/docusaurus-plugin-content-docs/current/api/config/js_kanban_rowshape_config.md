---
sidebar_label: rowShape
title: rowShape 구성
description: DHTMLX JavaScript Kanban 라이브러리의 rowShape 구성은 행의 모양을 조정할 수 있게 해줍니다. 개발자 가이드와 API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 평가판도 다운로드하세요.
---

# rowShape

### 설명

@short: 선택 사항. 행의 모양을 사용자 정의하는 설정을 담은 객체

### 사용법

~~~jsx {}
rowShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void
            }, {...} // 다른 항목 데이터
        ] | ({ row, rowIndex, rows, store }) => array | boolean
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### 매개변수

행의 모양을 제어하기 위해 **rowShape** 객체는 다음 옵션을 지원합니다:

- `menu` - (선택 사항) 행 컨텍스트 메뉴 설정입니다. 포함 내용:
    - `show` - (선택 사항) 행 컨텍스트 메뉴를 켜거나 끕니다
    - `items` - (선택 사항) 행의 메뉴 항목을 정의하는 객체 배열입니다. 각 항목은 다음을 포함할 수 있습니다:
        - `id` - (선택 사항) 메뉴 항목 ID. 다음 값들은 내장 동작에 사용됩니다:
            - ***"set-edit"*** - 행 이름 편집 허용
            - ***"move-row:up"*** - 행을 위로 이동
            - ***"move-row:down"*** - 행을 아래로 이동
            - ***"delete-row"*** - 행 삭제

        - `icon` - (선택 사항) 메뉴 항목의 아이콘 클래스 이름(예: *mdi-delete*)
        - `text` - (선택 사항) 메뉴 항목의 라벨
        - `disabled` - (선택 사항) 메뉴 항목 활성화 여부 (boolean 값)
        - `onClick` - (선택 사항) 커스텀 콜백 함수, 인자로 받는 값:
            - ***id*** - 현재 메뉴 항목 ID
            - ***item*** - 현재 메뉴 항목 데이터
            - ***row*** - 대상 행 데이터

:::info
`items` 매개변수는 다음 인자를 가진 커스텀 함수일 수도 있습니다:

- ***row*** - 현재 행 데이터
- ***rowIndex*** - 현재 행의 인덱스
- ***rows*** - 모든 행들의 배열
- ***store*** - *dataStore* 객체

이 함수로 특정 행에 맞춰 메뉴를 맞춤 설정하거나 전체 메뉴를 비활성화( *null* 또는 *false* 반환)할 수 있습니다:

~~~jsx {}
    items: ({ row, rowIndex, rows, store }) => {
        if(rowIndex == 0)
            return null
        return [
            { id: "set-edit", icon: "wxi-edit", text: "Rename" },
            {
                id: "custom-delete-row",
                icon: "wxi-delete",
                text: "Remove row"
            },
            {
                id: "custom-move-row:up",
                icon: "wxi-arrow-up",
                text: "Move up"
            }
        ]
    }
~~~
:::

- `css` - 행에 조건부로 적용할 CSS 클래스를 반환하는 함수
- `confirmDeletion` - (선택 사항) 행 삭제 시 확인 대화상자 활성화 여부

### 기본 구성

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, store }) => [
    { id: "set-edit", icon: "wxi-edit", text: "Rename" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "Move up",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "Move down",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "Delete" }
];
const rowShape = {
    menu: {
        show: true,
        items: getDefaultRowMenuItems
    },
    confirmDeletion: true
};
~~~

### 예제

~~~jsx {10-43,48}
const changeRowColor = (row, cssClass) => board.updateRow({
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
    menu: {
        show: true,
        items: ({ row, rowIndex, rows, store }) => {
            if (rowIndex == 0)
                return false
            return [
                {
                    id: "color",
                    text: "Color",
                    items: [
                        {
                            id:"gray",
                            text: "Gray",
                            onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                        },
                        {
                            id:"yellow",
                            text: "Yellow",
                            onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                        },
                        {
                            id:"red",
                            text: "Red",
                            onClick: ({ id, item, row }) => changeRowColor(row, "red")
                        }
                    ]
                }
            ]
        }
    },
    css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red",
    confirmDeletion: false
};

new kanban.Kanban("#root", {
    cards,
    rows,
    rows,
    rowShape,
    // 기타 매개변수
});
~~~

**변경 로그:**
- ***css*** 매개변수는 v1.4에서 도입되었습니다
- ***menu.items[0].label*** 매개변수는 v1.4에서 ***menu.items[0].text***로 이름이 변경되었습니다

**관련 문서:** [구성](/guides/configuration)

**관련 샘플:** [Kanban. 사용자 정의 메뉴를 통한 행 색상 변경](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)
