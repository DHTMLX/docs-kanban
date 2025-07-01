---
sidebar_label: DELETE /rows
title: DELETE /rows
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /rows REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# DELETE `/rows`

### 설명

@short: 데이터에서 행(스윔레인)을 제거합니다.

이 경로는 `/rows/{id}` 엔드포인트로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 제거할 행의 고유 식별자입니다.|

### 페이로드

요청에 페이로드를 포함할 필요가 없습니다.

### 응답

내용이 반환되지 않습니다. HTTP 상태 코드가 결과를 나타내며, 200 상태는 삭제가 성공했음을 의미하고, 500은 오류를 나타냅니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
