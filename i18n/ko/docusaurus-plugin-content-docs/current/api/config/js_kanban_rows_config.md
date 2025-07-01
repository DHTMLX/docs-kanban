---
sidebar_label: rows
title: rows 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 rows 구성에 대해 알아보세요. 개발자 가이드, API 참조, 코드 샘플과 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 체험판을 이용해 보세요.
---

# rows

### 설명

@short: 선택 사항입니다. 행(스윔레인) 데이터를 담는 객체 배열입니다.

### 사용법

~~~jsx {}
rows?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        css?: string,
    }, {...} // 다른 행 데이터
];
~~~

:::info
스윔레인을 설정하려면 **rows** 배열에 해당 데이터를 제공합니다. 스윔레인은 UI를 통해서나 [관련 API](/howtos/#행스윔레인-작업-방법)를 사용하여 접기/펼치기, 이름 변경, 삭제, 이동할 수 있습니다.
:::

### 매개변수

각 행(스윔레인)은 다음 매개변수를 포함할 수 있습니다:

- `id` - (필수) 행(스윔레인) 메서드로 행을 제어할 때 사용하는 **ID**
- `label` - (선택) 행(스윔레인)에 표시되는 레이블
- `collapsed` - (선택) 행(스윔레인)이 처음에 접혀 있는지 여부를 나타냅니다. ***true***면 처음에 접혀 있으며 기본값은 ***false*** (펼쳐짐)입니다.
- `css` - (선택) 개별 행에 적용할 CSS 스타일

:::info
새로운 행(스윔레인) 데이터를 동적으로 불러오려면 [**parse()**](../../methods/js_kanban_parse_method) 메서드를 사용할 수 있습니다.
:::

### 예제

~~~jsx {1-4,9}
const rows = [
    { label: "Feature", id: "feature", collapsed: false, css: "red" },
    { label: "Task", id: "task", collapsed: true }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows, // 스윔레인 데이터
    // 기타 매개변수
});
~~~

**변경 내역:** ***css*** 매개변수는 v1.4에서 도입되었습니다.

**관련 문서:**
- [데이터 작업하기](/guides/working_with_data)
- [updateRow()](/api/methods/js_kanban_updaterow_method.md)

**관련 샘플:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
