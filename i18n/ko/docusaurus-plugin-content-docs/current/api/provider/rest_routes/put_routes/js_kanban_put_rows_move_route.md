---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /rows/{id}/move REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/rows/{id}/move`

### 설명

@short: 행의 위치를 지정된 위치로 이동하여 변경합니다.

이 경로는 `rows/{id}/move` 엔드포인트로 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 이동할 행의 식별자입니다.|

### 페이로드

요청 본문에는 다음 속성이 포함된 JSON 객체가 있어야 합니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *선택*. 이동할 행이 위치할 앞에 있어야 하는 행의 ID입니다.|

예시:

~~~json
{
    "before": 3
}
~~~

### 응답

응답은 이동된 행의 ID를 포함하는 JSON 객체입니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 실패했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
