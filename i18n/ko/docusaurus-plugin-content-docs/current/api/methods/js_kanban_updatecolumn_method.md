---
sidebar_label: updateColumn()
title: updateColumn 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 updateColumn 메서드를 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험을 이용해보세요.
---

# updateColumn()

### 설명

@short: ID를 사용하여 컬럼 데이터를 수정합니다.

### 사용법

~~~jsx {}
updateColumn({
    id: string | number,
    column?: object,
    replace?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 업데이트할 컬럼의 ID를 지정합니다.
- `column` - (선택) 컬럼의 새 데이터를 포함하는 객체입니다. **column** 매개변수의 전체 목록은 [**여기**](/api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 기존 데이터를 완전히 대체할지 여부를 결정합니다.

:::note
`replace`가 *true*로 설정되면 기존 데이터는 새 데이터로 완전히 대체됩니다. 그렇지 않으면 제공된 값만 업데이트됩니다.
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
- **id**와 **column** 매개변수는 v1.1에 도입되었습니다.
- **replace** 매개변수는 v1.3에 추가되었습니다.
