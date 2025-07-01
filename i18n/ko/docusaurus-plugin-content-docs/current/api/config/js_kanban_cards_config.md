---
sidebar_label: 카드
title: 카드 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 카드 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# 카드

### 설명

@short: 선택 사항입니다. 카드 데이터를 포함하는 객체 배열입니다.

### 사용법

~~~jsx {}
cards?: [
    {
        id?: string | number,
        label?: string,
        description?: string,
        progress?: number,
        start_date?: Date,
        end_date?: Date,
        attached?: [
            {
                id: string | number,
                url?: string,
                previewURL?: string,
                coverURL?: string,
                name?: string,
                isCover?: boolean
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - 여러 사용자 지정 시 "multiselect" 편집기 유형을 사용할 경우
            // users?: string | number - 단일 사용자 지정 시 "combo" 또는 "select" 편집기 유형을 사용할 경우
        priority?: string | number,
        css?: string,
        votes?: array,
        comments?: [
            {
                id: string | number,
                userId: string | number,
                cardId: string | number,
                text?: string,
                date?: Date,
            }, {...}
        ],
        [custom_key: string]?: any
    }, {...} // 다른 카드 데이터
];
~~~

### 매개변수

각 카드는 다음 매개변수를 포함할 수 있습니다:

- `id` - (선택) 관련 메서드를 통해 카드를 관리할 때 사용하는 카드 **ID**
- `label` - (선택) **Label** 필드에 표시되는 텍스트 라벨
- `description` - (선택) **Description** 필드에 표시되는 설명 텍스트
- `progress` - (선택) 0부터 100까지 범위의 진행률 값으로, **Progress bar** 필드에 표시
- `start_date` - (선택) Date 객체 형식의 시작 날짜 (문자열 날짜 사용 권장하지 않음), **Start date** 필드에 표시
- `end_date` - (선택) Date 객체 형식의 종료 날짜 (문자열 날짜 사용 권장하지 않음), **End date** 필드에 표시
- `attached` - (선택) 첨부 파일 상세 정보를 담은 배열, **Attachment** 필드에 표시. 각 객체는 다음을 포함할 수 있습니다:
	- `id` - (필수) 첨부 파일 **ID**
    - `url` - (선택) 파일 경로
    - `previewURL` - (선택) 미리보기 이미지 경로
    - `coverURL` - (선택) 커버로 설정된 이미지 경로
    - `name` - (선택) 파일명
    - `isCover` - (선택) **true**일 경우, "coverURL"에서 커버 이미지가 로드됨
- `color` - (선택) 카드 상단 라인의 색상을 나타내는 HEX 색상 코드
- `users` - (선택) 다수 사용자의 경우 사용자 ID 배열, 단일 사용자의 경우 문자열 또는 숫자. 사용자 할당을 위해 [cardShape.users](../js_kanban_cardshape_config) 속성에 사용자 데이터를 배열로 정의합니다. 사용자들은 **Users** 필드에 표시됩니다.

:::info
`users?: array` - 여러 사용자 할당 시 [**multiselect**](../js_kanban_editorshape_config/#--combo-select-multiselect-유형에-대한-매개변수) 편집기 유형을 사용할 때 사용자 **ID** 배열을 사용하세요.

`users?: string | number` - 단일 사용자 할당 시 [**combo** 또는 **select**](../js_kanban_editorshape_config/#--combo-select-multiselect-유형에-대한-매개변수) 편집기 유형을 사용할 때 사용자 **ID**를 지정하세요.
:::

- `priority` - (선택) 카드의 우선순위 **ID**. [cardShape.priority](../js_kanban_cardshape_config) 속성에 우선순위 배열을 정의합니다. **Priority** 필드에 표시됩니다.
- `css` - (선택) 카드에 적용할 사용자 정의 CSS 스타일
- `votes` - (선택) 투표한 사용자 ID 배열
- `comments` - (선택) 다음 속성을 가진 댓글 객체 배열:
    - `id` - (필수) 댓글 **ID**
    - `userId` - (필수) 댓글 작성자 사용자 **ID**
    - `cardId` - (필수) 댓글이 속한 카드 **ID**
    - `text` - (선택) HTML 마크업을 포함할 수 있는 댓글 텍스트
    - `date` - (선택) 댓글이 게시된 시점을 나타내는 Date 객체 (수정 후에도 갱신되지 않음)
- `custom_key` - (선택) 카드에 대한 사용자 정의 키. 카드 위치를 열이나 행에 지정할 때 사용할 수 있습니다. 자세한 내용은 [columnKey](../js_kanban_columnkey_config) 및 [rowKey](../js_kanban_rowkey_config)를 참조하세요.

:::info
새 카드 데이터를 동적으로 로드하려면 [**parse()**](../../methods/js_kanban_parse_method) 메서드를 사용할 수 있습니다.
:::

### 예제

~~~jsx {1-40,44}
const cards = [
    {
        id: 1,
        label: "React와의 통합",
        description: "간단한 설명",
        progress: 25,
        start_date: new Date("02/24/2022"),
        end_date: new Date("02/24/2023"),
        attached: [
            {
                id: 234,
                url: "../assets/img-1.jpg",
                previewURL: "../assets/img-1.jpg",
                coverURL: "../assets/img-1.jpg",
                name: "img-1.jpg",
                isCover: true
            }, {...} // 다른 첨부 파일 데이터
        ],
        color: "#65D3B3",
        users: [1,2],
        votes: [3,6,8],
        comments: [
            {
                id: 1,
                userId: 1,
                cardId: 1,
                text: "안녕하세요, 동료 여러분. 이 작업에 대한 제 의견을 공유하고자 합니다. 계획의 절반 이상은 지체 없이 처리해야 한다고 생각합니다.",
                date: new Date(),
            }, {...} // 다른 댓글
        ],
        priority: 1,
        // "feature" 행에 카드를 배치하기 위한 사용자 정의 필드
        // rowKey 설정은 "type" 값으로 지정되어야 합니다.
        type: "feature",
        // "backlog" 열에 카드를 배치하기 위한 사용자 정의 필드
        // columnKey 설정은 "stage" 값으로 지정되어야 합니다.
        stage: "backlog",
        css: "red",
    }, {...} // 다른 카드 데이터
];

new kanban.Kanban("#root", {
    columns,
    cards,
    // 기타 매개변수
});
~~~

**변경 기록:** ***css***, ***comments***, 그리고 ***votes*** 매개변수는 v1.4에서 도입되었습니다.

**관련 문서:**
- [데이터 작업하기](/guides/working_with_data)
- [updateCard()](/api/methods/js_kanban_updatecard_method.md)

**관련 샘플:** [Kanban. 카드 스타일링](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
