---
sidebar_label: update-column
title: update-column 이벤트
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 update-column 이벤트를 살펴보세요. 개발자 가이드, API 참조, 코드 샘플 및 라이브 데모를 확인하고 DHTMLX Kanban의 무료 30일 체험판을 다운로드하세요.
---

# update-column

### 설명

@short: 컬럼 데이터가 업데이트될 때마다 트리거됩니다.

### 사용법

~~~jsx {}
"update-column": ({
    id: string | number,
    column?: object,
    replace?: boolean,
    skipProvider?: boolean
}) => void;
~~~

### 매개변수

**update-column** 이벤트의 콜백은 다음 속성을 가진 객체를 받습니다:

- `id` - (필수) 업데이트할 컬럼을 식별합니다.
- `column` - (선택) 컬럼에 대한 새로운 데이터 객체를 제공합니다. **column** 속성 전체 목록은 [**여기**](/api/config/js_kanban_columns_config.md)에서 확인할 수 있습니다.
- `replace` - (선택) 전체 데이터 세트를 교체할지, 지정된 필드만 업데이트할지 결정합니다.

:::note
`replace`를 *true*로 설정하면 기존 데이터가 새 데이터로 완전히 교체됩니다. false이거나 생략하면 제공된 값만 업데이트됩니다.
:::

- `skipProvider` - (선택) 서버로 업데이트 요청을 보낼지 건너뛸지 제어합니다.

:::info
내부 이벤트 관리는 [**Event Bus methods**](/api/overview/main_overview.md/#이벤트-버스-메서드)를 참조하세요.
:::

### 예제

~~~jsx {7-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// "update-column" 이벤트 리스닝
board.api.on("update-column", (obj) => {
    console.log(obj);
});
~~~

**변경 로그**:
- **id** 및 **column** 매개변수는 v1.1에 도입되었습니다.
- **replace** 매개변수는 v1.3에 추가되었습니다.
