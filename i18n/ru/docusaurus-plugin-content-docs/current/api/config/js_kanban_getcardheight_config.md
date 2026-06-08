---
sidebar_label: getCardHeight
title: API конфигурации getCardHeight
description: Изучите API конфигурации getCardHeight для DHTMLX Kanban. Узнайте, как задать функцию, возвращающую расчётную высоту карточки.
---

# getCardHeight

### Описание

@short: Необязательно. Функция, возвращающая расчётную высоту карточки

Функция `getCardHeight` используется виджетом для оценки высоты карточек, когда свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md) не задано, а доска настроена с [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) и [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md). Расчётные высоты позволяют виджету корректно отрисовывать скроллбар до того, как фактические карточки измерены в DOM.

:::info
Если вы задаёте свойство [`cardHeight`](api/config/js_kanban_cardheight_config.md), виджет использует фиксированную высоту и функция `getCardHeight` не вызывается. Задание `cardHeight` — рекомендуемый способ сочетания `renderType: "lazy"` с `scrollType: "column"`.
:::

### Использование

~~~jsx {}
getCardHeight?: (cardShape: object, card: object, cardWidth: number) => number;
~~~

### Параметры

Функция обратного вызова принимает следующие аргументы:

- `cardShape` - объект конфигурации карточки (свойство [`cardShape`](api/config/js_kanban_cardshape_config.md))
- `card` - объект данных карточки
- `cardWidth` - текущая ширина карточки в пикселях

Функция должна возвращать число — расчётную высоту карточки в пикселях.

### Конфигурация по умолчанию

По умолчанию виджет использует встроенную функцию, которая приближённо вычисляет высоту карточки на основе видимых полей, объявленных в [`cardShape`](api/config/js_kanban_cardshape_config.md), и данных, хранящихся в карточке. Этот вариант по умолчанию подходит для досок, использующих встроенный лейаут карточек.

Если вы предоставляете кастомный [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md), встроенное приближение не может предсказать фактическую высоту отрисованной разметки. В этом случае задайте кастомную функцию `getCardHeight`, возвращающую высоту отрисованного шаблона, или вместо неё укажите статический [`cardHeight`](api/config/js_kanban_cardheight_config.md).

### Пример

В примере ниже задаётся кастомная функция `getCardHeight` для доски с кастомным шаблоном карточки:

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
        // оценить высоту кастомного шаблона
        let height = 60; // базовый отступ + строка метки
        if (card.description) {
            height += Math.ceil(card.description.length / 40) * 18;
        }
        return height;
    },
    // другие параметры
});
~~~

**Связанные статьи:** [Конфигурация](guides/configuration.md#rendering-and-scrolling)
