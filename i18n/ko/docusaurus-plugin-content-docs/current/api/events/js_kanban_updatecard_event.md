---
sidebar_label: update-card
title: update-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 update-card 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# update-card

### 설명

@short: 카드 데이터가 업데이트될 때 발생합니다.

### 사용법

~~~jsx {}
"update-card": ({
    id: string | number,
    card?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**update-card** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (필수) 업데이트할 카드의 ID
- `card` - (선택) 카드의 새로운 데이터 객체. **card** 매개변수 전체 목록은 [**여기**](api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 데이터 전체 교체 활성화/비활성화

    :::note
    `replace` 매개변수를 *true*로 설정하면 이전 데이터가 완전히 새 데이터로 교체됩니다. 그렇지 않으면 메서드는 전달한 값만 업데이트합니다.
    :::

- `skipProvider` - (선택) 서버로 요청이 전송되는 것을 방지하는 기능 활성화/비활성화

:::info
내부 이벤트를 처리할 때는 [**Event Bus methods**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "update-card" 이벤트 구독
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**변경 로그**:
- **id** 및 **card** 매개변수가 v1.1에 추가됨
- **replace** 매개변수가 v1.3에 추가됨