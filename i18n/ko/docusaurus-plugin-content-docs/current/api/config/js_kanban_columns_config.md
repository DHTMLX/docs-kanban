---
sidebar_label: columns
title: columns 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 columns 구성에 대해 살펴보세요. 개발자 가이드, API 참조, 코드 샘플, 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 체험판을 다운로드할 수 있습니다.
---

# columns

### 설명

@short: 선택 사항입니다. 컬럼 데이터를 담은 객체 배열입니다.

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
    {...} // 다른 컬럼 데이터
];
~~~

### 매개변수

각 컬럼은 다음 속성(데이터)을 사용해 구성할 수 있습니다:

- `id` - (필수) 컬럼의 고유한 **ID**입니다. 관련 메서드를 통해 컬럼을 관리할 때 사용됩니다.
- `label` - (선택 사항) 컬럼 헤더에 표시되는 라벨입니다.
- `collapsed` - (선택 사항) 컬럼의 초기 상태를 나타냅니다. ***true***면 컬럼이 접힌 상태로 시작합니다. 기본값은 ***false*** (펼쳐진 상태)입니다.
- `limit` - (선택 사항) 두 가지 유형 중 하나일 수 있습니다:
    - `number` - 컬럼에 허용되는 최대 카드 수를 설정합니다.
    - `object` - 각 행(swimlane)별 카드 수 제한을 ID로 정의합니다.
- `strictLimit` - (선택 사항) 엄격한 제한 적용을 활성화합니다. ***true***일 경우 사용자가 **limit** 매개변수에 지정된 수보다 많은 카드를 추가할 수 없습니다. 기본값은 ***false***입니다.
- `css` - (선택 사항) 개별 컬럼에 맞춤 CSS 스타일을 적용합니다.
- `overlay` - (선택 사항) 컬럼에 오버레이 레이어를 추가합니다. 예를 들어 컬럼을 덮는 템플릿을 정의할 때 유용합니다:

~~~jsx {}
    overlay: template(`
        <div class="blockOverlay disable-drop">
            <span class="disable-drop-header">드롭이 허용되지 않습니다</span>
            <span class="disable-drop-description">테스터만 이 컬럼으로 카드를 이동할 수 있습니다</span>
        </div>`)
~~~

:::info
컬럼 데이터를 동적으로 업데이트하려면 [`parse()`](../../methods/js_kanban_parse_method) 메서드를 사용할 수 있습니다.
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
            // "In progress" 컬럼 내 "Feature"와 "Task" 행별 카드 수 제한
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
                <span class="disable-drop-description">테스터만 이 컬럼으로 카드를 이동할 수 있습니다</span>
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

**변경 로그:** **css** 및 **overlay** 속성은 버전 1.4에서 도입되었습니다.

**관련 문서:**
- [데이터 다루기](/guides/working_with_data)
- [updateColumn()](/api/methods/js_kanban_updatecolumn_method.md)

**관련 샘플:**
- [Kanban. 컬럼 및 swimlane 제한](https://snippet.dhtmlx.com/2blo6hx8?tag=kanban)
- [Kanban. 맞춤 메뉴로 컬럼 색상 변경](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. 특정 컬럼으로의 드래그 앤 드롭 비활성화](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)
