---
sidebar_label: move-column
title: move-column 이벤트
description: DHTMLX 자바스크립트 칸반 라이브러리 문서에서 move-column 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# move-column

### 설명

@short: 컬럼 이동 시 발생하는 이벤트

### 사용법

~~~jsx {}
"move-column": ({
    id: string | number,
    before?: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**move-column** 이벤트의 콜백은 다음 매개변수를 가진 객체를 받을 수 있습니다:

- `id` - (필수) 이동할 컬럼의 ID
- `before` - (선택) 이동할 컬럼이 위치할 대상 컬럼의 ID. `before` 매개변수를 지정하지 않으면 컬럼은 보드의 끝에 배치됩니다.
- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지할지 여부를 설정합니다.

:::info
내부 이벤트를 처리하려면 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "move-column" 이벤트 구독
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**변경 로그:** 이 이벤트는 v1.1에 추가되었습니다.