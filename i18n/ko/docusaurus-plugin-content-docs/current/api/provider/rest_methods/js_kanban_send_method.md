---
sidebar_label: send()
title: send() 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 send() 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# send()

### 설명

@short: 이 메서드는 서버로 필요한 HTTP 요청을 보내는 작업을 처리하며, 요청 유형에 따라 데이터를 포함할 수 있는 프로미스를 반환합니다.

모든 서버 요청은 [**RestDataProvider**](/guides/working_with_server.md/#restdataprovider) 서비스의 일부인 **send()** 메서드를 사용하여 수행됩니다.

### 사용법

~~~js
send(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | string,
    data?: object,
    headers?: object,
): promise;
~~~

### 매개변수

| 이름       | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `url`         |  string     | *필수*. 요청을 보낼 서버 엔드포인트입니다.            |
| `method`            |string             | *필수*. 사용할 HTTP 메서드(GET, POST, PUT, DELETE)입니다.            |
| `data`  | object        | *선택*. 서버로 전송할 매개변수입니다. 기본적으로 이벤트 매개변수가 전송되지만, 사용자 정의 객체를 사용해 추가 매개변수를 포함할 수 있습니다. 아래 [예제](#예제)를 참조하세요. |
| `headers`  |object       | *선택*. 기본 헤더에는 **Content-Type**이 *application/json*으로 설정되어 있습니다. 추가 헤더는 **customHeaders** 매개변수를 통해 추가할 수 있습니다. 아래 [예제](#예제)를 참조하세요. |

### 반환값

이 메서드는 요청에 따라 데이터를 포함할 수도 있고 포함하지 않을 수도 있는 프로미스를 반환합니다.

요청이 성공하면 프로미스가 해결됩니다. 요청이 실패하면 에러가 발생합니다.

반환된 프로미스에 대해 **catch** 메서드를 사용하여 반환 데이터를 제어하고 실패한 요청을 처리할 수 있습니다.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // 성공: 수신한 데이터를 처리합니다
})
.catch(err => {
    ... // 에러 처리
});
~~~

### 예제

아래 예제는 기본 매개변수와 함께 추가 매개변수를 포함하여 요청을 보내는 방법을 보여줍니다:

~~~jsx {14-20}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

Promise.all([
    restProvider.getCards(),
    restProvider.getColumns()
]).then(([cards, columns]) => {
    const board = new kanban.Kanban("#root", {
        cards,
        columns,
        //구성 매개변수
    });

    board.api.on("add-card", obj => {
        obj.custom = "custom prop";
        restProvider.send(`cards`, "POST", obj).then(data => {
            board.api.parse({ cards: data });
            return Promise.resolve();
        });
    });

   board.api.setNext(restProvider);
});
~~~

다음 예제는 **send()** 메서드를 사용할 때 추가 헤더를 포함하는 방법을 보여줍니다.

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

또는 RestDataProvider를 확장하여 서버로 전송되는 데이터를 더 세밀하게 제어할 수 있도록 헤더를 추가할 수도 있습니다:

~~~jsx {3-8}
const url = "https://some_backend_url";

class MyDataProvider extends RestDataProvider {
    send(url, method, data, headers) {
        headers = { ...headers, "SomeToken": "abc" };
        return super.send(url, methods, data, headers);
    }
}

board.api.setNext(new MyDataProvider(url));
~~~

---

**관련 문서:** [서버와 작업하기](../../../../guides/working_with_server)
