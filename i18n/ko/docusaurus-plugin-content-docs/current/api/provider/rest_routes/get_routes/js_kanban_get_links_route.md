---
sidebar_label: GET /links
title: GET /links
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /links REST 엔드포인트를 살펴보세요. 개발자 가이드에 액세스하고, API 참조를 확인하며, 코드 샘플 및 라이브 데모를 실험하고, DHTMLX Kanban 무료 30일 평가판을 다운로드할 수 있습니다.
---

# GET `/links`

### 설명

@short: 모든 링크에 대한 정보를 검색하고 링크 객체 배열이 포함된 JSON 객체를 반환합니다.

이 엔드포인트는 `/links` 경로로 전송된 **HTTP GET** 요청에 응답합니다.

### 페이로드

이 요청에는 페이로드를 전송할 필요가 없습니다.

### 응답

응답에는 모든 링크 객체가 포함된 배열이 있는 JSON 객체가 포함됩니다.

예시:

~~~json
[
    {
        "id": 1,
        "masterId": 2,
        "slaveId": 5,
        "relation": "relatesTo",
    },
    {
        "id": 2,
        "masterId": 4,
        "slaveId": 9,
        "relation": "relatesTo",
    },
]
~~~

반환된 객체의 다른 예시는 [**links**](/api/config/js_kanban_links_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 발생했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버와 작업하기](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
