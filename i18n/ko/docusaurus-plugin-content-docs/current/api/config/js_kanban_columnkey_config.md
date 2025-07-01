---
sidebar_label: columnKey
title: columnKey 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 columnKey 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험판을 다운로드할 수 있습니다.
---

# columnKey

### 설명

@short: 선택 사항입니다. 카드가 속하는 열을 지정합니다.

:::info
카드를 특정 열에 할당하려면 키(**column** 또는 *사용자 정의* 키)를 사용하여 카드 데이터 객체 내 해당 열의 **ID**로 설정해야 합니다. 위젯 구성에서 **columnKey** 속성은 이 키로 설정되어야 합니다.
:::

### 사용법

~~~jsx {}
columnKey?: string;
~~~

### 기본 구성

:::note
**columnKey** 속성을 사용하여 사용자 정의 열 키를 제공하지 않으면 위젯은 기본적으로 **"column"** 키를 사용합니다! 이 경우 카드 데이터 객체는 적절한 열 **ID**를 갖는 **column** 키를 포함해야 합니다.

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
