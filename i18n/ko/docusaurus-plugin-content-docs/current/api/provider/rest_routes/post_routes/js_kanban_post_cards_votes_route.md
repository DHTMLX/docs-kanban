---
sidebar_label: POST /cards/{id}/vote
title: POST /cards/{cardId}/vote REST Route API
description: DHTMLX Kanban의 POST /cards/{cardId}/vote REST route API를 확인하세요. 카드에 투표를 추가하고 투표한 사용자 ID를 반환하는 방법을 알아보세요.
---

# POST `/cards/{cardId}/vote`

### 설명

@short: 카드에 새 투표를 추가하고 투표한 사용자 ID가 포함된 json 객체를 반환합니다.

이 경로는 `/cards/{cardId}/vote` 경로로 이루어진 **HTTP POST** 요청을 처리합니다.

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

이 경로는 투표한 사용자 ID가 포함된 json 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 실패했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**: [서버 작업하기](guides/working_with_server.md)