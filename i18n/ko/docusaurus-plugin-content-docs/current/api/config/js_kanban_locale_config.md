---
sidebar_label: locale
title: locale 구성
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 locale 구성을 살펴보세요. 개발자 가이드, API 참조, 코드 예제, 라이브 데모를 확인하고 DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# locale

### 설명

@short: 선택 사항입니다. Kanban을 위한 사용자 정의 로케일을 정의하는 객체입니다.

:::info
**locale** 객체에는 Kanban과 Toolbar의 모든 레이블과 해당 번역 버전이 포함되어야 합니다.
:::

### 사용법

~~~jsx {}
locale?: object;
~~~

### 기본 구성

Kanban은 기본적으로 [**영어**](/guides/localization/#기본-로케일) 로케일을 사용합니다. 필요에 따라 사용자 정의 로케일을 지정할 수도 있습니다.

:::tip
실시간으로 로케일을 전환하려면 Kanban에서 [**setLocale()**](../../methods/js_kanban_setlocale_method) 메서드를 사용할 수 있습니다.
:::

### 예제

~~~jsx {5}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: zh // 처음에 "zh" 로케일이 적용됩니다
    // 기타 매개변수
});
~~~

**관련 문서:** [Localization](/guides/localization)

**관련 샘플:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
