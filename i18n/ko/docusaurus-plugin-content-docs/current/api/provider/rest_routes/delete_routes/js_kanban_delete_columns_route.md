---
sidebar_label: DELETE /columns
title: DELETE /columns
description: DHTMLX JavaScript Kanban 라이브러리의 DELETE /columns REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# DELETE `/columns`

### 설명

@short: 컬럼의 데이터를 삭제합니다.

이 경로는 `/columns/{id}` 경로로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함되어 전송됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *필수*. 삭제할 컬럼의 ID입니다.|

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

응답 데이터는 반환되지 않습니다. HTTP 상태 코드로 요청 성공 여부를 알 수 있으며, 성공 시 (response.status == 200), 실패 시 (response.status == 500)로 표시됩니다.

---

**관련 문서**: [서버 작업하기](guides/working_with_server.md)