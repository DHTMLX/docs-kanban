---
sidebar_label: updateRow()
title: updateRow 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 updateRow 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# updateRow()

### 설명

@short: ID를 기준으로 행의 데이터를 수정합니다.

### 사용법

~~~jsx {}
updateRow({
    id: string | number,
    row?: object,
    replace?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 업데이트할 행의 식별자
- `row` - (선택) 행의 새 데이터를 포함하는 객체. **row** 매개변수의 전체 목록은 [**여기**](/api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 기존 데이터를 완전히 교체할지 여부를 제어

:::note
`replace` 매개변수를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 덮어쓰여집니다. 설정하지 않거나 false인 경우 지정된 값만 업데이트됩니다.
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
- **id** 및 **row** 매개변수가 v1.1에 추가됨
- **replace** 매개변수가 v1.3에 추가됨
