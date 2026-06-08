---
sidebar_label: deleteComment()
title: deleteComment Method API
description: DHTMLX Kanban의 deleteComment 메서드 API를 확인하세요. ID로 카드 댓글을 삭제하는 방법을 알아봅니다.
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