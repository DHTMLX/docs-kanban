---
sidebar_label: getQueue()
title: getQueue REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getQueue REST 메서드에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 확인하며, DHTMLX Kanban 30일 무료 평가판을 다운로드하세요.
---

# getQueue()

### 설명

@short: RestDataProvider가 처리하는 작업의 내부 큐를 반환합니다

:::info
`getQueue()` 메서드는 서버 작업을 위한 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getQueue(): object;
~~~

### 반환값

이 메서드는 `RestDataProvider`가 서버로 전송되는 데이터 작업을 처리하는 데 사용하는 내부 `ActionQueue` 인스턴스를 반환합니다. 큐는 다음을 담당합니다:

- 보류 중인 요청이 완료될 때까지 작업을 버퍼링
- 새로 생성된 엔티티에 임시 클라이언트 측 ID를 할당하고, 서버가 응답하면 백엔드 ID로 교체

큐는 `RestDataProvider`의 다른 메서드에서 내부적으로 사용됩니다. 가장 일반적인 간접 사용은 큐의 ID 해석 로직을 기반으로 구축된 [`getIDResolver()`](api/provider/rest_methods/js_kanban_getidresolver_method.md)를 통해 이루어집니다.

일반적으로 `getQueue()`를 직접 호출할 필요는 없습니다. 클라이언트와 서버 간의 고급 사용자 정의 동기화를 구현하는 경우와 같이 큐에 세밀한 접근이 필요할 때만 이 메서드를 사용하세요.

**관련 문서:** [서버와 함께 작업하기](guides/working_with_server.md)
