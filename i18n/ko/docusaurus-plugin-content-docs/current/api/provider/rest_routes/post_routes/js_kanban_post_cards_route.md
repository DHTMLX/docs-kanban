---
sidebar_label: POST /cards
title: POST /cards
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /cards REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# POST `/cards`

### 설명

@short: 새 카드를 생성하고 새 카드 ID가 포함된 json 객체를 반환합니다.

이 경로는 `/cards` 경로로 전송된 **HTTP POST** 요청을 처리합니다.

### 페이로드

서버는 다음 속성을 포함한 json 객체를 받기를 기대합니다:

| 이름        | 유형        | 설명 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *필수*. 추가할 새 카드의 이름입니다.|
| `column`    |  number     | *필수*. 대상 열 ID입니다.|
| `row`       |  number     | *필수*. 대상 행 ID입니다.|

예시:

~~~json
{
    "label": "New card",
    "column": 2,
    "row": 1,
}
~~~

### 응답

경로는 새 카드 ID가 포함된 json 객체를 반환합니다.

예시:

~~~json
{ 
   "id": 1
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200 이면 성공, response.status == 500 이면 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)