---
sidebar_label: 카드
title: 카드 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 카드 설정에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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
                size?: number
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - 여러 사용자를 지정할 때 "multiselect" 편집기 타입을 사용하는 경우
            // users?: string | number - 단일 사용자를 지정할 때 "combo" 또는 "select" 편집기 타입을 사용하는 경우
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

각 카드에 대해 다음 매개변수(데이터)를 지정할 수 있습니다:

- `id` - (선택 사항) 카드 **ID**입니다. 해당 메서드를 통해 카드를 관리할 때 사용됩니다.
- `label` - (선택 사항) 카드 라벨입니다. **Label** 필드에 표시됩니다.
- `description` - (선택 사항) 카드 설명입니다. **Description** 필드에 표시됩니다.
- `progress` - (선택 사항) 진행률 바 값입니다. 0에서 100 사이의 값을 지정할 수 있습니다. **Progress bar** 필드에 표시됩니다.
- `start_date` - (선택 사항) 시작 날짜 객체입니다(문자열 날짜는 지정하지 마십시오). **Start date** 필드에 표시됩니다.
- `end_date` - (선택 사항) 종료 날짜 객체입니다(문자열 날짜는 지정하지 마십시오). **End date** 필드에 표시됩니다.
- `attached` - (선택 사항) 첨부 파일 데이터가 포함된 객체 배열입니다. **Attachment** 필드에 표시됩니다. 각 객체에 대해 다음 매개변수를 지정할 수 있습니다:
	- `id` - (필수) 첨부 파일의 **ID**
    - `url` - (선택 사항) 첨부할 파일 경로
    - `previewURL` - (선택 사항) 미리보기 이미지 경로
    - `coverURL` - (선택 사항) 커버 이미지로 설정할 이미지 경로
    - `name` - (선택 사항) 파일 이름
    - `isCover` - (선택 사항) 커버 이미지 활성화. **true**일 경우 "coverURL" 경로를 통해 커버 이미지가 다운로드됩니다.
    - `size` - (선택 사항) 첨부 파일 크기(바이트 단위)
- `color` - (선택 사항) 유효한 HEX 색상 코드입니다. 카드 상단 라인의 색상입니다.
- `users` - (선택 사항) 여러 할당 사용자의 **ID** 배열 또는 단일 할당 사용자의 **string | number**입니다. 할당된 사용자를 지정하려면 [cardShape.users](api/config/js_kanban_cardshape_config.md) 속성에 사용자 데이터 배열을 정의해야 합니다. 사용자는 **Users** 필드에 표시됩니다.

:::info
`users?: array` - 여러 사용자를 지정할 때 [**multiselect**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) 편집기 타입을 사용하는 경우 사용자 **ID** 배열을 지정합니다.

`users?: string | number` - 단일 사용자를 지정할 때 [**combo** 또는 **select**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) 편집기 타입을 사용하는 경우 단일 **ID**를 지정합니다.
:::

- `priority` - (선택 사항) 카드 우선순위 **ID**입니다. 카드 우선순위를 지정하려면 [cardShape.priority](api/config/js_kanban_cardshape_config.md) 속성에 우선순위 데이터 배열을 정의해야 합니다. **Priority** 필드에 표시됩니다.
- `css` - (선택 사항) 개별 카드에 대한 CSS 스타일을 정의합니다.
- `votes` - (선택 사항) 사용자 ID 배열입니다.
- `comments` - (선택 사항) 댓글 데이터가 포함된 객체 배열입니다. 각 댓글 객체에 대해 다음 매개변수를 지정할 수 있습니다:
    - `id` - (필수) 댓글의 **ID**
    - `userId` - (필수) 댓글을 작성한 사용자의 **ID**
    - `cardId` - (필수) 댓글이 속한 카드의 **ID**
    - `text` - (선택 사항) 댓글 텍스트입니다. HTML 마크업도 포함할 수 있습니다.
    - `date` - (선택 사항) 댓글 작성 날짜 객체입니다(문자열 날짜는 지정하지 마십시오). 수정 후에는 업데이트되지 않습니다.
- `custom_key` - (선택 사항) 카드의 사용자 정의 키입니다. 카드를 열(column)과 행(row)에 배치하기 위해 사용자 정의 키를 지정할 수 있습니다. 자세한 내용은 [columnKey](../js_kanban_columnkey_config) 및 [rowKey](api/config/js_kanban_rowkey_config.md) 속성을 참조하십시오.

:::info
카드 데이터를 동적으로 새로 불러오려면 [**setConfig()**](api/methods/js_kanban_setconfig_method.md) 또는 [**parse()**](api/methods/js_kanban_parse_method.md) 메서드를 사용할 수 있습니다!
:::

### 예제

~~~jsx {1-41,45}
const cards = [
    {
        id: 1,
        label: "Integration with React",
        description: "Some description",
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
                isCover: true,
                size: 11979
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
                text: "Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. ",
                date: new Date(),
            }, {...} // 다른 댓글
        ],
        priority: 1,
        // "feature" 행에 카드를 배치하기 위한 사용자 정의 필드
        // rowKey 설정은 "type" 값으로 해야 합니다
        type: "feature",
        // "backlog" 열에 카드를 배치하기 위한 사용자 정의 필드
        // columnKey 설정은 "stage" 값으로 해야 합니다
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

**변경 로그:** ***css***, ***comments*** 및 ***votes*** 매개변수는 v1.4에서 추가되었습니다.

**관련 문서:**
- [데이터 작업하기](guides/working_with_data.md)
- [updateCard()](api/methods/js_kanban_updatecard_method.md)

**관련 샘플:** [Kanban. 카드 스타일링](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
