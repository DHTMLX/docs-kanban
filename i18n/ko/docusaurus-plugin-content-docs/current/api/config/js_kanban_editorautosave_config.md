---
sidebar_label: editorAutoSave
title: editorAutoSave Config API
description: DHTMLX Kanban의 editorAutoSave 구성 API를 읽어보세요. 카드 편집기에서 자동 저장을 활성화하거나 비활성화하는 방법을 알아볼 수 있습니다.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
버전 1.3부터 `editorAutoSave` 속성은 **더 이상 사용되지 않습니다**. "autosave" 모드를 관리하려면 [`editor`](api/config/js_kanban_editor_config.md) 속성을 사용하세요!
:::

### 설명

@short: 선택 사항입니다. 자동 저장 모드를 활성화/비활성화합니다.

:::info
이 매개변수를 사용하여 Kanban의 자동 저장 모드를 활성화하거나 비활성화할 수 있습니다. **editorAutoSave** 속성을 **false**로 설정하면, 편집기가 편집된 데이터를 저장하는 "저장" 버튼을 표시합니다.
:::

### 사용법

~~~jsx {}
editorAutoSave?: boolean; // (기본값은 true)
~~~

### 기본 구성

~~~jsx {}
editorAutoSave: true
~~~

### 예제

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    editorAutoSave: false, // 자동 저장 비활성화
    // 기타 매개변수
});
~~~