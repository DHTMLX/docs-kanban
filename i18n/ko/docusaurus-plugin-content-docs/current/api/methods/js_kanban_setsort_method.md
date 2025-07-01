---
sidebar_label: setSort()
title: setSort 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setSort 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setSort()

### 설명

@short: 지정된 기준에 따라 카드를 정렬합니다.

### 사용법

~~~jsx {}
setSort(
    {
        by?: string, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### 매개변수

이 메서드는 정렬 옵션이 포함된 객체 또는 *null*을 인수로 받습니다. 객체 내에서 다음 속성을 정의할 수 있습니다:

- `by` - (선택 사항) 정렬에 사용할 카드 필드입니다. *문자열*이거나 정렬할 값을 반환하는 *함수*일 수 있습니다.
- `dir` - (선택 사항) 정렬 방향으로 *"asc"* 또는 *"desc"* 중 하나를 지정합니다.
- `columnId` - (선택 사항) 정렬을 적용할 열의 ID입니다.
- `preserve` - (선택 사항) 정렬 상태를 유지할지 여부를 제어합니다. 기본값은 *false*입니다.

:::info
**preserve**가 *false*로 설정되면 정렬은 한 번만 적용됩니다. 즉, 카드가 추가되거나 이동된 후에는 정렬 순서가 유지되지 않습니다. **preserve**가 활성화되면 카드가 추가되거나 재배치된 후에도 정렬 순서가 일관되게 유지됩니다. 유지된 정렬 상태를 해제하려면 ***null*** 인수를 사용하여 **setSort()**를 호출하세요.
:::

### 예제

~~~jsx {7-12}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "label" 속성을 기준으로 오름차순 정렬
board.setSort({ 
    by: (obj) => obj.label, // 또는 by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**변경 로그:** 이 메서드는 v1.2에 추가되었습니다.
