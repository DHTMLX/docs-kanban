---
sidebar_label: getColumns()
title: getColumns REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getColumns REST 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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