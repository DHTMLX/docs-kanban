---
sidebar_label: delete-vote
title: delete-vote 이벤트
description: DHTMLX JavaScript Kanban 라이브러리의 delete-vote 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# delete-vote

### 설명

@short: 사용자가 카드에서 투표를 삭제할 때 발생합니다.

### 사용법

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-vote** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `cardId` - (필수) 투표가 삭제될 카드의 ID
- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지할지 여부를 설정

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
// "delete-vote" 이벤트 구독
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에 추가되었습니다.