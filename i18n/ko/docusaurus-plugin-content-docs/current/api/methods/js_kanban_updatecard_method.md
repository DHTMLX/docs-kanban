---
sidebar_label: updateCard()
title: updateCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 updateCard 메서드를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험판을 다운로드하세요.
---

# updateCard()

### 설명

@short: 카드의 ID로 해당 카드의 데이터를 업데이트합니다.

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
- `card` - (선택) 카드의 업데이트된 데이터를 포함하는 객체입니다. 카드 매개변수 전체 목록은 [**여기**](/api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 기존 데이터를 완전히 교체할지 여부를 제어합니다.

:::note
`replace`를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 덮어쓰여집니다. 그렇지 않으면 제공한 속성만 업데이트됩니다.
:::

### 예시

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

**변경 내역**:
- **id** 및 **card** 매개변수는 v1.1에서 도입되었습니다.
- **replace** 매개변수는 v1.3에서 추가되었습니다.
