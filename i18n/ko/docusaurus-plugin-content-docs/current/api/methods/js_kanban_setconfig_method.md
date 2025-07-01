---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setConfig 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# setConfig()

### 설명

@short: 새로운 구성 설정으로 Kanban을 업데이트합니다.

### 사용법

~~~jsx {}
setConfig(config: object): void;
~~~

### 매개변수

- `config` - (필수) Kanban 구성 옵션을 포함하는 객체입니다. 전체 속성 목록은 [여기](/api/overview/main_overview.md#kanban-속성)에서 확인하세요.

:::tip
이 메서드는 Kanban 위젯 설정을 조정하고 데이터를 로드할 수 있도록 합니다. 단, 히스토리(히스토리 수정은 지원되지 않음)나 테마에는 영향을 주지 않으니 테마 변경은 [`setTheme()`](/api/methods/js_kanban_settheme_method.md) 메서드를 사용하세요.
:::

### 예제

~~~jsx {10-20,22-23}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

// 툴바 생성
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });

// 새로운 매개변수로 Kanban 구성 업데이트
board.setConfig({
    columnKey: "stage",
    rowKey: "type",
    cardShape,
    editorShape,
    editor: {
       autoSave: false
    },
    /* 기타 매개변수 */
});
                        
// 새로운 항목으로 툴바 구성 업데이트
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~
