---
sidebar_label: PUT /cards
title: PUT /cards
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 PUT /cards REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# PUT `/cards`

### 설명

@short: 지정된 카드의 데이터를 업데이트하고 빈 JSON 객체를 반환합니다.

이 경로는 `/cards/{id}` 엔드포인트에 전송된 **HTTP PUT** 요청을 처리합니다.

### 경로 매개변수

요청 경로에 다음 매개변수가 포함됩니다:

| 이름       | 타입        | 설명 |
| ---------- | ----------- | ----------- |
| `id`       |  number     | *필수*. 업데이트할 카드의 ID입니다.|

### 페이로드

서버는 카드 객체를 포함하는 JSON 객체를 기대하며, 변경되지 않은 값과 업데이트된 값을 모두 포함해야 합니다.

| 이름          | 타입        | 설명 |
| ------------- | ----------- | ----------- |
| `label`       |  string     | *필수*. 업데이트할 카드의 이름입니다.|
| `description` |  string     | *필수*. 카드의 설명입니다.|
| `column`      | number      | *필수*. 카드가 속한 컬럼의 ID입니다.|
| `row`         | number      | *필수*. 카드가 속한 행의 ID입니다.|
| `start_date`  |  string     | *필수*. ISO 형식 yyyy-MM-dd'T'HH:mm:ss.SSSXXX의 시작 날짜입니다.|
| `end_date`    |  string     | *필수*. ISO 형식 yyyy-MM-dd'T'HH:mm:ss.SSSXXX의 종료 날짜입니다.|
| `progress`    |  number     | *필수*. 0에서 100까지 범위의 진행률 값입니다.|
| `attached`    |  object     | *필수*. 첨부 파일에 관한 데이터를 담은 배열입니다. 객체 예시는 [**cards**](/api/config/js_kanban_cards_config.md)에서 확인하세요.|
| `color`       |  string     | *필수*. 카드 상단 라인의 색상으로 HEX 형식입니다.|
| `priority`    |  number     | *필수*. 카드의 우선순위 ID입니다.|
| `users`       |  object     | *필수*. 할당된 사용자 ID의 배열입니다. 객체 예시는 [**cardShape**](/api/config/js_kanban_cardshape_config.md)에서 확인하세요.|

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

카드 객체의 다른 예시는 [**cards**](/api/config/js_kanban_cards_config.md) 섹션에서 확인할 수 있습니다.

### 응답

업데이트가 성공하면 서버는 빈 JSON 객체를 반환합니다.

HTTP 상태 코드는 요청 결과를 나타내며, 성공 시 상태 200, 실패 시 상태 500입니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
