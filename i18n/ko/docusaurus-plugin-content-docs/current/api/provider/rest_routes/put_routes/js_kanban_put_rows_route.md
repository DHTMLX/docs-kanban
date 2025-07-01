---
sidebar_label: PUT /rows
title: PUT /rows
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /rows REST 경로에 대해 알아보세요. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제 및 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/rows`

### 설명

@short: 특정 행(스윔레인)의 데이터를 업데이트하고 빈 JSON 객체를 반환합니다.

이 경로는 `/rows/{id}` 엔드포인트로 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *필수*. 업데이트할 행(스윔레인)의 ID입니다.|

### 페이로드

서버는 변경되지 않은 필드와 업데이트된 필드를 모두 포함한 행의 모든 속성을 담은 JSON 객체를 기대합니다.

| 이름        | 유형        | 설명 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *필수*. 업데이트할 행의 이름입니다.|
| `collapsed` |  boolean    | *선택*. 행이 처음에 접혀 있는지(**true**) 또는 펼쳐져 있는지(**false**, 기본값) 여부를 나타냅니다.|

예시:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

다른 행 객체 예시는 [**rows**](/api/config/js_kanban_rows_config.md) 섹션을 참고하세요.

### 응답

업데이트가 성공하면 서버는 빈 JSON 객체로 응답합니다.

HTTP 상태 코드는 결과를 나타내며, 200은 요청 성공, 500은 실패를 의미합니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
