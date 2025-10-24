---
sidebar_label: 링크
title: links 구성
description: DHTMLX JavaScript Kanban 라이브러리의 links 구성에 대해 문서에서 배울 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# links

### 설명

@short: 선택 사항입니다. 링크 데이터를 포함하는 객체 배열입니다.

### 사용법

~~~jsx {}
links?: [
    {
        id: string | number,
        source: string | number,
        target: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // 다른 링크 데이터
];
~~~

### 매개변수

각 링크에 대해 다음 매개변수(데이터)를 지정할 수 있습니다:

- `id` - (필수) 링크의 ID
- `source` – (필수) 링크 시작점에 있는 카드의 ID (예: “작업 A가 작업 B에 필요함”)
- `target` – (필수) 링크 끝점에 있는 카드의 ID (예: “작업 B가 작업 A에 의존함”)
- `relation` - (필수) 링크 유형. 다음 유형 중 하나를 지정할 수 있습니다:
    - ***"relatesTo"*** - 현재 작업이 다른 작업과 연결된 의존 관계를 정의합니다.
    - ***"requiredFor"*** - 한 작업이 다른 작업이 완료되어야 함을 요구하는 의존 관계를 정의합니다.
    - ***"duplicate"*** - 중복 작업 간의 의존 관계를 정의합니다.
    - ***"parent"*** - 상위(마스터) 작업과 하위(슬레이브) 작업 간의 의존 관계를 정의합니다.

:::info
링크에 대한 새 데이터를 동적으로 로드하려면 [**parse()**](api/methods/js_kanban_parse_method.md) 메서드를 사용할 수 있습니다!
:::

### 예제

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        source: 2,
        target: 5,
        relation: "relatesTo",
    }, {...} // 다른 링크 데이터
];

new kanban.Kanban("#root", {
   columns,
   cards,
   links
   // 기타 매개변수
});
~~~

**변경 로그:** 이 속성은 v1.7에서 업데이트되었습니다:
    - **masterId** 매개변수가 **source** 매개변수로 대체되었습니다.
    - **slaveId** 매개변수가 **target** 매개변수로 대체되었습니다.

**관련 문서:** [데이터 작업하기](guides/working_with_data.md)

**관련 샘플:** [Kanban. 작업 간 링크](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)