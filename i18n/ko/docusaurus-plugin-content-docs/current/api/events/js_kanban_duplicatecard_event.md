---
sidebar_label: duplicate-card
title: duplicate-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 duplicate-card 이벤트에 대해 알아보세요. 개발자 가이드, API 참조, 코드 샘플과 라이브 데모를 체험하고 DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# duplicate-card

### 설명

@short: 카드가 복제될 때 발생합니다

### 사용법

~~~jsx {}
"duplicate-card": ({
    id: string | number,
    card?: object,
    select?: boolean
}) => void;
~~~

### 매개변수

**duplicate-card** 이벤트 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 복제되는 카드의 ID
- `card` - (선택) 새 카드의 데이터 객체입니다. 카드 매개변수 전체 목록은 [여기](/api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
- `select` - (선택) 새로 추가된 카드를 선택할지 여부를 제어합니다

:::info
내부 이벤트와 작업할 때는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다
:::

### 예시

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "duplicate-card" 이벤트 리스닝
board.api.on("duplicate-card", (obj) => {
    console.log(obj);
});
~~~

**변경 기록:** `select` 매개변수는 v1.5.10 버전에 도입되었습니다
