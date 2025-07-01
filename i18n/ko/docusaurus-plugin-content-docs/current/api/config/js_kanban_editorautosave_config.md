---
sidebar_label: editorAutoSave
title: editorAutoSave 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 editorAutoSave 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 둘러보고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 

<h1 style = {{color: "red"}}><s>editorAutoSave</s></h1>

:::danger
버전 1.3부터 `editorAutoSave` 속성은 **더 이상 사용되지 않습니다**. "자동 저장" 모드를 제어하려면 대신 [`editor`](/api/config/js_kanban_editor_config.md) 속성을 사용해 주세요.
:::

### 설명

@short: 선택 사항입니다. 자동 저장 모드를 켜거나 끕니다.

:::info
이 설정은 Kanban 편집기에서 자동 저장 기능을 활성화하거나 비활성화할 수 있게 합니다. **editorAutoSave** 속성이 **false**로 설정되면, 편집기에는 변경 사항을 수동으로 저장할 수 있는 "저장" 버튼이 표시됩니다.
:::

### 사용법

~~~jsx {}
editorAutoSave?: boolean; // (기본값은 true)
~~~

### 기본 설정

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
