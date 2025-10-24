---
sidebar_label: api.setNext()
title: setNext 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setNext 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# api.setNext()

### 설명

@short: Event Bus 순서에 특정 작업을 추가할 수 있습니다.

### 사용법

~~~jsx {}
api.setNext(next: any): void;
~~~

### 매개변수

- `next` - (필수) **Event Bus** 순서에 포함할 작업  

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
데이터에 대한 작업(**추가**, **삭제** 등)을 수행하고 해당 요청을 서버에 전송하려면 **RestDataProvider**를 **Event Bus** 순서에 포함해야 합니다.
:::