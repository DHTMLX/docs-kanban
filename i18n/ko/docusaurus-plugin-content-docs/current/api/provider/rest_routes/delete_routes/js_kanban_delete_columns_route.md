---
sidebar_label: DELETE /columns
title: DELETE /columns
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /columns REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# DELETE `/columns`

### 설명

@short: 열의 데이터를 제거합니다

이 경로는 `/columns/{id}` 엔드포인트로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 제거할 열의 ID를 지정합니다.|

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

내용이 반환되지 않습니다. 상태 코드는 결과를 나타냅니다: 성공 시 response.status == 200, 실패 시 response.status == 500.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
