---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 로컬라이제이션에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드해보세요.
---

# 로컬라이제이션

JavaScript Kanban 인터페이스의 모든 라벨은 로컬라이즈할 수 있습니다. 새로운 로케일을 설정하거나 기존 로케일을 수정한 후, Kanban과 Toolbar에 각각 별도로 적용해주면 됩니다.

## 기본 로케일

기본적으로 인터페이스는 **영어** 로케일을 사용합니다:

~~~jsx
const en = {
    kanban: { // Kanban 라벨의 번역
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
    calendar: { // 캘린더 번역 및 설정
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
    core: { // 코어 요소의 번역
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

## 사용자 정의 로케일

자체 로케일을 사용하려면 아래의 절차를 따라주세요:

- 사용자 정의 로케일을 만들거나 기본 로케일을 수정한 뒤, 사용하려는 모든 라벨에 대한 번역을 입력합니다. (어떤 언어도 가능합니다)

- **Kanban**에서 [`locale`](/api/config/js_kanban_locale_config.md) 속성 또는 [`setLocale()`](/api/methods/js_kanban_setlocale_method.md) 메서드를 사용하여 새 로케일을 설정합니다.
- **Toolbar**에서도 [`locale`](/api/config/toolbar_locale_config.md) 속성 또는 [`setLocale()`](/api/methods/toolbar_setlocale_method.md) 메서드를 사용하여 새 로케일을 설정합니다.

:::info
v1.2부터 Kanban은 내장 로케일을 더 이상 내보내지 않습니다. 더 많은 로케일이 필요하다면 [**github page**](https://github.com/web-widgets/wx-kanban-locales)를 참고하세요. 원하는 로케일을 *npm*으로 설치하여 아래와 같이 사용할 수 있습니다:
~~~js
import { de } from "@xbs/wx-kanban-locales"
import { de as coreDe } from "@xbs/wx-core-locales"

new kanban.Kanban({
    // 기타 속성
    locale: { ...coreDe, ...de },
});
~~~
:::

## 예제

아래 코드 스니펫은 여러 로케일 간 전환 방법을 보여줍니다:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
