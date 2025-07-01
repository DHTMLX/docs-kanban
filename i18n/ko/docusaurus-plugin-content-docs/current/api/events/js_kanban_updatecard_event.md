---
sidebar_label: update-card
title: update-card 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 update-card 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모 및 DHTMLX Kanban의 무료 30일 체험판을 제공합니다.
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

**update-card** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 업데이트할 카드의 식별자
- `card` - (선택) 새로운 카드 데이터를 포함하는 객체. 전체 **card** 속성 목록은 [**여기**](/api/config/js_kanban_cards_config.md)에서 확인하세요.
- `replace` - (선택) 기존 데이터를 완전히 대체할지 여부를 결정합니다.

:::note
`replace`가 *true*로 설정되면 기존 데이터가 새 데이터로 완전히 덮어써집니다. 그렇지 않으면 지정한 값만 업데이트됩니다.
:::

- `skipProvider` - (선택) 업데이트를 서버에 전송할지 여부를 제어합니다.

:::info
내부 이벤트 관리는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "update-card" 이벤트 리스닝
board.api.on("update-card", (obj) => {
    console.log(obj);
});
~~~

**변경 로그**:
- v1.1에서 **id** 및 **card** 매개변수 추가
- v1.3에서 **replace** 매개변수 추가
