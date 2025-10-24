---
sidebar_label: setEdit()
title: setEdit 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setEdit 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# setEdit()

### 설명

@short: Kanban의 편집기를 토글합니다

### 사용법

~~~jsx {}
setEdit({ cardId: string | number } | null): void;
~~~

### 매개변수

이 메서드는 *null* 값 또는 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `cardId` - (필수) 편집할 카드의 ID

:::note
편집기를 닫으려면 **setEdit()** 메서드를 ***null*** 값과 함께 호출하세요
:::

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 카드 ID로 편집기 열기
board.setEdit({ cardId: 1 });
~~~

**변경 로그:** 이 메서드는 v1.2에 추가되었습니다