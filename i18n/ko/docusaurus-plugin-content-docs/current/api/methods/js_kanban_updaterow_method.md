---
sidebar_label: updateRow()
title: updateRow Method API
description: DHTMLX Kanban의 updateRow 메서드 API를 확인하세요. 스윔레인 행 속성, 스타일 및 메뉴를 업데이트하는 방법을 알아보세요.
---

# updateRow()

### 설명

@short: ID로 행 데이터를 업데이트합니다.

### 사용법

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 업데이트할 행의 ID
- `row` - (선택) 행의 새 데이터 객체입니다. **row** 매개변수의 전체 목록은 [**여기**](api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 전체 데이터를 완전히 교체할지 여부를 설정합니다.

    :::note
    `replace` 매개변수를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 교체됩니다. 그렇지 않으면 메서드는 전달한 값만 업데이트합니다.
    :::

### 예제

~~~jsx {8-15}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// "feature" ID를 가진 행 데이터 업데이트
board.updateRow({
    id: "feature",
    row: {
        label: "Updated row",
        collapsed: true
    },
    replace: true
});
~~~

**변경 로그**:
- **id** 및 **row** 매개변수는 v1.1에 추가되었습니다.
- **replace** 매개변수는 v1.3에 추가되었습니다.