---
sidebar_label: readonly
title: readonly 설정
description: DHTMLX 자바스크립트 칸반 라이브러리 문서에서 readonly 설정을 살펴보세요. 개발자 가이드, API 참조, 코드 예제와 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 체험을 이용해 보세요.
---

# readonly

### 설명

@short: 선택 사항입니다. 카드 편집, 추가, 선택 및 드래그 기능의 활성화 여부를 제어합니다.

### 사용법

~~~js {}
readonly?: boolean;
//또는
readonly?: {
    edit?: boolean,
    add?: boolean,
    select?: boolean,
    dnd?: boolean
};
~~~

### 매개변수

**readonly 모드**를 설정하는 방법은 두 가지가 있습니다: **단축형** 또는 **확장형**을 사용합니다.

**단축형**:
- `readonly` - (선택 사항) 칸반에 대해 **readonly 모드**를 켜거나 끕니다.

**확장형**:
- `readonly` - (선택 사항) 상세 설정을 포함하는 객체입니다. 다음을 포함할 수 있습니다:
    - `edit` - (선택 사항) **카드 편집** 기능을 켜거나 끕니다.
    - `add` - (선택 사항) **새 카드 추가** 기능을 켜거나 끕니다.
    - `select` - (선택 사항) **카드 선택** 기능을 켜거나 끕니다.
    - `dnd` - (선택 사항) **카드 드래그** 기능을 켜거나 끕니다.

### 기본 설정

~~~jsx {}
readonly: false // 기본적으로 readonly 모드는 꺼져 있습니다
//또는
readonly: {
    edit: true, // 편집이 활성화됨
    add: true, // 추가가 활성화됨
    select: true, // 선택이 활성화됨
    dnd: true // 드래그가 활성화됨
}
~~~

### 예제

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // 편집 비활성화
        add: true, // 추가 활성화
        select: false, // 선택 비활성화
        dnd: true // 드래그 활성화
    },
    // 기타 매개변수
});
~~~

**관련 샘플:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)
