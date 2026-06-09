---
sidebar_label: rowKey
title: rowKey Config API
description: DHTMLX Kanban의 rowKey 구성 문서를 읽어보세요. 카드를 스윔레인 행에 할당하는 방법을 알아볼 수 있습니다.
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