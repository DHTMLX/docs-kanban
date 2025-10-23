---
sidebar_label: readonly
title: readonly 구성
description: DHTMLX JavaScript Kanban 라이브러리의 readonly 구성에 대해 문서에서 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해 보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# readonly

### 설명

@short: 선택 사항입니다. 카드의 편집, 추가, 선택, 드래그 기능을 활성화/비활성화합니다.

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

**readonly 모드**를 구성하려면 **단축형** 또는 **확장형** 매개변수를 사용할 수 있습니다.

**단축형** 매개변수:
- `readonly` - (선택 사항) Kanban의 **readonly 모드**를 활성화/비활성화합니다.

**확장형** 매개변수:
- `readonly` - (선택 사항) 확장 설정을 포함하는 객체입니다. 다음 매개변수를 지정할 수 있습니다:
    - `edit` - (선택 사항) 카드의 **편집** 기능을 활성화/비활성화합니다.
    - `add` - (선택 사항) 새 카드의 **추가** 기능을 활성화/비활성화합니다.
    - `select` - (선택 사항) 카드의 **선택** 기능을 활성화/비활성화합니다.
    - `dnd` - (선택 사항) 카드의 **드래그** 기능을 활성화/비활성화합니다.

### 기본 구성

~~~jsx {}
readonly: false // readonly 모드가 비활성화됨
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