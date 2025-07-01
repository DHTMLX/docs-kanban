---
sidebar_label: addLink()
title: addLink 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 addLink 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# addLink()

### 설명

@short: Kanban 보드에 새 링크를 삽입합니다.

### 사용법

~~~jsx {}
addLink({
    id?: string | number,
    link: object
}): void;
~~~

### 매개변수

- `id` - (선택 사항) 새 링크의 식별자
- `link` - (필수) 새 링크를 나타내는 데이터 객체입니다. 링크 매개변수의 전체 목록은 [여기](/api/config/js_kanban_links_config.md)에서 확인할 수 있습니다.

### 예제

~~~jsx {7-14}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// 새 링크 추가
board.addLink({
    id: 3,
    link: {
        masterId: 4,
        slaveId: 6,
        relation: "relatesTo",
    }
});
~~~

**변경 로그:** 이 메서드는 v1.5에서 도입되었습니다.
