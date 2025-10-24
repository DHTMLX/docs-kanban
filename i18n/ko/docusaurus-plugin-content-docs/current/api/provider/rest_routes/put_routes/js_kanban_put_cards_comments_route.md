---
sidebar_label: PUT /cards/{id}/comments/{id}
title: PUT /cards/{cardId}/comments/{commentId}
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /cards/{cardId}/comments/{cardId} REST 경로에 대해 알아보실 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# PUT `/cards/{cardId}/comments/{commentId}`

### 설명

@short: 카드 내 댓글을 업데이트하고, 업데이트된 댓글의 ID를 포함한 JSON 객체를 반환합니다.

이 경로는 `cards/{cardId}/comments/{commentId}` 경로로 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수들이 요청 라인에 포함되어 전송됩니다:

| 이름          | 타입        | 설명                                 |
| ------------- | ----------- | ---------------------------------- |
| `cardId`      | number      | *필수*. 댓글이 업데이트될 카드의 ID입니다. |
| `commentId`   | number      | *필수*. 업데이트할 댓글의 ID입니다.       |

### 페이로드

서버는 다음 속성을 포함한 JSON 객체를 받기를 기대합니다:

| 이름          | 타입        | 설명                      |
| ------------- | ----------- | ------------------------- |
| `text`        | string      | *필수*. 댓글의 텍스트 내용입니다. |

예시:

~~~json
{
    "text": "The comment's content"
}
~~~

### 응답

서버는 카드 ID가 포함된 JSON 객체를 반환합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200 은 성공, response.status == 500 은 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)