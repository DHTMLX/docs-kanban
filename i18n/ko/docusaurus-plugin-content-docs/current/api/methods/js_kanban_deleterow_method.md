---
sidebar_label: deleteRow()
title: deleteRow 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 deleteRow 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# deleteRow()

### 설명

@short: Kanban 데이터 저장소에서 지정된 행을 삭제합니다.

### 사용법

~~~jsx {}
deleteRow({ id: string | number }): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 행의 식별자

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// id를 사용해 행 삭제
board.deleteRow({ id: "feature" });
~~~
