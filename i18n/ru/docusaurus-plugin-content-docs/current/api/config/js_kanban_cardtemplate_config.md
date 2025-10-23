---
sidebar_label: cardTemplate
title: Конфигурация cardTemplate
description: Вы можете узнать о конфигурации cardTemplate в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# cardTemplate

### Описание

@short: Необязательно. Возвращает и применяет новый HTML-шаблон карточки

### Использование

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML шаблон карточки";
};
~~~

### Параметры

Функция обратного вызова принимает объект со следующими параметрами:

- `cardFields` — объект данных карточки
- `selected` — состояние выбора карточки
- `dragging` — состояние перетаскивания карточки
- `cardShape` — объект конфигурации карточки

:::important
Если необходимо включить контекстное меню в шаблон карточки, укажите в разметке шаблона пользовательскую иконку и добавьте выражение `data-menu-id=${cardFields.id}`, как показано в примере ниже.
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
    // другие параметры
});
~~~

**История изменений:** Возможность отображения контекстного меню добавлена в версии v1.4

**Связанные статьи:** [Настройка](guides/customization.md#custom-cards)

**Связанный пример:** [Kanban. Пользовательская карточка](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)