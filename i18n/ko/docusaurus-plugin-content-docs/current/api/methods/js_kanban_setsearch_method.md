---
sidebar_label: setSearch()
title: setSearch Method API
description: DHTMLX Kanban의 setSearch 메서드 API를 확인하세요. 지정된 매개변수로 카드를 검색하는 방법을 알아보세요.
---

# setSearch()

### 설명

@short: 지정된 매개변수로 카드를 검색합니다

### 사용법

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
이 메서드를 사용하면 지정된 매개변수로 필요한 카드를 검색할 수 있습니다. **setSearch()** 메서드를 매개변수 없이 호출하면 검색창과 카드 하이라이트가 초기화됩니다.
:::

### 매개변수

- `value` - (필수) 검색할 값
- `by` - (선택) 검색할 카드 필드

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 매개변수에 맞는 카드를 하이라이트
board.setSearch({ value: "Integration", by: "label" });
~~~