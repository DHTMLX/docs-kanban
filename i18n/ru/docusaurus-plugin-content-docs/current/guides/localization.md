---
sidebar_label: Локализация
title: Локализация
description: Вы можете узнать о локализации в документации по библиотеке DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Локализация

Все надписи в интерфейсе JavaScript Kanban можно локализовать. Просто создайте новую локаль или измените существующую, затем установите её отдельно для Kanban и Toolbar (эти действия выполняются раздельно).

## Локаль по умолчанию

По умолчанию интерфейс использует **английскую** локаль:

~~~jsx
const en = {
    kanban: { // переводы надписей Kanban
        Save: "Save",
        Send: "Send",
        Close: "Close",
        Delete: "Delete",
        Name: "Name",
        Description: "Description",
        Type: "Type",
        "Start date": "Start date",
        "End date": "End date",

        Result: "Result",
        "No results": "No results",
        Search: "Search",
        "Search in": "Search in",
        "Add new row": "Add new row",
        "Add new column": "Add new column",
        "Add new card": "Add new card",
        "Add new card...": "Add new card...",
        "Edit card": "Edit card",
        Edit: "Edit",

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

        Duplicate: "Duplicate",
        "Duplicate of": "Duplicate of",

        "Relates to": "Relates to",
        "Depends on": "Depends on",
        "Is required for": "Is required for",
        Duplicates: "Duplicates",
        "Is duplicated by": "Is duplicated by",
        "Parent for": "Parent for",
        "SubTask of": "SubTask of",

        Cancel: "Cancel",
        "Link task": "Link task",
        "Select a relation": "Select a relation",
        "Select a task": "Select a task",

        "No comments yet": "No comments yet",
        "Would you like to delete this comment?":
            "Would you like to delete this comment?",
        "Would you like to delete this card?":
            "Would you like to delete this card?"
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
        timeFormat: 24
    },
    core: { // переводы основных элементов
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

## Своя локаль

Если вы хотите использовать собственную локаль, выполните следующие действия:

- Создайте свою локаль (или измените стандартную) и заполните переводы для всех нужных надписей (поддерживается любой язык)
- Установите новую локаль для **Kanban** с помощью свойства [`locale`](/api/config/js_kanban_locale_config.md) или метода [`setLocale()`](/api/methods/js_kanban_setlocale_method.md)
- Установите новую локаль для **Toolbar** через его свойство [`locale`](/api/config/toolbar_locale_config.md) или метод [`setLocale()`](/api/methods/toolbar_setlocale_method.md)

:::info
Начиная с v1.2, Kanban больше не экспортирует встроенные локали. Если вам нужны дополнительные локали, обратитесь к [**github page**](https://github.com/web-widgets/wx-kanban-locales). Вы также можете установить нужную локаль через *npm* и использовать её так:
~~~js
import { de } from "@xbs/wx-kanban-locales"
import { de as coreDe } from "@xbs/wx-core-locales"

new kanban.Kanban({
    // другие свойства
    locale: { ...coreDe, ...de },
});
~~~
:::

## Пример

Этот пример показывает, как переключаться между разными локалями:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
