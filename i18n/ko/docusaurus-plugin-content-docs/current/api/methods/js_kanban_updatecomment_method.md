---
sidebar_label: updateComment()
title: updateComment Method API
description: DHTMLX Kanban의 updateComment 메서드 API를 확인하세요. ID로 카드 댓글을 업데이트하는 방법을 알아보세요.
---

# updateComment()

### 설명

@short: 카드 댓글을 ID로 업데이트합니다.

### 사용법

~~~jsx {}
updateComment({
    id?: string | number, 
    cardId: string | number, 
    comment: {
        id?: string | number, 
        cardId?: string | number, 
        text?: string, 
        date?: Date, 
        html?: string 
    }
}): void;
~~~

### 매개변수

- `id` -  (선택 사항) 업데이트할 댓글의 ID
- `cardId` - (필수) 댓글을 업데이트할 카드의 ID
- `comment` - (필수) 업데이트할 댓글의 구성 객체로, 다음 매개변수를 지정할 수 있습니다:
    - `id` -  (선택 사항) 업데이트할 댓글의 ID
    - `cardId` - (선택 사항) 업데이트된 댓글이 추가될 카드의 ID
    - `text` - (선택 사항) 업데이트된 댓글의 텍스트
    - `date` - (선택 사항) 업데이트된 댓글의 날짜
    - `html` - (선택 사항) 업데이트된 댓글의 HTML 마크업. 텍스트 대신 HTML 마크업을 표시하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#-comments-type-parameters) 구성의 `html` 속성을 활성화하세요.

### 예제

~~~jsx {7-17}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 댓글 업데이트
board.updateComment({
    id: 1,
    cardId: 1,
    comment: {
        id: 2,
        cardId: 4,
        text: "", 
        date: new Date("01/08/2021"),
        html: "<b>Updated comment</b>"
    }
});
~~~

**변경 로그:** 이 메서드는 v1.4에 추가되었습니다.