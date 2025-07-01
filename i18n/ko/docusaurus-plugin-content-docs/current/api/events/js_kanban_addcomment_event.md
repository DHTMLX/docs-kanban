---
sidebar_label: add-comment
title: add-comment 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 add-comment 이벤트를 살펴보세요. 개발자 가이드, API 참조, 예제 및 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 평가판을 받아보세요.
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

**add-comment** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (선택 사항) 새 댓글에 할당된 ID
- `cardId` - (필수) 댓글이 추가되는 카드의 ID
- `comment` - (필수) 새 댓글 세부사항을 정의하는 객체로, 다음을 포함할 수 있습니다:
    - `text` - (선택 사항) 댓글의 텍스트 내용
    - `date` - (선택 사항) 댓글이 작성된 날짜
    - `html` - (선택 사항) 댓글의 HTML 내용. 텍스트 대신 HTML 렌더링을 활성화하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-유형에-대한-매개변수) 설정에서 `html` 속성을 활성화하세요.
- `skipProvider` - (선택 사항) 서버 요청을 방지할지 여부를 제어합니다.

:::info
내부 이벤트 처리를 관리하려면 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참고하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-comment" 이벤트를 수신합니다.
board.api.on("add-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**변경 로그:** 이 이벤트는 v1.4 버전에 도입되었습니다.
