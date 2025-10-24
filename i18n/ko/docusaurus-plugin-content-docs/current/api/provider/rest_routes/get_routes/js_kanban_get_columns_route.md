---
sidebar_label: GET /columns
title: GET /columns
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /columns REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# GET `/columns`

### 설명

@short: 모든 컬럼에 대한 데이터를 가져와 컬럼 데이터 객체 배열을 포함하는 json 객체를 반환합니다.

이 경로는 `/columns` 경로로 들어오는 **HTTP GET** 요청을 처리합니다.

### 요청 본문

요청 본문은 필요하지 않습니다.

### 응답

이 경로는 컬럼 데이터 객체 배열을 포함하는 json 객체를 반환합니다.

예시:

~~~json
[
    {
        "id": 1,
        "label": "Backlog",
        "collapsed": false
    },
    {
        "id": 2,
        "label": "In Progress",
        "collapsed": false
    },
    {
        "id": 3,
        "label": "Testing",
        "collapsed": false
    },
    {
        "id": 4,
        "label": "Done",
        "collapsed": false
    }
]
~~~

반환되는 객체의 다른 예시는 [**columns**](api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청 성공 시 (response.status == 200), 실패 시 (response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버와 작업하기](guides/working_with_server.md)
- [getColumns()](api/provider/rest_methods/js_kanban_getcolumns_method.md)