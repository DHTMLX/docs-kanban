---
sidebar_label: cardTemplate
title: Конфигурация cardTemplate
description: Узнайте всё о конфигурации cardTemplate в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочники по API, экспериментируйте с примерами кода и живыми демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cardTemplate

### Описание

@short: Опционально. Генерирует и применяет пользовательский HTML-шаблон для карточки.

### Использование

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML шаблон карточки";
};
~~~

### Параметры

Функция обратного вызова получает объект со следующими свойствами:

- `cardFields` - содержит данные карточки
- `selected` - указывает, выбрана ли карточка
- `dragging` - указывает, перетаскивается ли карточка
- `cardShape` - объект конфигурации карточки

:::important
Чтобы добавить контекстное меню к шаблону карточки, включите в разметку пользовательскую иконку и используйте атрибут `data-menu-id=${cardFields.id}`, как показано в примере ниже.
:::

### Пример

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
                Выбрано:${label}
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
    // другие параметры
});
~~~

**История изменений:** Поддержка контекстного меню была добавлена в версии v1.4

**Связанные статьи:** [Кастомизация](/guides/customization#кастомные-карточки)

**Связанный пример:** [Kanban. Пользовательская карточка](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)
