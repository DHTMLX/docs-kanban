---
sidebar_label: add-link
title: add-link Event API
description: DHTMLX Kanban의 add-link 이벤트 API를 읽어보세요. 새 링크 추가 시 발생하는 이벤트를 처리하는 방법을 알아볼 수 있습니다.
---

# add-link

### 설명

@short: 새 링크를 추가할 때 발생합니다

### 사용법

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**add-link** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받을 수 있습니다:

- `id` - (선택 사항) 새 링크의 ID
- `link` - (필수) 새 링크의 데이터 객체. 링크 매개변수 전체 목록은 [여기](api/config/js_kanban_links_config.md)에서 확인할 수 있습니다.
- `skipProvider` - (선택 사항) 서버로 요청이 전송되는 것을 방지할지 여부를 설정합니다

:::info
내부 이벤트를 처리할 때는 [**Event Bus 메서드**](api/overview/main_overview.md/#event-bus-methods)를 사용할 수 있습니다
:::

### 예제

~~~jsx {8-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// "add-link" 이벤트 구독
board.api.on("add-link", (obj) => {
    console.log(obj.link.masterId);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에 추가되었습니다