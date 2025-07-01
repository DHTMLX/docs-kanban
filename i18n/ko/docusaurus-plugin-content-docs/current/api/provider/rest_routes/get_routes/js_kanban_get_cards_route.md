---
sidebar_label: GET /cards
title: GET /cards
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 GET /cards REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# GET `/cards`

### 설명

@short: 모든 카드 정보를 가져와 카드 객체 배열을 포함하는 JSON 객체를 반환합니다.

이 경로는 `/cards` 엔드포인트에 전송된 **HTTP GET** 요청을 처리합니다.

### 페이로드

페이로드는 필요하지 않습니다.

### 응답

응답은 모든 카드 객체의 배열을 포함하는 JSON 객체를 제공합니다.

예시:

~~~json
[
    {
        "id": 4,
        "label": "Set the tasks priorities",
        "description": "",
        "column": 2,
        "row": 1,
        "start_date": "2018-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
    {
        "id": 5,
        "label": "Custom icons",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2019-01-01T00:00:00Z",
        "end_date": null,
        "progress": 0,
        "attached": [],
        "color": "#65D3B3",
        "users": []
    },
    {
        "id": 6,
        "label": "Integration with Gantt",
        "description": "",
        "column": 2,
        "row": 2,
        "start_date": "2020-01-01T00:00:00Z",
        "end_date": null,
        "progress": 75,
        "attached": [],
        "color": "#FFC975",
        "users": []
    },
]
~~~

:::note
이벤트 시작 및 종료 날짜는 ISO 형식 **yyyy-MM-dd'T'HH:mm:ss.SSSXXX**을 따라야 합니다.
:::

반환된 객체의 다른 예시는 [**cards**](/api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.

HTTP 상태 코드는 요청 결과를 나타냅니다: 성공 시 (response.status == 200), 실패 시 (response.status == 500).

---

**관련 문서**:
- [서버와 작업하기](/guides/working_with_server.md)
- [getCards()](/api/provider/rest_methods/js_kanban_getcards_method.md)
