---
sidebar_label: Кастомизация
title: Кастомизация
description: Ознакомьтесь с возможностями кастомизации в документации по DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Кастомизация

Помимо опций конфигурации, Kanban предоставляет множество способов изменить внешний вид и поведение компонента. Вы можете задать собственный шаблон карточек, настроить контекстное меню для карточек, колонок и строк, изменить расположение и содержимое Toolbar, а также применить собственные CSS-стили для придания Kanban уникального вида.

## Кастомные карточки

Для отображения карточек с уникальным внешним видом удобно использовать свойство [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md). Это свойство позволяет применять callback-функцию для добавления собственных стилей и логики в Kanban. Посмотрите пример ниже, чтобы увидеть, как это работает:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомное контекстное меню

Если вы хотите изменить контекстное меню для карточек, колонок или строк, используйте свойства [`cardShape`](/api/config/js_kanban_cardshape_config.md), [`columnShape`](/api/config/js_kanban_columnshape_config.md) и [`rowShape`](/api/config/js_kanban_rowshape_config.md). Пример ниже показывает, как это настраивается:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомный Toolbar

Toolbar можно настраивать по вашему желанию с помощью свойства [`items`](/api/config/toolbar_items_config.md). В массиве этого свойства добавляйте нужные элементы управления, меняйте их порядок и логику работы под ваши задачи.

Посмотрите пример ниже, чтобы узнать, как настраивать такие элементы как:

- порядок элементов управления
- строка поиска и её поведение
- сортировка и её работа
- кастомный элемент управления и его действия

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Кастомные стили

Чтобы изменить внешний вид Kanban, попробуйте настроить соответствующие *CSS-переменные*. Подробнее смотрите в разделе [**Стилизация**](../stylization).

В приведённом ниже примере показано, как можно применить кастомные стили к Kanban:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
