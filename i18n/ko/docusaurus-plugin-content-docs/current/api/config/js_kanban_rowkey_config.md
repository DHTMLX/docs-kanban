---
sidebar_label: rowKey
title: rowKey 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 rowKey 구성에 대해 알아보세요. 개발자 가이드와 API 참조를 확인하고, 코드 샘플과 라이브 데모를 실험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# rowKey

### 설명

@short: 선택 사항입니다. 카드가 행에 할당되는 방식을 지정합니다.

:::info
카드를 행(스윔레인)으로 구성하려면, 각 카드 데이터 내 행의 **ID**와 일치하는 **사용자 정의 키**를 정의해야 합니다. 그런 다음 위젯 구성에서 **rowKey** 속성을 이 *사용자 정의 키*로 설정하세요.
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
    // other parameters
});
~~~

**관련 샘플:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
