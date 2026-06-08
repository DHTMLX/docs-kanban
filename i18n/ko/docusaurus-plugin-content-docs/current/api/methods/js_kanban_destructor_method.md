---
sidebar_label: destructor()
title: destructor Method API
description: DHTMLX Kanban의 destructor 메서드 API를 확인하세요. 보드를 제거하고 관련된 모든 이벤트 리스너를 분리하는 방법을 알아봅니다.
---

# destructor()

### 설명

@short: Kanban의 모든 HTML 요소를 제거하고 관련된 모든 이벤트를 분리합니다.

### 사용법

~~~jsx {}
destructor(): void;
~~~

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban 제거
board.destructor();
~~~