---
sidebar_label: getRows()
title: getRows REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getRows REST 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# getRows()

### 설명

@short: 행 데이터가 포함된 프라미스를 반환합니다.

:::info
**getRows()** 메서드는 서버와의 상호작용을 위해 설계된 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getRows(): promise;
~~~

### 반환값

**getRows()** 메서드는 서버에 **GET** 요청을 보내며, 행 데이터와 함께 해결되는 **프라미스**를 반환합니다.

### 예제

~~~jsx {2,7}
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
        rowKey: "type"
    });
    board.api.setNext(restProvider);
});
~~~

**관련 문서:** [서버와 작업하기](../../../../guides/working_with_server)
