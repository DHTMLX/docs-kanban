---
sidebar_label: setHeaders()
title: setHeaders REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setHeaders REST 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 직접 확인하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# setHeaders()

### 설명

@short: RestDataProvider가 서버로 보내는 모든 요청에 첨부할 사용자 정의 HTTP 헤더를 설정합니다

:::info
`setHeaders()` 메서드는 서버와의 통신을 위한 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
setHeaders(headers: object): void;
~~~

### 매개변수

- `headers` - (필수) 키가 헤더 이름이고 값이 헤더 값인 객체입니다. 이 헤더들은 [`send()`](api/provider/rest_methods/js_kanban_send_method.md)를 통해 전송되는 모든 요청에서 기본 `Content-Type: application/json` 헤더에 추가됩니다.

### 예제

가장 일반적인 사용 사례는 모든 요청에 인증 토큰을 첨부하는 것입니다:

~~~jsx {4-6}
const url = "https://some_backend_url";
const restProvider = new kanban.RestDataProvider(url);

restProvider.setHeaders({
    "Remote-Token": "eyJpZCI6IjEzMzciLCJ1c2VybmFtZSI6ImJpem9uZSIsImlhdC...",
});
~~~

모든 요청이 아닌 특정 요청에만 헤더를 설정하려면, 대신 [`send()`](api/provider/rest_methods/js_kanban_send_method.md)의 네 번째 인수로 헤더를 전달하세요.

**관련 문서:** [서버와 함께 작업하기: 멀티유저 백엔드](guides/working_with_server.md/#multiuser-backend)
