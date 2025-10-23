---
sidebar_label: setTheme()
title: setTheme 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setTheme 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# setTheme()

### 설명

@short: Kanban에 새로운 테마를 동적으로 적용합니다 (재초기화 포함)

### 사용법

~~~jsx {}
setTheme({
    name?: string, // "material" (기본값) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### 매개변수

- `name` - (선택 사항) Kanban에 적용할 테마 이름입니다. 사용 가능한 테마는 3가지입니다:
    - "material" (*기본값*)
    - "willow"
    - "willow-dark"
- `fonts` - (선택 사항) CDN에서 폰트(wxi 폰트)를 불러오는 것을 활성화하거나 비활성화합니다.

:::tip
초기 테마를 지정하려면 [`theme`](api/config/js_kanban_theme_config.md) 속성을 사용할 수 있습니다.
:::

### 예제

~~~jsx {6}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    // 초기 구성 매개변수
});
// "willow" 테마 설정
board.setTheme({ name: "willow", font: false });
~~~

**변경 로그:** 이 메서드는 v1.6에 추가되었습니다.

**관련 문서:** [스타일링](guides/stylization.md)

**관련 샘플:** [Kanban. CSS 클래스 변경을 통한 테마 변경](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)