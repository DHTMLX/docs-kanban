---
sidebar_label: scroll()
title: scroll Method API
description: DHTMLX Kanban의 scroll 메서드 API를 확인하세요. 보드를 특정 요소로 스크롤하는 방법을 알아봅니다.
---

# scroll()

### 설명

@short: Kanban을 지정된 요소로 스크롤합니다.

### 사용법

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### 매개변수

- `id` - (필수) 대상 요소의 ID
- `to` - (필수) 대상 요소의 유형. 가능한 값은 "column", "row", "card"입니다.
- `options` - (선택) 스크롤 옵션 객체. 스크롤 매개변수 전체 목록은 [여기](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)에서 확인할 수 있습니다.

### 예제

~~~jsx {7-15}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 246인 카드로 Kanban을 스크롤
board.scroll({
    id: 246,
    to: "card",
    options: {
        behavior: "smooth",
        block: "end",
        inline: "nearest"
    }
});
~~~

**변경 로그:** 이 메서드는 v1.2에 추가되었습니다.