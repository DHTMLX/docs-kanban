---
sidebar_label: history
title: history 구성
description: 이 섹션에서는 DHTMLX JavaScript Kanban 라이브러리의 history 구성에 대해 다룹니다. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 살펴보고, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# history

### 설명

@short: 선택 사항입니다. 변경 이력 추적 여부를 제어합니다.

:::info
`history` 속성은 Kanban의 이력 관리 기능을 켜거나 끌 수 있게 해줍니다. 이 값을 **false**로 설정하면 API나 툴바 컨트롤을 통해 이력을 제어할 수 없습니다.
:::

:::tip
메서드와 이벤트에 [`$meta`](/api/common/js_kanban_meta_parameter.md) 매개변수를 사용하여 특정 작업을 Kanban 이력에서 제외하는 것도 가능합니다!
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
    // 기타 매개변수
});
~~~

**변경 로그:** 이 속성은 버전 1.3에서 도입되었습니다.

**관련 문서:** [`undo()`](/api/methods/js_kanban_undo_method.md) 및 [`redo()`](/api/methods/js_kanban_redo_method.md)
