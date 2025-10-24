---
sidebar_label: history
title: history 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 history 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# history

### 설명

@short: 선택 사항입니다. 변경 이력 관리를 활성화/비활성화합니다.

:::info
`history` 속성을 사용하여 Kanban의 변경 이력 관리를 활성화하거나 비활성화할 수 있습니다. 이를 **false**로 설정하면 API 및 툴바 컨트롤을 통해 이력 관리를 할 수 없습니다.
:::

:::tip
메서드와 이벤트에서 [`$meta`](api/common/js_kanban_meta_parameter.md) 파라미터를 사용하여 Kanban 이력에서 일부 작업을 건너뛸 수도 있습니다!
:::

### 사용법

~~~jsx {}
history?: boolean; 
~~~

### 기본 구성

~~~jsx {}
history: true
~~~

### 예제

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false, // 이력 관리 비활성화
    // 기타 파라미터
});
~~~

**변경 로그:** 이 속성은 v1.3에 추가되었습니다.

**관련 문서:** [`undo()`](api/methods/js_kanban_undo_method.md) 및 [`redo()`](api/methods/js_kanban_redo_method.md)