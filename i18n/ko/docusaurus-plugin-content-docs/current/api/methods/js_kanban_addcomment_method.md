---
sidebar_label: addComment()
title: addComment 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 addComment 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# addComment()

### 설명

@short: 지정된 카드 ID에 새 댓글을 추가합니다.

### 사용법

~~~jsx {}
addComment({
    id?: string | number,
    cardId: string | number,
    comment: {
        text?: string,
        date?: Date,
        html?: string
    }
}): void;
~~~

### 매개변수

- `id` - (선택 사항) 새 댓글의 ID
- `cardId` - (필수) 댓글을 추가할 카드의 ID
- `comment` - (필수) 새 댓글의 구성 객체로, 다음 매개변수를 지정할 수 있습니다:
    - `text` - (선택 사항) 새 댓글의 텍스트
    - `date` - (선택 사항) 새 댓글의 날짜
    - `html` - (선택 사항) 새 댓글의 HTML 마크업. 텍스트 대신 HTML 마크업을 표시하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-유형-매개변수) 구성의 `html` 속성을 활성화하세요.

### 예제

~~~jsx {7-15}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 새 댓글 추가
board.addComment({
    id: 1,
    cardId: 1,
    comment: {
        text: "", 
        date: new Date("01/07/2021"),
        html: "<b>중요한 댓글</b>"
    }
});
~~~

**변경 로그:** 이 메서드는 v1.4에 추가되었습니다.