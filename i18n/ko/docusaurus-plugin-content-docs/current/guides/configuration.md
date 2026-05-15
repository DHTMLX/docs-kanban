---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 구성 방법을 확인할 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 체험해보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# 구성

Kanban의 외관과 기능은 다음 속성으로 구성할 수 있습니다:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — 카드 외관 및 내장 필드 설정
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — 에디터 필드 정의
- [`editor`](api/config/js_kanban_editor_config.md) — 에디터 표시 여부, 자동 저장, 배치 제어
- [`renderType`](api/config/js_kanban_rendertype_config.md), [`scrollType`](api/config/js_kanban_scrolltype_config.md) — 카드 렌더링 및 보드 스크롤 조정
- [`history`](api/config/js_kanban_history_config.md) — 카드 작업 기록 관리
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — 카드 외관 커스터마이즈([커스터마이징](guides/customization.md) 섹션 참고)
- [`locale`](api/config/js_kanban_locale_config.md) — 로케일 적용([로컬라이제이션](guides/localization.md) 섹션 참고)
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — 카드, 컬럼, 행, 링크 데이터 로드([데이터 작업](guides/working_with_data.md) 섹션 참고)

## 카드 {#cards}

Kanban 보드는 컬럼과 행에 분배된 카드로 구성됩니다. [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성으로 카드 외관과 내장 필드를 설정할 수 있습니다:

- `label: boolean | { show }` — 카드 레이블, [`text`](#text-and-textarea-types) 타입으로 편집
- `description: boolean | { show }` — 카드 설명, [`textarea`](#text-and-textarea-types) 타입으로 편집
- `progress: boolean | { show }` — 카드 진행률, [`progress`](#progress-type) 타입으로 편집
- `start_date: boolean | { show, format }` — 카드 시작일, [`date`](#date-and-daterange-types) 타입으로 편집
- `end_date: boolean | { show, format }` — 카드 종료일, [`date`](#date-and-daterange-types) 타입으로 편집
- `menu: boolean | { show, items }` — 카드 컨텍스트 메뉴
- `attached: boolean | { show }` — 카드 첨부파일, [`files`](#files-type) 타입으로 편집
- `color: boolean | { show, values }` — 카드 상단 색상 라인, [`color`](#color-type) 타입으로 편집
- `cover: boolean | { show }` — 카드 미리보기 이미지
- `comments: boolean | { show }` — 카드 댓글
- `confirmDeletion: boolean | { show }` — 카드 삭제 확인 다이얼로그
- `votes: boolean | { show, clickable }` — 카드 투표
- `users: boolean | { show, values, maxCount }` — 카드에 할당된 사용자, [`combo`, `select`, 또는 `multiselect`](#combo-select-and-multiselect-types) 타입으로 편집
- `priority: boolean | { show, values }` — 카드 우선순위, [`combo` 또는 `select`](#combo-select-and-multiselect-types) 타입으로 편집
- `css: (card) => string` — 카드에 조건부로 적용할 CSS 클래스를 반환하는 함수
- `headerFields: [{ key, label, css }]` — 커스텀 카드 필드

:::tip
`cardShape`에서 필드를 활성화하면 에디터에 해당 컨트롤이 자동으로 표시됩니다. 각 컨트롤은 [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성으로 설정할 수 있습니다. 사용 가능한 타입은 [에디터](#editor) 섹션을 참고하세요.
:::

다음 코드 스니펫은 커스텀 사용자, 우선순위, 커스텀 헤더 필드를 포함한 카드를 구성합니다:

~~~jsx {12-35,42}
const users = [ // users data
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // card priority data
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // cards settings
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
    // cards data
    columns,
    cards,
    // cards settings
    cardShape
});
~~~

:::note
[`cardShape`](api/config/js_kanban_cardshape_config.md) 속성으로 카드 설정을 지정하지 않으면, 위젯은 [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config)를 적용합니다.
:::

## 에디터 {#editor}

Kanban 에디터는 카드 데이터 관리를 위한 필드로 구성됩니다. [`editorShape`](api/config/js_kanban_editorshape_config.md) 속성으로 에디터 필드를 설정할 수 있습니다. 사용 가능한 필드 타입은 다음과 같습니다:

- [`combo`, `select`, `multiselect`](#combo-select-and-multiselect-types) — 드롭다운 옵션
- [`color`](#color-type) — 색상 선택기
- [`text`, `textarea`](#text-and-textarea-types) — 텍스트 입력
- [`progress`](#progress-type) — 진행률 슬라이더
- [`files`](#files-type) — 파일 업로더
- [`date`, `dateRange`](#date-and-daterange-types) — 단일 날짜 또는 날짜 범위
- [`comments`](#comments-type) — 카드 댓글
- [`links`](#links-type) — 카드 링크

:::info
[`editor.placement`](api/config/js_kanban_editor_config.md) 속성으로 에디터를 사이드바 또는 모달 창으로 표시할 수 있습니다.
:::

### Combo, Select, Multiselect 타입 {#combo-select-and-multiselect-types}

다음 코드 스니펫은 카드 우선순위를 선택하는 드롭다운을 설정합니다:

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
`multiselect` 및 `combo` 필드는 `avatar` 속성으로 미리보기 이미지 경로를 지정할 수 있습니다:

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

### Color 타입 {#color-type}

다음 코드 스니펫은 카드 색상 선택을 위한 에디터 필드를 설정합니다:

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

### Text, Textarea 타입 {#text-and-textarea-types}

다음 코드 스니펫은 카드 레이블 입력을 위한 에디터 필드를 설정합니다:

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

### Progress 타입 {#progress-type}

다음 코드 스니펫은 카드 진행률 설정을 위한 에디터 필드를 설정합니다:

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

### Files 타입 {#files-type}

기본 업로드의 경우 `uploadURL` 파라미터를 문자열로, 커스텀 요청의 경우 함수로 설정하세요.

#### 문자열로 업로드 URL 설정

다음 코드 스니펫은 파일 업로더에 문자열 URL을 사용합니다:

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

커스텀 헤더, 토큰 또는 응답 처리를 추가하려면 `uploadURL`에 함수를 전달하세요. 다음 코드 스니펫은 bearer 토큰을 사용하여 각 파일을 전송합니다:

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

### Date, DateRange 타입 {#date-and-daterange-types}

다음 코드 스니펫은 단일 날짜를 위한 에디터 필드를 설정합니다:

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

다음 코드 스니펫은 시작일/종료일 범위를 위한 에디터 필드를 설정합니다:

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

### Comments 타입 {#comments-type}

다음 코드 스니펫은 에디터의 댓글 필드를 설정합니다:

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

### Links 타입 {#links-type}

다음 코드 스니펫은 에디터의 링크 필드를 설정합니다:

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

각 에디터 필드는 공유 `key`를 통해 카드 필드에 연결됩니다. [`editorShape`](api/config/js_kanban_editorshape_config.md) 항목과 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성에 동일한 `key` 값을 설정하세요. 내장 카드 필드의 경우 키를 `true`로 설정하고, 커스텀 필드의 경우 `headerFields` 배열에 키를 나열하세요. 동일한 키로 카드의 초기 데이터도 제공할 수 있습니다.

다음 코드 스니펫은 `label`과 `note` 에디터 필드를 해당 카드 필드에 바인딩합니다:

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

:::note
[`editorShape`](api/config/js_kanban_editorshape_config.md) 속성으로 에디터 설정을 지정하지 않으면, 위젯은 [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config)를 적용합니다. 기본 컨트롤과 입력란은 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성으로 해당 카드 필드를 활성화한 후에만 에디터에 표시됩니다.
:::

### 에디터 동작 설정 {#configure-editor-behavior}

[`editor`](api/config/js_kanban_editor_config.md) 속성으로 에디터 표시 여부, 자동 저장, 배치를 제어할 수 있습니다:

- [`editor.show`](api/config/js_kanban_editor_config.md) — 에디터 활성화 또는 비활성화
- [`editor.placement`](api/config/js_kanban_editor_config.md) — 에디터를 `"sidebar"` 또는 `"modal"` 창으로 표시
- [`editor.autoSave`](api/config/js_kanban_editor_config.md) — 자동 저장 모드 활성화 또는 비활성화
- [`editor.debounce`](api/config/js_kanban_editor_config.md) — 자동 저장 전 지연 시간(`autoSave: true`에서만 적용)

다음 코드 스니펫은 2초 지연 자동 저장을 활성화합니다:

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

## 렌더링 및 스크롤

Kanban 위젯은 기본적으로 모든 카드를 렌더링하고 전체 보드를 스크롤합니다. 카드가 많은 보드의 경우 지연 렌더링 또는 컬럼별 스크롤로 전환할 수 있습니다:

- [`renderType`](api/config/js_kanban_rendertype_config.md) — `"lazy"`로 설정하면 보드에 보이는 카드만 렌더링
- [`scrollType`](api/config/js_kanban_scrolltype_config.md) — `"column"`으로 설정하면 각 컬럼을 독립적으로 스크롤

다음 코드 스니펫은 지연 렌더링과 컬럼별 스크롤을 활성화합니다:

~~~jsx {5-7}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    scrollType: "column",
    cardHeight: 150
});
~~~

:::important
`renderType: "lazy"`와 `scrollType`을 함께 사용하는 경우, [`cardHeight`](api/config/js_kanban_cardheight_config.md) 속성으로 카드의 고정 높이를 설정하세요. `cardHeight` 없이는 지연 렌더링이 카드를 올바르게 표시하지 않습니다.
:::

## 변경 기록

Kanban은 카드 작업을 추적하고 툴바에 실행 취소 및 다시 실행 컨트롤을 제공합니다. [`history`](api/config/js_kanban_history_config.md) 속성으로 이 동작을 비활성화할 수 있습니다.

다음 코드 스니펫은 기록 추적을 비활성화합니다:

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false
});
~~~

:::tip
개별 작업을 기록에서 제외하려면 메서드나 이벤트에 [`$meta`](api/common/js_kanban_meta_parameter.md) 파라미터를 전달하세요.
:::

## 툴바 {#toolbar}

Kanban 툴바는 검색창, 정렬 컨트롤, 컬럼 및 행 추가 컨트롤을 제공합니다. `kanban.Toolbar()` 생성자를 사용해 별도의 컨테이너에서 툴바를 초기화하세요.

다음 코드 스니펫은 Kanban 인스턴스에 바인딩된 툴바를 생성합니다:

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

[`items`](api/config/toolbar_items_config.md) 속성으로 툴바 컨트롤을 표시, 숨김 또는 커스터마이즈할 수 있습니다. 다음 코드 스니펫은 커스텀 검색바, 실행 취소/다시 실행 컨트롤, 커스텀 정렬, 컬럼 및 행 컨트롤을 설정합니다:

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
컨트롤을 숨기려면 `items` 배열에서 해당 항목을 제거하세요.
:::

## 예제

다음 스니펫에서는 Kanban의 카드, 에디터, 툴바를 구성하는 방법을 확인할 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
