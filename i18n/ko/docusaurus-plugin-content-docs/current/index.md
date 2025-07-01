---
sidebar_label: Kanban 개요
title: JavaScript Kanban 개요
slug: /
description: 이 문서에서는 DHTMLX JavaScript Kanban 라이브러리에 대한 개요를 제공합니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# DHTMLX Kanban 개요

JavaScript Kanban은 워크플로우를 시각화하는 데 유용한 도구입니다. 이 도구를 사용하면 비즈니스 프로세스가 어떻게 진행되는지와 팀의 업무량을 쉽게 파악할 수 있습니다. Kanban은 카드, 컬럼, 스윔레인 개수에 제약 없이 유연하게 사용할 수 있습니다. 순수 JavaScript와 CSS로 구성되어 있기 때문에, 손쉽게 설정하고 커스터마이즈할 수 있으며, 어떤 웹 애플리케이션이나 웹 페이지에도 바로 통합할 수 있습니다.

## Kanban 구조­

### Toolbar

**Toolbar**는 Kanban에서 독립된 영역에 위치합니다. 카드 검색을 위한 검색창, 다양한 옵션별 카드 정렬 기능, 실행 취소/다시 실행 버튼, 새 컬럼과 행을 추가하는 컨트롤 등을 기본으로 제공합니다. 검색과 정렬 방식은 자유롭게 설정할 수 있으며, Toolbar에 사용자 정의 요소를 추가하거나 내장 요소의 순서를 변경하는 등 커스터마이징도 쉽습니다. 자세한 내용은 [Configuration](./guides/configuration#툴바) 섹션에서 확인할 수 있습니다.

![Kanban Toolbar](/assets/js_kanban_toolbar.png)

### Board

**Board**는 Kanban의 주요 작업이 이루어지는 공간입니다. 이곳에서 카드들이 컬럼과 행(스윔레인)별로 정렬되어 표시됩니다. 카드의 표시 방식을 쉽게 변경하거나, 직접 만든 템플릿을 사용할 수도 있습니다. 자세한 내용은 [Configuration](./guides/configuration#카드) 섹션을 참고하세요.

**Board** 패널에서는 ***카드***, ***컬럼***, ***행***을 다음과 같이 다양하게 조작할 수 있습니다:

- 플러스 아이콘을 눌러 새 카드를 추가할 수 있습니다 (각 컬럼/스윔레인 별 *limit* 내에서)
- 에디터 패널을 통해 작업에 댓글이나 투표를 추가할 수 있습니다 ([예시](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- 에디터에서 작업 간 링크를 설정할 수 있습니다 ([예시](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- 컨텍스트 메뉴(점 세 개 아이콘)를 사용해 카드, 컬럼, 행을 삭제할 수 있습니다
- 컨텍스트 메뉴(점 세 개 아이콘)나 `Ctrl (Command)`+`D` 키로 카드를 복제할 수 있습니다 (여러 장의 카드도 한 번에 복제 가능)
- Kanban 데이터를 JSON 파일로 내보낼 수 있습니다
- 아래 단축키로 Kanban의 히스토리를 관리할 수 있습니다:
    - `Ctrl (Command)`+`Z`: 마지막 동작을 실행 취소 (Kanban 히스토리 한 단계 뒤로)
    - `Ctrl (Command)`+`Y` 또는 `Ctrl (Command)`+`Shift`+`Z`: 방금 취소한 동작을 다시 실행 (Kanban 히스토리 한 단계 앞으로)
- 카드를 원하는 컬럼이나 행으로 드래그해서 이동할 수 있습니다
- 컨텍스트 메뉴(점 세 개 아이콘)로 컬럼과 행을 이동할 수 있습니다
- 컬럼이나 행의 라벨을 더블 클릭하거나 컨텍스트 메뉴로 이름을 변경할 수 있습니다
- 카드를 클릭하면 카드 에디터가 바로 열립니다
- 행 라벨 왼쪽의 화살표 아이콘으로 행을 접거나 펼칠 수 있습니다
- 컬럼 라벨 왼쪽의 화살표 아이콘으로 컬럼을 접거나 펼칠 수 있습니다
- 아래 단축키로 여러 장의 카드를 선택할 수 있습니다:
    - `Shift` + 클릭: 같은 컬럼 내 여러 카드 선택
    - `Ctrl (Command)` + 클릭: 다른 컬럼의 카드도 함께 선택

![Kanban Board](/assets/js_kanban_board.png)

### Editor

**Editor**는 모달 형태로 나타나며, 선택한 카드의 세부 정보를 수정할 수 있는 입력 필드와 컨트롤을 제공합니다. 카드를 클릭하면 에디터가 나타나고, 원하는 대로 새로운 필드나 컨트롤을 추가해 커스터마이즈할 수 있습니다. 자세한 내용은 [Configuration](./guides/configuration#편집기) 섹션을 참고하세요.

![Kanban Editor](/assets/js_kanban_editor.png)

## 다음 단계

앱에 Kanban을 적용하려면 [How to start](./how_to_start) 튜토리얼에서 단계별 안내를 확인해보세요.
