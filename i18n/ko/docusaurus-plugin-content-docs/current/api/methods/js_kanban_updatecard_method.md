---
sidebar_label: updateCard()
title: updateCard Method API
description: DHTMLX Kanban의 updateCard 메서드 API를 확인하세요. ID로 카드 데이터를 업데이트하는 방법을 알아보세요.
---

# updateCard()

### 설명

@short: ID로 카드 데이터를 업데이트합니다.

### 사용법

~~~jsx {}
updateCard({
    id: string | number,
    card?: object,
    replace?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 업데이트할 카드의 ID
- `card` - (선택) 카드의 새 데이터 객체입니다. 카드 매개변수 전체 목록은 [**여기**](api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 데이터 전체 교체 활성화/비활성화

    :::note
    `replace` 매개변수를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 교체됩니다. 그렇지 않으면, 메서드는 전달한 값만 업데이트합니다.
    :::

### 예제

~~~jsx {7-16}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드 데이터 업데이트
board.updateCard({
    id: 1,
    card: {
        label: "New Label",
        row: "feature",
        column: "inprogress",
        /*기타 매개변수*/
    },
    replace: true
});
~~~

**변경 로그**:
- **id** 및 **card** 매개변수가 v1.1에 추가됨
- **replace** 매개변수가 v1.3에 추가됨