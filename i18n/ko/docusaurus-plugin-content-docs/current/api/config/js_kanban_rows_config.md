---
sidebar_label: rows
title: rows 설정
description: DHTMLX JavaScript Kanban 라이브러리의 rows 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# rows

### 설명

@short: 선택 사항입니다. 행(스윔레인) 데이터를 포함하는 객체 배열입니다.

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
스윔레인을 생성하려면 **rows** 속성 배열에 해당 데이터를 지정해야 합니다. UI를 통해 또는 [관련 API](howtos.md#how-to-work-with-rows-swimlanes)를 사용하여 스윔레인을 접거나 펼치고, 이름을 변경하고, 삭제하거나 이동할 수 있습니다.
:::

### 매개변수

각 행(스윔레인)에 대해 다음 매개변수(데이터)를 지정할 수 있습니다:

- `id` - (필수) 행(스윔레인)의 **ID**입니다. 해당 메서드를 통해 행을 관리할 때 사용됩니다.
- `label` - (선택 사항) 행(스윔레인) 레이블입니다. 행 섹션에 표시됩니다.
- `collapsed` - (선택 사항) 행(스윔레인)의 현재 상태입니다. ***true***인 경우, 행이 처음에 접혀 있습니다. 기본값은 ***false*** (펼쳐진 상태)입니다.
- `css` - (선택 사항) 개별 행에 적용할 CSS 스타일을 정의합니다.

:::info
행(스윔레인)의 새 데이터를 동적으로 로드하려면 [**setConfig()**](api/methods/js_kanban_setconfig_method.md) 또는 [**parse()**](api/methods/js_kanban_parse_method.md) 메서드를 사용할 수 있습니다!
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

**변경 내역:** ***css*** 매개변수는 v1.4에서 추가되었습니다.

**관련 문서:**
- [데이터 작업하기](guides/working_with_data.md)
- [updateRow()](api/methods/js_kanban_updaterow_method.md)

**관련 샘플:** [Kanban. Swimlanes](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
