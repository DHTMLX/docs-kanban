---
sidebar_label: POST /cards/{id}/comments
title: POST /cards/{cardId}/comments
description: 이 섹션에서는 DHTMLX JavaScript Kanban 라이브러리 문서의 POST /cards/{cardId}/comments REST 경로를 다룹니다. 개발자 가이드, API 참조, 실용적인 코드 샘플, 라이브 데모를 포함하며 DHTMLX Kanban의 30일 무료 평가판도 제공합니다.
---

# POST `/cards/{cardId}/comments`

### 설명

@short: 지정된 카드에 하나 이상의 새 댓글을 추가하고, 새로 추가된 댓글의 ID가 포함된 JSON 객체를 반환합니다.

이 엔드포인트는 `/cards/{cardId}/comments`에 전송된 **HTTP POST** 요청을 처리합니다.

### 페이로드

서버는 다음 속성을 포함하는 JSON 객체를 기대합니다:

| 이름        | 유형        | 설명 |
| ----------- | ----------- | ----------- |
| `text`      | string      | *필수*. 댓글 내용입니다.|
| `date`      | object      | *필수*. 댓글 작성 날짜입니다.|

예시:

~~~json
{
    "text": "The comment content",
    "date": "2023-05-18T09:13:56.656Z",
}
~~~

### 응답

응답은 새로 추가된 댓글의 ID가 포함된 JSON 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청 결과를 나타냅니다: 200은 성공을 의미하며, 500은 오류를 나타냅니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
