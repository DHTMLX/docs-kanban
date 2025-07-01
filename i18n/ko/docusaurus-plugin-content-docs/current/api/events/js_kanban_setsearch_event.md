---
sidebar_label: set-search
title: set-search 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 set-search 이벤트를 알아보세요. 개발자 가이드를 확인하고, API 참조를 탐색하며, 코드 샘플과 라이브 데모를 테스트하고, DHTMLX Kanban의 무료 30일 체험판을 받아보세요.
---

# set-search

### 설명

@short: 카드 검색이 수행될 때 발생합니다

### 사용법

~~~jsx {}
"set-search": ({
    value: string,
    by?: string
}) => void;
~~~

### 매개변수

**set-search** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `value` - (필수) 검색어
- `by` - (선택) 검색할 카드 필드

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "set-search" 이벤트 리스닝
board.api.on("set-search", (obj) => {
    console.log(obj.value);
});
~~~
