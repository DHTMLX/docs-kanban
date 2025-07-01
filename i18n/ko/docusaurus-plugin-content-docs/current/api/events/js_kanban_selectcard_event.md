---
sidebar_label: select-card
title: select-card 이벤트
description: DHTMLX 자바스크립트 칸반 라이브러리에서 select-card 이벤트가 어떻게 작동하는지 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 샘플과 라이브 데모를 확인하며, DHTMLX Kanban의 무료 30일 체험판을 다운로드하세요.
---

# select-card

### 설명

@short: 카드가 선택될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"select-card": ({
    id: string | number,
    groupMode?: boolean
}) => void;
~~~

### 매개변수

**select-card** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 선택된 카드의 ID
- `groupMode` - (선택) 다중 선택 모드 여부 (기본값: false)

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// 칸반 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "select-card" 이벤트 구독
board.api.on("select-card", (obj) => {
    console.log(obj.id);
});
~~~
