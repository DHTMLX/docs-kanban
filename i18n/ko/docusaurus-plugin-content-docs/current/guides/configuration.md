---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 구성 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 체험해보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 구성

*Kanban*의 외관과 기능은 관련 API를 통해 구성할 수 있습니다. 사용 가능한 파라미터를 통해 다음과 같은 작업이 가능합니다:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성으로 카드의 외관을 구성
- [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성으로 에디터 필드 구성
- [`editor`](api/config/js_kanban_editor_config.md) 속성으로 에디터 동작 구성
- [`renderType`](api/config/js_kanban_rendertype_config.md) 및 [`scrollType`](api/config/js_kanban_scrolltype_config.md) 속성으로 렌더링 및 스크롤 설정
- [`history`](api/config/js_kanban_history_config.md) 속성으로 Kanban 기록 설정
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 속성으로 카드 외관 커스터마이즈  
    - 자세한 내용은 [**커스터마이징**](guides/customization.md) 섹션을 참고하세요!
- [`locale`](api/config/js_kanban_locale_config.md) 속성으로 원하는 로케일 적용  
    - 자세한 내용은 [**로컬라이제이션**](guides/localization.md) 섹션을 참고하세요!
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) 속성으로 카드, 컬럼, 행, 링크 데이터 로드  
    - 자세한 내용은 [**데이터 작업**](guides/working_with_data.md) 섹션을 참고하세요!

## 카드

Kanban 보드는 *카드*가 *컬럼*과 *행*에 분배되어 구성됩니다. 카드의 외관은 [`cardShape`](api/config/js_kanban_cardshape_config.md) 구성 속성으로 설정할 수 있습니다. 카드 템플릿에 포함(또는 제외)할 수 있는 사전 정의 필드는 다음과 같습니다:

- `label: boolean` 설정으로 카드 레이블
- `description: boolean` 설정으로 카드 설명

    :::tip
    Kanban 에디터의 입력란을 통해 **label**과 **description** 필드를 관리할 수 있습니다. 해당 필드를 활성화하면 자동으로 에디터에 입력란이 표시됩니다. 이러한 입력란은 [**text** 및 **textarea**](#text-textarea-타입) 타입으로 설정할 수 있습니다.
    :::

- `progress: boolean` 설정으로 카드 진행률

    :::tip
    **progress** 필드는 Kanban 에디터의 컨트롤로 관리할 수 있습니다. 이 필드를 활성화하면 관련 컨트롤이 자동으로 에디터에 표시됩니다. 해당 컨트롤은 [**progress**](#progress-타입) 타입으로 설정할 수 있습니다.
    :::

- `start_date: boolean` 설정으로 시작일
- `end_date: boolean` 설정으로 종료일

    :::tip
    **start date**와 **end date** 필드는 Kanban 에디터의 컨트롤로 관리할 수 있습니다. 필드를 활성화하면 관련 컨트롤이 자동으로 표시됩니다. 해당 컨트롤은 [**date**](#date-daterange-타입) 타입으로 설정할 수 있습니다.
    :::

- `menu: boolean` 설정으로 카드 컨텍스트 메뉴
- `attached: boolean` 설정으로 카드 첨부파일

    :::tip
    Kanban 에디터의 해당 필드를 통해 **파일 첨부**가 가능합니다. 이 필드는 [**files**](#files-타입) 타입으로 설정할 수 있습니다.
    :::

- `color: boolean` 설정으로 카드 색상

    :::tip
    카드의 **상단 색상 라인**은 Kanban 에디터의 컨트롤로 관리할 수 있습니다. **color**를 활성화하면 관련 컨트롤(*colorpicker*)이 자동으로 에디터에 표시됩니다. 이 컨트롤은 [**color**](#color-타입) 타입으로 설정할 수 있습니다.
    :::

- `cover: boolean` 설정으로 카드 커버(미리보기 이미지)
- `comments: boolean` 설정으로 카드 댓글
- `confirmDeletion: boolean` 설정으로 카드 삭제 확인 다이얼로그
- `votes: boolean | { show: boolean, clicable: true }` 설정으로 카드 투표
- `users: boolean | { show: boolean, values: object, maxCount: number | false }` 설정으로 카드 담당자(사용자) 지정

    :::tip
    Kanban 에디터의 컨트롤을 통해 한 명 또는 여러 명의 사용자를 카드에 할당할 수 있습니다. 단일 사용자 지정은 [**combo** 또는 **select**](#combo-select-multiselect-타입) 타입, 복수 사용자 지정은 [**multiselect**](#combo-select-multiselect-타입) 타입을 사용하세요.
    :::

- `priority: boolean | { show: boolean, values: object }` 설정으로 카드 우선순위

    :::tip
    **priority** 필드는 Kanban 에디터의 컨트롤로 관리할 수 있습니다. **priority**를 활성화하면 관련 컨트롤이 자동으로 표시됩니다. 이 컨트롤은 [**combo** 또는 **select**](#combo-select-multiselect-타입) 타입만 사용할 수 있습니다.
    :::

- *커스텀 필드*는 `headerFields: [ { key: string, label: string, css: string } ]` 설정으로 추가

~~~jsx {12-35,42}
const users = [ // 사용자 데이터
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // 카드 우선순위 데이터
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // 카드 설정
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    priority: {
        show: true,
        values: cardPriority
    },
    users: {
        show: true,
        values: users
    },
    headerFields: [
        {
            key: "sprint",
            label: "Custom field",
            css: "custom_css_class"
        }
    ]
};

new kanban.Kanban("#root", {
    // 카드 데이터
    columns,
    cards,
    // 카드 설정
    cardShape
});
~~~

:::note
[`cardShape`](api/config/js_kanban_cardshape_config.md) 속성으로 카드 설정을 지정하지 않으면, 위젯은 [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) 파라미터 세트를 적용합니다!
:::

## 에디터

:::info
[`editor.placement`](api/config/js_kanban_editor_config.md) 속성으로 에디터를 **사이드바** 또는 **모달 창**으로 표시할 수 있습니다!
:::

Kanban의 *에디터*는 카드 데이터 관리를 위한 필드로 구성되어 있습니다. 에디터 필드(컨트롤)는 [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성으로 설정할 수 있습니다. 사용할 수 있는 에디터 필드 타입은 다음과 같습니다:

- [**combo**, **select**, **multiselect**](#combo-select-multiselect-타입)
- [**color**](#color-타입)
- [**text**, **textarea**](#text-textarea-타입)
- [**progress**](#progress-타입)
- [**files**](#files-타입)
- [**date**, **dataRange**](#date-daterange-타입)
- [**comments**](#comments-타입)
- [**links**](#links-타입)

### Combo, Select, Multiselect 타입

**combo**, **select**, **multiselect** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // 또는 "select", "multiselect"
            key: "priority", // "cardShape" 속성에서 사용하는 "priority" 키
            label: "Priority",
            values: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ]
        },
        // 다른 필드 설정
    ]
});
~~~

:::info
**"multiselect"** 및 **"combo"** 타입의 에디터 필드는 **avatar** 속성으로 미리보기 이미지 경로를 지정할 수 있습니다:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // 또는 "combo"
        key: "users", // "cardShape" 속성에서 사용하는 "users" 키
        label: "Users",
        values: [
            { 
                id: 1, label: "Alan", 
                avatar: "preview_image_path_1.png" 
            },
            { 
                id: 2, label: "John", 
                avatar: "preview_image_path_2.png" 
            }
        ]
    },
    // 다른 필드 설정
]
~~~

[**Kanban. Limiting assignments to one user only**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Color 타입

**color** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // "cardShape" 속성에서 사용하는 "color" 키
            label: "Card color",
            values: ["#65D3B3", "#FFC975", "#58C3FE"],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        // 다른 필드 설정
    ]
});
~~~

### Text, Textarea 타입

**text**, **textarea** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-14}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "text", // 또는 "textarea"
            key: "label",
            label: "Label",
            config: {
                placeholder: "Type your tips here", 
                readonly: false, 
                focus: true,
                disabled: false,
                inputStyle: "height: 50px;"
            }
        },
        // 다른 필드 설정
    ]
});
~~~

### Progress 타입

**progress** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // "cardShape" 속성에서 사용하는 "progress" 키
            label: "Progress",
            config: {
                min: 10,
                max: 90,
                step: 5
            }
        },
        // 다른 필드 설정
    ]
});
~~~

### Files 타입

**files** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

#### 문자열로 업로드 URL 설정

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // "cardShape" 속성에서 사용하는 "attached" 키
            label: "Attachment",
            uploadURL: url + "/uploads", // 문자열로 URL 지정
            config: {
                accept: "image/*", // "video/*", "audio/*"
                disabled: false,
                multiple: true,
                folder: false
            }
        },
        // 다른 필드 설정
    ]
});
~~~

#### 함수로 업로드 URL 설정

~~~jsx {9-31}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        ...defaultEditorShape,
        {
            key: "attached",
            type: "files",
            label: "Files",
            uploadURL: rec => {
                const formData = new FormData();
                formData.append("upload", rec.file);

                const config = {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + token  // 토큰 또는 기타 헤더
                    }
                };

                return fetch(url + "/uploads", config) // URL
                    .then(res => res.json())
                    .then(
                        data => {
                            return { id: rec.id, ...data };
                        },
                        () => ({ id: rec.id, status: "error" })
                    )
                    .catch();
            }
        }
    ]
});
~~~

### Date, DateRange 타입

**date** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-8}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date", 
            key: "start_date",
            label: "Start date",
            format: "%d/%m/%y"
        },
        // 다른 필드 설정
    ]
});
~~~

**dateRange** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-11}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "dateRange", 
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range",
            format: "%d/%m/%y"
        },
        // 다른 필드 설정
    ]
});
~~~

### Comments 타입

**comments** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-13}
new kanban.Kanban("#root", {
    editorShape: [
       {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                dateFormat: "%M %d",
                placement: "page", // 또는 "editor"
                html: true,
                confirmDeletion: true
            }
        },
        // 다른 필드 설정
    ]
});
~~~

### Links 타입

**links** 타입의 에디터 필드는 다음과 같이 설정할 수 있습니다:

~~~jsx {3-10}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "links",
            key: "links",
            label: "Links",
            config: {
                confirmDeletion: true
            }
        },
        // 다른 필드 설정
    ]
});
~~~

### 에디터 필드와 카드 필드 바인딩

:::info
에디터 필드를 해당 카드 필드에 연결하려면, [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성 객체에 **key**를 지정해야 합니다 (`key: "editor_field_key"`). 이 키의 값은 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성(내장 카드 필드의 경우)에서 *true*로 설정하거나, (커스텀 카드 필드의 경우) **headerFields** 배열에 명시해야 합니다. 해당 키를 통해 각 필드의 초기 데이터도 제공할 수 있습니다.

~~~jsx {5,13,22,25,33-34,38-39,45-47}
// 에디터 설정
const editorShape = [ 
    { 
        type: "text",
        key: "label",
        label: "Label",
        config: {
            placeholder: "Enter new label here"
        }
    },
    { 
        type: "textarea",
        key: "note",
        label: "Note",
        config: {
            placeholder: "Enter usefull note here"
        }
    }
];
// 카드 설정
const cardShape = {
    label: true, // 내장 필드 키
    headerFields: [
        {
            key: "note", // 커스텀 필드 키
            label: "Note"
        }
    ]
};
// 카드 데이터
const cards = [
    {
        label: "Volvo",
        note: "It is the swedish car",
        column: "backlog"
    },
    {
        label: "Audi",
        note: "It is the german car",
        column: "backlog"
    }
];
// Kanban 생성
new kanban.Kanban("#root", {
    editorShape,
    cardShape,
    cards,
    columns
    // 기타 구성 파라미터
});
~~~
:::

:::note
[`editorShape`](api/config/js_kanban_editorshape_config.md) 속성으로 에디터 설정을 지정하지 않으면, 위젯은 [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) 파라미터 세트를 적용합니다. 이 경우, [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성으로 카드 필드를 활성화한 후에만 에디터에 기본 컨트롤과 입력란이 표시됩니다.
:::

### 에디터 설정

[`editor`](api/config/js_kanban_editor_config.md) 속성을 사용하여 에디터를 다음과 같이 설정할 수 있습니다:

- *`editor.autoSave`* 속성으로 에디터의 자동 저장 모드 활성화/비활성화
- *`editor.debounce`* 속성으로 자동 저장 지연 시간 지정(***autoSave: true*** 파라미터에서만 동작)

~~~jsx {6-9}
// Kanban 생성
new kanban.Kanban("#root", {
    columns,
    cards,
    editorShape,
    editor: {
        autoSave: true,
        debounce: 2000
    }
    // 기타 파라미터
});
~~~

## 툴바

Kanban의 **툴바**는 *카드 검색*을 위한 검색창, *카드 정렬* 및 *새 컬럼/행 추가* 컨트롤로 구성됩니다. 툴바를 표시하려면 **kanban.Toolbar()** 생성자를 사용해 별도의 컨테이너에서 초기화해야 합니다.

~~~jsx {13}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    // 데이터
    columns,
    cards,
    rows,
    // 카드 설정
    cardShape,
    // 에디터 설정
    editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

**items** 속성으로 툴바의 컨트롤을 관리(숨김/노출/커스터마이즈)할 수 있습니다:

~~~jsx {6-51}
// Kanban 생성
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        { // 커스텀 검색바
            type: "search",
            options: [
                {
                    id: "label",
                    label: "By label"
                },
                {
                    id: "start_date",
                    label: "By date",
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
        "spacer", // 빈 공간
        "undo", // 기록에서 카드 작업 실행 취소
        "redo", // 기록에서 카드 작업 다시 실행
        { // 커스텀 정렬 컨트롤
            type: "sort",
            options: [
                {
                    text: "Sort by label",
                    by: "label",
                    dir: "asc"
                },
                {
                    text: "Sort by description",
                    by: "description",
                    dir: "desc"
                }
            ]
        },
        "addColumn", // 새 컬럼 추가
        "addRow", // 새 행 추가
        // 커스텀 요소
    ]
});
~~~

:::tip
툴바의 일부 컨트롤을 숨기려면 **items** 배열에서 해당 문자열을 제거하면 됩니다.
:::

## 예제

이 스니펫에서는 Kanban의 **카드**, **에디터** 및 **툴바**를 구성하는 방법을 확인할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
