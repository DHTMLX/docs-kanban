---
sidebar_label: getLinks()
title: getLinks REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getLinks REST 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# getLinks()

### 설명

@short: 링크 데이터를 포함하는 프로미스를 반환합니다.

:::info
**getLinks()** 메서드는 서버와의 상호작용을 위해 설계된 **RestDataProvider** 서비스에 속합니다.
:::

### 사용법

~~~jsx {}
getLinks(): promise;
~~~

### 반환값

**getLinks()** 메서드는 서버에 **GET** 요청을 보내며, 링크 데이터와 함께 해결되는 **프로미스**를 반환합니다.

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

**변경 로그:** 이 메서드는 버전 1.5에서 도입되었습니다.

**관련 문서:** [서버와 작업하기](../../../../guides/working_with_server)
