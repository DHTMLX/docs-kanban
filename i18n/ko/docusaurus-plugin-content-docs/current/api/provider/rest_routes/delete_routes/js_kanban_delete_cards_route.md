---
sidebar_label: DELETE /cards
title: DELETE /cards
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 DELETE /cards REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# DELETE `/cards`

### 설명

@short: 카드의 데이터를 삭제합니다

이 경로는 `/cards/{id}` 경로에 대해 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함되어 전송됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 삭제할 카드의 ID입니다.|

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

데이터는 반환되지 않습니다. HTTP 상태 코드를 통해 요청 성공 여부를 알 수 있습니다 (response.status == 200이면 성공, response.status == 500이면 실패).

---

**관련 문서**: [서버 작업하기](guides/working_with_server.md)