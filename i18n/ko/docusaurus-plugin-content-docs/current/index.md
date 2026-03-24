---
sidebar_label: Kanban overview
title: JavaScript Kanban Overview
slug: /
description: DHTMLX JavaScript Kanban 라이브러리에 대한 개요를 문서에서 확인하실 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 체험해 보세요. DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# DHTMLX Kanban 개요

JavaScript Kanban은 워크플로우 시각화를 위한 효과적인 솔루션입니다. 이 위젯을 사용하면 비즈니스 프로세스를 더 잘 이해하고 팀의 작업량을 한눈에 파악할 수 있습니다. 유연한 이 도구는 카드, 컬럼, 스윔레인(swimlane)의 개수에 제한 없이 동작합니다. 순수 JavaScript와 CSS로 완전히 작성되어 있어 손쉽게 설정, 커스터마이즈, 그리고 어떤 웹 앱이나 웹 페이지에도 통합할 수 있습니다.

## Kanban 구조­

### Toolbar

Kanban의 **Toolbar**는 인터페이스의 별도 부분입니다. 여기에는 카드를 *검색*할 수 있는 검색창, 지정된 파라미터로 카드를 *정렬*하는 컨트롤, 기록을 관리하는 두 개의 컨트롤(*undo/redo*), 그리고 *새 컬럼 및 행 추가*를 위한 컨트롤이 포함되어 있습니다. 검색 및 정렬 로직을 유연하게 제어할 수 있고, 커스텀 요소를 추가하거나 내장 요소의 순서를 변경하여 Toolbar 구조를 변경할 수 있습니다. 자세한 내용은 [Configuration](guides/configuration.md#toolbar) 섹션을 참고하세요.

import toolbar from '@site/static/img/js_kanban_toolbar.png';

<img
    src={toolbar}
    alt="Kanban Toolbar"
    className="img_border"
/>

### Board

**Board**는 Kanban의 주요 부분입니다. 카드들이 컬럼과 행(스윔레인)으로 나뉘어 배치되어 있습니다. 카드의 외관을 유연하게 설정할 수 있으며, 커스텀 템플릿도 적용할 수 있습니다. 자세한 내용은 [Configuration](guides/configuration.md#cards) 섹션을 참고하세요.

**Board** 패널에서는 ***카드***, ***컬럼***, ***행***을 다음과 같이 관리할 수 있습니다:

- 각 컬럼 및 스윔레인에 지정된 *제한*에 따라 플러스 아이콘을 클릭해 새 카드를 추가
- 에디터 패널을 통해 작업에 대한 댓글 및 투표 추가 ([예시](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- 에디터를 통해 작업 간의 링크 설정 ([예시](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- 컨텍스트 메뉴(3점 아이콘)를 사용해 카드, 컬럼, 행 삭제
- 컨텍스트 메뉴(3점 아이콘) 또는 `Ctrl (Command)`+`D` 단축키로 카드 복제 (여러 카드 복제 가능)
- Kanban 데이터를 JSON 파일로 내보내기
- 다음 단축키로 Kanban 기록 관리:
    - `Ctrl (Command)`+`Z` - Kanban에서 마지막 작업을 되돌림(히스토리에서 한 단계 뒤로)
    - `Ctrl (Command)`+`Y` 또는 `Ctrl (Command)`+`Shift`+`Z` - *undo*로 되돌린 작업을 다시 실행(히스토리에서 한 단계 앞으로)
- 카드를 원하는 위치(행 및 컬럼)로 드래그하여 이동
- 컨텍스트 메뉴(3점 아이콘)로 컬럼 및 행 이동
- 해당 레이블을 더블 클릭하거나 컨텍스트 메뉴(3점 아이콘)로 컬럼 및 행 이름 변경
- 카드를 클릭하여 카드 에디터 표시
- 행 레이블 왼쪽의 화살표 아이콘을 클릭하여 행을 접거나 펼치기
- 컬럼 레이블 왼쪽의 화살표 아이콘을 클릭하여 컬럼을 접거나 펼치기
- 다음 단축키로 여러 카드 선택:
    - 같은 컬럼 내에서 여러 카드를 선택하려면 `Shift` + 해당 카드 클릭
    - 다른 컬럼의 여러 카드를 선택하려면 `Ctrl (Command)` + 해당 카드 클릭

import board from '@site/static/img/js_kanban_board.png';

<img
    src={board}
    alt="Kanban Board"
    className="img_border"
/>

### Editor

**Editor**는 선택한 카드 데이터를 관리할 수 있는 필드와 컨트롤로 구성된 모달 패널입니다. 변경하려는 카드를 클릭하면 에디터가 표시됩니다. 새로운 필드와 컨트롤을 추가하여 에디터 구조를 유연하게 설정할 수 있습니다. 자세한 내용은 [Configuration](guides/configuration.md#editor) 섹션을 참고하세요.

import editor from '@site/static/img/js_kanban_editor.png';

<img
    src={editor}
    alt="Kanban Editor"
    className="img_border"
/>

## 다음 단계

이제 Kanban을 애플리케이션에 적용할 준비가 되었습니다. 자세한 안내는 [How to start](how_to_start.md) 튜토리얼을 참고하세요.