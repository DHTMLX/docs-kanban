---
sidebar_label: Локализация
title: Локализация
description: Вы можете узнать о локализации в документации к DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Локализация

Вы можете локализовать все надписи в интерфейсе Kanban. Создайте новую локаль или измените встроенную, затем примените локаль к Kanban и к Toolbar.

## Локаль по умолчанию {#default-locale}

По умолчанию Kanban использует английскую локаль.

<details>
<summary>Full English locale</summary>

~~~jsx
const en = {
    lang: "en-US",
    kanban: {
        Save: "Save",
        Close: "Close",
        Delete: "Delete",
        Description: "Description",
        Type: "Type",
        "Start date": "Start date",
        "End date": "End date",
        Files: "Files",
        B: "B",
        KB: "KB",
        MB: "MB",
        GB: "GB",
        TB: "TB",
        PB: "PB",
        EB: "EB",
        "Make cover": "Make cover",
        "Remove cover": "Remove cover",
        Comments: "Comments",
        Links: "Links",
        Result: "Result",
        "No results": "No results",
        Search: "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card...": "Add new card...",
        "Add new card": "Add new card",
        "Add a comment...": "Add a comment...",
        "Edit card": "Edit card",
        Edit: "Edit",
        Undo: "Undo",
        Redo: "Redo",

        Everywhere: "Everywhere",
        Label: "Label",
        Status: "Status",
        Color: "Color",
        Date: "Date",
        Priority: "Priority",
        Progress: "Progress",
        Users: "Users",

        Untitled: "Untitled",
        Rename: "Rename",
        "Move up": "Move up",
        "Move down": "Move down",
        "Move left": "Move left",
        "Move right": "Move right",
        Sort: "Sort",
        "Label (a-z)": "Label (a-z)",
        "Label (z-a)": "Label (z-a)",
        "Description (a-z)": "Description (a-z)",
        "Description (z-a)": "Description (z-a)",

        "Add link": "Add link",
        Duplicate: "Duplicate",
        "Duplicate of": "Duplicate of",
        "Relates to": "Relates to",
        "Depends on": "Depends on",
        "Is required for": "Is required for",
        Duplicates: "Duplicates",
        "Is duplicated by": "Is duplicated by",
        "Is parent for": "Is parent for",
        "Is subtask of": "Is subtask of",

        Cancel: "Cancel",
        "Link task": "Link task",
        "Select a relation": "Select a relation",
        "Select a task": "Select a task",

        Send: "Send",
        "Would you like to delete this comment?":
            "Would you like to delete this comment?",
        "No comments yet": "No comments yet",
        "Would you like to delete this card?":
            "Would you like to delete this card?",
    },
    calendar: { // переводы и настройки календаря
        monthFull: [
            "January", "February", "March", "April",
            "May", "June", "July", "August", 
            "September", "October", "November", "December"
        ],
        monthShort: [
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        ],
        dayFull: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        hours: "Hours",
        minutes: "Minutes",
        done: "Done",
        clear: "Clear",
        today: "Today",
        am: ["am", "AM"],
        pm: ["pm", "PM"],
        weekStart: 7,
        clockFormat: 24
    },
    formats: { // шаблоны форматов даты/времени
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        monthYearFormat: "%F %Y",
        yearFormat: "%Y"
    },
    core: { // переводы основных элементов
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

</details>

Объект локали содержит пять разделов верхнего уровня:

- `lang` — код языка (например, `"en-US"`)
- `kanban` — надписи интерфейса (кнопки, диалоги, поиск, параметры сортировки, типы связей)
- `calendar` — надписи и настройки выбора даты (названия месяцев и дней, формат часов, начало недели, маркеры AM/PM)
- `formats` — шаблоны форматов даты и времени (`timeFormat`, `dateFormat`, `monthYearFormat`, `yearFormat`)
- `core` — общие кнопки диалогов (`ok`, `cancel`)

Объект локали должен содержать переводы для всех надписей Kanban и Toolbar.

## Встроенные локали

Kanban экспортирует следующие встроенные локали:

- `"en"` — English
- `"de"` — German
- `"cn"` — Chinese
- `"es"` — Spanish
- `"fr"` — French
- `"it"` — Italian
- `"jp"` — Japanese
- `"pt"` — Portuguese
- `"ru"` — Russian

Доступ к локали осуществляется через `kanban.locales["<key>"]`. Toolbar является отдельным компонентом, поэтому локаль нужно применять к нему независимо. Следующий фрагмент кода применяет локаль `"cn"` к Kanban и Toolbar при инициализации:

~~~jsx {3,8}
// создаём Kanban
const board = new kanban.Kanban("#root", {
    locale: kanban.locales["cn"] // изначально используем встроенную локаль "cn"
});
// создаём Toolbar
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: kanban.locales["cn"]
});
~~~

Чтобы переключить локаль во время работы, вызовите [`setLocale()`](api/methods/js_kanban_setlocale_method.md) на экземпляре Kanban или [`setLocale()`](api/methods/toolbar_setlocale_method.md) на Toolbar. Передайте `null` или вызовите метод без аргументов, чтобы сбросить локаль до английской по умолчанию:

~~~jsx
// переключаем Kanban на немецкий язык
board.setLocale(kanban.locales["de"]);
// сбрасываем до английской локали по умолчанию
board.setLocale();
~~~

## Пользовательская локаль

Чтобы применить пользовательскую локаль:

- создайте пользовательскую локаль (или измените английскую по умолчанию) и укажите переводы для всех текстовых меток
- примените новую локаль к **Kanban** через [`locale`](api/config/js_kanban_locale_config.md) / [`setLocale()`](api/methods/js_kanban_setlocale_method.md)
- примените новую локаль к **Toolbar** через [`locale`](api/config/toolbar_locale_config.md) / [`setLocale()`](api/methods/toolbar_setlocale_method.md)

Следующий фрагмент кода определяет и применяет пользовательскую локаль к Kanban и Toolbar:

~~~jsx
const myLocale = {
    lang: "en-US",
    kanban: {
        Save: "Save",
        Close: "Close",
        // other Kanban labels with translations
    },
    calendar: {
        monthFull: ["January", "February", /* ... */],
        // other calendar settings
    },
    formats: {
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        // other date/time format patterns
    },
    core: {
        ok: "OK",
        cancel: "Cancel"
    }
};

const board = new kanban.Kanban("#root", { locale: myLocale });
new kanban.Toolbar("#toolbar", { api: board.api, locale: myLocale });
~~~

## Пример

В следующем примере показано переключение локалей:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
