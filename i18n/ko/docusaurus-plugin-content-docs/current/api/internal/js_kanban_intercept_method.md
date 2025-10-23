---
sidebar_label: api.intercept()
title: intercept 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 intercept 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.intercept()

### 설명

@short: 내부 이벤트를 가로채고 방지할 수 있습니다

### 사용법

~~~jsx {}
api.intercept(
    event: string,
    callback: function,
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### 매개변수

- `event` - (필수) 발생할 이벤트 이름
- `callback` - (필수) 실행할 콜백 함수 (콜백 인자는 발생하는 이벤트에 따라 다릅니다)
- `config` - (선택) 다음 매개변수를 포함하는 객체:
    - `intercept` - (선택) 이벤트 리스너 생성 시 `intercept: true`로 설정하면, 이 이벤트 리스너가 다른 모든 리스너보다 먼저 실행됩니다
    - `tag` - (선택) 액션 태그. [`detach`](api/internal/js_kanban_detach_method.md) 메서드를 통해 액션 핸들러를 제거할 때 태그 이름을 사용할 수 있습니다

### 이벤트

:::info
Kanban 내부 이벤트 전체 목록은 [**여기**](api/overview/main_overview.md/#kanban-events)에서 확인할 수 있습니다
:::

### 예제

~~~jsx {7-11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "done" ID 컬럼으로 카드 이동 금지
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
}, {tag: "move"});
~~~

**변경 로그**: **config.tag** 및 **config.intercept** 매개변수는 v1.7에 추가되었습니다