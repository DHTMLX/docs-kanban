---
sidebar_label: unselectCard()
title: unselectCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 unselectCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# unselectCard()

### 설명

@short: 카드의 ID로 카드 선택을 해제합니다.

### 사용법

~~~jsx {}
unselectCard({ id: string | number }): void;
~~~

:::info
모든 카드의 선택을 해제하려면 매개변수 없이 **unselectCard()** 메서드를 호출하세요.
:::

### 매개변수

- `id` - (필수) 선택 해제할 카드의 ID

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드 선택 해제
board.unselectCard({ id: 1 });
~~~