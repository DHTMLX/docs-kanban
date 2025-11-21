---
sidebar_label: parse()
title: parse 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 parse 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# parse()

### 설명

@short: 데이터를 Kanban으로 파싱합니다.

이 메서드는 Kanban의 데이터 관련 설정에 사용할 때 [`setConfig`](/api/methods/js_kanban_setconfig_method)와 동일한 동작을 수행합니다. 따라서 다른 설정 옵션과의 일관성을 위해 `setConfig` 사용을 권장하지만, `parse`도 데이터 파싱의 별칭으로 지원됩니다.

### 사용법

~~~jsx {}
parse({
    columns?: array,
    rows?: array,
    cards?: array,
    links?: array
}): void;
~~~

### 매개변수

- [`columns`](api/config/js_kanban_columns_config.md) - (선택 사항) 열 데이터 객체 배열
- [`rows`](api/config/js_kanban_rows_config.md) - (선택 사항) 행 데이터 객체 배열
- [`cards`](api/config/js_kanban_cards_config.md) - (선택 사항) 카드 데이터 객체 배열
- [`links`](api/config/js_kanban_links_config.md) - (선택 사항) 링크 데이터 객체 배열

### 예제

~~~jsx {4-9}
// Kanban 생성
const board = new kanban.Kanban("#root", {});
// 데이터를 Kanban으로 파싱
board.parse({
    columns,
    cards,
    rows,
    links
});
~~~

**변경 로그:** v1.1부터는 생성자에서 초기 데이터를 재설정할 필요 없이 새 데이터를 파싱할 수 있습니다.

**관련 문서:** [데이터 작업하기](guides/working_with_data.md#loading-data-from-local-source)
