---
sidebar_label: duplicateCard()
title: duplicateCard 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 duplicateCard 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# duplicateCard()

### 설명

@short: 지정된 ID의 카드를 복제합니다.

### 사용법

~~~jsx {}
duplicateCard({
    id: string | number,
    card?: object,
    select?: boolean
}): void;
~~~

### 매개변수

- `id` - (필수) 복제할 카드의 ID
- `card` - (선택) 새 카드의 데이터 객체입니다. 카드 매개변수 전체 목록은 [**여기**](api/config/js_kanban_cards_config.md)에서 확인할 수 있습니다.
- `select` - (선택) 새로 추가된 카드를 선택할지 여부를 설정합니다.

### 예제

~~~jsx {7-10}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// ID가 1인 카드를 복제
board.duplicateCard({
    id: 1,
    card: { label: "Duplicated card" },
    select: true
});
~~~

**변경 로그:** `select` 매개변수는 v1.5.10 버전에 추가되었습니다.