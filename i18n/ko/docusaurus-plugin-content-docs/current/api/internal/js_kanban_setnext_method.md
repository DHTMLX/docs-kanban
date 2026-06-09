---
sidebar_label: api.setNext()
title: setNext 메서드 API
description: DHTMLX Kanban의 setNext 메서드 API를 살펴보세요. 보드 API를 데이터 제공자 및 백엔드 흐름에 연결하는 방법을 알아봅니다.
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