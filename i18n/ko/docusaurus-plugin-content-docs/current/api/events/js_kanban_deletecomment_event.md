---
sidebar_label: delete-comment
title: delete-comment 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 delete-comment 이벤트에 대해 알아보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 탐색하고 DHTMLX Kanban의 무료 30일 평가판을 받으세요.
---

# delete-comment

### 설명

@short: 카드 댓글이 삭제될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"delete-comment": ({
    id?: string | number, 
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-comment** 이벤트 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `id` - (선택 사항) 삭제되는 댓글의 ID
- `cardId` - (필수) 댓글이 포함된 카드의 ID
- `skipProvider` - (선택 사항) 요청이 서버로 전송되는 것을 방지할지 여부를 제어

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
// "delete-comment" 이벤트 청취
board.api.on("delete-comment", (obj) => {
    console.log(obj.id);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에 도입되었습니다.
