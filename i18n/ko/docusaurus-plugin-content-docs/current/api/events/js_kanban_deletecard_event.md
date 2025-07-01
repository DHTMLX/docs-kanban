---
sidebar_label: delete-card
title: delete-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 delete-card 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# delete-card

### 설명

@short: 카드가 삭제될 때 발생합니다

### 사용법

~~~jsx {}
"delete-card": ({ 
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-card** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `id` - (필수) 삭제되는 카드의 식별자
- `skipProvider` - (선택) 서버로 요청 전송을 차단할지 여부를 제어

:::info
내부 이벤트 관리를 위해서는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "delete-card" 이벤트를 수신 대기
board.api.on("delete-card", (obj) => {
    console.log(obj.id);
});
~~~
