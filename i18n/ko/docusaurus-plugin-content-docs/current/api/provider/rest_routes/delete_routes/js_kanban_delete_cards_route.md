---
sidebar_label: DELETE /cards
title: DELETE /cards
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /cards REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# DELETE `/cards`

### 설명

@short: 카드의 데이터를 제거합니다

이 경로는 `/cards/{id}` 엔드포인트로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 제거할 카드의 ID입니다.|

### 페이로드

전송할 페이로드가 필요하지 않습니다.

### 응답

콘텐츠는 반환되지 않습니다. HTTP 상태 코드는 요청이 성공했는지(response.status == 200) 또는 오류가 발생했는지(response.status == 500)를 나타냅니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
