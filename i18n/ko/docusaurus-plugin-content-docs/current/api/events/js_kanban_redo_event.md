---
sidebar_label: redo
title: redo 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 redo 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# redo

### 설명

@short: undo 작업으로 되돌린 동작을 다시 실행할 때 발생합니다.

### 사용법

~~~jsx {}
"redo": () => void;
~~~

:::info
내부 이벤트 처리를 위해 [**Event Bus 메서드**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "redo" 이벤트 구독
board.api.on("redo", () => {
    console.log("redo operation");
});
~~~

**변경 로그**: 이 이벤트는 v1.7에 추가되었습니다.