---
sidebar_label: POST /rows
title: POST /rows
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /rows REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# POST /rows

### 설명

@short: 새 행을 추가하고 행 ID가 포함된 JSON 객체를 응답합니다.

이 경로는 **'/rows'** 엔드포인트에 전송된 **HTTP POST** 요청을 처리합니다.

### 페이로드

서버는 다음 속성을 가진 JSON 객체를 기대합니다:

| 이름          | 타입       | 설명                                      |
| ------------- | ---------- | ----------------------------------------- |
| `label`       | string     | *필수*. 추가할 새 행의 이름입니다.          |
| `collapsed`   | boolean    | *선택*. 행(스윔레인)의 초기 상태를 나타냅니다. 기본 상태는 확장됨(**false**)입니다. **true**로 설정하면 행이 접힌 상태로 시작합니다.|

예시:

~~~json
{
    "label": "New row",
    "collapsed": "true",
}
~~~

### 응답

응답은 새로 생성된 행의 ID가 포함된 JSON 객체를 반환합니다.

예시:

~~~json
{    
   "id": 2
}
~~~

HTTP 상태 코드는 요청이 성공했음을 나타내는 경우(**200**) 또는 오류가 발생했음을 나타내는 경우(**500**)를 나타냅니다.

---

**관련 문서**: [서버와 작업하기](/guides/working_with_server.md)
