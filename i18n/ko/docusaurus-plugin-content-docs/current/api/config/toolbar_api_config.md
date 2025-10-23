---
sidebar_label: api
title: api 구성
description: DHTMLX 자바스크립트 칸반 라이브러리의 (Toolbar) api 구성에 대해 문서에서 배울 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
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