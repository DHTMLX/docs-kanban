---
sidebar_label: updateComment()
title: updateComment 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 updateComment 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
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
    - `html` - (선택 사항) 업데이트된 댓글의 HTML 마크업. 텍스트 대신 HTML 마크업을 표시하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#--parameters-for-a-comments-type) 구성의 `html` 속성을 활성화하세요.

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