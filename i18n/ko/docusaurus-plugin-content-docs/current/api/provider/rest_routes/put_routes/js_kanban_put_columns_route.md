---
sidebar_label: PUT /columns
title: PUT /columns
description: DHTMLX JavaScript Kanban 라이브러리의 PUT /columns REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/columns`

### 설명

@short: 지정된 컬럼의 데이터를 업데이트하고 빈 json 객체를 반환합니다.

이 경로는 `/columns/{id}` 경로에 대한 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함됩니다:

| 이름       | 타입        | 설명                       |
| ---------- | ----------- | -------------------------- |
| `id`       |  number     | *필수*. 업데이트할 컬럼의 ID입니다.|

### 페이로드

서버는 모든 컬럼 속성(변경되지 않은 속성과 새로 추가되거나 수정된 속성 모두)을 포함한 json 객체를 받아야 합니다.

| 이름        | 타입        | 설명                                                              |
| ----------- | ----------- | ----------------------------------------------------------------- |
| `label`     |  string     | *필수*. 업데이트할 컬럼의 이름입니다.                            |
| `collapsed` |  boolean    | *선택*. 컬럼의 상태: 컬럼이 처음에 접혀 있으면 **true**, 확장 상태(기본값)면 **false**입니다.|

예시:

~~~json
{
    "column": {
        "label": "Column 1",
        "collapsed": false,
    }
}
~~~

컬럼 객체의 다른 예시는 [**columns**](api/config/js_kanban_columns_config.md) 섹션에서 확인할 수 있습니다.

### 응답

성공 상태인 경우, 빈 json 객체가 반환됩니다.

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200 이면 성공, response.status == 500 이면 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)