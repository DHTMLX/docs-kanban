---
sidebar_label: api.setNext()
title: setNext 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setNext 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# api.setNext()

### 설명

@short: 이벤트 버스(Event Bus) 순서에 특정 액션을 삽입할 수 있게 합니다.

### 사용법

~~~jsx {}
api.setNext(next: any): void;
~~~

### 매개변수

- `next` - (필수) **이벤트 버스** 순서에 추가할 액션입니다  

### 예제

~~~jsx {15}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows()
]).then(([cards, columns, rows]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "row"
    });
    board.api.setNext(restProvider);
});
~~~

:::info
**RestDataProvider**를 **이벤트 버스** 순서에 포함하는 것은 **추가**, **삭제**와 같은 데이터 작업을 처리하고 관련 요청을 서버로 전송하는 데 필요합니다.
:::
