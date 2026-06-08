---
sidebar_label: export.json()
title: json 메서드 API
description: DHTMLX Kanban의 json 메서드 API를 살펴보세요. 보드 데이터를 내보내고 JSON 작업 구조로 다루는 방법을 알아봅니다.
---

# export.json()

### 설명

@short: Kanban 데이터를 JSON 파일로 내보냅니다.

### 사용법

~~~jsx {}
export.json(): void;
~~~

:::info
이 메서드는 Kanban 데이터를 다음과 같은 구조의 JSON 파일로 내보냅니다:
~~~jsx {}
{
    "cards": [],
    "columns": [],
    "rows": []
}
~~~
:::

### 예제

~~~jsx {7}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Kanban 데이터를 JSON으로 내보내기
board.export.json(); // => { "cards": [...], "columns": [...], "rows": [] }
~~~

**변경 로그:** 이 메서드는 v1.3 버전에 추가되었습니다.