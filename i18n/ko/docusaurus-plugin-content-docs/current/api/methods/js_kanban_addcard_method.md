---
sidebar_label: addCard()
title: addCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 addCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# addCard()

### 설명

@short: Kanban 보드에 새 카드를 삽입합니다

### 사용법

~~~jsx {}
addCard({
    columnId: string | number,
    id?: string | number,
    rowId?: string | number,
    before?: string | number,
    select?: boolean,
    card?: object
}): void;
~~~

### 매개변수

- `columnId` - (필수) 카드를 추가할 컬럼의 ID  
- `id` - (선택) 새 카드의 식별자  
- `rowId` - (선택) 카드를 배치할 행의 ID  
- `before` - (선택) 새 카드를 삽입할 대상 카드의 ID  
- `select` - (선택) 추가 시 새 카드를 선택할지 여부  
- `card` - (선택) 새 카드를 나타내는 데이터 객체  

:::info
완전한 **card** 매개변수 목록은 [**여기**](/api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
:::

### 예제

~~~jsx {7-12}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "backlog" 컬럼에 새 카드 추가
board.addCard({
    id: 1,
    columnId: "backlog",
    card: { label: "New card" }
});
~~~

:::tip
**card** 객체 내부에 카드 ID를 포함시킬 수도 있습니다.
:::
