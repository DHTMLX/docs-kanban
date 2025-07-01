---
sidebar_label: setSearch()
title: setSearch 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setSearch 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setSearch()

### 설명

@short: 주어진 검색 기준에 따라 카드를 찾습니다.

### 사용법

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
이 메서드는 지정된 검색 기준에 따라 카드를 찾을 수 있게 합니다. 인자를 전달하지 않고 **setSearch()**를 호출하면 검색 입력이 초기화되고 강조 표시된 카드가 모두 제거됩니다.
:::

### 매개변수

- `value` - (필수) 검색할 텍스트
- `by` - (선택) 검색할 특정 카드 필드

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 파라미터와 일치하는 카드를 강조 표시
board.setSearch({ value: "Integration", by: "label" });
~~~
