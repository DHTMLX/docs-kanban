---
sidebar_label: delete-vote
title: delete-vote 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 delete-vote 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# delete-vote

### 설명

@short: 사용자가 카드에서 투표를 제거할 때 발생하는 이벤트

### 사용법

~~~jsx {}
"delete-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-vote** 이벤트의 콜백 함수는 다음 속성을 포함하는 객체를 받습니다:

- `cardId` - (필수) 투표가 제거되는 카드의 ID
- `skipProvider` - (선택) 서버로의 요청을 건너뛸지 여부를 제어

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "delete-vote" 이벤트 감지
board.api.on("delete-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에서 도입되었습니다.
