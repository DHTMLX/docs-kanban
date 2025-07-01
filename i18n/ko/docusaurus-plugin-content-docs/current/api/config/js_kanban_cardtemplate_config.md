---
sidebar_label: cardTemplate
title: cardTemplate 설정
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 cardTemplate 설정에 대해 모두 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 샘플과 라이브 데모를 실험해보며, DHTMLX Kanban의 무료 30일 체험판을 다운로드하세요.
---

# cardTemplate

### 설명

@short: 선택 사항입니다. 카드에 사용자 정의 HTML 템플릿을 생성하고 적용합니다.

### 사용법

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "카드의 HTML 템플릿";
};
~~~

### 매개변수

콜백 함수는 다음 속성을 가진 객체를 전달받습니다:

- `cardFields` - 카드의 데이터가 포함되어 있습니다
- `selected` - 카드가 선택되었는지 여부를 나타냅니다
- `dragging` - 카드가 드래그 중인지 여부를 나타냅니다
- `cardShape` - 카드의 구성 객체입니다

:::important
카드 템플릿에 컨텍스트 메뉴를 추가하려면, 마크업에 사용자 정의 아이콘을 포함하고 아래 예제처럼 `data-menu-id=${cardFields.id}` 속성을 사용하세요.
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

**변경 로그:** 컨텍스트 메뉴 지원은 v1.4에 도입되었습니다.

**관련 문서:** [커스터마이징](/guides/customization#사용자-정의-카드)

**관련 샘플:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)
