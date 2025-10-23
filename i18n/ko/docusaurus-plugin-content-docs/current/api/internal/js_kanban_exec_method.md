---
sidebar_label: api.exec()
title: exec 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 exec 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.exec()

### 설명

@short: 내부 이벤트를 트리거할 수 있습니다.

### 사용법

~~~jsx {}
api.exec(
    event: string,
    config: object
): void;
~~~

### 매개변수

- `event` - (필수) 발생시킬 이벤트 이름
- `config` - (필수) 이벤트에 전달할 매개변수를 포함하는 설정 객체 (발생시킬 이벤트 참조)

### 이벤트

:::info
Kanban 내부 이벤트 전체 목록은 [**여기**](api/overview/main_overview.md/#kanban-events)에서 확인할 수 있습니다.
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

**관련 샘플:** [Kanban. Preserve sorting](https://snippet.dhtmlx.com/74nyuv14?tag=kanban)