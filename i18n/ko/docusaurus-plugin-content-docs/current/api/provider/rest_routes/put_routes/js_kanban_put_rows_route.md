---
sidebar_label: PUT /rows
title: PUT /rows REST Route API
description: DHTMLX Kanban의 PUT /rows REST 경로 API를 확인하세요. 행(스윔레인) 데이터를 업데이트하는 방법을 알아보세요.
---

# PUT `/rows`

### 설명

@short: 지정된 행(스윔레인)의 데이터를 업데이트하고 빈 json 객체를 반환합니다.

이 경로는 `/rows/{id}` 경로에 대한 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       | number      | *필수*. 업데이트할 행(스윔레인)의 ID입니다.|

### 페이로드

서버는 모든 행 속성(변경되지 않은 속성 및 새로 변경된 속성 모두)을 포함한 json 객체를 받아야 합니다.

| 이름        | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `label`     |  string     | *필수*. 업데이트할 행의 이름입니다.|
| `collapsed` |  boolean    | *선택*. 행의 상태입니다: 행이 처음에 접혀 있으면 **true**, 확장된 상태(기본값)면 **false**.|

예시:

~~~json
{
    "row": {
        "label": "Row 1",
        "collapsed": false,
    }
}
~~~

행 객체의 다른 예시는 [**rows**](api/config/js_kanban_rows_config.md) 섹션에서 확인할 수 있습니다.

### 응답

성공 상태인 경우, 빈 json 객체가 반환됩니다.
  
HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200이면 성공, response.status == 500이면 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)