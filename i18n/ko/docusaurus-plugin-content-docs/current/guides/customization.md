---
sidebar_label: 사용자 정의
title: 사용자 정의
description: DHTMLX JavaScript Kanban 라이브러리의 문서에서 사용자 정의에 대해 알아보실 수 있습니다. 개발자 가이드와 API 레퍼런스를 둘러보고, 코드 예제와 라이브 데모를 직접 시도해 보며, DHTMLX Kanban의 30일 무료 평가판도 다운로드해보세요.
---

# 사용자 정의

Kanban을 구성하는 것 외에도, 외관과 동작을 자유롭게 사용자 정의할 수 있습니다. 위젯에서는 카드에 대한 사용자 정의 템플릿 지정, 카드·컬럼·행에 대한 컨텍스트 메뉴 수정, 툴바 구조 및 기능 변경, Kanban에 맞춤형 CSS 스타일 적용이 가능합니다.

## 사용자 정의 카드

카드를 사용자 정의 템플릿으로 표시하려면 [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) 속성을 사용할 수 있습니다. 이 속성은 원하는 스타일과 로직을 정의하여 Kanban에 적용할 수 있는 콜백 함수입니다. 아래의 예제를 참고하세요:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 컨텍스트 메뉴

카드, 컬럼, 행에 대한 컨텍스트 메뉴를 사용자 정의하려면 [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md), [`rowShape`](api/config/js_kanban_rowshape_config.md)와 같은 관련 속성을 사용할 수 있습니다. 아래의 예제를 참고하세요:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 툴바

툴바의 구조와 기능을 사용자 정의하려면 [`items`](api/config/toolbar_items_config.md) 속성을 사용할 수 있습니다. 이 설정의 배열 내에서 필요한 컨트롤을 정의하고, 원하는 순서로 배치하며, 동작도 변경할 수 있습니다.

아래 예제에서는 다음과 같은 사용자 정의 방법을 확인할 수 있습니다:

- 컨트롤 배치 순서 변경
- 검색바 및 그 동작
- 정렬 컨트롤 및 그 동작
- 사용자 정의 컨트롤 및 그 동작  

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 사용자 정의 스타일

Kanban의 외관은 관련 *CSS 변수* 값을 변경하여 자유롭게 꾸밀 수 있습니다. 자세한 내용은 [**Stylization**](guides/stylization.md) 섹션을 참고하세요.

아래 예제에서는 Kanban에 사용자 정의 스타일을 적용하는 방법을 볼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>