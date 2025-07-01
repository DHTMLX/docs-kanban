---
sidebar_label: POST /cards
title: POST /cards
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /cards REST 엔드포인트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모에 접근하고 DHTMLX Kanban의 무료 30일 체험판을 이용할 수 있습니다.
---

# POST `/cards`

### 설명

@short: 새 카드를 추가하고 카드의 ID가 포함된 json 객체를 응답합니다.

이 엔드포인트는 `/cards` URL로 전송된 **HTTP POST** 요청을 처리합니다.

### 페이로드

서버는 다음 필드를 포함한 json 객체를 요구합니다:

| 이름        | 유형        | 설명 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *필수*. 생성할 카드의 제목입니다.|
| `column`    |  number     | *필수*. 카드가 배치될 열의 ID입니다.|
| `row`       |  number     | *필수*. 카드가 위치할 행의 ID입니다.|

예시:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### 응답

엔드포인트는 새로 생성된 카드의 ID가 포함된 json 객체를 응답합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 있었는지(response.status == 500)를 나타냅니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
