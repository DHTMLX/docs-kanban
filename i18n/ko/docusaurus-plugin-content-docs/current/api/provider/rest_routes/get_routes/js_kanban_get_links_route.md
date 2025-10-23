---
sidebar_label: GET /links
title: GET /links
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /links REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# GET `/links`

### 설명

@short: 모든 링크에 대한 데이터를 가져오고 링크 객체 배열을 포함한 json 객체를 반환합니다.

이 경로는 `/links` 경로로 이루어진 **HTTP GET** 요청을 처리합니다.

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

이 경로는 모든 링크 객체의 배열을 포함하는 json 객체를 반환합니다.

예시:

~~~json
[
    {
        "id": 1,
        "source": 2,
        "target": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "source": 4,
        "target": 9,
        "relation": "relatesTo",
    },
]
~~~

반환된 객체의 다른 예시는 [**links**](api/config/js_kanban_links_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**:
- [서버와 작업하기](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)