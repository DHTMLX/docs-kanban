---
sidebar_label: selectCard()
title: selectCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 selectCard 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# selectCard()

### 설명

@short: 지정된 ID로 카드를 선택합니다.

### 사용법

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 선택할 카드의 ID
- `groupMode` - (선택) 카드 다중 선택 활성화/비활성화 (기본값은 **false**)

:::info
**groupMode** 매개변수를 **true**로 설정하면, **selectCard()** 메서드는 다른 요소들의 선택 상태를 초기화하지 않습니다.
:::

### 예제

~~~jsx {7-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드 선택
board.selectCard({
    id: 1,
    groupMode: true
});
~~~