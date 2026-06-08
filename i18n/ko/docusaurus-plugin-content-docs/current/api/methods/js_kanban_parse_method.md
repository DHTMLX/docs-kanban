---
sidebar_label: parse()
title: parse Method API
description: DHTMLX Kanban의 parse 메서드 API를 확인하세요. JSON에서 카드, 열, 행 및 보드 데이터를 불러오는 방법을 알아봅니다.
---

# parse()

### 설명

@short: 데이터를 Kanban으로 파싱합니다.

`parse()` 메서드는 데이터 관련 속성(`cards`, `columns`, `rows`, `links`)으로 제한된 [`setConfig()`](/api/methods/js_kanban_setconfig_method)의 별칭입니다. 두 메서드는 이러한 속성에 대해 내부적으로 동일한 동작을 수행합니다.

:::tip setConfig() 사용 권장
동일한 데이터 속성에 더해 다른 Kanban 설정 옵션도 허용하는 [`setConfig()`](/api/methods/js_kanban_setconfig_method) 메서드를 사용하세요. 데이터에는 `parse()`를, 나머지 속성([`columnKey`](api/config/js_kanban_columnkey_config.md), [`rowKey`](api/config/js_kanban_rowkey_config.md), [`cardShape`](api/config/js_kanban_cardshape_config.md) 등)에는 `setConfig()`를 따로 호출하는 대신, `setConfig()` 한 번으로 모든 속성을 처리하세요.

~~~js
// 두 번 호출하는 방식 대신
kanban.setConfig({ columnKey: "type" });
kanban.parse({ columns });

// 한 번에 처리하세요
kanban.setConfig({
    columnKey: "type",
    columns
});
~~~
:::

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

// setConfig()를 통한 동등한 호출
// board.setConfig({ columns, cards, rows, links });
~~~

**변경 로그:** v1.1부터는 생성자에서 초기 데이터를 재설정할 필요 없이 새 데이터를 파싱할 수 있습니다.

**관련 문서:** [데이터 작업하기](guides/working_with_data.md#load-data-from-a-local-source)
