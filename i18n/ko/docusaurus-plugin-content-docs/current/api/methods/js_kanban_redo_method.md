---
sidebar_label: redo()
title: redo 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 redo 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# redo()

### 설명

@short: undo 메서드로 되돌린 작업을 다시 실행합니다.

:::info
`redo()` 메서드는 구성에서 [`history: true`](/api/config/js_kanban_history_config.md)로 설정된 경우에만 작동합니다!
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
// Kanban의 히스토리에서 마지막으로 취소된 작업을 다시 실행
board.redo();
~~~

**변경 로그:** 이 메서드는 v1.3에 도입되었습니다.
