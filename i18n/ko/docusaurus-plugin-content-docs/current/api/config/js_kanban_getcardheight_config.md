---
sidebar_label: getCardHeight
title: getCardHeight Config API
description: DHTMLX Kanban의 getCardHeight 구성 API를 읽어보세요. 카드의 예상 높이를 반환하는 함수를 설정하는 방법을 알아볼 수 있습니다.
---

# getCardHeight

### 설명 {#description}

@short: 선택 사항입니다. 카드의 예상 높이를 반환하는 함수입니다.

`getCardHeight` 함수는 [`cardHeight`](api/config/js_kanban_cardheight_config.md) 속성이 설정되지 않고, 보드가 [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md)와 [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md)으로 구성된 경우 위젯이 카드 높이를 추정하는 데 사용됩니다. 추정 높이를 통해 DOM에서 실제 카드를 측정하기 전에 스크롤바를 올바르게 렌더링할 수 있습니다.

:::info
[`cardHeight`](api/config/js_kanban_cardheight_config.md) 속성을 설정하면 위젯은 고정 높이를 사용하며 `getCardHeight`는 호출되지 않습니다. `cardHeight`를 설정하는 것이 `renderType: "lazy"`와 `scrollType: "column"`을 함께 사용하는 권장 방법입니다.
:::

### 사용법 {#usage}

~~~jsx {}
getCardHeight?: (cardShape: object, card: object, cardWidth: number) => number;
~~~

### 매개변수 {#parameters}

콜백 함수는 다음 인수를 받습니다:

- `cardShape` - 카드의 구성 객체 ([`cardShape`](api/config/js_kanban_cardshape_config.md) 속성)
- `card` - 카드의 데이터 객체
- `cardWidth` - 현재 카드 너비(픽셀 단위)

함수는 카드의 예상 높이(픽셀 단위)를 나타내는 숫자를 반환해야 합니다.

### 기본 구성 {#default-config}

기본적으로 위젯은 [`cardShape`](api/config/js_kanban_cardshape_config.md)에 선언된 표시 필드와 카드에 저장된 데이터를 기반으로 카드 높이를 추정하는 내장 함수를 사용합니다. 이 기본값은 내장 카드 레이아웃을 사용하는 보드에서 작동합니다.

커스텀 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)을 제공하는 경우, 내장 추정 함수는 렌더링된 마크업의 실제 높이를 예측할 수 없습니다. 이 경우 렌더링된 템플릿의 높이를 반환하는 커스텀 `getCardHeight` 함수를 지정하거나, 대신 정적 [`cardHeight`](api/config/js_kanban_cardheight_config.md)를 설정하세요.

### 예제 {#example}

아래 예제는 커스텀 카드 템플릿이 있는 보드에 커스텀 `getCardHeight` 함수를 제공합니다:

~~~jsx {15-22,27}
const cardTemplate = ({ cardFields }) => {
    const { label, description } = cardFields;
    return `
        <div class="custom-card" style="padding:20px">
            <div class="custom-label">${label}</div>
            <div class="custom-description">${description || ""}</div>
        </div>
    `;
};

new kanban.Kanban("#root", {
    cards,
    columns,
    renderType: "lazy",
    scrollType: "column",
    cardTemplate: kanban.template(card => cardTemplate(card)),
    getCardHeight: (cardShape, card, cardWidth) => {
        // 커스텀 템플릿의 높이 추정
        let height = 60; // 기본 패딩 + 라벨 줄
        if (card.description) {
            height += Math.ceil(card.description.length / 40) * 18;
        }
        return height;
    },
    // 기타 매개변수
});
~~~

**관련 문서:** [구성](guides/configuration.md#rendering-and-scrolling)
