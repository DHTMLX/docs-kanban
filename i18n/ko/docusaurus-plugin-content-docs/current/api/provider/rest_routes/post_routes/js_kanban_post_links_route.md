---
sidebar_label: POST /links
title: POST /links
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /links REST 경로를 살펴보세요. 개발자 가이드, API 참조, 샘플 코드, 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# POST `/links`

### 설명

@short: 새 링크를 추가하고 새 링크 ID가 포함된 JSON 객체를 반환합니다.

이 경로는 `/links` 엔드포인트로 전송되는 **HTTP POST** 요청을 처리합니다.

### 페이로드

서버는 다음 속성을 가진 JSON 객체를 기대합니다:

| 이름         | 유형                   | 설명                           |
| ------------ | ---------------------- | ------------------------------ |
| `masterId`   | *number* 또는 *string* | *필수*. 마스터 링크의 ID입니다.    |
| `slaveId`    | *number* 또는 *string* | *필수*. 슬레이브 링크의 ID입니다.  |
| `relation`   | *string*               | *필수*. 링크가 나타내는 관계 유형을 정의합니다. |

예시:

~~~json
{
    "masterId": 1,
    "slaveId": 2,
    "relation": "relatesTo",
}
~~~

### 응답

응답은 새로 생성된 링크의 ID를 포함하는 JSON 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**:
- [서버와 작업하기](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
