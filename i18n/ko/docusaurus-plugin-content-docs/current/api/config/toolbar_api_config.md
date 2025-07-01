---
sidebar_label: api
title: api 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 (Toolbar) api 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모, 그리고 DHTMLX Kanban의 무료 30일 체험판을 제공합니다.
---

# api

### 설명

@short: 필수. Kanban의 내부 API를 나타내는 객체입니다.

:::info
여기서 **Kanban의 내부 API**는 Toolbar에서 찾을 수 있는 **컨트롤**을 의미합니다.
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

**관련 문서:** [구성](/guides/configuration#툴바)

**관련 샘플:** [Kanban. 사용자 정의 툴바](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)
