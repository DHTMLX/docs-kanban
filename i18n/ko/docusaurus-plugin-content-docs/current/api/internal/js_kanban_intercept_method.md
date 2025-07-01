---
sidebar_label: api.intercept()
title: intercept 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 intercept 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.intercept()

### 설명

@short: 내부 이벤트가 발생하기 전에 이를 감지하고 차단할 수 있게 합니다.

### 사용법

~~~jsx {}
api.intercept(
    event: string,
    callback: function
): void;
~~~

### 매개변수

- `event` - (필수) 감지할 이벤트 이름
- `callback` - (필수) 실행할 함수 (인자는 가로채는 이벤트에 따라 다릅니다)

### 이벤트

:::info
Kanban 내부 이벤트의 전체 목록은 [**여기**](/api/overview/main_overview.md/#kanban-이벤트)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {7-11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "done" ID를 가진 컬럼으로 카드가 이동되는 것을 방지
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
});
~~~
