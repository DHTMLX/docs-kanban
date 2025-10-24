---
sidebar_label: locale
title: locale 설정
description: DHTMLX JavaScript Kanban 라이브러리의 locale 설정에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# locale

### 설명

@short: 선택 사항입니다. Kanban의 사용자 정의 locale 객체입니다.

:::info
**locale** 객체는 Kanban과 Toolbar의 모든 레이블과 해당 번역을 포함해야 합니다.
:::

### 사용법

~~~jsx {}
locale?: object;
~~~

### 기본 설정

기본적으로 Kanban은 [**영어**](guides/localization.md#default-locale) locale을 사용합니다. 사용자 정의 locale로 설정할 수도 있습니다.

:::tip
현재 locale을 동적으로 변경하려면 Kanban의 [**setLocale()**](api/methods/js_kanban_setlocale_method.md) 메서드를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // 초기 설정은 "cn" locale입니다.
    // 기타 매개변수
});
~~~

**관련 문서:** [Localization](guides/localization.md)

**관련 샘플:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)