---
sidebar_label: add-comment
title: add-comment Event API
description: DHTMLX Kanban의 add-comment 이벤트 API를 읽어보세요. 새 댓글 추가 시 발생하는 이벤트를 처리하는 방법을 알아볼 수 있습니다.
---

# add-comment

### 설명

@short: 새로운 댓글이 추가될 때 발생합니다.

### 사용법

~~~jsx {}
"add-comment": ({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    },
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**add-comment** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (선택 사항) 새 댓글의 ID
- `cardId` - (필수) 댓글이 추가될 카드의 ID
- `comment` - (필수) 새 댓글의 구성 객체로, 다음 매개변수를 지정할 수 있습니다:
    - `text` - (선택 사항) 새 댓글의 텍스트
    - `date` - (선택 사항) 새 댓글의 날짜
    - `html` - (선택 사항) 새 댓글의 HTML 마크업. 텍스트 대신 HTML 마크업을 표시하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#-comments-type-parameters) 구성의 `html` 속성을 활성화하세요.
- `skipProvider` - (선택 사항) 서버로 요청이 전송되는 것을 방지할지 여부를 설정합니다.

:::info
내부 이벤트를 처리하려면 [**Event Bus 메서드**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-comment" 이벤트 구독
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에 추가되었습니다.