---
sidebar_label: setSearch()
title: setSearch 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setSearch 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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