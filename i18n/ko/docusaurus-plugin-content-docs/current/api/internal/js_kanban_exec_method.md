---
sidebar_label: api.exec()
title: exec 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 exec 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.exec()

### 설명

@short: 이 메서드는 Kanban 보드 내에서 내부 이벤트를 트리거할 수 있게 해줍니다.

### 사용법

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 매개변수

- `event` - (필수) 트리거하려는 이벤트 이름
- `config` - (필수) 트리거되는 이벤트와 관련된 매개변수를 포함하는 객체

### 이벤트

:::info
Kanban 내부 이벤트 전체 목록은 [**여기**](/api/overview/main_overview.md/#kanban-이벤트)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {7,9-12}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드를 선택
board.api.exec("select-card", { id: 1 });
// 서버에 변경 사항을 전송하지 않고 새 카드 추가
board.api.exec("add-card", { 
    columnId: "backlog",
    skipProvider: true, 
});
~~~

**관련 샘플:** [Kanban. 정렬 유지](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)
