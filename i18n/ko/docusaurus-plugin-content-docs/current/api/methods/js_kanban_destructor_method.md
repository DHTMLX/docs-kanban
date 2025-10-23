---
sidebar_label: destructor()
title: destructor 메서드
description: DHTMLX JavaScript Kanban 라이브러리의 destructor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
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