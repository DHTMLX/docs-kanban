---
sidebar_label: Кастомизация
title: Кастомизация
description: Вы можете узнать о возможностях кастомизации в документации по DHTMLX JavaScript Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Кастомизация

Помимо настройки Kanban, вы можете кастомизировать его внешний вид и поведение. Виджет позволяет задать собственный шаблон для карточек, изменить контекстное меню для карточек, колонок и строк, изменить структуру и функциональность Toolbar, а также применить собственные css-стили к Kanban.

## Кастомные карточки

Для отображения карточек по собственному шаблону вы можете использовать свойство [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md). Это функция-колбэк, которая позволяет определить нужные стили и логику и применить их к Kanban. Пример ниже:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомное контекстное меню

Для кастомизации контекстного меню карточек, колонок и строк вы можете использовать соответствующие свойства: [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md) и [`rowShape`](api/config/js_kanban_rowshape_config.md). Пример ниже:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомный Toolbar

Для изменения структуры Toolbar и его функциональности используйте свойство [`items`](api/config/toolbar_items_config.md). В массиве этой настройки вы можете определить необходимые элементы управления, расположить их в нужном порядке, а также изменить их поведение.

В примере ниже показано, как можно кастомизировать следующее:

- порядок расположения элементов управления
- поисковую строку и её поведение
- элемент сортировки и его поведение
- кастомный элемент и его поведение  

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомные стили

Вы можете изменить внешний вид Kanban, изменяя значения соответствующих *CSS-переменных*. Подробнее смотрите в разделе [**Стилизация**](guides/stylization.md).

В этом примере показано, как применить кастомные стили к Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>