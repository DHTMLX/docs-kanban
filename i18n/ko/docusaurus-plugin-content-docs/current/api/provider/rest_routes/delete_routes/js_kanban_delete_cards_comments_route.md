---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /cards/{cardId}/comments/{commentId} REST 경로에 대해 알아보세요. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### 설명

@short: 카드에서 댓글을 삭제합니다

이 경로는 `cards/{cardId}/comments/{commentId}` 경로로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 전달됩니다:

| 이름         | 유형        | 설명                                      |
| ----------- | ----------- | ----------------------------------------- |
| `cardId`    |  number     | *필수*. 댓글이 삭제될 카드의 ID입니다.        |
| `commentId` |  number     | *필수*. 삭제할 댓글의 ID입니다.               |

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

서버는 댓글을 삭제한 사용자의 ID가 포함된 JSON 객체를 반환합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)