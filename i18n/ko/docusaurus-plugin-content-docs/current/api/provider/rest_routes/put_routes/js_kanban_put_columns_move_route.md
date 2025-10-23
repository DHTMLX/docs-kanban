---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /columns/{id}/move REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# PUT `/columns/{id}/move`

### 설명

@short: 열을 지정된 위치로 이동합니다

이 경로는 `columns/{id}/move` 경로로 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함됩니다:

| 이름       | 유형        | 설명                        |
| ---------- | ----------- | --------------------------- |
| `id`       |  number     | *필수*. 이동할 열의 ID입니다.|

### 페이로드

서버는 다음 속성을 가진 json 객체를 받기를 기대합니다:

| 이름       | 유형        | 설명                                               |
| ---------- | ----------- | -------------------------------------------------- |
| `before`   |  number     | *선택사항*. 이동할 열이 위치할 대상 열의 바로 앞 열 ID입니다.|

예시:

~~~json
{
    "before": 3
}
~~~

### 응답

서버는 이동된 열의 ID를 포함한 json 객체를 반환합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청의 성공 여부를 나타냅니다 (response.status == 200 이면 성공, response.status == 500 이면 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)