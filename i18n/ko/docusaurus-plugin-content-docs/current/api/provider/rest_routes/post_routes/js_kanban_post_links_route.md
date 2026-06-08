---
sidebar_label: POST /links
title: POST /links REST Route API
description: DHTMLX Kanban의 POST /links REST route API를 확인하세요. 새 링크를 생성하고 새 링크 ID를 반환하는 방법을 알아보세요.
---

# POST `/links`

### 설명

@short: 새 링크를 생성하고 새 링크 ID가 포함된 json 객체를 반환합니다.

이 경로는 `/links` 경로로 이루어진 **HTTP POST** 요청을 처리합니다.

### 페이로드

서버는 다음 속성을 가진 json 객체를 받기를 기대합니다:

| 이름        | 타입                   | 설명 |
| ----------- | ---------------------- | ----------- |
| `source`    |  *number* 또는 *string*  | *필수*. 시작 링크의 ID입니다. |
| `target`    |  *number* 또는 *string*  | *필수*. 끝 링크의 ID입니다.  |
| `relation`  |  *string*              | *필수*. 링크가 생성하는 관계의 유형입니다. |

예시:

~~~json
{
    "source": 1,
    "target": 2,
    "relation": "relatesTo"
}
~~~

### 응답

이 경로는 새 링크 ID가 포함된 json 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청이 성공했는지 (response.status == 200) 실패했는지 (response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버 작업하기](guides/working_with_server.md)
- [getLinks()](api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](api/config/js_kanban_links_config.md)