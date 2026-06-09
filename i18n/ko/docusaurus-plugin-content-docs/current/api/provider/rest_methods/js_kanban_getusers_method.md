---
sidebar_label: getUsers()
title: getUsers REST 메서드 API
description: DHTMLX Kanban의 getUsers REST 메서드 API를 확인하세요. 사용자 데이터를 포함하는 프로미스를 가져오는 방법을 알아보세요.
---

# getUsers()

### 설명

@short: 사용자 데이터를 포함하는 프로미스를 반환합니다.

:::info
**getUsers()** 메서드는 서버와 작업하기 위한 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getUsers(): promise;
~~~

### 반환값

**getUsers()** 메서드는 **GET** 방식으로 서버에 요청을 보내고 사용자 데이터가 포함된 **프로미스**를 반환합니다.

### 예제

~~~jsx {2,8,21}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getRows(),
    restProvider.getUsers(),
]).then(([cards, columns, rows, users]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        rows,
        rowKey: "type",
        editorShape: [
            ...kanban.defaultEditorShape,
            {
                type: "multiselect", 
                key: "users",
                label: "Users",
                values: users
            }
        ]
    });
    board.api.setNext(restProvider);
});
~~~

**변경 로그:** 이 메서드는 v1.3 버전에 추가되었습니다.

**관련 문서:** [서버와 작업하기](guides/working_with_server.md)