---
sidebar_label: setEdit()
title: setEdit 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setEdit 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setEdit()

### 설명

@short: Kanban 카드 편집기를 켜거나 끕니다

### 사용법

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### 매개변수

이 메서드는 *null* 또는 다음 속성을 가진 객체를 인수로 받습니다:

- `cardId` - (필수) 편집하려는 카드의 ID

:::note
편집기를 닫으려면, ***null*** 인수를 사용하여 **setEdit()** 메서드를 호출하세요.
:::

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 지정한 카드 ID에 대해 편집기 열기
board.setEdit({ cardId: 1 });
~~~

**변경 로그:** 이 메서드는 v1.2 버전에 도입되었습니다
