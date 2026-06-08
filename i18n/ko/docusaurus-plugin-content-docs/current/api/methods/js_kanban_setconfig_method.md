---
sidebar_label: setConfig()
title: setConfig Method API
description: DHTMLX Kanban의 setConfig 메서드 API를 확인하세요. 런타임에 보드 구성을 동적으로 업데이트하는 방법을 알아봅니다.
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