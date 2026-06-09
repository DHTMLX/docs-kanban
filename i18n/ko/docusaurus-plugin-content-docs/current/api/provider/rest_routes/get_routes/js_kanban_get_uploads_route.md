---
sidebar_label: GET /uploads
title: GET /uploads REST Route API
description: DHTMLX Kanban의 GET /uploads REST route API를 확인하세요. 서버에서 요청한 바이너리 파일을 가져오는 방법을 알아보세요.
---

# GET `/uploads`

### 설명

@short: 서버에서 요청한 바이너리 파일을 가져옵니다

이 경로는 `/uploads/{id}/{name}` 경로로 이루어진 **HTTP GET** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 필요한 파일의 ID입니다.|
| `name`     |  string     | *필수*. 요청한 파일의 이름입니다.|

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

이 경로는 요청한 바이너리 파일을 반환합니다.

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**: [서버 작업하기](guides/working_with_server.md)