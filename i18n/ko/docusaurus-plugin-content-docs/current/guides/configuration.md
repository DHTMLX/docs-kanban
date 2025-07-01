---
sidebar_label: 구성
title: 구성
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 구성 방법을 알아보세요. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 사용해 보며, 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 구성

*Kanban* 위젯은 API를 통해 외형과 기능을 모두 사용자 정의할 수 있습니다. 조정할 수 있는 다양한 옵션이 있으며, 예를 들어:

- [`cardShape`](/api/config/js_kanban_cardshape_config.md) 속성으로 카드의 외형을 조정할 수 있습니다.
- [`editorShape`](/api/config/js_kanban_editorshape_config.md) 속성으로 편집기 필드를 설정할 수 있습니다.
- [`editor`](/api/config/js_kanban_editor_config.md) 속성으로 편집기의 동작을 제어할 수 있습니다.
- [`renderType`](/api/config/js_kanban_rendertype_config.md) 및 [`scrollType`](/api/config/js_kanban_scrolltype_config.md)으로 렌더링 및 스크롤 방식을 관리할 수 있습니다.
- [`history`](/api/config/js_kanban_history_config.md) 속성으로 변경 사항을 추적할 수 있습니다.
- [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md) 속성으로 카드의 외형을 개별적으로 꾸밀 수 있습니다.
    - *(자세한 내용은 [**Customization**](/guides/customization.md) 섹션을 참고하세요)*
- [`locale`](/api/config/js_kanban_locale_config.md) 속성으로 언어를 변경할 수 있습니다.
    - *(더 많은 정보는 [**Localization**](/guides/localization.md)에서 확인하세요)*
- [`cards`](/api/config/js_kanban_cards_config.md), [`columns`](/api/config/js_kanban_columns_config.md), [`rows`](/api/config/js_kanban_rows_config.md), [`links`](/api/config/js_kanban_links_config.md) 속성으로 카드, 컬럼, 행, 링크 데이터를 불러올 수 있습니다.
    - *(자세한 내용은 [**Working with data**](/guides/working_with_data.md)에서 확인하세요)*

## 카드

Kanban에서 카드는 컬럼과 행으로 구성됩니다. [`cardShape`](/api/config/js_kanban_cardshape_config.md) 속성을 이용해 카드 외형과 표시 정보를 제어할 수 있습니다. 표시하거나 숨길 수 있는 여러 내장 필드가 있습니다:

- `label: boolean` 옵션으로 카드 라벨 표시
- `description: boolean` 옵션으로 카드 설명 표시

:::tip
**label**과 **description** 필드는 Kanban 편집기에서 수정할 수 있습니다. 활성화하면 해당 입력란이 자동으로 보입니다. 이 입력란은 [**text** 및 **textarea**](#text-textarea-타입) 타입으로 설정합니다.
:::

- `progress: boolean` 옵션으로 진행 바 표시

:::tip
**progress** 필드 또한 Kanban 편집기에서 관리할 수 있습니다. 활성화하면 해당 컨트롤이 자동으로 보입니다. [**progress**](#progress-타입) 타입으로 설정합니다.
:::

- `start_date: boolean`으로 시작일 표시
- `end_date: boolean`으로 종료일 표시

:::tip
**start date**와 **end date**는 Kanban 편집기의 컨트롤로 관리됩니다. 활성화하면 해당 컨트롤이 자동으로 나타납니다. [**date**](#date-daterange-타입) 타입을 이용하세요.
:::

- `menu: boolean`으로 카드 컨텍스트 메뉴 표시
- `attached: boolean`으로 첨부 파일 표시

:::tip
카드에 파일을 첨부하려면 Kanban 편집기의 [**files**](#files-타입) 타입을 이용하세요.
:::

- `color: boolean`으로 카드 색상 표시

:::tip
카드의 **상단 색상 라인**은 Kanban 편집기에서 컨트롤로 관리됩니다. **color**를 활성화하면 컬러 피커가 자동으로 표시됩니다. [**color**](#color-타입) 타입을 사용합니다.
:::

- `cover: boolean`으로 카드 커버 이미지(미리보기) 표시
- `comments: boolean`으로 카드 댓글 표시
- `confirmDeletion: boolean`으로 카드 삭제 시 확인 대화상자 표시
- `votes: boolean | { show: boolean, clicable: true }`로 카드 투표 표시
- `users: boolean | { show: boolean, values: object, maxCount: number | false }`로 사용자 할당 표시

:::tip
카드에 사용자 할당은 Kanban 편집기의 컨트롤로 처리됩니다. 한 명만 지정하려면 [**combo** 또는 **select**](#combo-select-multiselect-타입) 타입을, 여러 명을 지정하려면 [**multiselect**](#combo-select-multiselect-타입) 타입을 사용하세요.
:::

- `priority: boolean | { show: boolean, values: object }`로 우선순위 필드 표시

:::tip
카드 **priority**는 Kanban 편집기에서 컨트롤로 설정할 수 있습니다. 활성화하면 자동으로 컨트롤이 표시됩니다. [**combo** 또는 **select**](#combo-select-multiselect-타입) 타입만 사용됩니다.
:::

- *커스텀 필드*는 `headerFields: [ { key: string, label: string, css: string } ]`에 추가할 수 있습니다.

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
[`cardShape`](/api/config/js_kanban_cardshape_config.md)로 별도 카드 설정을 지정하지 않으면, Kanban은 [**defaultCardShape**](/api/config/js_kanban_cardshape_config.md#기본-구성) 설정을 사용합니다!
:::

## 편집기

:::info
[`editor.placement`](/api/config/js_kanban_editor_config.md) 속성으로 편집기를 **사이드바** 또는 **모달 창**으로 띄울 수 있습니다!
:::

Kanban *Editor*는 카드의 세부 정보를 관리하는 곳입니다. [`editorShape`](/api/config/js_kanban_editorshape_config.md) 속성을 사용하여 편집기에 표시할 필드들을 설정할 수 있습니다. 사용 가능한 필드 타입은 다음과 같습니다:

- [**combo**, **select**, **multiselect**](#combo-select-multiselect-타입)
- [**color**](#color-타입)
- [**text**, **textarea**](#text-textarea-타입)
- [**progress**](#progress-타입)
- [**files**](#files-타입)
- [**date**, **dataRange**](#date-daterange-타입)
- [**comments**](#comments-타입)
- [**links**](#links-타입)

### Combo, Select, Multiselect 타입

이 타입의 편집기 필드는 다음과 같이 설정합니다:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // 또는 "select", "multiselect"
            key: "priority", // "cardShape" 속성 설정 시 사용하는 "priority" 키
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
**"multiselect"**와 **"combo"** 타입의 편집기 필드는 **avatar** 속성을 추가하여 미리보기 이미지를 표시할 수 있습니다:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // 또는 "combo"
        key: "users", // "cardShape" 속성 설정 시 사용하는 "users" 키
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

편집기에 컬러 피커를 추가하려면 다음과 같이 설정하세요:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color",
            key: "color", // "cardShape" 속성 설정 시 사용하는 "color" 키
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

텍스트 입력 또는 여러 줄 입력란을 추가하려면 다음과 같이 합니다:

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

진행 바를 편집기에 추가하려면 다음과 같이 설정합니다:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress",
            key: "progress", // "cardShape" 속성 설정 시 사용하는 "progress" 키
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

편집기에서 파일 업로드를 설정하는 방법은 두 가지입니다:

#### 업로드 URL을 문자열로 지정

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files",
            key: "attached", // "cardShape" 속성 설정 시 사용하는 "attached" 키
            label: "Attachment",
            uploadURL: url + "/uploads", // URL을 문자열로 지정
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

#### 업로드 URL을 함수로 지정

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
                        'Authorization': 'Bearer ' + token  // 토큰 또는 다른 헤더
                    }
                };

                return fetch(url + "/uploads", config)
                    .then(res => res.json())
                    .then(
                        data => {
                            rec.id = data.id;
                            return data;
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

날짜 선택기나 날짜 범위를 추가하려면 다음과 같이 합니다:

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

날짜 범위의 경우:

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

편집기에 댓글 필드를 추가하려면 다음과 같이 하세요:

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

편집기에서 링크 추가를 허용하려면 다음과 같이 설정하세요:

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

### 편집기 필드와 카드 필드 연결하기

:::info
편집기 필드를 카드 필드와 연결하려면 [`editorShape`](/api/config/js_kanban_editorshape_config.md) 객체에 **key**를 지정하세요 (`key: "editor_field_key"`). 내장 카드 필드는 [`cardShape`](/api/config/js_kanban_cardshape_config.md)에서 해당 key를 *true*로 설정해야 합니다. 커스텀 필드는 **headerFields** 배열에 추가하세요. 어떤 필드든 key로 초기값을 설정할 수 있습니다.

~~~jsx {5,13,22,25,33-34,38-39,45-47}
// 편집기 설정
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
    label: true, // 내장 필드의 key
    headerFields: [
        {
            key: "note", // 커스텀 필드의 key
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
[`editorShape`](/api/config/js_kanban_editorshape_config.md)를 통해 별도의 편집기 설정을 지정하지 않으면, 위젯은 [**defaultEditorShape**](/api/config/js_kanban_editorshape_config.md#기본-구성)를 사용합니다. 이 경우 [`cardShape`](/api/config/js_kanban_cardshape_config.md)에서 해당 카드 필드를 활성화해야만 관련 입력란과 컨트롤이 표시됩니다.
:::

### 편집기 동작 설정

[`editor`](/api/config/js_kanban_editor_config.md) 속성으로 편집기의 동작을 세부 조정할 수 있습니다.

- *`editor.autoSave`*로 자동 저장을 켜거나 끌 수 있습니다.
- *`editor.debounce`*로 자동 저장의 딜레이를 설정할 수 있습니다(***autoSave: true***일 때만 동작).

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

Kanban **Toolbar**에는 카드 검색, 정렬, 새 컬럼 또는 행 추가 버튼이 포함되어 있습니다. Toolbar를 사용하려면 **kanban.Toolbar()**로 별도의 컨테이너에 초기화하세요.

~~~jsx {13}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    // 데이터
    columns,
    cards,
    rows,
    // 카드 설정
    cardShape,
    // 편집기 설정
    editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

툴바의 컨트롤들은 **items** 속성으로 표시, 숨김, 커스터마이즈가 가능합니다:

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
        "undo", // 카드 작업 히스토리 취소
        "redo", // 카드 작업 히스토리 재실행
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
툴바에서 일부 컨트롤을 숨기고 싶으면 **items** 배열에서 해당 문자열을 제거하세요.
:::

## 예제

**Cards**, **Editor**, **Toolbar**를 Kanban에 설정하는 예시입니다:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
