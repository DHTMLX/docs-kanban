---
sidebar_label: GET /rows
title: GET /rows REST Route API
description: DHTMLX Kanban의 GET /rows REST route API를 확인하세요. 모든 행(스윔레인) 데이터를 JSON 배열로 가져오는 방법을 알아보세요.
---

# GET `/rows`

### 설명

@short: 모든 행에 대한 데이터를 가져오며, 행(스윔레인) 데이터가 포함된 객체 배열을 가진 json 객체를 반환합니다.

이 경로는 `/rows` 경로에 대한 **HTTP GET** 요청을 처리합니다.

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

이 경로는 행 데이터가 포함된 객체 배열을 가진 json 객체를 반환합니다.

예시:

~~~json
[
    {
        "id": 1,
        "label": "Feature",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "Task",
        "collapsed": false
    }
]
~~~

반환되는 객체의 다른 예시는 [**rows**](api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청 성공(response.status == 200) 또는 실패(response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버와 작업하기](guides/working_with_server.md)
- [getRows()](api/provider/rest_methods/js_kanban_getrows_method.md)