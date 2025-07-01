---
sidebar_label: selectCard()
title: selectCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 selectCard 메서드에 대해 배울 수 있습니다. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# selectCard()

### 설명

@short: 지정된 ID를 기준으로 카드를 강조 표시합니다.

### 사용법

~~~jsx {}
selectCard({
    id: string | number,
    groupMode?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 선택할 카드의 ID
- `groupMode` - (선택) 한 번에 여러 카드를 선택할 수 있는 기능을 토글합니다 (기본값은 **false**)

:::info
**groupMode**가 **true**로 설정되면, **selectCard()** 메서드는 현재 선택을 유지하면서 새 카드를 선택에 추가합니다.
:::

### 예제

~~~jsx {7-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드를 선택
board.selectCard({
    id: 1,
    groupMode: true
});
~~~
