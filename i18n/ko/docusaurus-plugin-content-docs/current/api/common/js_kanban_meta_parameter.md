---
sidebar_label: $meta
title: $meta 매개변수
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 $meta 매개변수에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# $meta

### 설명

@short: Kanban의 메서드 및 이벤트 구성을 위한 추가 설정 객체

:::important
`$meta` 객체는 Kanban 이벤트를 기반으로 메서드를 구성하는 데 사용되는 추가 매개변수 세트를 포함합니다!
:::

### 사용법

~~~jsx {}
$meta?: {
    skipHistory?: boolean
};
~~~

### 매개변수

`$meta` 객체는 다음 매개변수를 포함합니다:

- `skipHistory` - (선택 사항) Kanban의 히스토리에서 작업을 건너뛸지 여부를 활성화/비활성화합니다

### 예제

~~~jsx {11-13}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 새 카드를 추가하고 Kanban 히스토리에서 이 작업을 건너뜁니다
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" },
    $meta: { 
        skipHistory: true 
    }
});
~~~

**변경 로그:** `$meta` 매개변수는 v1.3에 추가되었습니다

**관련 문서:** [`history`](api/config/js_kanban_history_config.md)