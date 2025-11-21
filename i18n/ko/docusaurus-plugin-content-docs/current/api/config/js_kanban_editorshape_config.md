---
sidebar_label: editorShape
title: editorShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 editorShape 구성을 학습할 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# editorShape

### 설명

@short: 선택 사항입니다. Kanban 편집기의 외관과 기능을 관리하는 설정이 포함된 객체 배열입니다.

### 사용법

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // 모든 유형에 공통적인 매개변수
        type: string, 
        key: string, 
        label?: string, 
        
        // "dateRange" 유형에만 해당
        key: {
            start: string,
            end: string
        },
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            done?: boolean,
            error?: boolean,
            format?: string,
            months?: number,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // "date" 유형에만 해당
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            error?: boolean,
            format?: string,
            placeholder?: string,
            title?: string,
            width?: string
        }, 

        // "color" 유형에만 해당 
        values?: array, 
        config?: {
            clear?: boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string
        },

        // "combo", "select", "multiselect" 유형에만 해당
        values?: [ 
            {
                id: string | number,
                label: string,
                avatar?: string // "multiselect" 유형에만 해당
            },
            {...} // 기타 옵션
        ],
        config?: {
            clear?: boolean, // "combo" 및 "color" 유형에만 해당
            label?: string, // "select" 유형에만 해당
            checkboxes?: boolean, // "multiselect" 유형에만 해당
            // 공통 매개변수
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            textField?: string,
            title?: string
        },

        // "text" 유형에만 해당
        config?: {
            css?: string,
            disabled?: boolean,
            error?: boolean,
            focus?: boolean,
            icon?: string,
            inputStyle?: string,
            placeholder?: string,
            readonly?: boolean,
            select?: boolean,
            title?: string,
            type?: string
        },

        // "textarea" 유형에만 해당 
        config? {
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string,
            readonly?: boolean
        },

        // "progress" 유형에만 해당 
        config?: {
            disabled?: boolean,
            label?: string,
            max?: number,
            min?: number,
            step?: number,
            title?: string,
            width?: number
        },
        
        // "files" 유형에만 해당 
        uploadURL?: string | function,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean,
        },

        // "comments" 유형에만 해당 
        config?: {
            format?: string,
            placement?: "page" | "editor",
            html?: boolean,
            confirmDeletion?: boolean
        },

        // "links" 유형에만 해당 
        config?: {
            confirmDeletion?: boolean
        },
    }, { /* 기타 컨트롤 설정 */ }
];
~~~

### 매개변수

편집기 외관과 기능을 구성하려면 다음 매개변수(필드)를 지정할 수 있습니다:

#### - 모든 유형에 공통적인 매개변수

- `type` - (필수) 편집기 필드 유형

:::important
Kanban 편집기에서는 다음 필드 유형을 사용할 수 있습니다: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments**, **links**
:::

- `key` - (필수) 편집기 필드 키. 이 값은 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성에 지정된 값을 사용해야 합니다. 아래 예시를 참고하세요:

~~~js {8,17}
    // 카드 외관 설정
    const cardShape = { 
        ...kanban.defaultCardShape,
        headerFields: [
            { // 사용자 정의 필드
                label: "Custom field",
                css: "custom_style",
                key: "custom_key"
            }
        ]
    };
    // 편집기 외관 설정
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (선택 사항) 편집기 필드 레이블

#### - "dateRange" 유형 매개변수

- `key` - (필수) 편집기 필드 키 객체. 다음 매개변수를 지정할 수 있습니다:
    - `start` - (필수) 시작 날짜 키
    - `end` - (필수) 종료 날짜 키

:::important
이 키 값들은 [`cardShape`](api/config/js_kanban_cardshape_config.md) 속성에서 사용됩니다!
:::

- `config` - (선택 사항) **"dateRange"** 필드의 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `align` - (선택 사항) 달력 팝업의 정렬 위치 설정
    - `editable` - (선택 사항) 날짜 선택기가 편집 가능한지 여부 및 선택적 사용자 지정 형식 설정
    - `buttons` - (선택 사항) 달력 팝업 하단의 Today 및 Clear 버튼 표시 여부
    - `css` - (선택 사항) Date Range 컨트롤 내 아이콘 위치 변경
    - `disabled` - (선택 사항) Date Range 컨트롤 비활성화 여부
    - `done` - (선택 사항) Date Range 컨트롤 내 Done 버튼 표시 여부
    - `error` - (선택 사항) 오류 스타일 적용 여부
    - `format` - (선택 사항) 날짜 형식 설정. 사용 가능한 매개변수는 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)에서 확인
    - `months` - (선택 사항) Date Range 컨트롤에 표시할 달력 수
    - `placeholder` - (선택 사항) 플레이스홀더 설정
    - `title` - (선택 사항) 추가 정보용 타이틀 설정
    - `width` - (선택 사항) 달력 팝업 너비 설정

#### - "date" 유형 매개변수

- `config` - (선택 사항) **"date"** 필드의 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `align` - (선택 사항) 달력 팝업 정렬 위치
    - `editable` - (선택 사항) 날짜 선택기 편집 가능 여부 및 사용자 지정 형식 설정
    - `buttons` - (선택 사항) Today 및 Clear 버튼 표시 여부
    - `css` - (선택 사항) 아이콘 위치 변경
    - `disabled` - (선택 사항) 컨트롤 비활성화 여부
    - `error` - (선택 사항) 오류 스타일 적용 여부
    - `format` - (선택 사항) 날짜 형식 설정. 자세한 내용은 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/) 참조
    - `placeholder` - (선택 사항) 플레이스홀더 설정
    - `title` - (선택 사항) 추가 정보용 타이틀 설정
    - `width` - (선택 사항) 달력 팝업 너비 설정

#### - "color" 유형 매개변수

- `values` - (선택 사항) 유효한 HEX 코드 배열
- `config` - (선택 사항) **"color"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `placeholder` - (선택 사항) 플레이스홀더 설정
    - `clear` - (선택 사항) Color 컨트롤의 "clear" 아이콘 표시 여부
    - `disabled` - (선택 사항) 컨트롤 비활성화 여부
    - `error` - (선택 사항) 오류 스타일 적용 여부
    - `title` - (선택 사항) 추가 정보용 타이틀 설정

#### - "combo", "select", "multiselect" 유형 매개변수

- `values` - (선택 사항) 드롭다운 옵션 데이터 객체 배열. 다음 매개변수를 지정할 수 있습니다:
    - `id` - (필수) 옵션 ID
    - `label` - (필수) 옵션 레이블
    - `avatar` - (선택 사항) 옵션 미리보기 이미지 경로 ("multiselect" 유형에만 해당)

:::important
단일 사용자 할당 컨트롤은 ***"select"*** 또는 ***"combo"*** 유형을 사용해야 합니다! 여러 사용자 할당은 ***"multiselect"*** 유형을 사용하세요.
:::

- `config` - (선택 사항) **"combo"**, **"select"**, **"multiselect"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `clear` - (선택 사항) 콤보 입력에 Clear 버튼 추가 (**"combo" 및 "color" 유형에만 해당**)
    - `label` - (선택 사항) 지정된 키로 옵션을 입력 필드에 바인딩 (**"select" 유형에만 해당**)
    - `checkboxes` - (선택 사항) 옵션 옆에 체크박스 표시 여부 (**"multiselect" 유형에만 해당**)
    - `textField` - (선택 사항) 지정된 키로 콤보 옵션을 입력 필드에 바인딩 (**"combo" 및 "multiselect" 유형에만 해당**)

    - `disabled` - (선택 사항) 컨트롤 비활성화 여부
    - `error` - (선택 사항) 오류 스타일 적용 여부
    - `placeholder` - (선택 사항) 플레이스홀더 설정
    - `title` - (선택 사항) 추가 정보용 타이틀 설정

#### - "text" 유형 매개변수

- `config` - (선택 사항) **"text"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `css` - (선택 사항) Text 컨트롤 내 아이콘 위치 설정
    - `disabled` - (선택 사항) 컨트롤 비활성화 여부
    - `error` - (선택 사항) 오류 스타일 적용 여부
    - `focus` - (선택 사항) Text 컨트롤에 포커스 설정
    - `icon` - (선택 사항) Text 컨트롤에 아이콘 추가
    - `inputStyle` - (선택 사항) Text 컨트롤에 사용자 지정 스타일 적용
    - `placeholder` - (선택 사항) 플레이스홀더 설정
    - `readonly` - (선택 사항) 읽기 전용 여부 설정
    - `select` - (선택 사항) Text 컨트롤 내용 선택 여부
    - `title` - (선택 사항) 추가 정보용 타이틀 설정
    - `type` - (선택 사항) Text 컨트롤 타입 설정

#### - "textarea" 유형 매개변수

- `config` - (선택 사항) **"textarea"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `disabled` - (선택 사항) 컨트롤 비활성화 여부
    - `error` - (선택 사항) 오류 스타일 적용 여부
    - `placeholder` - (선택 사항) 플레이스홀더 설정
    - `title` - (선택 사항) 추가 정보용 타이틀 설정
    - `readonly` - (선택 사항) 읽기 전용 여부 설정

#### - "progress" 유형 매개변수

- `config` - (선택 사항) **"progress"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `disabled` - (선택 사항) 컨트롤 비활성화 여부
    - `label` - (선택 사항) Progress 컨트롤 위 레이블 설정
    - `max` - (선택 사항) 최대값 설정
    - `min` - (선택 사항) 최소값 설정
    - `step` - (선택 사항) 값 간 증분 설정
    - `title` - (선택 사항) 추가 정보용 타이틀 설정
    - `width` - (선택 사항) Progress 컨트롤 너비 설정

#### - "files" 유형 매개변수

- `uploadURL` - (선택 사항) 편집기 업로더 URL. 자세한 내용은 아래 참조

<details>

`uploadURL` 속성은 **문자열** 또는 **함수**로 지정할 수 있습니다. 다음 예시는 함수로 업로드 URL을 설정하는 방법입니다:

~~~jsx {}
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

    return fetch(url + "/uploads", config) // URL 지정
        .then(res => res.json())
        .then(
            data => {
                return { id: rec.id, ...data };
            },
            () => ({ id: rec.id, status: "error" })
        )
        .catch();
}
~~~

여기서 `rec`는 함수의 유일한 매개변수이며 확장된 `PointerEvent` 객체입니다 (기본 타입에 4가지 속성 추가):

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // 각각 "아직 전송 안 됨", "성공적으로 전송됨", "오류 발생" 의미
    name: string; // 파일 이름
    file: string | Blob; // 파일
}
~~~

</details>

- `config` - (선택 사항) **"files"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `accept` - (선택 사항) 업로드할 파일 유형 (예: ***"image/*", "video/*", "audio/*"*** 등)
    - `disabled` - (선택 사항) 파일 업로드 활성화/비활성화
    - `multiple` - (선택 사항) 다중 파일 업로드 활성화/비활성화
    - `folder` - (선택 사항) 폴더 업로드 활성화/비활성화

#### - "comments" 유형 매개변수

- `config` - (선택 사항) **"comments"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `format` - (선택 사항) 댓글 날짜 형식. 가능한 형식은 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)에서 확인
    - `placement` - (선택 사항) 댓글 표시 위치. 다음 값 중 하나를 설정할 수 있습니다:
        - `"editor"` - 편집기 내에 댓글 표시
        - `"page"` - 별도 패널에 댓글 표시
    - `html` - (선택 사항) 댓글에 HTML 마크업 사용 활성화/비활성화
    - `confirmDeletion` - (선택 사항) 댓글 삭제 확인 대화상자 표시 여부

#### - "links" 유형 매개변수

- `config` - (선택 사항) **"links"** 필드 구성 객체. 다음 매개변수를 지정할 수 있습니다:
    - `confirmDeletion` - (선택 사항) 링크 삭제 확인 대화상자 표시 여부

:::info
`editorShape` 속성을 통해 편집기 설정을 지정하지 않으면, 위젯은 **defaultEditorShape** 기본 설정 매개변수 집합을 적용합니다!
:::

### 기본 구성

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "Label"
    },
    {
        key: "description",
        type: "textarea",
        label: "Description"
    },
    {
        type: "combo",
        label: "Priority",
        key: "priority",
        config: {
            clear: true
        }
    },
    {
        type: "color",
        label: "Color",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "Progress"
    },
    {
        type: "date",
        key: "start_date",
        label: "Start date"
    },
    {
        type: "date",
        key: "end_date",
        label: "End date"
    },
    {
        type: "multiselect",
        key: "users",
        label: "Users"
    }
];
~~~

### 예시

~~~jsx {6-33,38}
const users = [ // 사용자 데이터
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const editorShape = [ // 편집기 설정
    ...kanban.defaultEditorShape, // 기본 설정 포함
    { // 사용자 정의 필드 추가
        type: "multiselect",
        key: "users",
        label: "Users",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "Comments",
        config: {
            format: "%M %d",
            placement: "page",
            html: true,
            confirmDeletion: true
        }
    },
    {
        type: "links",
        key:"links",
        label: "Links",
        config: {
            confirmDeletion: true
        }
    }
];

new kanban.Kanban("#root", {
    cards,
    columns,
    editorShape,
    // 기타 매개변수
});
~~~

**변경 이력:**

- v1.3에서 ***dateRange*** 유형 추가
- v1.4에서 ***comments*** 및 ***links*** 편집기 유형과 ***format*** 매개변수 추가
- ***clearButton*** 매개변수가 ***clear*** 매개변수로 대체됨

**관련 문서:** [구성](guides/configuration.md/#editor)
