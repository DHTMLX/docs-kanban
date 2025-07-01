---
sidebar_label: editorShape
title: editorShape 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 editorShape 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 찾고 DHTMLX Kanban의 30일 무료 체험을 받으세요.
---

# editorShape

### 설명

@short: 선택 사항입니다. 칸반 에디터의 모양과 동작을 제어하는 설정을 정의하는 객체 배열입니다.

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
            {...} // 기타 옵션들
        ],
        config?: {
            clearButton?: boolean, // "combo" 유형에만 해당
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
    }, { /* 다른 컨트롤 설정들 */ }
];
~~~

### 매개변수

에디터의 외관과 기능은 다음 매개변수(필드)를 설정하여 사용자 정의할 수 있습니다.

#### - 모든 유형에 공통적인 매개변수

- `type` - (필수) 에디터 필드 유형을 지정합니다.

:::important
칸반 에디터에서 지원하는 필드 유형은 **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments**, **links** 입니다.
:::

- `key` - (필수) 에디터 필드의 키입니다. [`cardShape`](../js_kanban_cardshape_config) 속성에 설정된 값과 일치해야 합니다. 예:

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
    // 에디터 외관 설정
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (선택 사항) 에디터 필드의 라벨입니다.

#### - "dateRange" 유형에 대한 매개변수

- `key` - (필수) 에디터 필드의 키를 포함하는 객체:
    - `start` - (필수) 시작 날짜의 키
    - `end` - (필수) 종료 날짜의 키

:::important
이 키들은 [`cardShape`](../js_kanban_cardshape_config) 속성에서 사용된 키와 일치합니다.
:::

- `config` - (선택 사항) **"dateRange"** 필드용 구성 객체, 다음 옵션 포함:
    - `align` - (선택 사항) 날짜 범위 컨트롤에 대한 캘린더 팝업의 정렬 설정
    - `editable` - (선택 사항) 날짜 선택기가 편집 가능한지 여부 제어; 사용자 정의 형식 지정 가능
    - `buttons` - (선택 사항) 캘린더 팝업 아래에 오늘 및 지우기 버튼 표시 토글
    - `css` - (선택 사항) 날짜 범위 컨트롤 내 아이콘 위치 조정
    - `disabled` - (선택 사항) 날짜 범위 컨트롤 비활성화
    - `done` - (선택 사항) 날짜 범위 컨트롤 내 완료 버튼 표시 토글
    - `error` - (선택 사항) 날짜 범위 컨트롤에 오류 스타일 적용
    - `format` - (선택 사항) 날짜 범위 컨트롤의 날짜 형식 설정. 옵션은 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/) 참고
    - `months` - (선택 사항) 날짜 범위 컨트롤에 표시할 캘린더 수 정의
    - `placeholder` - (선택 사항) 날짜 범위 컨트롤의 플레이스홀더 텍스트 설정
    - `title` - (선택 사항) 날짜 범위 컨트롤의 툴팁 또는 제목 추가
    - `width` - (선택 사항) 캘린더 팝업 너비 조정

#### - "date" 유형에 대한 매개변수

- `config` - (선택 사항) **"date"** 필드용 구성 객체, 다음 옵션 포함:
    - `align` - (선택 사항) 날짜 컨트롤에 대한 캘린더 팝업 정렬 제어
    - `editable` - (선택 사항) 날짜 선택기 편집 가능 여부 토글; 사용자 정의 형식 지정 가능
    - `buttons` - (선택 사항) 캘린더 팝업 내 오늘 및 지우기 버튼 표시 여부
    - `css` - (선택 사항) 날짜 컨트롤 내 아이콘 위치 변경
    - `disabled` - (선택 사항) 날짜 컨트롤 비활성화
    - `error` - (선택 사항) 날짜 컨트롤에 오류 스타일 적용
    - `format` - (선택 사항) 날짜 컨트롤의 날짜 형식 설정. 참고 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (선택 사항) 날짜 컨트롤의 플레이스홀더 텍스트 설정
    - `title` - (선택 사항) 날짜 컨트롤의 툴팁 또는 제목 추가
    - `width` - (선택 사항) 캘린더 팝업 너비 설정

#### - "color" 유형에 대한 매개변수

- `values` - (선택 사항) 유효한 HEX 색상 코드 배열
- `config` - (선택 사항) **"color"** 필드용 구성 객체:
    - `placeholder` - (선택 사항) 색상 컨트롤의 플레이스홀더
    - `clear` - (선택 사항) 클리어 아이콘 표시 토글
    - `disabled` - (선택 사항) 색상 컨트롤 비활성화
    - `error` - (선택 사항) 오류 스타일 적용
    - `title` - (선택 사항) 색상 컨트롤 관련 툴팁 또는 제목 추가

#### - "combo", "select", "multiselect" 유형에 대한 매개변수

- `values` - (선택 사항) 드롭다운 옵션 객체 배열, 각 객체는:
    - `id` - (필수) 옵션 ID
    - `label` - (필수) 옵션 라벨
    - `avatar` - (선택 사항) 이미지 경로 (**"multiselect"**에만 해당)

:::important
단일 사용자 지정에는 ***"select"*** 또는 ***"combo"*** 유형을 사용하고, 다중 사용자 선택에는 ***"multiselect"*** 유형을 사용하세요.
:::

- `config` - (선택 사항) 이 유형들에 대한 구성 객체:
    - `clearButton` - (선택 사항) 콤보 입력에 클리어 버튼 추가 (**"combo"**만 해당)
    - `label` - (선택 사항) 옵션을 입력에 바인딩하는 키 (**"select"**만 해당)
    - `checkboxes` - (선택 사항) 옵션 옆 체크박스 표시 여부 (**"multiselect"**만 해당)
    - `textField` - (선택 사항) 콤보 옵션을 입력에 바인딩하는 키 (**"combo"**, **"multiselect"**만 해당)

    - `disabled` - (선택 사항) 컨트롤 비활성화
    - `error` - (선택 사항) 오류 스타일 적용
    - `placeholder` - (선택 사항) 플레이스홀더 텍스트 설정
    - `title` - (선택 사항) 툴팁 또는 제목 추가

#### - "text" 유형에 대한 매개변수

- `config` - (선택 사항) **"text"** 필드용 구성 객체:
    - `css` - (선택 사항) 텍스트 컨트롤 내 아이콘 위치 설정
    - `disabled` - (선택 사항) 텍스트 컨트롤 비활성화
    - `error` - (선택 사항) 오류 스타일 적용
    - `focus` - (선택 사항) 텍스트 컨트롤에 포커스 설정
    - `icon` - (선택 사항) 텍스트 컨트롤 내 아이콘 추가
    - `inputStyle` - (선택 사항) 사용자 정의 스타일 적용
    - `placeholder` - (선택 사항) 플레이스홀더 텍스트 설정
    - `readonly` - (선택 사항) 읽기 전용 설정
    - `select` - (선택 사항) 텍스트 컨트롤 내용 선택
    - `title` - (선택 사항) 툴팁 또는 제목 추가
    - `type` - (선택 사항) 입력 유형 정의

#### - "textarea" 유형에 대한 매개변수

- `config` - (선택 사항) **"textarea"** 필드용 구성 객체:
    - `disabled` - (선택 사항) 텍스트에어리어 컨트롤 비활성화
    - `error` - (선택 사항) 오류 스타일 적용
    - `placeholder` - (선택 사항) 플레이스홀더 텍스트 설정
    - `title` - (선택 사항) 툴팁 또는 제목 추가
    - `readonly` - (선택 사항) 읽기 전용 설정

#### - "progress" 유형에 대한 매개변수

- `config` - (선택 사항) **"progress"** 필드용 구성 객체:
    - `disabled` - (선택 사항) 프로그레스 컨트롤 비활성화
    - `label` - (선택 사항) 컨트롤 위에 표시할 라벨
    - `max` - (선택 사항) 최대 허용 값
    - `min` - (선택 사항) 최소 허용 값
    - `step` - (선택 사항) 증가 단위
    - `title` - (선택 사항) 툴팁 또는 제목
    - `width` - (선택 사항) 프로그레스 컨트롤 너비

#### - "files" 유형에 대한 매개변수

- `uploadURL` - (선택 사항) 에디터 업로드 URL, 아래 상세 설명

<details>

`uploadURL`은 **문자열** 또는 **함수**로 설정할 수 있습니다. 함수 사용 예시:

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
                rec.id = data.id;
                return data;
            },
            () => ({ id: rec.id, status: "error" })
        )
        .catch();
}
~~~

`rec` 매개변수는 확장된 `PointerEvent` 객체로, 추가 속성 포함:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // "아직 전송 안됨", "전송 성공", "오류" 상태
    name: string; // 파일명
    file: string | Blob; // 파일 자체
}
~~~

</details>

- `config` - (선택 사항) **"files"** 필드용 구성 객체:
    - `accept` - (선택 사항) 허용 파일 유형 (예: ***"image/*", "video/*", "audio/*"***)
    - `disabled` - (선택 사항) 파일 업로드 활성/비활성
    - `multiple` - (선택 사항) 다중 파일 업로드 활성/비활성
    - `folder` - (선택 사항) 폴더 업로드 활성/비활성

#### - "comments" 유형에 대한 매개변수

- `config` - (선택 사항) **"comments"** 필드용 구성 객체:
    - `format` - (선택 사항) 댓글의 날짜 형식. 옵션은 [여기](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/) 참고
    - `placement` - (선택 사항) 댓글 표시 위치:
        - `"editor"` - 에디터 내
        - `"page"` - 별도 패널 내
    - `html` - (선택 사항) 댓글 내 HTML 마크업 활성화/비활성화
    - `confirmDeletion` - (선택 사항) 댓글 삭제 시 확인 대화상자 표시 여부

#### - "links" 유형에 대한 매개변수

- `config` - (선택 사항) **"links"** 필드용 구성 객체:
    - `confirmDeletion` - (선택 사항) 링크 삭제 시 확인 대화상자 표시 여부

:::info
`editorShape` 속성이 설정되지 않은 경우, 위젯은 기본값인 **defaultEditorShape** 매개변수를 사용합니다.
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
            clearButton: true
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

### 예제

~~~jsx {6-33,38}
const users = [ // 사용자 데이터
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const editorShape = [ // 에디터 설정
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

**변경 로그:**

- v1.3에서 ***dateRange*** 유형 추가
- v1.4에서 ***comments*** 및 ***links*** 에디터 유형과 ***format*** 매개변수 추가

**관련 문서:** [Configuration](/guides/configuration#편집기)
