---
sidebar_label: DELETE /links
title: DELETE /links
description: 이 섹션에서는 DHTMLX JavaScript Kanban 라이브러리의 DELETE /links REST 경로를 다룹니다. 개발자 가이드, API 참조, 예제, 라이브 데모, 그리고 DHTMLX Kanban의 30일 무료 평가판을 포함합니다.
---

# DELETE `/links`

### 설명

@short: 링크 항목을 제거합니다

이 엔드포인트는 `/links/{id}`로 전송된 **HTTP DELETE** 요청을 처리합니다.

### 경로 매개변수

요청 URL에는 다음 매개변수가 포함됩니다:

| 이름  | 타입    | 설명                                 |
| ----- | ------- | ------------------------------------ |
| `id`  | number  | *필수*. 삭제하려는 링크의 식별자입니다. |

### 페이로드

이 요청에는 페이로드가 필요하지 않습니다.

### 응답

내용이 반환되지 않습니다. HTTP 상태 코드는 성공(response.status == 200) 또는 실패(response.status == 500)를 나타냅니다.

---

**관련 문서**:
- [서버 작업하기](/guides/working_with_server.md)
- [getLinks()](/api/provider/rest_methods/js_kanban_getlinks_method.md)
- [links](/api/config/js_kanban_links_config.md)
