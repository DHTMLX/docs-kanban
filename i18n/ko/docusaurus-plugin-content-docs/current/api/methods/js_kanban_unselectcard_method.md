---
sidebar_label: unselectCard()
title: unselectCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 unselectCard 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참고 자료를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# unselectCard()

### 설명

@short: ID로 식별된 카드(들)의 선택을 해제합니다.

### 사용법

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
인수를 지정하지 않고 **unselectCard()**를 호출하면 모든 카드의 선택이 해제됩니다.
:::

### 매개변수

- `id` - (필수) 선택 해제할 카드의 고유 식별자입니다.

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드의 선택 해제
board.unselectCard({ id: 1 });
~~~
