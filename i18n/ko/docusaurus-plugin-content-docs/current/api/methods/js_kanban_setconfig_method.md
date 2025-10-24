---
sidebar_label: setConfig()
title: setConfig 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setConfig 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setConfig()

### 설명

@short: Kanban의 새로운 구성 매개변수를 설정합니다.

### 사용법

~~~jsx {}
setConfig(config: object): void;
~~~

### 매개변수

- `config` - (필수) Kanban 구성 객체입니다. 전체 속성 목록은 [여기](api/overview/main_overview.md#kanban-properties)에서 확인하세요.

:::tip
이 메서드를 사용하여 Kanban 위젯을 구성하고 데이터를 로드할 수 있습니다. 이 메서드는 히스토리를 변경하지 않습니다(히스토리는 전혀 변경할 수 없습니다).
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

// Kanban의 새로운 구성 매개변수 지정
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
                        
// 툴바의 새로운 구성 매개변수 지정
toolbar.setConfig({ items: ["search", "spacer", "sort"] });
~~~