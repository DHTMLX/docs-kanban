---
sidebar_label: export.json()
title: json 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 json 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
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