---
sidebar_label: setLocale()
title: setLocale 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setLocale 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 직접 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
---

# setLocale()

### 설명

@short: Kanban 컴포넌트의 새 로케일을 설정합니다

### 사용법

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 매개변수

- `null` - (선택 사항) 로케일을 기본값(*영어*)으로 재설정합니다
- `locale` - (선택 사항) 적용할 새 로케일 데이터를 정의하는 객체입니다

:::info
`setLocale()` 메서드는 Kanban에 대한 로케일을 업데이트하도록 설계되었습니다. Kanban을 기본 로케일로 되돌리려면 인수 없이 `setLocale()`을 호출하거나 *null*을 전달하면 됩니다. Toolbar에 대해서만 로케일을 변경하려면 [`toolbar.setLocale()`](/api/methods/toolbar_setlocale_method.md) 메서드를 사용하세요.
:::

### 예제

~~~jsx {7,9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// Kanban에 "de" 로케일 설정
board.setLocale(de);
// Kanban을 기본 로케일로 재설정
board.setLocale(); // 또는 board.setLocale(null);
~~~

**변경 로그:** 이 메서드는 버전 1.2에서 업데이트되었습니다

**관련 문서:** [Localization](/guides/localization.md)
