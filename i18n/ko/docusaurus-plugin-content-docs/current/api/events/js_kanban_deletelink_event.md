---
sidebar_label: delete-link
title: delete-link 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 delete-link 이벤트에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# delete-link

### 설명

@short: 링크가 삭제될 때 발생합니다

### 사용법

~~~jsx {}
"delete-link": ({
    id: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**delete-link** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 삭제되는 링크의 ID
- `skipProvider` - (선택) 서버로의 요청을 억제할지 여부를 제어

:::info
내부 이벤트를 처리하기 위해 [**Event Bus 메서드**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다
:::

### 예제

~~~jsx {8-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// "delete-link" 이벤트 리스닝
board.api.on("delete-link", (obj) => {
    console.log(obj.id);
});
~~~

**변경 로그:** 이 이벤트는 v1.4에서 도입되었습니다
