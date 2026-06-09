---
sidebar_label: currentUser
title: currentUser Config API
description: DHTMLX Kanban의 currentUser 구성 API를 읽어보세요. 댓글, 투표 및 협업을 위한 활성 사용자를 설정하는 방법을 알아볼 수 있습니다.
---

# currentUser

### 설명

@short: 선택 사항입니다. 현재 사용자의 ID입니다.

:::note
현재 사용자 ID는 [`cardShape.users`](api/config/js_kanban_cardshape_config.md) 속성에 지정된 ID 중 하나와 일치해야 합니다. 이 ID를 지정하지 않으면 댓글은 읽기 전용으로만 사용할 수 있습니다.
:::

### 사용법

~~~jsx {}
currentUser?: string | number; 
~~~

### 예제

~~~jsx {4}
new kanban.Kanban("#root", {
    cards,
    columns,
    currentUser: 1,
    // 기타 매개변수
});
~~~

**변경 로그:** 이 속성은 v1.4에서 추가되었습니다.

**관련 샘플:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)