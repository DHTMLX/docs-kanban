---
sidebar_label: destructor()
title: Toolbar destructor Method API
description: DHTMLX Kanban의 Toolbar destructor 메서드 API를 확인하세요. Toolbar를 제거하고 관련된 모든 이벤트 리스너를 분리하는 방법을 알아보세요.
---

# destructor()

### 설명

@short: Toolbar의 모든 HTML 요소를 제거하고 관련된 모든 이벤트를 분리합니다.

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