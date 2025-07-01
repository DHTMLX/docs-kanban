---
sidebar_label: scroll()
title: scroll 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 scroll 메서드를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# scroll()

### 설명

@short: Kanban 뷰를 특정 요소로 이동시킵니다.

### 사용법

~~~jsx {}
scroll({
    id: string | number,
    to: "column" | "row" | "card",
    options?: object
}): void;
~~~

### 매개변수

- `id` - (필수) 스크롤할 대상 요소의 ID
- `to` - (필수) 스크롤할 요소 유형 지정; "column", "row", 또는 "card" 중 하나
- `options` - (선택) 스크롤 옵션을 포함하는 객체. 사용 가능한 모든 매개변수 목록은 [여기](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#parameters)에서 확인할 수 있습니다.

### 예제

~~~jsx {7-15}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 246인 카드로 Kanban 뷰를 스크롤
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

**변경 로그:** 이 메서드는 버전 1.2에서 도입되었습니다.
