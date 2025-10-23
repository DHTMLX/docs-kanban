---
sidebar_label: DELETE /rows
title: DELETE /rows
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /rows REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# DELETE `/rows`

### 설명

@short: 행(스윔레인)의 데이터를 삭제합니다.

이 경로는 `/rows/{id}` 경로로 이루어진 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 전송됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *필수*. 삭제할 행의 ID입니다.|

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

데이터는 반환되지 않습니다. HTTP 상태 코드를 통해 요청 성공 여부를 알 수 있습니다 (response.status == 200이면 성공, response.status == 500이면 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)