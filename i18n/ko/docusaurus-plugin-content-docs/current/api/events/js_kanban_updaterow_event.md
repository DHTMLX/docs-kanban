---
sidebar_label: update-row
title: update-row 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 update-row 이벤트를 알아보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 탐색하고 DHTMLX Kanban을 30일 무료 체험해 보세요.
---

# update-row

### 설명

@short: 행 데이터가 업데이트될 때 발생합니다.

### 사용법

~~~jsx {}
"update-row": ({
    id: string | number,
    row?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**update-row** 이벤트의 콜백은 다음 매개변수를 포함하는 객체를 받습니다:

- `id` - (필수) 업데이트되는 행의 식별자
- `row` - (선택) 행의 새로운 데이터 객체. **row** 매개변수의 전체 목록은 [**여기**](/api/config/js_kanban_rows_config.md)에서 확인하세요.
- `replace` - (선택) 데이터가 완전히 교체될지 또는 부분적으로 업데이트될지를 제어합니다.

:::note
`replace`를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 덮어쓰여집니다. 생략하거나 false일 경우 지정된 값만 업데이트됩니다.
:::

- `skipProvider` - (선택) 서버 요청을 억제할지 여부를 제어합니다.

:::info
내부 이벤트 관리는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참고하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "update-row" 이벤트 리스닝
board.api.on("update-row", (obj) => {
    console.log(obj);
});
~~~

**변경 로그**:
- **id** 및 **row** 매개변수는 v1.1에 도입됨
- **replace** 매개변수는 v1.3에 추가됨
