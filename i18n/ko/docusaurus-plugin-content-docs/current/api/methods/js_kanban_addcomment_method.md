---
sidebar_label: addComment()
title: addComment 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 addComment 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# addComment()

### 설명

@short: 지정된 카드 ID를 사용하여 새 댓글을 삽입합니다.

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

- `id` - (선택 사항) 새 댓글의 고유 식별자
- `cardId` - (필수) 댓글이 추가될 카드의 식별자
- `comment` - (필수) 새 댓글을 정의하는 객체입니다. 사용 가능한 필드는 다음과 같습니다:
    - `text` - (선택 사항) 일반 텍스트 형식의 댓글 내용
    - `date` - (선택 사항) 댓글의 타임스탬프
    - `html` - (선택 사항) HTML로 포맷된 댓글. 일반 텍스트 대신 HTML 내용을 표시하려면 [`editorShape`](/api/config/js_kanban_editorshape_config/#--comments-유형에-대한-매개변수) 구성에서 `html` 옵션을 활성화해야 합니다.

### 예제

~~~jsx {7-15}
// 칸반 보드 생성
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

**변경 로그:** 이 메서드는 버전 1.4에서 도입되었습니다.
