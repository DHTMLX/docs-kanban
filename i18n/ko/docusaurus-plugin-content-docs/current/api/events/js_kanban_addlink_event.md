---
sidebar_label: add-link
title: add-link 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 add-link 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# add-link

### 설명

@short: 새로운 링크가 추가될 때 발생합니다.

### 사용법

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**add-link** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (선택 사항) 새 링크에 할당된 ID
- `link` - (필수) 새 링크를 나타내는 데이터 객체. 전체 링크 매개변수 목록은 [여기](/api/config/js_kanban_links_config.md)에서 확인할 수 있습니다.
- `skipProvider` - (선택 사항) 서버 요청을 방지할지 여부를 제어합니다.

:::info
내부 이벤트를 관리하려면 [**Event Bus 메서드**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
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

**변경 로그:** 이 이벤트는 v1.4에 도입되었습니다.
