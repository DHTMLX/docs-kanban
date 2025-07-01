---
sidebar_label: setLocale()
title: setLocale 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Toolbar의 setLocale 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# setLocale()

### 설명

@short: Kanban의 Toolbar를 새로운 로케일로 업데이트합니다.

### 사용법

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### 매개변수

- `null` - (선택 사항) Toolbar를 기본 로케일(*영어*)로 재설정합니다.
- `locale` - (선택 사항) Toolbar에 적용할 새로운 로케일 데이터를 포함하는 객체입니다.

:::info
Kanban의 **Toolbar**는 독립적인 컴포넌트입니다. Toolbar의 로케일만 변경하려면 `toolbar.setLocale()` 메서드를 사용하세요. 인수 없이(또는 *null*과 함께) `toolbar.setLocale()`을 호출하면 기본 로케일로 재설정됩니다. Kanban 자체의 로케일을 업데이트하려면 [`kanban.setLocale()`](/api/methods/js_kanban_setlocale_method.md) 메서드를 사용하세요.
:::

### 예제

~~~jsx {8}
// Kanban 생성
const board = new kanban.Kanban("#root", {});
// Toolbar 생성
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// Kanban에 "de" 로케일 설정
board.setLocale(de);
// Toolbar에 "de" 로케일 설정
toolbar.setLocale(de);
~~~

**변경 내역:** v1.6 버전에서 **api** 매개변수는 더 이상 사용되지 않습니다.

**관련 문서:** [Localization](/guides/localization.md)
