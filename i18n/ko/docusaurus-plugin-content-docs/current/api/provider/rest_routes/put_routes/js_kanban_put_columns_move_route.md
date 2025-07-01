---
sidebar_label: PUT /columns/{id}/move
title: PUT /columns/{id}/move
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /columns/{id}/move REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/columns/{id}/move`

### 설명

@short: 컬럼의 위치를 변경하여 지정한 위치로 이동합니다.

이 경로는 `columns/{id}/move`에 보내진 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 타입        | 설명                            |
| ---------- | ----------- | -------------------------------|
| `id`       |  number     | *필수*. 이동할 컬럼의 식별자입니다.|

### 페이로드

서버는 다음 속성을 포함하는 JSON 객체를 기대합니다:

| 이름       | 타입        | 설명                                         |
| ---------- | ----------- | --------------------------------------------|
| `before`   |  number     | *선택*. 이동할 컬럼이 위치할 앞 컬럼의 ID입니다.|

예시:

~~~json
{
    "before": 3
}
~~~

### 응답

서버는 이동된 컬럼의 ID를 포함하는 JSON 객체로 응답합니다.

예시:

~~~json
{
    "id": 4
}
~~~

HTTP 상태 코드는 요청 결과를 나타냅니다: 200이면 성공, 500이면 오류를 의미합니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
