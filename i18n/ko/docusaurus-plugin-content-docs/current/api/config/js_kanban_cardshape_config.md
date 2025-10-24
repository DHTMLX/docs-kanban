---
sidebar_label: cardShape
title: cardShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 cardShape 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# cardShape

### 설명

@short: 선택 사항입니다. 카드의 외관을 관리하기 위한 설정 객체입니다.

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
                onClick?: ({ id, item, card }) => void,
                data?: array // 메뉴 하위 항목 배열
            }, 
            {...}
        ] | ({ card, readonly }) => array | null
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // 기타 사용자 데이터
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
            {...} // 기타 우선순위 데이터
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
        {...} // 기타 필드 데이터
    ]
};
~~~

### 매개변수

:::info
경우에 따라 매개변수를 **간단한(short)** 값 또는 **확장된(extended)** 값으로 설정할 수 있습니다. 아래 코드를 참고하세요:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // 간단한 값
    label: true
    // 또는
    // 확장된 값
    label: { show: true }
~~~
:::

카드 외관을 구성하려면 **cardShape** 객체 내에서 다음 매개변수(필드)를 지정할 수 있습니다:

- `label` - (선택 사항) **라벨** 필드 표시/숨김
- `description` - (선택 사항) **설명** 필드 표시/숨김
- `progress` - (선택 사항) **진행률** 필드 표시/숨김
- `attached` - (선택 사항) **첨부파일** 필드 표시/숨김
- `cover` - (선택 사항) **카드 이미지** 표시/숨김
- `comments` - (선택 사항) 카드에 대한 **댓글** 표시/숨김
- `confirmDeletion` - (선택 사항) 카드 삭제 시 사용자에게 삭제 확인 대화상자를 표시/숨김
- `start_date` - (선택 사항) **시작 날짜** 필드의 매개변수 객체
    - `show` - (선택 사항) 카드 시작 날짜 표시/숨김
    - `format` - (선택 사항) 카드 시작 날짜 형식 정의. 사용 가능한 매개변수는 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)에서 확인할 수 있습니다.
- `end_date` - (선택 사항) **종료 날짜** 필드의 매개변수 객체
    - `show` - (선택 사항) 카드 종료 날짜 표시/숨김
    - `format` - (선택 사항) 카드 종료 날짜 형식 정의. 사용 가능한 매개변수는 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)에서 확인할 수 있습니다.
- `color` - (선택 사항) 카드 상단 색상 라인의 매개변수 객체
    - `show` - (선택 사항) 상단 색상 라인 표시/숨김
    - `values` - (선택 사항) 유효한 HEX 코드 배열
- `menu` - (선택 사항) 카드 컨텍스트 메뉴의 매개변수 객체. 다음 매개변수를 지정할 수 있습니다:
    - `show` - (선택 사항) 카드 컨텍스트 메뉴 활성화/비활성화
    - `items` - (선택 사항) 카드 컨텍스트 메뉴 항목의 매개변수를 포함하는 객체 배열. 각 항목에 대해 다음 매개변수를 지정할 수 있습니다:
        - `id` - (선택 사항) 메뉴 항목 ID. 내장 동작을 구현하려면 다음 값을 지정해야 합니다:
            - ***"set-edit"*** - 카드 이름 편집 동작 정의
            - ***"delete-card"*** - 카드 삭제 동작 정의
        - `icon` - (선택 사항) 메뉴 항목 아이콘 클래스 이름. 아이콘 폰트 관련 아이콘 지정 가능 (*mdi-delete* 등)
        - `text` - (선택 사항) 메뉴 항목 이름
        - `disabled` - (선택 사항) 메뉴 항목 상태 (*활성* 또는 *비활성*, boolean 값에 따라 다름)
        - `onClick` - (선택 사항) 다음 인수를 받는 사용자 정의 콜백 함수:
            - ***id*** - 현재 메뉴 항목 ID
            - ***item*** - 현재 메뉴 항목 데이터 객체
            - ***card*** - 대상 카드 데이터 객체
        - `data` - (선택 사항) 메뉴 하위 항목을 나타내는 객체 배열

    :::info
    `menu.items` 매개변수에 다음 인수를 받는 사용자 정의 함수를 설정할 수도 있습니다:
    - ***card*** - 현재 카드 데이터 객체
    - ***readonly*** - 읽기 전용 [상태 속성](api/internal/js_kanban_getstate_method.md) 객체

    이 함수는 특정 카드에 대해 메뉴를 맞춤 설정하거나 특정 카드에 대해 메뉴를 숨길 수 있습니다(함수에서 *null* 또는 *false* 반환):

    ~~~jsx {}
    items: ({ card, readonly }) => {
        if (card.id === 1){
            return false;
        }  

        const menu = [];

        if (!readonly.delete){
            menu.push({ 
                id: "delete-card", icon: "wxi-delete", label: "Delete"
            });
        }
            
        if (!readonly.edit){
            menu.push({ 
                id: "set-edit", icon: "wxi-edit", label: "Edit"
            });
        }
        return menu.length ? menu : null;
    }
    ~~~
    :::

- `users` - (선택 사항) **사용자** 필드 매개변수 객체
    - `show` - (선택 사항) 할당된 사용자 표시/숨김
    - `values` - (필수) 사용자 데이터 객체 배열. 각 사용자에 대해 다음 매개변수를 지정할 수 있습니다:
        - `id` - (필수) 사용자 **ID**
        - `label` - (선택 사항) 사용자 이름
        - `avatar` - (선택 사항) 사용자 아바타 경로
    - `maxCount` - (선택 사항) 카드에 표시할 최대 사용자 수 (또는 ***false***)

    `maxCount` 속성을 카드에 표시할 사용자 수로 설정할 수 있습니다.
    `maxCount`를 `false`로 설정하면 카드에 할당된 모든 사용자가 표시됩니다.

    :::info
    ***users*** 필드는 기본적으로 비활성화되어 있습니다. 활성화하려면 `show` 매개변수를 `true`로 설정하고 `values` 매개변수를 통해 해당 사용자 데이터를 제공해야 합니다. 편집기에서 새 사용자를 할당하려면 [`editorShape`](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) 속성을 통해 해당 컨트롤을 구성해야 합니다. 한 명 또는 여러 명의 사용자를 할당하려면 ***select*** 유형 또는 ***multiselect*** 유형을 사용하세요.

    ~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // 카드에 최대 4명만 표시
        }
    }
    ~~~
    :::

- `priority` - (선택 사항) **우선순위** 필드 매개변수 객체
    - `show` - (선택 사항) 카드 우선순위 표시/숨김
    - `values` - (선택 사항) 우선순위 데이터 객체 배열. 각 우선순위에 대해 다음 매개변수를 지정할 수 있습니다:
        - `id` - (필수) 우선순위 **ID**
        - `label` - (선택 사항) 우선순위 이름
        - `color` - (필수) 유효한 HEX 코드
- `votes` - (선택 사항) **투표** 기능 지정
    - `show` - (선택 사항) 카드 및 편집기에서 투표 아이콘 표시/숨김
    - `clickable` - (선택 사항) 카드 위의 투표 아이콘 클릭 가능 여부. `true`면 사용자가 카드 위의 아이콘으로 투표 가능, 그렇지 않으면 편집기 내 아이콘으로만 투표 가능
- `css` - 카드에 조건부로 적용할 css 클래스를 반환하는 함수
- `headerFields` - (선택 사항) **사용자 정의 필드** 데이터 객체 배열. 다음 매개변수를 지정할 수 있습니다:
    - `key` - (필수) 사용자 정의 필드 키. [editorShape](api/config/js_kanban_editorshape_config.md) 속성으로 편집기를 구성할 때 사용
    - `label` - (선택 사항) 사용자 정의 필드 라벨
    - `css` - (선택 사항) 사용자 정의 필드 css 클래스

:::info
**cardShape** 속성으로 카드 설정을 지정하지 않으면 위젯은 **defaultCardShape** 기본 매개변수 집합을 적용합니다!
:::

### 기본 구성

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ readonly }: { readonly: DataStore }) => {
    const { readonly } = readonly.getState();
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
const users = [ // 사용자 데이터
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // 카드 우선순위 데이터
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // 카드 설정
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
        {   // 사용자 정의 필드
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
- ***comments***, ***css*** 및 ***votes*** 매개변수가 v1.4에 추가됨
- ***menu.items[0].label*** 매개변수가 v1.4에서 폐기되고 ***menu.items[0].text*** 매개변수로 대체됨
- ***menu.items[0].items*** 매개변수가 v1.4에서 폐기되고 ***menu.items[0].data*** 매개변수로 대체됨
- ***users.maxCount*** 및 ***votes.clickable*** 매개변수가 v1.6에 추가됨
- ***menu.items[0].label*** 및 ***menu.items[0].items*** 매개변수가 v1.7에서 제거됨
- ***menu.items*** 함수가 업데이트되어 v1.7에서 **store** 매개변수가 **readonly**로 대체됨

**관련 문서:** [구성](guides/configuration.md#cards)

**관련 샘플:**
- [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Highlighting outdated and active tasks](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unlimited user assignments per task](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)