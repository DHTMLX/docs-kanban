---
sidebar_label: editor
title: editor 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 editor 구성에 대해 알아보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# editor

### 설명

@short: 선택 사항입니다. Kanban 편집기 커스터마이징을 위한 설정을 포함합니다.

### 사용법

~~~jsx {}
editor?: {
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### 매개변수

- `autoSave` - (선택 사항) 자동 저장 기능을 켜거나 끕니다.
- `debounce` - (선택 사항) 자동 저장 전 대기 시간을 설정합니다 (***autoSave: true***일 때만 유효).
- `placement` - (선택 사항) 편집기가 표시되는 위치를 정의합니다. 가능한 값은 다음과 같습니다:
    - `"sidebar"` - 편집기를 사이드바로 표시합니다.
    - `"modal"` - 편집기를 모달 창으로 표시합니다.

### 기본 구성

~~~jsx {}
editor: {
    debounce: 100,
    autoSave: true,
    placement: "sidebar"
}
~~~

### 예제

~~~jsx {4-8}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // 기타 매개변수
});
~~~

**변경 사항:** `placement` 옵션은 v1.6에 도입되었습니다.

**관련 샘플:** [Kanban. 모달 창에서 편집기 열기](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)
