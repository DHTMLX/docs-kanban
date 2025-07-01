---
sidebar_label: links
title: links 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 links 구성에 대해 알아보세요. 개발자 가이드, API 참조, 코드 샘플과 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# links

### 설명

@short: 선택 사항입니다. 이 배열은 링크 데이터를 담고 있는 객체들의 배열입니다.

### 사용법

~~~jsx {}
links?: [
    {
        id: string | number,
        masterId: string | number,
        slaveId: string | number,
        relation: "relatesTo" | "requiredFor" | "duplicate" | "parent"
    }, {...} // 다른 링크 데이터
];
~~~

### 매개변수

각 링크는 다음 데이터 필드를 포함합니다:

- `id` - (필수) 링크의 고유 ID
- `masterId` - (필수) 링크에서 주도 역할을 하는 카드 ID (예: "Is required for")
- `slaveId` - (필수) 링크에서 수동 역할을 하는 카드 ID (예: "Depends on")
- `relation` - (필수) 링크 유형. 사용 가능한 유형은 다음과 같습니다:
    - ***"relatesTo"*** - 현재 작업이 다른 작업과 연결된 의존성을 나타냅니다
    - ***"requiredFor"*** - 한 작업이 다른 작업이 먼저 완료되어야 하는 의존성을 보여줍니다
    - ***"duplicate"*** - 중복된 작업들 간의 의존성을 표시합니다
    - ***"parent"*** - 상위(마스터) 작업과 하위(슬레이브) 작업 간의 의존성을 설정합니다

:::info
새 링크 데이터를 동적으로 로드하려면 [**parse()**](../../methods/js_kanban_parse_method) 메서드를 사용할 수 있습니다!
:::

### 예시

~~~jsx {1-8,13}
const links = [
    {
        id: 1,
        masterId: 2,
        slaveId: 5,
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

**변경 로그:** 이 속성은 v1.4 버전에서 도입되었습니다.

**관련 문서:** [데이터 작업하기](/guides/working_with_data)

**관련 샘플:** [Kanban. 작업 간 링크](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)
