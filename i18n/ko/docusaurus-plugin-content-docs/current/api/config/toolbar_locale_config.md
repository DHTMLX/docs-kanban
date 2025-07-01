---
sidebar_label: 로케일
title: locale 설정
description: DHTMLX JavaScript Kanban 라이브러리에서 (Toolbar) 로케일을 설정하는 방법을 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 샘플과 라이브 데모를 실험하며, DHTMLX Kanban의 30일 무료 체험을 이용해 보세요.
---

# locale

### 설명

@short: 선택 사항입니다. Toolbar에 대한 사용자 정의 로케일을 정의하는 객체입니다.

:::info
**locale** 객체는 Kanban과 Toolbar 모두에 대한 모든 레이블과 해당 번역을 포함해야 합니다.
:::

### 사용법

~~~jsx {}
locale?: object;
~~~

### 기본 설정

기본적으로 Toolbar는 [**영어**](/guides/localization/#기본-로케일) 로케일로 설정되어 있습니다. 사용자 정의 로케일을 지정할 수도 있습니다.

:::tip
실시간으로 로케일을 변경하려면 Toolbar의 [**setLocale()**](../../methods/toolbar_setlocale_method) 메서드를 사용할 수 있습니다.
:::

### 예제

~~~jsx {8}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    locale: cn
});
// Toolbar 생성
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: cn // Toolbar에 "cn" 로케일 적용
});
~~~

**관련 문서:** [Localization](/guides/localization)

**관련 샘플:** [Kanban. Localization](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
