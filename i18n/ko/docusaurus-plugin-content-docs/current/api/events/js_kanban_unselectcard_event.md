---
sidebar_label: unselect-card
title: unselect-card 이벤트
description: DHTMLX 자바스크립트 칸반 라이브러리의 unselect-card 이벤트에 대해 알아보세요. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# unselect-card

### 설명

@short: 카드가 선택 해제될 때 발생합니다.

### 사용법

~~~jsx {}
"unselect-card": ({ id: string | number }) => void;
~~~

### 매개변수

**unselect-card** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `id` - (필수) 선택 해제된 카드의 ID

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// 칸반 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "unselect-card" 이벤트 구독
board.api.on("unselect-card", (obj) => {
    console.log(obj.id);
});
~~~
