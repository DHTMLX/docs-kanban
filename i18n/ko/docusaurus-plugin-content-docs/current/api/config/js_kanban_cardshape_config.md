---
sidebar_label: cardShape
title: cardShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 cardShape 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# cardShape

### 설명

@short: 선택 사항입니다. 카드의 외관을 제어하는 설정 객체입니다.

### 사용법

~~~jsx {}
cardShape?: {
    label?: boolean | { show?: boolean },
    description?: boolean | { show?: boolean },
    progress?: boolean | { show?: boolean },
    attached?: boolean | { show?: boolean },
    cover?: boolean | { show?: boolean },
    comments?: boolean | { show?: boolean },
    confirmDeletion?: boolean | { show?: boolean },
    start_date?: boolean | {
        show?: boolean,
        format?: string
    },
    end_date?: boolean | {
        show?: boolean,
        format?: string
    },
    color?: boolean | {
        show?: boolean,
        values?: array
    },
    menu?: boolean | {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, card }) => void
            },
            {...}
        ] | ({ card, store }) => array | boolean
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // 다른 사용자 데이터
        ],
        maxCount?: number | false
    },
    priority?: boolean | {
        show?: boolean,
        values?: [
            {
                id: string | number,
                label?: string,
                color: string
            },
            {...} // 다른 우선순위 데이터
        ]
    },
    votes?: boolean | {
        show?: boolean,
        clickable?: boolean
    },
    css?: (card) => string,
    headerFields?: [
        {
            key: string,
            label?: string,
            css?: string
        },
        {...} // 다른 필드 데이터
    ]
};
~~~

### 매개변수

:::info
때때로 매개변수는 **단축형** 또는 **확장형**으로 설정할 수 있습니다. 예를 들어:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // 단축형
    label: true
    // 또는
    // 확장형
    label: { show: true }
~~~
:::

**cardShape** 객체는 다음 필드를 구성하여 카드의 표시 방식을 제어합니다:

- `label` - (선택 사항) **label** 필드의 표시 여부를 토글합니다.
- `description` - (선택 사항) **description** 필드의 표시 여부를 토글합니다.
- `progress` - (선택 사항) **progress** 필드의 표시 여부를 토글합니다.
- `attached` - (선택 사항) **첨부파일** 필드의 표시 여부를 토글합니다.
- `cover` - (선택 사항) **카드 이미지** 표시 여부를 토글합니다.
- `comments` - (선택 사항) 카드에 **댓글** 표시 여부를 토글합니다.
- `confirmDeletion` - (선택 사항) 카드 삭제 시 **확인 대화상자** 표시 여부를 토글합니다.
- `start_date` - (선택 사항) **시작 날짜** 필드를 구성합니다.
    - `show` - (선택 사항) 시작 날짜 표시 여부를 토글합니다.
    - `format` - (선택 사항) 날짜 형식을 설정합니다. 사용 가능한 옵션은 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)를 참조하세요.
- `end_date` - (선택 사항) **종료 날짜** 필드를 구성합니다.
    - `show` - (선택 사항) 종료 날짜 표시 여부를 토글합니다.
    - `format` - (선택 사항) 날짜 형식을 설정합니다. 사용 가능한 옵션은 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)를 참조하세요.
- `color` - (선택 사항) 카드의 **상단 색상 라인**을 구성합니다.
    - `show` - (선택 사항) 색상 라인 표시 여부를 토글합니다.
    - `values` - (선택 사항) HEX 색상 코드 배열입니다.
- `menu` - (선택 사항) **카드 컨텍스트 메뉴**를 구성합니다.
    - `show` - (선택 사항) 컨텍스트 메뉴를 활성화하거나 비활성화합니다.
    - `items` - (선택 사항) 메뉴 항목 객체 배열로 다음 속성을 포함합니다:
        - `id` - (선택 사항) 메뉴 항목 ID. 내장 동작에 다음 ID를 사용하세요:
            - ***"set-edit"*** - 카드 이름 편집
            - ***"delete-card"*** - 카드 삭제
        - `icon` - (선택 사항) 아이콘 클래스 이름 (예: *mdi-delete*)
        - `text` - (선택 사항) 메뉴 항목 레이블
        - `disabled` - (선택 사항) 메뉴 항목 활성화/비활성화
        - `onClick` - (선택 사항) 콜백 함수이며 다음을 인자로 받습니다:
            - ***id*** - 메뉴 항목 ID
            - ***item*** - 메뉴 항목 데이터
            - ***card*** - 대상 카드 데이터

:::info
`items`에 사용자 정의 함수를 지정할 수도 있습니다. 이 함수는 다음을 인자로 받습니다:

- ***card*** - 현재 카드 데이터
- ***store*** - *dataStore* 객체

이를 통해 특정 카드에서 메뉴를 맞춤화하거나 숨길 수 있습니다. *null* 또는 *false*를 반환하여 처리합니다:

~~~jsx {}
    items: ({ card, store }) => {
        if(card.id === 1)
            return false
        return [
            { id: "set-edit", icon: "wxi-edit", label: "Edit" },
            { id: "delete-card", icon: "wxi-delete", label: "Delete" }
        ]
    }
~~~
:::

- `users` - (선택 사항) **사용자** 필드를 구성합니다.
    - `show` - (선택 사항) 할당된 사용자 표시 여부를 토글합니다.
    - `values` - (필수) 사용자 객체 배열입니다:
        - `id` - (필수) 사용자 ID
        - `label` - (선택 사항) 사용자 이름
        - `avatar` - (선택 사항) 사용자 아바타 경로
    - `maxCount` - (선택 사항) 카드에 표시할 최대 사용자 수, 무제한은 ***false*** 설정

    `maxCount` 설정으로 카드에 표시할 사용자 수를 제한할 수 있습니다. `false`로 설정하면 모든 할당된 사용자가 표시됩니다.

:::info
***users*** 필드는 기본적으로 비활성화되어 있습니다. 활성화하려면 `show`를 `true`로 설정하고 `values`에 사용자 데이터를 제공하세요. 편집기에서 사용자를 할당하려면 [`editorShape`](/api/config/js_kanban_editorshape_config.md#--combo-select-multiselect-유형에-대한-매개변수)에서 적절한 컨트롤을 구성하세요. 단일 사용자는 ***select***, 다중 사용자는 ***multiselect***를 사용합니다.

~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // 카드당 최대 4명 사용자 표시 제한
        }
    }
~~~
:::

- `priority` - (선택 사항) **우선순위** 필드를 구성합니다.
    - `show` - (선택 사항) 우선순위 표시 여부를 토글합니다.
    - `values` - (선택 사항) 우선순위 객체 배열입니다:
        - `id` - (필수) 우선순위 ID
        - `label` - (선택 사항) 우선순위 이름
        - `color` - (필수) HEX 색상 코드
- `votes` - (선택 사항) **투표** 기능을 구성합니다.
    - `show` - (선택 사항) 카드와 편집기에서 투표 아이콘 표시 여부를 토글합니다.
    - `clickable` - (선택 사항) `true`이면 사용자가 카드에서 아이콘을 클릭해 투표 가능하며, 그렇지 않으면 편집기에서만 투표할 수 있습니다.
- `css` - 카드를 조건부로 스타일링하기 위한 CSS 클래스를 반환하는 함수입니다.
- `headerFields` - (선택 사항) **사용자 정의 필드**를 정의하는 객체 배열입니다.
    - `key` - (필수) 사용자 정의 필드 키로, [editorShape](../js_kanban_editorshape_config)에서 편집기 구성 시 사용합니다.
    - `label` - (선택 사항) 사용자 정의 필드 레이블
    - `css` - (선택 사항) 사용자 정의 필드의 CSS 클래스

:::info
**cardShape**를 통해 카드 옵션을 설정하지 않으면 **defaultCardShape**의 기본 매개변수가 적용됩니다.
:::

### 기본 구성

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ store }: { store: DataStore }) => {
    const { readonly } = store.getState();
    const baseItems = [
        { id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" },
        { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }
    ];

    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit-outline", text: "Edit" },
            ...baseItems,
        ];
    }
    return baseItems;
};

const defaultCardShape = {
    label: { show: true },
    description: { show: false },
    progress: { show: false },
    start_date: { show: false },
    end_date: { show: false },
    users: { show: false },
    confirmDeletion: { show: true },
    priority: {
        show: false,
        values: defaultPriorities
    },
    color: {
        show: false,
        values: defaultColors
    },
    cover: { show: false },
    attached: { show: false },
    menu: { show: true }
};
~~~

### 예제

~~~jsx {14-49,54}
const users = [ // 샘플 사용자 데이터
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // 샘플 우선순위 데이터
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // 카드 표시 설정
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    cover: false,
    comments: false,
    confirmDeletion: false,
    color: {
        show: true,
        values: cardColors
    },
    users: {
        show: true,
        values: users,
        maxCount: false
    },
    priority: {
        show: true,
        values: cardPriority
    },
    votes: {
        show: true,
        clickable: true
    },
    css: (card) => card.type == "feature" ? "green" : "red",
    headerFields: [
        {   // 사용자 정의 필드 예제
            key: "sprint",
            css: "custom_style",
            label: "Sprint"
        }
    ]
};

new kanban.Kanban("#root", {
    cards,
    columns,
    cardShape,
    // 기타 매개변수
});
~~~

**변경 로그:**
- ***comments***, ***css***, 및 ***votes*** 옵션이 v1.4에 추가되었습니다.
- ***menu.items[0].label*** 옵션이 v1.4에서 ***menu.items[0].text***로 이름이 변경되었습니다.
- ***users.maxCount*** 및 ***votes.clickable*** 옵션이 v1.6에 추가되었습니다.

**관련 문서:** [구성](/guides/configuration#카드)

**관련 샘플:**
- [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Highlighting outdated and active tasks](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unlimited user assignments per task](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)
