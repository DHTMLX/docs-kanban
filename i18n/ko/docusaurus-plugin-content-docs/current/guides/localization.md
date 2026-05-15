---
sidebar_label: 로컬라이제이션
title: 로컬라이제이션
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 로컬라이제이션에 대해 알아보세요. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 시도해보고, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# 로컬라이제이션

Kanban 인터페이스의 모든 라벨을 현지화할 수 있습니다. 새로운 로케일을 생성하거나 내장된 로케일을 수정한 뒤 Kanban과 Toolbar 모두에 로케일을 적용하세요.

## 기본 로케일 {#default-locale}

Kanban은 기본적으로 영어 로케일을 적용합니다.

<details>
<summary>전체 영어 로케일</summary>

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
        clockFormat: 24
    },
    formats: { // 날짜/시간 형식 패턴
        timeFormat: "%H:%i",
        dateFormat: "%m/%d/%Y",
        monthYearFormat: "%F %Y",
        yearFormat: "%Y"
    },
    core: { // 코어 요소의 번역
        ok: "OK",
        cancel: "Cancel"
    }
};
~~~

</details>

로케일 객체는 다섯 개의 최상위 섹션으로 구성됩니다:

- `lang` — 언어 코드 (예: `"en-US"`)
- `kanban` — UI 라벨 (버튼, 다이얼로그, 검색, 정렬 옵션, 링크 관계)
- `calendar` — 날짜 선택기 라벨 및 설정 (월·요일 이름, 시계 형식, 주 시작일, AM/PM 마커)
- `formats` — 날짜 및 시간 형식 패턴 (`timeFormat`, `dateFormat`, `monthYearFormat`, `yearFormat`)
- `core` — 공유 다이얼로그 버튼 (`ok`, `cancel`)

로케일 객체에는 Kanban과 Toolbar의 모든 라벨에 대한 번역이 포함되어야 합니다.

## 내장 로케일

Kanban은 다음과 같은 내장 로케일을 내보냅니다:

- `"en"` — 영어
- `"de"` — 독일어
- `"cn"` — 중국어
- `"es"` — 스페인어
- `"fr"` — 프랑스어
- `"it"` — 이탈리아어
- `"jp"` — 일본어
- `"pt"` — 포르투갈어
- `"ru"` — 러시아어

로케일은 `kanban.locales["<key>"]`를 통해 접근할 수 있습니다. Toolbar는 별도의 컴포넌트이므로 로케일을 Toolbar에 독립적으로 적용해야 합니다. 다음 코드 스니펫은 초기화 시 Kanban과 Toolbar 모두에 `"cn"` 로케일을 적용합니다:

~~~jsx {3,8}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    locale: kanban.locales["cn"] // 내장 "cn" 로케일을 초기 설정으로 사용
});
// Toolbar 생성
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: kanban.locales["cn"]
});
~~~

런타임에 로케일을 전환하려면 Kanban 인스턴스의 [`setLocale()`](api/methods/js_kanban_setlocale_method.md) 또는 Toolbar의 [`setLocale()`](api/methods/toolbar_setlocale_method.md)을 호출하세요. `null`을 전달하거나 인수 없이 호출하면 기본 영어 로케일로 재설정됩니다:

~~~jsx
// Kanban을 독일어로 전환
board.setLocale(kanban.locales["de"]);
// 기본 영어 로케일로 재설정
board.setLocale();
~~~

## 커스텀 로케일

커스텀 로케일을 적용하려면 다음을 수행하세요:

- 커스텀 로케일을 생성(또는 기본 영어 로케일 수정)하고 모든 텍스트 라벨에 대한 번역을 제공합니다
- 새 로케일을 **Kanban**에 [`locale`](api/config/js_kanban_locale_config.md) / [`setLocale()`](api/methods/js_kanban_setlocale_method.md)을 통해 적용합니다
- 새 로케일을 **Toolbar**에 [`locale`](api/config/toolbar_locale_config.md) / [`setLocale()`](api/methods/toolbar_setlocale_method.md)을 통해 적용합니다

다음 코드 스니펫은 커스텀 로케일을 정의하고 Kanban과 Toolbar 모두에 적용합니다:

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

## 예제

아래 스니펫에서는 로케일 전환 방법을 볼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
