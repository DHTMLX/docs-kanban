---
sidebar_label: getColumns()
title: getColumns REST 메서드 API
description: DHTMLX Kanban의 getColumns REST 메서드 API를 확인하세요. 컬럼 데이터를 포함하는 프로미스를 가져오는 방법을 알아보세요.
---

# getColumns()

### 설명

@short: 컬럼 데이터를 포함하는 프로미스를 반환합니다.

:::info
**getColumns()** 메서드는 서버와의 작업을 위해 설계된 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getColumns(): promise;
~~~

### 반환값

**getColumns()** 메서드는 **GET** 메서드를 사용하여 서버에 요청을 보내고 컬럼 데이터가 포함된 **프로미스**를 반환합니다.

### 예제

~~~jsx {2,6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns
    });
    board.api.setNext(restProvider);
});
~~~

**관련 문서:** [서버와 작업하기](guides/working_with_server.md)