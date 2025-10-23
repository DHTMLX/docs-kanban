---
sidebar_label: PUT /cards
title: PUT /cards
description: DHTMLX JavaScript Kanban 라이브러리의 PUT /cards REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 실행해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/cards`

### 설명

@short: 지정된 카드의 데이터를 업데이트하고 빈 JSON 객체를 반환합니다.

이 경로는 `/cards/{id}` 경로에 대한 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

다음 매개변수가 요청 라인에 포함됩니다:

| 이름        | 타입        | 설명                              |
| ----------- | ----------- | -------------------------------- |
| `id`        | number      | *필수*. 업데이트할 카드의 ID입니다.|

### 페이로드

서버는 카드 객체를 포함하는 JSON 객체를 받아야 하며, 이 객체에는 변경되지 않은 속성과 새로 추가되거나 수정된 모든 카드 속성이 포함되어야 합니다.

| 이름          | 타입        | 설명                                                                                             |
| ------------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `label`       | string      | *필수*. 업데이트할 카드의 이름입니다.                                                           |
| `description` | string      | *필수*. 카드 설명입니다.                                                                          |
| `column`      | number      | *필수*. 카드가 참조하는 열의 ID입니다.                                                          |
| `row`         | number      | *필수*. 카드가 참조하는 행의 ID입니다.                                                          |
| `start_date`  | string      | *필수*. ISO 형식 yyyy-MM-dd'T'HH:mm:ss.SSSXXX의 시작 날짜입니다.                                  |
| `end_date`    | string      | *필수*. ISO 형식 yyyy-MM-dd'T'HH:mm:ss.SSSXXX의 종료 날짜입니다.                                  |
| `progress`    | number      | *필수*. 0에서 100 사이의 값으로 진행률 표시줄 값을 나타냅니다.                                   |
| `attached`    | object      | *필수*. 첨부된 파일 데이터 배열입니다. 자세한 객체 예시는 [**cards**](api/config/js_kanban_cards_config.md)에서 확인하세요. |
| `color`       | string      | *필수*. 카드 상단 라인의 색상(HEX)입니다.                                                       |
| `priority`    | number      | *필수*. 카드 우선순위 ID입니다.                                                                  |
| `users`       | object      | *필수*. 할당된 사용자 ID 배열입니다. 자세한 객체 예시는 [**cardShape**](api/config/js_kanban_cardshape_config.md)에서 확인하세요. |

예시:

~~~json
{
    "card": {
        "label": "Drag and drop",
        "description": "",
        "column": 3,
        "row": 1,
        "start_date": null,
        "end_date": "2018-01-01T00:00:00Z",
        "progress": 100,
        "attached": [],
        "color": "#58C3FE",
        "priority": 2,
        "users": []
    },
}
~~~

카드 객체의 다른 예시는 [**cards**](api/config/js_kanban_cards_config.md) 섹션에서 확인할 수 있습니다.

### 응답

성공 시, 빈 JSON 객체가 반환됩니다.

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**: [서버와 작업하기](guides/working_with_server.md)