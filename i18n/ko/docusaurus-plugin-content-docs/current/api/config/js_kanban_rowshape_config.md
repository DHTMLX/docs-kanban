---
sidebar_label: rowShape
title: rowShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 rowShape 구성에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# rowShape

### 설명

@short: 선택 사항입니다. 행의 외관을 관리하기 위한 설정 객체입니다.

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
                onClick?: ({ id, item, row }) => void,
                data?: array // 메뉴 하위 항목 배열
            }, {...} // 다른 항목 데이터
        ] | ({ row, rowIndex, rows, readonly }) => array | null
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### 매개변수

행의 외관을 구성하려면 **rowShape** 객체에 다음 매개변수를 지정할 수 있습니다:

- `menu` - (선택 사항) 행 컨텍스트 메뉴의 매개변수 객체입니다. 다음 매개변수를 지정할 수 있습니다:
    - `show` - (선택 사항) 행 컨텍스트 메뉴 활성화/비활성화
    - `items` - (선택 사항) 행 컨텍스트 메뉴 항목의 매개변수를 포함하는 객체 배열입니다. 각 항목에 대해 다음 매개변수를 지정할 수 있습니다:
        - `id` - (선택 사항) 메뉴 항목의 ID입니다. 내장 동작을 구현하려면 다음 값을 지정해야 합니다:
            - ***"set-edit"*** - 행 이름 편집 동작 정의
            - ***"move-row:up"*** - 행 위로 이동 동작 정의
            - ***"move-row:down"*** - 행 아래로 이동 동작 정의
            - ***"delete-row"*** - 행 삭제 동작 정의

        - `icon` - (선택 사항) 메뉴 항목 아이콘의 클래스 이름입니다. 아이콘 폰트 관련 아이콘(*mdi-delete*)을 지정할 수 있습니다.
        - `text` - (선택 사항) 메뉴 항목 이름
        - `disabled` - (선택 사항) 메뉴 항목 상태 (*활성* 또는 *비활성*, *boolean* 값에 따라 결정)
        - `onClick` - (선택 사항) 다음 인수를 받는 사용자 정의 콜백 함수:
            - ***id*** - 현재 메뉴 항목 ID
            - ***item*** - 현재 메뉴 항목 데이터 객체
            - ***row*** - 대상 행 데이터 객체

        - `data` - (선택 사항) 메뉴 하위 항목을 나타내는 객체 배열

    :::info
    `menu.items` 매개변수에 다음 인수를 받는 사용자 정의 함수도 설정할 수 있습니다:
    - ***row*** - 현재 행 데이터 객체
    - ***rowIndex*** - 현재 행 인덱스
    - ***rows*** - 모든 행 데이터를 포함하는 객체 배열
    - ***readonly*** - 읽기 전용 [상태 속성](api/internal/js_kanban_getstate_method.md) 객체

    이 함수는 특정 행에 맞게 메뉴를 맞춤 설정하거나 특정 행에 대해 메뉴를 숨길 수 있습니다(*null* 또는 *false* 반환):

    ~~~jsx {}
    items: ({ rowIndex }) => {
        if(rowIndex == 0){
            return null;
        } else {
            return [
                { id: "set-edit", icon: "wxi-edit", text: "이름 변경" },
                {
                    id: "custom-delete-row",
                    icon: "wxi-delete",
                    text: "행 제거"
                },
                {
                    id: "custom-move-row:up",
                    icon: "wxi-arrow-up",
                    text: "위로 이동"
                }
            ];
        }
    }
    ~~~
    :::

- `css` - 조건에 따라 행에 적용할 CSS 클래스를 반환하는 함수
- `confirmDeletion` - (선택 사항) 행 삭제를 사용자에게 확인 또는 취소할 수 있는 **확인 대화상자** 표시 여부

### 기본 구성

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, readonly }) => [
    { id: "set-edit", icon: "wxi-edit", text: "이름 변경" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "위로 이동",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "아래로 이동",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "삭제" }
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
        items: ({ row, rowIndex, rows, readonly }) => {
            if (rowIndex == 0){
                return false;
            } else {
                return [
                    {
                        id: "color",
                        text: "색상",
                        data: [
                            { 
                                id:"gray", 
                                text: "회색",
                                onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                            },
                            { 
                                id:"yellow", 
                                text: "노란색",
                                onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                            },
                            { 
                                id:"red", 
                                text: "빨간색",
                                onClick: ({ id, item, row }) => changeRowColor(row, "red")
                            }
                        ]
                    }
                ];
            }     
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

**변경 사항:**
- ***css*** 매개변수가 v1.4에 추가되었습니다.
- ***menu.items[0].label*** 매개변수는 v1.4에서 폐지되고 ***menu.items[0].text*** 매개변수로 대체되었습니다.
- ***menu.items[0].items*** 매개변수는 v1.4에서 폐지되고 ***menu.items[0].data*** 매개변수로 대체되었습니다.
- ***menu.items[0].label***과 ***menu.items[0].items*** 매개변수는 v1.7에서 제거되었습니다.
- ***menu.items*** 함수가 업데이트되어 v1.7에서 **store** 매개변수가 **readonly**로 대체되었습니다.

**관련 문서:** [구성](guides/configuration.md)

**관련 샘플:** [Kanban. 사용자 정의 메뉴를 통한 행 색상 변경](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)