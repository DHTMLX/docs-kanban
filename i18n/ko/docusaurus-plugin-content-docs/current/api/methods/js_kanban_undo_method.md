---
sidebar_label: undo()
title: undo Method API
description: DHTMLX Kanban의 undo 메서드 API를 확인하세요. 마지막 보드 작업을 되돌리는 방법을 알아보세요.
---

# undo()

### 설명

@short: Kanban에서 마지막 작업을 되돌립니다.

:::info
`undo()` 메서드는 [`history: true`](api/config/js_kanban_history_config.md) 설정과 함께 사용할 때만 작동합니다!
:::

### 사용법

~~~jsx {}
undo(): void;
~~~

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban의 히스토리에서 한 단계 되돌리기
board.undo();
~~~

**변경 로그:** 이 메서드는 v1.3에 추가되었습니다.