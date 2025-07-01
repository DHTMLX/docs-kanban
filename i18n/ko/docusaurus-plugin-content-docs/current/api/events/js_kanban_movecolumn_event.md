---
sidebar_label: move-column
title: move-column 이벤트
description: DHTMLX 자바스크립트 칸반 라이브러리 문서에서 move-column 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# move-column

### 설명

@short: 컬럼이 이동될 때 발생하는 이벤트

### 사용법

~~~jsx {}
"move-column": ({
    id: string | number,
    before: string | number,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**move-column** 이벤트의 콜백은 다음 속성을 포함하는 객체를 받습니다:

- `id` - (필수) 이동되는 컬럼의 ID
- `before` - (필수) 이동된 컬럼이 배치될 대상 컬럼의 ID
- `skipProvider` - (선택) 서버 요청을 건너뛸지 여부를 제어

:::info
내부 이벤트 관리는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요.
:::

### 예제

~~~jsx {7-9}
// 칸반 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "move-column" 이벤트 리스닝
board.api.on("move-column", (obj) => {
    console.log(obj);
});
~~~

**변경 로그:** 이 이벤트는 v1.1에 도입되었습니다
