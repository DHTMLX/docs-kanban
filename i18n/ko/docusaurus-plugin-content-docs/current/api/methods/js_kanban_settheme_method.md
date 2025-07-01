---
sidebar_label: setTheme()
title: setTheme 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 setTheme 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제 및 라이브 데모를 실험해보며, DHTMLX Kanban의 무료 30일 체험판을 다운로드하세요.
---

# setTheme()

### 설명

@short: Kanban 보드에 새로운 테마를 동적으로 적용하여(재초기화) 변경합니다.

### 사용법

~~~jsx {}
setTheme({
    name?: string, // "material" (기본값) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### 매개변수

- `name` - (선택 사항) Kanban 보드에 적용할 테마를 지정합니다. 사용 가능한 옵션은 다음과 같습니다:
    - "material" (*기본값*)
    - "willow"
    - "willow-dark"
- `fonts` - (선택 사항) CDN에서 글꼴(wxi font)을 불러올지 여부를 제어합니다.

:::tip
초기 테마는 [`theme`](../../config/js_kanban_theme_config) 속성을 사용하여 설정할 수 있습니다.
:::

### 예제

~~~jsx {6}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    // 초기 구성 매개변수
});
// "willow" 테마 적용
board.setTheme({ name: "willow", font: false });
~~~

**변경 이력:** 이 메서드는 v1.6에서 도입되었습니다.

**관련 문서:** [스타일링](/guides/stylization)

**관련 샘플:**
- [Kanban. 테마 사용하기](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. 테마를 스타일시트로 포함하기](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. CSS 클래스로 테마 변경하기](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
