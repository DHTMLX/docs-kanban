---
sidebar_label: GET /columns
title: GET /columns
description: 이 섹션에서는 DHTMLX JavaScript Kanban 라이브러리 문서의 GET /columns REST 경로를 다룹니다. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 포함하며 DHTMLX Kanban의 30일 무료 체험을 제공합니다.
---

# GET `/columns`

### 설명

@short: 모든 칼럼에 대한 정보를 가져오며, 칼럼 데이터 배열을 포함한 JSON 객체를 반환합니다.

이 경로는 `/columns` 엔드포인트로 전송된 **HTTP GET** 요청을 처리합니다.

### 페이로드

전송할 페이로드가 없습니다.

### 응답

응답은 칼럼 데이터 객체 배열을 포함하는 JSON 객체로 구성됩니다.

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

반환되는 객체의 다른 예시는 [**columns**](/api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청의 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**:
- [서버와 작업하기](/guides/working_with_server.md)
- [getColumns()](/api/provider/rest_methods/js_kanban_getcolumns_method.md)
