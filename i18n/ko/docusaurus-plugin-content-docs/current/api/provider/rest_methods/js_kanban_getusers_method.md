---
sidebar_label: getUsers()
title: getUsers REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getUsers REST 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getUsers()

### 설명

@short: 사용자 데이터를 포함하는 프로미스를 반환합니다.

:::info
**getUsers()** 메서드는 서버 통신을 위해 설계된 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getUsers(): promise;
~~~

### 반환값

**getUsers()** 메서드는 서버에 **GET** 요청을 보내고, 사용자 데이터로 해결되는 **프로미스**를 반환합니다.

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

**변경 로그:** 이 메서드는 버전 1.3에서 도입되었습니다.

**관련 문서:** [서버와 작업하기](../../../../guides/working_with_server)
