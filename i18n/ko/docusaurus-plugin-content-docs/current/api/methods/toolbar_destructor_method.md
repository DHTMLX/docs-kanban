---
sidebar_label: destructor()
title: destructor 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Toolbar의 destructor 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# destructor()

### 설명

@short: 모든 Toolbar HTML 요소를 제거하고 관련 이벤트를 해제하여 정리합니다.

### 사용법

~~~jsx {}
destructor(): void;
~~~

### 예제

~~~jsx {6}
// Kanban 생성
const board = new kanban.Kanban("#root", {});
// Toolbar 생성
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// Toolbar 제거
toolbar.destructor();
~~~
