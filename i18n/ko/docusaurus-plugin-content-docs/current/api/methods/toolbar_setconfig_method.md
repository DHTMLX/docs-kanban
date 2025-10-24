---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 Toolbar에 대한 setConfig 메서드를 학습할 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# setConfig()

### 설명

@short: Toolbar의 새로운 구성 매개변수를 설정합니다.

### 사용법

~~~jsx {}
setConfig(config: object): void;
~~~

### 매개변수

- `config` - (필수) Toolbar 구성 객체입니다. 전체 속성 목록은 [여기](api/overview/main_overview.md#toolbar-properties)를 참조하세요.

:::note
이 메서드는 전달한 매개변수만 변경합니다.
:::

### 예제

~~~jsx {6-8}
// Kanban 생성
const board = new kanban.Kanban("#root", {});
// Toolbar 생성
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// Toolbar의 새로운 구성 매개변수 설정
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~