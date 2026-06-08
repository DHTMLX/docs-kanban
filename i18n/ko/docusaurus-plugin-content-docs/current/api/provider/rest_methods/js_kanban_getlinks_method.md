---
sidebar_label: getLinks()
title: getLinks REST 메서드 API
description: DHTMLX Kanban의 getLinks REST 메서드 API를 확인하세요. 링크 데이터를 포함하는 프로미스를 가져오는 방법을 알아보세요.
---

# getLinks()

### 설명

@short: 링크 데이터를 포함하는 프라미스를 반환합니다.

:::info
**getLinks()** 메서드는 서버와 작업하기 위한 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getLinks(): promise;
~~~

### 반환값

**getLinks()** 메서드는 **GET** 메서드로 서버에 요청을 보내고, 링크 데이터를 포함하는 **프라미스**를 반환합니다.

### 예제

~~~jsx {2,7}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns(),
    restProvider.getLinks(),
]).then(([cards, columns, links]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        links
    });
    board.api.setNext(restProvider);
});
~~~

**변경 로그:** 이 메서드는 v1.5에 추가되었습니다.

**관련 문서:** [서버와 작업하기](guides/working_with_server.md)