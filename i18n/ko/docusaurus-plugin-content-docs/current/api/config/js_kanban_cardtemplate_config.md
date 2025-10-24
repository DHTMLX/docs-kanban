---
sidebar_label: cardTemplate
title: cardTemplate 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 cardTemplate 구성에 대해 알아볼 수 있습니다. 개발자 가이드 및 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# cardTemplate

### 설명

@short: 선택 사항입니다. 카드의 새로운 HTML 템플릿을 반환하고 적용합니다.

### 사용법

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "카드의 HTML 템플릿";
};
~~~

### 매개변수

콜백 함수는 다음 매개변수를 가진 객체를 받습니다:

- `cardFields` - 카드의 데이터 객체
- `selected` - 카드의 선택 상태
- `dragging` - 카드의 드래그 상태
- `cardShape` - 카드의 구성 객체

:::important
카드 템플릿에 컨텍스트 메뉴를 포함해야 하는 경우, 템플릿 마크업에 사용자 지정 아이콘을 지정하고 아래 예제처럼 `data-menu-id=${cardFields.id}` 표현식을 제공하세요.
:::

### 예제

~~~jsx {1-23,28}
const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
    const { label, color, id } = cardFields;
    if (selected) {
        return `
            <div class="custom-card" style="padding:20px">
                <div class="status-color" style="background:${color}"></div>
                <div data-menu-id=${id} >
                    <i class="wxi-dots-v"></i>
                </div>
                Selected:${label}
            </div>
        `;
    }
    return `
        <div class="custom-card" style="padding:20px">
            <div class="status-color" style="background:${color}"></div>
            <div data-menu-id=${id} >
                <i class="wxi-dots-v"></i>
            </div>
            ${label}
        </div>
    `;
}

new kanban.Kanban("#root", {
    cards,
    columns,
    cardTemplate: kanban.template(card => cardTemplate(card)),
    // 기타 매개변수
});
~~~

**변경 로그:** 컨텍스트 메뉴를 표시하는 기능은 v1.4에서 추가되었습니다.

**관련 문서:** [커스터마이징](guides/customization.md#custom-cards)

**관련 샘플:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)