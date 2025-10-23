---
sidebar_label: send()
title: send() 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 send() 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# send()

### 설명

@short: 서버에 필요한 HTTP 요청을 보내며, 요청에 따라 데이터가 포함되거나 포함되지 않은 프로미스를 반환합니다.

서버로의 모든 요청은 [**RestDataProvider**](guides/working_with_server.md/#restdataprovider) 서비스의 일부인 **send()** 메서드를 통해 이루어집니다.

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

| 이름        | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `url`       | string      | *필수*. 요청을 보낼 서버 경로입니다. |
| `method`    | string      | *필수*. HTTP 메서드 타입 (GET, POST, PUT, DELETE)입니다. |
| `data`      | object      | *선택*. 서버로 전송할 매개변수입니다. 기본적으로 발생한 이벤트의 매개변수가 전송되지만, 사용자 정의 객체로 추가 매개변수를 넣을 수 있습니다. 아래 [예제](#examples)를 참고하세요. |
| `headers`   | object      | *선택*. 기본 헤더는 **Content-Type** 헤더로 *application/json*이 설정되어 있습니다. 추가적인 헤더는 **customHeaders** 매개변수로 넣을 수 있습니다. 아래 [예제](#examples)를 참고하세요. |

### 응답

이 메서드는 요청에 따라 데이터가 포함되거나 포함되지 않은 프로미스 객체를 반환합니다.

성공적인 요청 상태에서 프로미스가 반환됩니다. 요청이 실패할 경우 클라이언트는 오류를 발생시킵니다.

반환값을 구성할 수 있으며, 실패한 요청에 대한 응답 처리는 반환된 프로미스의 **catch** 메서드를 사용하세요.

~~~jsx
restDataProvider.send(url, method, data)
.then(data => {
   ... // 성공 시: 데이터를 처리
})
.catch(err => {
    ... // 오류 처리기
});
~~~

### 예제

아래 예제는 기본 매개변수 외에 추가 매개변수를 포함하여 요청을 보내는 방법을 보여줍니다:

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

다음 예제들은 **send()** 메서드에 추가 헤더를 넣는 방법을 보여줍니다.

~~~js
const customHeaders = {
    "Authorization": "Bearer",
    "Custom header": "some value",
};

board.api.on("add-cards", obj => {
    restDataProvider.send("cards", "POST", obj, customHeaders);
});
~~~

또는 아래처럼 RestDataProvider를 재정의하여 헤더를 추가할 수도 있습니다. 이렇게 하면 서버로 보내는 데이터에 대해 더 많은 제어가 가능합니다:

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

**관련 문서:** [서버와 작업하기](guides/working_with_server.md)