---
sidebar_label: DELETE /cards/{id}/comments/{id}
title: DELETE /cards/{cardId}/comments/{commentId}
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /cards/{cardId}/comments/{commentId} REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# DELETE `/cards/{cardId}/comments/{commentId}`

### 설명

@short: 카드에서 댓글을 삭제합니다.

이 경로는 `cards/{cardId}/comments/{commentId}` 엔드포인트로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 포함되는 매개변수는 다음과 같습니다:

| 이름          | 타입        | 설명                                      |
| ------------- | ----------- | ----------------------------------------- |
| `cardId`      |  number     | *필수*. 댓글이 삭제될 카드의 식별자입니다.   |
| `commentId`   |  number     | *필수*. 삭제할 댓글의 식별자입니다.          |

### 페이로드

이 요청에는 페이로드를 전송할 필요가 없습니다.

### 응답

서버는 댓글을 삭제한 사용자의 ID를 포함한 JSON 객체로 응답합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 결과를 나타냅니다: 200은 요청이 성공했음을, 500은 오류가 발생했음을 의미합니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
