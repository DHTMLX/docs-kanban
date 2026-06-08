---
sidebar_label: setLocale()
title: setLocale Method API
description: DHTMLX Kanban의 setLocale 메서드 API를 확인하세요. 인터페이스 언어 전환 및 로컬라이제이션 구성 방법을 알아보세요.
---

# setLocale()

### 설명

@short: Kanban에 새 로케일을 적용합니다.

### 사용법

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 매개변수

- `null` - (선택 사항) 기본 로케일(*영어*)로 재설정합니다.
- `locale` - (선택 사항) 적용할 새 로케일 데이터 객체입니다.

:::info
`setLocale()` 메서드는 Kanban에만 새 로케일을 적용할 때 사용하세요. Kanban을 기본 로케일로 재설정하려면 인수 없이(또는 *null* 값과 함께) `setLocale()` 메서드를 호출하면 됩니다. Toolbar에만 새 로케일을 적용하려면 [`toolbar.setLocale()`](api/methods/toolbar_setlocale_method.md) 메서드를 사용하세요.
:::

### 예제

~~~jsx {7,9}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// Kanban에 "de" 로케일 적용
board.setLocale(kanban.locales["de"]);
// Kanban에 기본 로케일 적용
board.setLocale(); // 또는 board.setLocale(null);
~~~

**변경 내역:** 이 메서드는 v1.2에서 업데이트되었습니다.

**관련 문서:** [Localization](guides/localization.md)