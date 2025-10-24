---
sidebar_label: deleteComment()
title: deleteComment 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 deleteComment 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# deleteComment()

### 설명

@short: ID로 카드 댓글을 삭제합니다

### 사용법

~~~jsx {}
deleteComment({
    id: string | number, 
    cardId: string | number
}): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 댓글의 ID
- `cardId` - (필수) 댓글이 속한 카드의 ID

### 예제

~~~jsx {7-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 댓글 삭제
board.deleteComment({
    id: 1,
    cardId: 1,
});
~~~

**변경 로그:** 이 메서드는 v1.4에서 추가되었습니다