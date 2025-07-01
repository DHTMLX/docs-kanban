---
sidebar_label: PUT /cards/{id}/move
title: PUT /cards/{id}/move
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /cards/{id}/move REST 경로에 대해 알아보세요. 개발자 가이드 및 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/cards/{id}/move`

### 설명

@short: 카드를 지정된 위치로 이동합니다.

이 경로는 `cards/{id}/move` 엔드포인트로 전송되는 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 URL에 다음 매개변수를 포함해야 합니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number   | *필수*. 이동할 카드의 ID입니다. 여러 카드를 이동할 경우, id를 0으로 설정하세요.|

:::info
여러 카드를 이동할 때는 `id`를 0으로 설정해야 합니다. 그렇지 않고 다른 값을 사용하면 해당 특정 ID를 가진 카드만 이동됩니다.
:::

### 페이로드

서버는 다음 속성을 가진 JSON 객체를 기대합니다:

| 이름        | 타입        | 설명 |
| ----------- | ----------- | ----------- |
| `id`        | number      |*필수*. 이동할 카드의 ID입니다. |
| `columnId`  |  number     | *필수*. 카드가 위치할 컬럼의 ID입니다.|
| `rowId`     |  number     | *필수*. 카드가 위치할 행의 ID입니다.|
| `before`    |  number     | *선택*. 이동하는 카드가 위치할 카드의 ID (이 카드 앞에 위치).|
| `batch`     |  object     | *다중 선택 시 필수*. 이동할 카드 객체 배열입니다.|

예시:

~~~json
{
    "id": 4,
    "columnId": 2,
    "rowId": 1,
    "before": "7"
}
~~~

여러 카드를 이동할 때는 `batch` 속성에 이동할 모든 카드 객체를 배열로 포함해야 합니다:

~~~json
{
    "batch": [
        {
            "id": 2,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        },
        {
            "id": 7,
            "columnId": 1,
            "rowId": 1,
            "before": "1"
        }
    ]
}
~~~

### 응답

서버는 단일 카드 이동 시 카드 ID가 포함된 JSON 객체를, 여러 카드 이동 시 ID가 0으로 설정된 JSON 객체를 응답합니다.

예시:

~~~json title="단일 카드 작업 요청에 대한 응답"
{
    "id": 4
}
~~~

~~~json title="다중 카드 작업 요청에 대한 응답"
{
    "id": 0
}
~~~

HTTP 상태 코드는 요청의 성공 여부를 나타냅니다 (response.status == 200) 또는 오류 (response.status == 500).

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
