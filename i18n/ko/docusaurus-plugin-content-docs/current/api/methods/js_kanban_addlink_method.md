---
sidebar_label: addLink()
title: addLink 메서드 API
description: DHTMLX Kanban의 addLink 메서드 API를 살펴보세요. 카드 간에 새 링크를 추가하는 방법을 알아봅니다.
---

# addLink()

### 설명

@short: Kanban에 새 링크를 추가합니다.

### 사용법

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### 매개변수

- `id` - (선택 사항) 새 링크의 ID
- `link` - (필수) 새 링크의 데이터 객체입니다. 링크 매개변수 전체 목록은 [여기](api/config/js_kanban_links_config.md)에서 확인할 수 있습니다.

### 예제

~~~jsx {7-14}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 새 링크 추가
board.addLink({
    id: 3,
    link: {
        source: 4,
        target: 6,
        relation: "relatesTo",
    }
});
~~~

**변경 로그:** 이 메서드는 v1.5에 추가되었습니다.