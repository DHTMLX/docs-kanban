---
sidebar_label: POST /columns
title: POST /columns
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /columns REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# POST `/columns`

### 설명

@short: 새 컬럼을 추가하고 컬럼 ID가 포함된 JSON 객체를 반환합니다.

이 경로는 `/columns` 엔드포인트로 전송된 **HTTP POST** 요청을 처리합니다.

### 요청 본문(Payload)

서버는 다음 속성을 포함하는 JSON 객체를 기대합니다:

| 이름        | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *필수*. 생성할 새 컬럼의 이름입니다.|

예시:

~~~json
{
    "label": "New column",
}
~~~

### 응답(Response)

응답에는 새로 생성된 컬럼의 ID가 포함된 JSON 객체가 포함됩니다.

예시:

~~~json
{ 
   "id": 4
}
~~~

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 발생했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
