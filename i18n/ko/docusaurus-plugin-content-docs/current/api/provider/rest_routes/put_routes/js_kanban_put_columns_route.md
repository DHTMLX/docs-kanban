---
sidebar_label: PUT /columns
title: PUT /columns
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /columns REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# PUT `/columns`

### 설명

@short: 특정 열의 세부 정보를 업데이트하고 빈 JSON 객체를 반환합니다.

이 경로는 `/columns/{id}` 엔드포인트로 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수가 포함됩니다:

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 업데이트할 열의 ID입니다.|

### 페이로드

서버는 변경되지 않은 속성과 새로 추가되거나 수정된 속성을 포함하여 열의 모든 속성을 담은 JSON 객체를 기대합니다.

| 이름       | 유형        | 설명 |
| ---------- | ----------- | ----------- |
| `label`    |  string     | *필수*. 업데이트된 열의 이름입니다.|
| `collapsed`|  boolean    | *선택*. 열이 처음에 접혀 있는지(**true**) 또는 펼쳐져 있는지(**false**, 기본값)를 나타냅니다.|

예시:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

열 객체의 다른 예시는 [**columns**](/api/config/js_kanban_columns_config.md) 섹션에서 확인할 수 있습니다.

### 응답

요청이 성공하면 빈 JSON 객체가 반환됩니다.

HTTP 상태 코드는 결과를 나타내며, 성공 시 200, 실패 시 500입니다.

---

**관련 문서**: [서버 작업하기](/guides/working_with_server.md)
