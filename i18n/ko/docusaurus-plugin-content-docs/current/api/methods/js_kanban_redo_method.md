---
sidebar_label: redo()
title: redo 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 redo 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
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