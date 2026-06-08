---
sidebar_label: unselectCard()
title: unselectCard Method API
description: DHTMLX Kanban의 unselectCard 메서드 API를 확인하세요. ID로 카드 선택을 해제하는 방법을 알아보세요.
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