---
sidebar_label: editor
title: editor Config API
description: DHTMLX Kanban의 editor 구성 설명서를 읽어보세요. 작업 편집기의 활성화, 맞춤 설정 및 동작 제어 방법을 알아볼 수 있습니다.
---

# editor

### 설명

@short: 선택 사항입니다. Kanban 편집기를 구성하기 위한 설정 객체입니다.

### 사용법

~~~jsx {}
editor?: {
    show?: boolean,
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### 매개변수

- `show` - (선택 사항) - 편집기 활성화/비활성화
- `autoSave` - (선택 사항) 편집기의 자동 저장 모드 활성화/비활성화
- `debounce` - (선택 사항) 자동 저장 지연 시간 (***autoSave: true*** 매개변수와 함께 작동)
- `placement` - (선택 사항) 편집기 위치 지정. 다음 값을 설정할 수 있습니다:
    - `"sidebar"` - 편집기를 사이드바로 표시
    - `"modal"` - 편집기를 모달 창으로 표시

### 기본 구성

~~~jsx {}
editor: {
    show: true,
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
        show: true
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // 기타 매개변수
});
~~~

**변경 기록:** `placement` 매개변수는 v1.6에서 추가되었습니다.

**관련 샘플:** [Kanban. 모달 창에서 편집기 열기](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)