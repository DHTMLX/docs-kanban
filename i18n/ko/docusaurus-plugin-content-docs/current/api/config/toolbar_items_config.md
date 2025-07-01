---
sidebar_label: items
title: items 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 (Toolbar) items 구성에 대해 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험판을 다운로드하세요.
---

# items

### 설명

@short: 선택 사항입니다. Kanban Toolbar에 배치된 컨트롤이 담긴 배열입니다.

### 사용법

~~~jsx {}
items?: [
    "search" | {
        // 검색 매개변수
        type: "search",
        options?: [
            {
                id: string,
                label: string,
                searchRule?: (card, value, by) => {
                    return boolean
                }
            }, {...}
        ],
        resultTemplate?: template(searchResult => {
            return "검색 결과의 HTML 템플릿";
        }) 
    },
    "sort" | {
        // 정렬 매개변수
        type: "sort",
        options?: [
            {    
                text: string,
                by?: string, // by?: ((card: object) => any),
                dir?: "asc" | "desc"
            }, {...}
        ]  
    },
    "spacer",
    "undo",
    "redo",
    "addColumn",
    "addRow",
    custom_control // 문자열 또는 함수
];
~~~

### 매개변수

**items** 배열에는 다음 매개변수를 포함할 수 있습니다:

:::info
#### *기본 검색 바*를 추가하려면 문자열 `"search"`를 사용하세요.
#### *맞춤 검색 바*를 설정하려면 다음 매개변수를 가진 객체를 제공하세요:

- `type` - (필수) 컨트롤 유형 지정 (*"search"*)
- `options` - (선택) 검색 매개변수를 정의하는 배열. 각 객체(*검색 옵션*)는 다음을 포함할 수 있습니다:
    - `id` - (필수) 검색에 사용되는 카드 필드 키
    - `label` - (필수) 검색 바 드롭다운에 표시되는 옵션 이름
    - `searchRule` (선택) - 검색 기준을 정의하는 맞춤 함수. 다음 인자를 받습니다:
        - ***card*** - 카드 데이터 객체
        - ***value*** - 검색 입력값
        - ***by*** - 검색에 사용되는 카드 필드 키
- `searchResult` - (선택) 검색 결과 표시 방식을 맞춤화하는 템플릿

~~~jsx
items: [
    "search", // 기본 검색 바
    // 다른 컨트롤
]

// 또는

items: [
    { // 맞춤 검색 바
        type: "search",
        options: [
            {
                id: "label",
                label: "라벨별"
            },
            {
                id: "start_date",
                label: "날짜별",
                searchRule: (card, value, by) => {
                    const date = card[by];
                    return date?.toString().includes(value);
                }
            }
        ],
        resultTemplate: kanban.template(searchResult => {
            return `<div class="list-item">
                <div class="list-item-text">${searchResult.result.label}</div>
                ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
            </div>`
        })
    },
    // 다른 컨트롤
]
~~~
:::

:::info
#### *기본 정렬 컨트롤*을 추가하려면 문자열 `"sort"`를 사용하세요.
#### *맞춤 정렬 컨트롤*을 설정하려면 다음 매개변수를 가진 객체를 제공하세요:

- `type` - (필수) 컨트롤 유형 지정 (*"sort"*)
- `options` - (선택) 정렬 매개변수를 정의하는 배열. 각 객체(*정렬 옵션*)는 다음을 포함할 수 있습니다:
    - `text` - (필수) 정렬 드롭다운에 표시되는 옵션 이름
    - `by` - (선택) 정렬에 사용되는 카드 필드 키 또는 함수
    - `dir` - (선택) 정렬 방향, *"asc"* 또는 *"desc"*

~~~jsx
items: [
    "sort", // 기본 정렬 컨트롤
    // 다른 컨트롤
]
// 또는
items: [
    { // 맞춤 정렬 컨트롤
        type: "sort",
        options: [
            {
                text: "라벨별 정렬",
                by: "label",
                dir: "asc"
            },
            {
                text: "설명별 정렬",
                by: "description",
                dir: "desc"
            }
        ]
    }, {...} // 다른 컨트롤
]
~~~
:::

- `"spacer"` - 컨트롤 사이에 빈 공간을 삽입합니다
- `"undo"` - 실행 취소 컨트롤 (한 번 클릭 시 이전 단계로 이동)
- `"redo"` - 다시 실행 컨트롤 (한 번 클릭 시 다음 단계로 이동)
- `"addColumn"` - 새 열 추가 컨트롤
- `"addRow"` - 새 행 추가 컨트롤
- `custom_control` - (선택) 문자열 또는 함수 형태의 맞춤 컨트롤입니다. 자세한 내용은 [Customization](/guides/customization#사용자-정의-툴바) 섹션을 참고하세요.

### 예제

~~~jsx {8-24}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        {
            type: "search",
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer",
        "sort",
        "undo",
        "redo", 
        "addColumn",
        "addRow"
    ]
});
~~~

**변경 내역:**

- *"Undo"* 및 *"Redo"* 컨트롤은 v1.3에 도입되었습니다.
- **sort** 컨트롤의 ***items.options[0].label*** 매개변수가 v1.4에서 ***items.options[0].text***로 이름이 변경되었습니다.
- **"search"** 컨트롤의 ***items.searchResult*** 매개변수가 v1.6에 추가되었습니다.

**관련 문서:** [Configuration](/guides/configuration#툴바) 및 [Customization](/guides/customization#사용자-정의-툴바)

**관련 샘플:**
- [Kanban. Custom toolbar](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
- [Kanban. Customization of suggestions in search results](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban)
