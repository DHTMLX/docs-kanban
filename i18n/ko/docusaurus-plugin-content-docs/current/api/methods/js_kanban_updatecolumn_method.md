---
sidebar_label: updateColumn()
title: updateColumn Method API
description: DHTMLX Kanban의 updateColumn 메서드 API를 확인하세요. 컬럼 속성, 스타일 및 메뉴 설정을 업데이트하는 방법을 알아보세요.
---

# updateColumn()

### 설명

@short: ID로 컬럼 데이터를 업데이트합니다.

### 사용법

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 업데이트할 컬럼의 ID
- `column` - (선택) 컬럼의 새 데이터 객체. **column** 매개변수의 전체 목록은 [**여기**](api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 데이터 전체 교체 활성화/비활성화

    :::note
    `replace` 매개변수를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 교체됩니다. 그렇지 않으면, 메서드는 전달한 값만 업데이트합니다.
    :::

### 예제

~~~jsx {7-16}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "backlog" ID를 가진 컬럼 데이터 업데이트
board.updateColumn({
    id: "backlog",
    column: {
        label: "Updated column",
        limit: 3,
        strictLimit: 3,
        collapsed: true
    },
    replace: true
});
~~~

**변경 로그**:
- **id** 및 **column** 매개변수는 v1.1에서 추가됨
- **replace** 매개변수는 v1.3에서 추가됨