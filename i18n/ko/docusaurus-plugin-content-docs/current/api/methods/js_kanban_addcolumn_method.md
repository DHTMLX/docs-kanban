---
sidebar_label: addColumn()
title: addColumn 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 addColumn 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 확인하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# addColumn()

### 설명

@short: Kanban에 새 컬럼을 추가합니다.

### 사용법

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### 매개변수

- `id` - (선택 사항) 새 컬럼의 ID
- `column` - (선택 사항) 새 컬럼의 데이터 객체
- `before` - (선택 사항) 새 컬럼이 위치할 기존 컬럼의 ID

:::info
**column** 매개변수의 전체 목록은 [**여기**](api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {7-16}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 새 컬럼 추가
board.addColumn({
    id: "extra_column",
    column: {
        label: "Extra column",
        limit: 2,
        strictLimit: 2,
        collapsed: true
    },
    before: "column_2"
});
~~~

**변경 로그**: **id**, **column**, **before** 매개변수는 v1.1 버전에서 추가되었습니다.