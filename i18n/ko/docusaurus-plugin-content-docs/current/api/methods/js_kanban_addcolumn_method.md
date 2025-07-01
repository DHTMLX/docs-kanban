---
sidebar_label: addColumn()
title: addColumn 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 addColumn 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# addColumn()

### 설명

@short: Kanban 보드에 새 열을 삽입합니다

### 사용법

~~~jsx {}
addColumn({
    id?: string | number,
    column?: object,
    before?: string | number
}): void;
~~~

### 매개변수

- `id` - (선택 사항) 새 열의 ID를 지정합니다
- `column` - (선택 사항) 새 열을 정의하는 데이터 객체를 제공합니다 
- `before` - (선택 사항) 새 열이 삽입될 위치의 이전 열 ID를 나타냅니다 

:::info
**column** 매개변수의 전체 목록은 [**여기**](/api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {7-16}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 새 열 추가
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

**변경 로그**: **id**, **column**, **before** 매개변수는 v1.1 버전에서 도입되었습니다
