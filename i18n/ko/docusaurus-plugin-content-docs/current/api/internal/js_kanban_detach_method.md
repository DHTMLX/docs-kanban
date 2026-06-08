---
sidebar_label: api.detach()
title: detach 메서드 API
description: DHTMLX Kanban의 detach 메서드 API를 살펴보세요. 이벤트 리스너를 제거하거나 분리하는 방법을 알아봅니다.
---

# api.detach()

## 설명

@short: 이벤트 리스너를 제거/분리할 수 있습니다.

## 사용법

~~~jsx
api.detach(tag: number | string | symbol ): void;
~~~

## 매개변수

- `tag` - 이벤트 핸들러 생성 시 식별에 사용된 태그

### 예제

~~~jsx {11}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});

board.api.on("move-card", ({ id, columnId }) => {
    console.log("카드를 이동합니다");
}, { tag: "move" });

board.api.detach("move");
~~~

**변경 로그**: 내부 메서드는 v1.7에 추가되었습니다.