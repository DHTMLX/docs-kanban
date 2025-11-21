---
sidebar_label: columns
title: columns 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 columns 구성에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# columns

### 설명

@short: 선택 사항입니다. 열 데이터를 포함하는 객체 배열입니다.

### 사용법

~~~jsx {}
columns?: [
    {
        id: string,
        label?: string,
        collapsed?: boolean,
        limit?: number | object,
        strictLimit?: boolean,
        css?: string,
        overlay?: any
    },
    {...} // 다른 열 데이터
];
~~~

### 매개변수

각 열에 대해 다음 매개변수(데이터)를 지정할 수 있습니다:

- `id` - (필수) 열 **ID**입니다. 해당 메서드를 통해 열을 관리할 때 사용됩니다.
- `label` - (선택) 열 레이블입니다. 열 섹션에 표시됩니다.
- `collapsed` - (선택) 열의 현재 상태입니다. ***true***이면 열이 처음에 접혀 있습니다. 기본값은 ***false*** (확장 상태)입니다.
- `limit` - (선택) 이 매개변수는 두 가지 유형의 값을 가질 수 있습니다:
    - `number` - 현재 열의 카드 수 제한
    - `object` - 각 행(swimlane)의 ID별 카드 제한을 가진 객체
- `strictLimit` - (선택) 엄격한 제한 모드입니다. ***true***이면 사용자가 **limit** 매개변수를 통해 지정된 수를 초과하여 새 카드를 생성할 수 없습니다. 기본값은 ***false***입니다.
- `css` - (선택) 개별 열에 적용할 CSS 스타일을 정의합니다.
- `overlay` - (선택) 개별 열에 오버레이 레이어를 정의합니다. 다음과 같이 별도의 열을 덮는 템플릿을 지정할 수 있습니다:

    ~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">드롭이 허용되지 않습니다</span>
            <span class="disable-drop-description">테스터만 이 열로 카드를 이동할 수 있습니다</span>
        </div>`)
    ~~~

:::info
열에 대한 새 데이터를 동적으로 로드하려면 [`setConfig()`](../../methods/js_kanban_setconfig_method) 또는  [`parse()`](../../methods/js_kanban_parse_method) 메서드를 사용할 수 있습니다!
:::

### 예제

~~~jsx {1-31,34}
const columns = [
    { 
        label: "Backlog", 
        id: "backlog",
        collapsed: true,
        limit: 3,
        strictLimit: true,
        css: "red" 
    },
    { 
        label: "In progress", 
        id: "inprogress",
        collapsed: false,
        limit: {
            // "In progress" 열의 "Feature" 및 "Task" 행에 대한 카드 수 제한
            feature: 3, 
            task: 2
        },
        strictLimit: false
    },
    { 
        label: "Done", 
        id: "done",
        overlay: template(`
            <div class="blockOverlay disable-drop">
                <span class="disable-drop-header">드롭이 허용되지 않습니다</span>
                <span class="disable-drop-description">테스터만 이 열로 카드를 이동할 수 있습니다</span>
            </div>`) 
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    // 기타 매개변수
});
~~~

### 사용자 정의 스타일링

`css` 매개변수를 사용하여 열에 사용자 정의 스타일을 적용하려면, 사용자 정의 클래스에 대한 CSS 규칙을 추가하세요.

```css
.wx-header .wx-column.red,
.wx-column.red {
    background: #FFA29C;
}
```

스타일이 적용되지 않는 경우 다음을 확인하세요:

- 선택자가 충분한 컨텍스트(예: 상위 요소 및 내부 DHTMLX 클래스)를 포함하는지
- 인라인 스타일에 의해 속성이 덮어씌워졌다면 `!important`를 사용할 수 있습니다.

**변경 기록:** **css** 및 **overlay** 매개변수는 v1.4에 추가되었습니다.

**관련 문서:**
- [데이터 작업하기](guides/working_with_data.md)
- [updateColumn()](api/methods/js_kanban_updatecolumn_method.md)

**관련 샘플:**
- [Kanban. 열 및 swimlane 제한](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. 사용자 정의 메뉴를 통한 열 색상 변경](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. 특정 열로의 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
