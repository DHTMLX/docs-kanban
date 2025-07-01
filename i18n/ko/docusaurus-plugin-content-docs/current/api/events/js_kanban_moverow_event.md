---
sidebar_label: move-row
title: move-row 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 move-row 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# move-row

### 설명

@short: 행이 이동될 때 발생합니다

### 사용법

~~~jsx {}
"move-row": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**move-row** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 이동되는 행의 ID
- `before` - (필수) 이동된 행이 위치할 앞의 행 ID
- `skipProvider` - (선택) 서버 요청을 건너뛸지 여부를 제어

:::info
내부 이벤트 관리를 위해 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 사용할 수 있습니다.
:::

### 예제

~~~jsx {8-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    rows
});
// "move-row" 이벤트 리스닝
board.api.on("move-row", (obj) => {
    console.log(obj);
});
~~~

**변경 로그:** 이 이벤트는 v1.1에서 도입되었습니다
