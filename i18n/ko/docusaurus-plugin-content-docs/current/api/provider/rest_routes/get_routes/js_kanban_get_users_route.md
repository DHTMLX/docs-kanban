---
sidebar_label: GET /users
title: GET /users REST Route API
description: DHTMLX Kanban의 GET /users REST route API를 확인하세요. 모든 사용자 데이터를 JSON 배열로 가져오는 방법을 알아보세요.
---

# GET `/users`

### 설명

@short: 모든 사용자에 대한 데이터를 가져오며, 사용자 객체 배열을 포함하는 json 객체를 반환합니다.

이 경로는 `/users` 경로로 들어오는 **HTTP GET** 요청을 처리합니다.

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

이 경로는 사용자 데이터 객체 배열이 포함된 json 객체를 반환합니다.

예시:

~~~json
[
    {
        "id": 1,
        "label": "Jhon",
        "avatar": "https://serv.com/images/jhon.png"
    },
    {
        "id": 2,
        "label": "Ben",
        "avatar": "https://serv.com/images/ben.png"
    },
    {
        "id": 3,
        "label": "Alex",
        "avatar": "https://serv.com/images/alex.png"
    }
]
~~~

반환되는 객체의 또 다른 예시는 [**cardShape**](api/config/js_kanban_cardshape_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청 성공 시 (response.status == 200), 실패 시 (response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버와 작업하기](guides/working_with_server.md)
- [getUsers()](api/provider/rest_methods/js_kanban_getusers_method.md)