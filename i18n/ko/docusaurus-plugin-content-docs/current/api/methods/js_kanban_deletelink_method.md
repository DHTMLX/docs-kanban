---
sidebar_label: deleteLink()
title: deleteLink Method API
description: DHTMLX Kanban의 deleteLink 메서드 API를 확인하세요. ID로 보드에서 링크를 제거하는 방법을 알아봅니다.
---

# deleteLink()

### 설명

@short: Kanban의 데이터 저장소에서 지정된 링크를 제거합니다.

### 사용법

~~~jsx {}
deleteLink({ id: string | number }): void;
~~~

### 매개변수

- `id` - (필수) 삭제할 링크의 ID

### 예제

~~~jsx {8}
// Kanban 생성
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links,
});
// ID로 링크 삭제
board.deleteLink({ id: 5 });
~~~

**변경 로그:** 이 메서드는 v1.5에 추가되었습니다.