---
sidebar_label: add-vote
title: add-vote 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 add-vote 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조 문서를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# add-vote

### 설명

@short: 사용자가 새 투표를 추가할 때마다 발생합니다.

### 사용법

~~~jsx {}
"add-vote": ({
    cardId: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**add-vote** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `cardId` - (필수) 투표가 추가되는 카드의 ID
- `skipProvider` - (선택) 서버 요청을 건너뛸지 여부를 제어

:::info
내부 이벤트와 작업하려면 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "add-vote" 이벤트를 청취
board.api.on("add-vote", (obj) => {
    console.log(obj.cardId);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에서 도입되었습니다.
