---
sidebar_label: getHandlers()
title: getHandlers REST 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 getHandlers REST 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Kanban의 30일 무료 평가판을 다운로드하실 수도 있습니다.
---

# getHandlers()

### 설명

@short: RestDataProvider가 서버에 데이터 작업을 전송할 때 사용하는 기본 액션 핸들러를 반환합니다

:::info
**getHandlers()** 메서드는 서버 연동을 위한 **RestDataProvider** 서비스의 일부입니다.
:::

### 사용법

~~~jsx {}
getHandlers(): object;
~~~

### 반환값

`getHandlers()` 메서드는 [`RestDataProvider`가 지원하는 데이터 작업](guides/working_with_server.md/#restdataprovider)을 서버로 전송하는 요청에 매핑한 객체를 반환합니다.

반환된 객체는 `RestDataProvider` 내부에서 사용하는 기본 액션 맵입니다. 이 메서드를 오버라이드하여 커스텀 핸들러를 추가하거나 기본 핸들러를 커스텀 로직으로 교체할 수 있습니다.

### 예제

기본 핸들러에 커스텀 핸들러를 추가하려면 `RestDataProvider`를 상속하는 클래스를 만들고 `getHandlers()`를 오버라이드합니다. 기본 핸들러를 유지하려면 오버라이드 내에서 반드시 `super.getHandlers()`를 호출하세요.

~~~jsx {3-11}
const url = "https://some_backend_url";

class MyDataProvider extends kanban.RestDataProvider {
    getHandlers() {
        const handlers = super.getHandlers();
        return {
            ...handlers,
            // custom or overridden handlers go here
        };
    }
}

const restProvider = new MyDataProvider(url);
board.api.setNext(restProvider);
~~~

:::warning
기본 핸들러를 오버라이드에 수동으로 복사하지 마세요. 기본 액션 맵의 내용은 버전마다 변경될 수 있습니다. `super.getHandlers()`를 호출하면 커스텀 핸들러가 항상 현재 기본값 위에 병합되는 것이 보장됩니다.
:::

**관련 문서:** [서버와 함께 작업하기](guides/working_with_server.md)
