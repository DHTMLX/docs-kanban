---
sidebar_label: scroll
title: scroll Event API
description: DHTMLX Kanban의 scroll 이벤트 API를 확인하세요. 지정된 요소로 스크롤할 때 발생하는 이벤트를 처리하는 방법을 알아보세요.
---

# scroll

### 설명

@short: 지정된 요소로 스크롤할 때 발생합니다

### 사용법

~~~jsx {}
"scroll": ({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}) => void;
~~~

### 매개변수

**scroll** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 대상 요소의 ID
- `to` - (필수) 대상 요소의 유형. 가능한 값은 *"column"*, *"row"*, *"card"* 입니다
- `options` - (선택) 스크롤 옵션 객체. 스크롤 매개변수의 전체 목록은 [여기](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)에서 확인할 수 있습니다

:::info
내부 이벤트 처리를 위해 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "scroll" 이벤트 구독
board.api.on("scroll", (obj) => {
    console.log(obj);
});
~~~

**변경 로그:** 이 이벤트는 v1.2에 추가되었습니다