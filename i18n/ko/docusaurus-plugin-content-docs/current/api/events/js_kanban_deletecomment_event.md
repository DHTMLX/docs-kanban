---
sidebar_label: delete-comment
title: delete-comment 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 delete-comment 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# delete-comment

### 설명

@short: 카드 댓글을 삭제할 때 발생합니다.

### 사용법

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-comment** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (선택 사항) 삭제할 댓글의 ID
- `cardId` - (필수) 댓글이 삭제될 카드의 ID
- `skipProvider` - (선택 사항) 서버로 요청 전송을 방지할지 여부를 활성화/비활성화

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "delete-comment" 이벤트 구독
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에 추가되었습니다.