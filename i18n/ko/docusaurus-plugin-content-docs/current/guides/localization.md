---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 로컬라이제이션에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 시도해보고, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 로컬라이제이션

JavaScript Kanban 인터페이스의 모든 라벨을 현지화할 수 있습니다. 이를 위해 새로운 로케일을 생성하거나 내장된 로케일을 수정한 뒤 Kanban과 Toolbar에 *별도로* 적용해야 합니다.

## 기본 로케일

**영어** 로케일이 기본적으로 사용됩니다:

~~~jsx
const en = {
    kanban: {
        Save: "Save",
        Close: "Close",
        Delete: "Delete",
        Name: "Name",
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
    calendar: { // 달력의 번역 및 설정
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

## 내장 로케일

Kanban은 다음과 같은 로케일을 내보냅니다:

**"en"** - 영어  
**"de"** - 독일어  
**"cn"** - 중국어  
**"es"** - 스페인어  
**"fr"** - 프랑스어  
**"it"** - 이탈리아어  
**"jp"** - 일본어  
**"pt"** - 포르투갈어  
**"ru"** - 러시아어  

내장 로케일을 내보내고 적용하는 방법은 다음과 같습니다:

```jsx {5}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // 내장 "cn" 로케일이 초기 설정됨
    // 기타 파라미터
});

// Kanban에 내장 "de" 로케일 적용
board.setLocale(kanban.locales["de"]);
```

## 커스텀 로케일

커스텀 로케일을 적용하려면 다음을 수행해야 합니다:

- 커스텀 로케일을 생성(또는 기본 로케일 수정)하고 모든 텍스트 라벨에 대한 번역을 제공합니다(필요한 언어로 설정 가능)

- 새 로케일을 **Kanban**의 [`locale`](api/config/js_kanban_locale_config.md) 속성에 지정하거나 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 메서드를 사용해 적용합니다.
- 새 로케일을 **Toolbar**의 [`locale`](api/config/toolbar_locale_config.md) 속성에 지정하거나 [`setLocale()`](api/methods/toolbar_setlocale_method.md) 메서드를 사용해 적용합니다.

## 예제

아래 스니펫에서는 여러 로케일을 전환하는 방법을 볼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>