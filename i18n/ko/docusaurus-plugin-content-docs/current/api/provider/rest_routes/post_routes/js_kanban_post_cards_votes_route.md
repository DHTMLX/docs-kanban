---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /cards/{cardId}/vote REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# POST `/cards/{cardId}/vote`

### 설명

@short: 카드에 새로운 투표를 추가하고 투표한 사용자 ID가 포함된 JSON 객체를 반환합니다.

이 경로는 `/cards/{cardId}/vote` 엔드포인트에서 **HTTP POST** 요청을 받습니다.

### 페이로드

이 요청에는 별도의 페이로드를 전송할 필요가 없습니다.

### 응답

응답은 투표한 사용자의 ID가 포함된 JSON 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 결과를 나타냅니다: 200은 요청이 성공했음을 의미하며, 500은 오류가 발생했음을 나타냅니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
