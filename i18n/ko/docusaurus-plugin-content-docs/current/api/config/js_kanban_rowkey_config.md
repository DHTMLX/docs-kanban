---
sidebar_label: rowKey
title: rowKey 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 rowKey 구성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# rowKey

### 설명

@short: 선택 사항입니다. 카드가 특정 행에 속함을 정의합니다.

:::info
카드를 행(스윔레인)으로 분배하려면, **사용자 정의 키**를 지정하고 카드 데이터 객체 내에 원하는 행의 **ID**로 설정해야 합니다. 위젯 구성 객체에서 **rowKey** 속성을 이 *사용자 정의 키*로 설정해야 합니다.
:::

### 사용법

~~~jsx {}
rowKey?: string;
~~~  

### 예제

~~~jsx {4,8,16}
const cards = [
    {
        label: "Backlog task",
        row_custom_key: "feature"
    },
    {
        label: "In progress task",
        row_custom_key: "done"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    rowKey: "row_custom_key",
    // 기타 매개변수
});
~~~

**관련 샘플:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)