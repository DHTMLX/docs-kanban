---
sidebar_label: set-sort
title: set-sort 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 set-sort 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 평가판을 무료로 다운로드할 수 있습니다.
---

# set-sort

### 설명

@short: 카드가 정렬될 때마다 발생합니다.

### 사용법

~~~jsx {}
"set-sort": (
    {
        by?: string | ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
) => void;
~~~

### 매개변수

**set-sort** 이벤트의 콜백은 *null* 또는 다음 속성을 포함하는 객체를 받을 수 있습니다:

- `by` - (선택 사항) 정렬에 사용되는 카드 필드(*string* 또는 *function*)
- `dir` - (선택 사항) 정렬 방향, *"asc"* 또는 *"desc"*
- `preserve` - (선택 사항) 현재 정렬 상태를 유지할지 여부
- `columnId` - (선택 사항) 정렬 중인 열의 식별자

:::info
내부 이벤트를 다루려면 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "set-sort" 이벤트 리스닝
board.api.on("set-sort", (obj) => {
    console.log(obj);
});
~~~

**변경 로그:** 이 이벤트는 v1.2에서 도입되었습니다.
