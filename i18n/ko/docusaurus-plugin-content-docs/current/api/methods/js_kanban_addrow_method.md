---
sidebar_label: addRow()
title: addRow 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 addRow 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# addRow()

### 설명

@short: Kanban에 새 행을 추가합니다.

### 사용법

~~~jsx {}
addRow({
    id?: string | number,
    row?: object,
    before?: string | number
}): void;
~~~

### 매개변수

- `id` - (선택 사항) 새 행의 ID
- `row` - (선택 사항) 새 행의 데이터 객체
- `before` - (선택 사항) 새 행이 배치될 기존 행의 ID

:::info
**row** 매개변수의 전체 목록은 [**여기**](api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {8-15}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// 새 행 추가
board.addRow({
    id: "extra_row",
    row: {
        label: "Extra row",
        collapsed: false
    },
    before: "row_2"
});
~~~

**변경 로그**: **id**, **row**, **before** 매개변수는 v1.1에서 추가되었습니다.