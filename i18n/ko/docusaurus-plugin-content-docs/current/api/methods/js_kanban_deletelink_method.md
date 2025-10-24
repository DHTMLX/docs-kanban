---
sidebar_label: deleteLink()
title: deleteLink 메서드
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 deleteLink 메서드에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드할 수 있습니다.
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