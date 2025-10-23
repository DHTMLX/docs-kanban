---
sidebar_label: setSort()
title: setSort 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setSort 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setSort()

### 설명

@short: 지정된 매개변수로 카드를 정렬합니다.

### 사용법

~~~jsx {}
setSort(
    {
        by?: string | function, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### 매개변수

이 메서드는 정렬 매개변수 객체 또는 *null* 값을 받을 수 있습니다. 객체 내에서 다음 매개변수를 지정할 수 있습니다:

- `by` - (선택 사항) 정렬할 카드 필드입니다. 이 매개변수는 *string* 또는 *function* 값으로 설정할 수 있습니다. 함수는 정렬할 카드 필드를 반환해야 합니다.
- `dir` - (선택 사항) 정렬 순서입니다. 가능한 값은 *"asc"* 와 *"desc"* 입니다.
- `columnId` - (선택 사항) 정렬할 열의 ID입니다.
- `preserve` - (선택 사항) 정렬 상태 유지 활성화/비활성화입니다 (*기본값은 false*)

:::info
**preserve** 매개변수가 *false* 로 설정된 경우, 정렬은 한 번만 적용됩니다. 즉, 카드를 추가하거나 이동한 후에는 정렬 상태가 유지되지 않고 순서가 변경됩니다. 반면, 정렬 상태를 유지하면 새 카드를 추가하거나 이동해도 정렬 상태가 유지됩니다. 정렬 상태 유지를 해제하려면 ***null*** 매개변수로 **setSort()** 메서드를 호출하세요.
:::

### 예제

~~~jsx {7-12}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "label" 매개변수로 카드를 오름차순 정렬
board.setSort({ 
    by: (obj) => obj.label, // 또는 by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**변경 로그:** 이 메서드는 v1.2에 추가되었습니다.