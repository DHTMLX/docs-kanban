---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments REST Route API
description: DHTMLX Kanban의 POST /cards/{cardId}/comments REST route API를 확인하세요. 카드에 새 댓글을 추가하고 새 댓글 ID를 반환하는 방법을 알아보세요.
---

# POST `/cards/{cardId}/comments`

### 설명

@short: 카드에 새 댓글을 추가하고 새로 추가된 댓글의 ID가 포함된 json 객체를 반환합니다.

이 경로는 `/cards/{cardId}/comments` 경로로 전송된 **HTTP POST** 요청을 처리합니다.

### 요청 본문 (Payload)

서버는 다음 속성을 포함하는 json 객체를 받기를 기대합니다:

| 이름        | 유형        | 설명 |
| ----------- | ----------- | ----------- |
| `text`      | string      | *필수*. 댓글의 내용입니다. |
| `date`      | object      | *필수*. 댓글 작성 날짜입니다. |

예시:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### 응답 (Response)

이 경로는 새로 추가된 댓글의 ID가 포함된 json 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200 이면 성공, response.status == 500 이면 실패).

---

**관련 문서**: [서버 작업하기](guides/working_with_server.md)