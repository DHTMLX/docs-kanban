---
sidebar_label: redo()
title: redo Method API
description: DHTMLX Kanban의 redo 메서드 API를 확인하세요. undo로 되돌린 동작을 다시 실행하는 방법을 알아봅니다.
---

# redo()

### 설명

@short: undo 작업으로 되돌린 동작을 다시 실행합니다.

:::info
`redo()` 메서드는 [`history: true`](api/config/js_kanban_history_config.md) 설정에서만 작동합니다!
:::

### 사용법

~~~jsx {}
redo(): void;
~~~

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban의 히스토리에서 한 단계 앞으로 이동
board.redo();
~~~

**변경 로그:** 이 메서드는 v1.3에 추가되었습니다.