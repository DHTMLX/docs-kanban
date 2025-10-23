---
sidebar_label: PUT /rows/{id}/move
title: PUT /rows/{id}/move
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /rows/{id}/move REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/rows/{id}/move`

### 설명

@short: 행을 지정된 위치로 이동합니다.

이 경로는 `rows/{id}/move` 경로에 대해 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 이동할 행의 ID입니다.|

### 페이로드

서버는 다음 속성을 가진 JSON 객체를 받기를 기대합니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `before`   |  number     | *선택 사항*. 이동할 행이 위치해야 하는 대상 행의 ID입니다.|

예시:

~~~json
{
    "before": 3
}
~~~

### 응답

서버는 이동된 행의 ID를 포함하는 JSON 객체를 반환합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200 은 성공, response.status == 500 은 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)