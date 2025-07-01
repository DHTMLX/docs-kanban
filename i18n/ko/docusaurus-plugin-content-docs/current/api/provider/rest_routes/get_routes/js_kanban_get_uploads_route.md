---
sidebar_label: GET /uploads
title: GET /uploads
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /uploads REST 경로를 확인하세요. 개발자 가이드와 API 참조를 탐색하고, 샘플 코드와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# GET `/uploads`

### 설명

@short: 서버에서 지정된 바이너리 파일을 가져옵니다

이 경로는 `/uploads/{id}/{name}` 엔드포인트로 전송된 **HTTP GET** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 URL에 포함됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 가져올 파일의 ID입니다.|
| `name`     |  string     | *필수*. 가져올 파일명입니다.|

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

이 경로는 요청된 바이너리 파일을 반환합니다.

HTTP 상태 코드는 성공(response.status == 200) 또는 실패(response.status == 500)를 나타냅니다.

---

**관련 문서**: [Working with server](/guides/working_with_server.md)
