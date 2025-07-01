---
sidebar_label: delete-row
title: delete-row 이벤트
description: DHTMLX JavaScript Kanban 라이브러리에서 delete-row 이벤트가 어떻게 작동하는지 알아보세요. 개발자 가이드, API 참조, 코드 예제 및 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# delete-row

### 설명

@short: 행이 삭제될 때 트리거됩니다

### 사용법

~~~jsx {}
"delete-row": ({ 
    id: string | number,
    skipProvider?: boolean 
}) => void;
~~~

### 매개변수

**delete-row** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `id` - (필수) 삭제되는 행의 ID
- `skipProvider` - (선택) 요청이 서버로 전송될지 여부를 제어

:::info
내부 이벤트 작업을 위해서는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "delete-row" 이벤트 리스닝
board.api.on("delete-row", (obj) => {
    console.log(obj.id);
});
~~~
