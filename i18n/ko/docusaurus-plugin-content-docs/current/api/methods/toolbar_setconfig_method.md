---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 Toolbar에 대한 setConfig 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# setConfig()

### 설명

@short: 새로운 구성 설정으로 Toolbar를 업데이트합니다.

### 사용법

~~~jsx {}
setConfig(config: object): void;
~~~

### 매개변수

- `config` - (필수) Toolbar 구성 옵션을 포함하는 객체입니다. 전체 속성 목록은 [여기](/api/overview/main_overview.md#toolbar-속성)에서 확인하세요.

:::note
객체에 제공된 매개변수만 업데이트됩니다.
:::

### 예제

~~~jsx {6-8}
// Kanban 생성
const board = new kanban.Kanban("#root", {});
// Toolbar 생성
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// 새로운 매개변수로 Toolbar 구성 업데이트
toolbar.setConfig({
    items: ["search", "spacer", "sort"]
});
~~~
