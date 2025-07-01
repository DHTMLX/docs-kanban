---
sidebar_label: currentUser
title: currentUser 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 currentUser 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# currentUser

### 설명

@short: 선택 사항입니다. 현재 사용자의 ID를 나타냅니다.

:::note
현재 사용자 ID는 [`cardShape.users`](/api/config/js_kanban_cardshape_config.md) 속성에 나열된 ID 중 하나와 일치해야 합니다. 이 ID가 제공되지 않으면 댓글은 읽기 전용 모드로만 접근할 수 있습니다.
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

**변경 로그:** 이 속성은 버전 1.4에서 도입되었습니다.

**관련 샘플:** [Kanban. Swimlanes, comments, votes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
