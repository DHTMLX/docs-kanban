---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /cards/{cardId}/comments/{cardId} REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/cards/{cardId}/comments/{commentId}`

### 설명

@short: 이 엔드포인트는 카드 내 기존 댓글을 업데이트하고, 업데이트된 댓글의 ID를 포함한 JSON 객체를 반환합니다.

이 경로는 `cards/{cardId}/comments/{commentId}`에 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 포함된 매개변수는 다음과 같습니다:

| 이름          | 유형        | 설명                                         |
| ----------- | ----------- | -------------------------------------------- |
| `cardId`    |  number     | *필수*. 댓글이 포함된 카드의 ID입니다.        |
| `commentId` |  number     | *필수*. 업데이트할 댓글의 ID입니다.            |

### 페이로드

서버는 다음 속성을 가진 JSON 객체를 기대합니다:

| 이름        | 유형        | 설명                                      |
| ----------- | ----------- | ----------------------------------------- |
| `text`      | string      | *필수*. 댓글의 업데이트된 내용입니다.       |

예시:

~~~json
{
    "text": "The comment's content"
}
~~~

### 응답

서버는 업데이트된 댓글의 ID를 포함한 JSON 객체로 응답합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청 결과를 나타냅니다: 200은 성공, 500은 실패를 의미합니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
