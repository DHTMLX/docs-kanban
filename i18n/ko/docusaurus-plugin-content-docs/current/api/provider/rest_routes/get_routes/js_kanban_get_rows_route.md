---
sidebar_label: GET /rows
title: GET /rows
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /rows REST 경로를 살펴보세요. 개발자 가이드, API 참조, 라이브 데모 및 코드 샘플을 확인하고 DHTMLX Kanban의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# GET `/rows`

### 설명

@short: 모든 행 데이터를 가져오고 행(스윔레인) 데이터 객체 배열을 포함하는 JSON 객체를 반환합니다.

이 경로는 `/rows` 엔드포인트로 보내진 **HTTP GET** 요청에 응답합니다.

### 페이로드

요청과 함께 전송할 페이로드는 없습니다.

### 응답

응답은 행 데이터 객체 배열을 포함하는 JSON 객체입니다.

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

반환되는 객체의 다른 예시는 [**rows**](/api/config/js_kanban_rows_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 발생했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버 작업하기](/guides/working_with_server.md)
- [getRows()](/api/provider/rest_methods/js_kanban_getrows_method.md)
