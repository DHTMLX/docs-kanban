---
sidebar_label: DELETE /cards/{id}/vote
title: DELETE /cards/{cardId}/vote
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /cards/{cardId}/vote REST 경로에 대해 알아보실 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# DELETE `/cards/{cardId}/vote`

### 설명

@short: 카드에서 투표를 제거하고 투표를 제거한 사용자 ID를 포함한 JSON 객체를 반환합니다.

이 경로는 `/cards/{cardId}/vote`에 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `cardId`   |  number     | *필수*. 투표가 제거될 카드의 ID입니다.|

### 페이로드

전송할 페이로드는 없습니다.

### 응답

응답은 투표를 제거한 사용자의 ID를 포함하는 JSON 객체입니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 발생했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
