---
sidebar_label: GET /users
title: GET /users
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /users REST 엔드포인트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# GET `/users`

### 설명

@short: 모든 사용자 데이터를 가져오며 사용자 객체 배열을 포함하는 JSON 객체를 반환합니다.

이 엔드포인트는 `/users` URL로 전송된 **HTTP GET** 요청을 처리합니다.

### 페이로드

전송할 페이로드가 필요 없습니다.

### 응답

응답에는 사용자 데이터 객체의 JSON 배열이 포함됩니다.

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

반환되는 객체의 또 다른 예시는 [**cardShape**](/api/config/js_kanban_cardshape_config.md)를 참조하세요.

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 발생했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버와 작업하기](/guides/working_with_server.md)
- [getUsers()](/api/provider/rest_methods/js_kanban_getusers_method.md)
