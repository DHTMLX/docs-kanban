---
sidebar_label: api
title: Toolbar api Config API
description: DHTMLX Kanban의 Toolbar api 구성 API를 읽어보세요. Toolbar를 Kanban 내부 API에 연결하는 방법을 알아볼 수 있습니다.
---

# api

### 설명

@short: 필수입니다. Kanban의 내부 API가 포함된 객체입니다.

:::info
이 경우, **Kanban의 내부 API**는 Toolbar에 위치한 **컨트롤**에 사용됩니다.
:::

### 사용법

~~~jsx {}
api: object;
~~~

### 예제

~~~jsx {7}
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

new kanban.Toolbar("#toolbar", {
    api: board.api
});
~~~

**관련 문서:** [구성](guides/configuration.md#toolbar)

**관련 샘플:** [Kanban. 사용자 정의 툴바](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)