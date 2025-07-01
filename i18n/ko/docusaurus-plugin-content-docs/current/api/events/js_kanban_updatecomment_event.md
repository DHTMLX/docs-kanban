---
sidebar_label: update-comment
title: update-comment 이벤트
description: DHTMLX JavaScript Kanban 라이브러리의 update-comment 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 탐색하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# update-comment

### 설명

@short: 댓글이 업데이트될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"update-comment": ({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    },
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**update-comment** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `id` -  (선택 사항) 업데이트되는 댓글의 ID
- `cardId` - (필수) 댓글이 위치한 카드의 ID
- `comment` - (필수) 업데이트된 댓글 정보가 담긴 객체. 다음을 포함할 수 있습니다:
    - `id` -  (선택 사항) 업데이트된 댓글의 ID
    - `cardId` - (선택 사항) 업데이트된 댓글이 추가될 카드 ID
    - `text` - (선택 사항) 업데이트된 댓글 텍스트
    - `date` - (선택 사항) 업데이트된 댓글 날짜
    - `html` - (선택 사항) 업데이트된 댓글의 HTML 마크업. 텍스트 대신 HTML을 표시하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-유형에-대한-매개변수) 설정에서 `html` 속성을 활성화해야 합니다.
- `skipProvider` - (선택 사항) 업데이트 요청을 서버로 전송할지 여부를 제어

:::info
내부 이벤트를 관리하려면 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "update-comment" 이벤트 리스닝
board.api.on("update-comment", (obj) => {
    console.log(obj.comment);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에서 도입되었습니다.
