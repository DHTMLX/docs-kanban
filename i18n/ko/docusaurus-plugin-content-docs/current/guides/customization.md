---
sidebar_label: 사용자 정의
title: 사용자 정의
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 사용자 정의에 대해 알아볼 수 있습니다. 개발자 가이드와 API 레퍼런스를 살펴보고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# 사용자 정의

설정 옵션과 함께 Kanban은 외관과 동작을 조정할 수 있는 다양한 방법을 제공합니다. 카드에 대한 사용자 지정 템플릿을 설정하거나, 카드·컬럼·행의 컨텍스트 메뉴를 조정하고, Toolbar의 레이아웃 및 기능을 변경하거나, 자체 CSS 스타일을 적용하여 Kanban에 고유한 스타일을 부여할 수 있습니다.

## 사용자 정의 카드

카드를 원하는 형태로 표시하려면 [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md) 속성이 유용합니다. 이 속성을 사용하면 콜백 함수를 통해 Kanban에 스타일과 로직을 직접 추가할 수 있습니다. 아래 스니펫을 참고하세요.

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 컨텍스트 메뉴

카드, 컬럼 또는 행의 컨텍스트 메뉴를 변경하려면 [`cardShape`](/api/config/js_kanban_cardshape_config.md), [`columnShape`](/api/config/js_kanban_columnshape_config.md), [`rowShape`](/api/config/js_kanban_rowshape_config.md) 속성을 사용할 수 있습니다. 아래 예제에서 설정 방법을 확인할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 툴바

Toolbar는 [`items`](/api/config/toolbar_items_config.md) 속성을 사용해 필요에 따라 조정할 수 있습니다. 배열 내에 원하는 컨트롤을 추가하고, 순서를 변경하거나 동작을 업데이트하여 상황에 맞게 구성하세요.

아래 스니펫에서 다음과 같은 항목을 사용자 정의하는 방법을 확인할 수 있습니다.

- 컨트롤의 순서
- 검색바 및 동작 방식
- 정렬 컨트롤과 그 동작
- 사용자 정의 컨트롤 및 기능

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 스타일

Kanban의 외관을 변경하려면 관련 *CSS 변수*를 조정해 보세요. 자세한 내용은 [**스타일링**](../stylization) 섹션을 참고하세요.

아래 스니펫에서는 Kanban에 사용자 스타일을 적용하는 방법을 보여줍니다.

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
