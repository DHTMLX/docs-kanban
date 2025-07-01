---
sidebar_label: set-edit
title: set-edit 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 set-edit 이벤트를 살펴보세요. 개발자 가이드, API 참조, 라이브 데모 체험, DHTMLX Kanban 30일 무료 체험판 다운로드를 확인할 수 있습니다.
---

# set-edit

### 설명

@short: 에디터가 토글될 때 발생합니다

### 사용법

~~~jsx {}
"set-edit": ({ cardId: string | number, eventSource?: "select-card" } | null) => void;
~~~

### 매개변수

**set-edit** 이벤트의 콜백은 *null* 또는 다음 속성을 가진 객체를 인자로 받습니다:

- `cardId` - (필수) 편집 중인 카드의 ID
- `eventSource` - (선택) ***"select-card"*** 동작이 ***set-edit*** 이벤트를 발생시켰음을 나타냄

:::note
***null*** 값은 에디터가 닫히고 있음을 의미합니다
:::

:::info
내부 이벤트 관리는 [**Event Bus 메서드**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 사용자가 카드를 단일 클릭할 때 편집 차단
board.api.intercept("set-edit", (ev) => {
    return ev?.eventSource != "select-card";
});
~~~

**변경 로그:**
    - 이 이벤트는 v1.2에 도입됨
    - ***eventSource*** 매개변수는 v1.6에 추가됨

**관련 샘플:** [Kanban. 작업을 더블 클릭하여 에디터 열기](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)
