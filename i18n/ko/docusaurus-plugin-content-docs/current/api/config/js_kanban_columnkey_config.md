---
sidebar_label: columnKey
title: columnKey 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 columnKey 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# columnKey

### 설명

@short: 선택 사항입니다. 카드가 어느 열에 속하는지 정의합니다.

:::info
카드를 열에 분배하려면 키(**column** 또는 *사용자 정의* 키)를 지정하고 카드 데이터 객체 내에서 원하는 열의 **ID**로 설정해야 합니다. 위젯 구성 객체에서 **columnKey** 속성은 이 키로 설정되어야 합니다.
:::

### 사용법

~~~jsx {}
columnKey?: string;
~~~

### 기본 설정

:::note
**columnKey** 속성을 통해 열 키를 등록하지 않으면, 위젯은 기본적으로 **"column"** 키를 사용합니다! 이 경우 카드 데이터 객체 내에서 필요한 열의 **ID**를 **column** 키에 설정해야 합니다.

~~~jsx {3}
const cards = [
    {
        column: "backlog",
        // 기타 데이터
    }
];
~~~
:::

### 예제

~~~jsx {4,8,15}
const cards = [
    {
        label: "Backlog task",
        column_custom_key: "backlog"
    },
    {
        label: "In progress task",
        column_custom_key: "inprogress"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    columnKey: "column_custom_key",
    // 기타 매개변수
});
~~~