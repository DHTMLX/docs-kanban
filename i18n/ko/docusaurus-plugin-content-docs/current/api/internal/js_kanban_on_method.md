---
sidebar_label: api.on()
title: on 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 on 메서드에 대해 알아보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 탐색하고 DHTMLX Kanban의 무료 30일 체험판을 다운로드하세요.
---

# api.on()

### 설명

@short: 내부 이벤트에 핸들러를 연결할 수 있게 합니다

### 사용법

~~~jsx {}
api.on(
    event: string,
    handler: function
): void;
~~~

### 매개변수

- `event` - (필수) 감지할 이벤트 
- `handler` - (필수) 이벤트를 처리할 함수 (인수는 발생한 이벤트에 따라 다름)

### 이벤트

:::info
Kanban 내부 이벤트 전체 목록은 [**여기**](/api/overview/main_overview.md/#kanban-이벤트)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 카드가 이동될 때 카드 데이터를 콘솔에 출력
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
});
~~~
