---
sidebar_label: Решения
title: Решения для JavaScript Kanban
description: Изучите страницу "Решения" библиотеки DHTMLX JavaScript Kanban в документации. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Решения

Эта страница содержит полный справочник по началу работы, настройке, оптимизации и управлению JavaScript Kanban.

## Основные принципы

Вот основные моменты, которые нужно знать при работе с Kanban.

| Тема                                         | Описание                                              |
| --------------------------------------------- | ----------------------------------------------------- |
| [Инициализация](/guides/initialization)                  | Как настроить Kanban ([Пример](https://snippet.dhtmlx.com/gb50vyip?tag=kanban))|
| [Конфигурация](/guides/configuration)                   | Способы конфигурирования Kanban                      |
| [Кастомизация](/guides/customization)                   | Шаги по кастомизации Kanban                          |
| [Стилизация](/guides/stylization)                     | Варианты стилизации Kanban                           |
| [Локализация](/guides/localization)                    | Как локализовать Kanban ([Пример](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban))|

## Справочник API

Здесь приведены справочники по API Kanban, которые могут понадобиться.

| Тема                                                      | Описание                                         |
| --------------------------------------------------------- | ------------------------------------------------ |
| [Kanban events](/api/overview/events_overview.md)          | Работа с событиями Kanban                        |
| [Kanban methods](/api/overview/methods_overview.md)        | Использование методов Kanban                     |
| [Kanban properties](/api/overview/properties_overview.md)  | Доступ к свойствам Kanban                        |
| [Event Bus methods](/api/overview/internal_eventbus_overview.md)| Методы Event Bus                          |
| [RestDataProvider methods](/api/overview/internal_rest_overview.md)| Методы RestDataProvider                   |
| [State methods](/api/overview/internal_state_overview.md)  | Методы State                                    |
| [Toolbar methods](/api/overview/toolbar_methods_overview.md)| Методы Toolbar                                  |
| [Toolbar properties](/api/overview/toolbar_properties_overview.md)| Свойства Toolbar                         |

## Работа с карточками

В этих разделах описано, как управлять карточками, работать с их данными и настраивать их под свои задачи.

### Операции с карточками

| Тема                                                        | Описание                                  |
| ----------------------------------------------------------- | ------------------------------------------|
| [Adding new cards](/api/methods/js_kanban_addcard_method.md)  | Как добавить новые карточки ([Пример](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Deleting cards](/api/methods/js_kanban_deletecard_method.md) | Как удалить карточки ([Пример](https://snippet.dhtmlx.com/61crsls3?tag=kanban)) |
| [Moving cards](/api/methods/js_kanban_movecard_method.md)     | Как перемещать карточки ([Пример](https://snippet.dhtmlx.com/61crsls3?tag=kanban))   |
| [Scrolling to the desired cards](/api/methods/js_kanban_scroll_method.md)| Как прокрутить Kanban к нужной карточке|
| [Searching for cards](/api/methods/js_kanban_setsearch_method.md)| Как искать карточки                  |
| [Selecting cards](/api/methods/js_kanban_selectcard_method.md)| Как выделять карточки                  |
| [Sorting cards](/api/methods/js_kanban_setsort_method.md)     | Как сортировать карточки                |
| [Unselecting cards](/api/methods/js_kanban_unselectcard_method.md)| Как снять выделение с карточек      |
| [Adding links between cards](/api/config/js_kanban_links_config.md)| Как добавить связи между карточками ([Пример](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban)) |

### Работа с данными карточек

| Тема                                                        | Описание                                         |
| ----------------------------------------------------------- | -------------------------------------------------|
| [Getting card data](/api/methods/js_kanban_getcard_method.md) | Как получить данные карточки                     |
| [Getting cards state](/api/internal/js_kanban_getstate_method.md) | Как получить состояние карточек              |
| [Getting cards reactive state](/api/internal/js_kanban_getreactivestate_method.md) | Как получить реактивное состояние карточек |
| [Loading card data](/api/config/js_kanban_cards_config.md)    | Как загрузить начальные данные карточек           |
| [Parsing card data](/api/methods/js_kanban_parse_method.md)   | Как распарсить данные карточек                   |
| [Serializing card data](/api/methods/js_kanban_serialize_method.md)| Как сериализовать данные карточек ([Пример](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Updating card data](/api/methods/js_kanban_updatecard_method.md)| Как обновить данные карточек                 |

### Настройка карточек

| Тема                                                        | Описание                                         |
| ----------------------------------------------------------- | -------------------------------------------------|
| [Adding new cards](/api/config/js_kanban_readonly_config.md)  | Включение или отключение возможности добавления карточек|
| [Binding cards into columns](/api/config/js_kanban_columnkey_config.md) | Как привязать карточки к колонкам      |
| [Binding cards into rows](/api/config/js_kanban_rowkey_config.md) | Как привязать карточки к строкам (swimlanes)    |
| [Configuring a card appearance](/api/config/js_kanban_cardshape_config.md)| Как настроить внешний вид карточки     |
| [Configuring a cards menu](/api/config/js_kanban_cardshape_config.md)| Как настроить контекстное меню карточек ([Пример](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Customizing a card appearance](/api/config/js_kanban_cardtemplate_config.md)| Как использовать шаблоны для изменения внешнего вида карточек ([Пример](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban))|
| [Dragging cards](/api/config/js_kanban_readonly_config.md)    | Включение или отключение drag-n-drop для карточек|
| [Editing cards](/api/config/js_kanban_readonly_config.md)     | Включение или отключение редактирования карточек |
| [Lazy rendering](/api/config/js_kanban_rendertype_config.md)| Включение или отключение **lazy rendering** для большого числа карточек ([Пример](https://snippet.dhtmlx.com/xez9ghqq?text=#kanban))|
| [Limiting cards](/api/config/js_kanban_columns_config.md)     | Установка лимитов для колонок и swimlanes (**валидация WIP**) ([Пример](https://snippet.dhtmlx.com/2blo6hx8?text=kanban))|
| [Selecting cards](/api/config/js_kanban_readonly_config.md)   | Включение или отключение выбора карточек         |
| [Setting a fix height of cards](/api/config/js_kanban_cardheight_config.md)| Как задать фиксированную высоту карточек   |
| [Updating card settings](/api/methods/js_kanban_setconfig_method.md)| Как обновить настройки карточек             |

## Работа с редактором карточек

Здесь вы найдете подробности по использованию редактора карточек.

| Тема                                                        | Описание                                            |
| ----------------------------------------------------------- | --------------------------------------------------- |
| [Autosaving mode](/api/config/js_kanban_editorautosave_config.md)| Как включить или отключить автосохранение в редакторе |
| [Configuring editor fields](/guides/configuration/#редактор)| Как настроить поля редактора         |
| [Configuring the editor](/guides/configuration/#настройка-редактора)| Как настроить редактор |
| [Updating editor settings](/api/methods/js_kanban_setconfig_method.md)| Как обновить настройки редактора            |

## Работа с колонками

Здесь описано, как управлять колонками и их данными.

### Операции с колонками

| Тема                                                           | Описание                                         |
| -------------------------------------------------------------- | ------------------------------------------------ |
| [Adding new columns](/api/methods/js_kanban_addcolumn_method.md) | Как добавить новые колонки ([Пример](https://snippet.dhtmlx.com/61crsls3?tag=kanban))|
| [Configuring a columns menu](/api/config/js_kanban_columnshape_config.md)| Как настроить контекстное меню для колонок ([Пример](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting columns](/api/methods/js_kanban_deletecolumn_method.md)| Как удалить колонки                              |
| [Moving columns](/api/methods/js_kanban_movecolumn_method.md)    | Как перемещать колонки                           |
| [Scrolling to the desired columns](/api/methods/js_kanban_scroll_method.md)| Как прокрутить Kanban к нужной колонке |
| [Separate scrolling for columns](/api/config/js_kanban_scrolltype_config.md)| Как сделать отдельную прокрутку для колонок ([Пример](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))|

### Работа с данными колонок

| Тема                                                           | Описание                                         |
| -------------------------------------------------------------- | ------------------------------------------------ |
| [Getting card data of the column](/api/methods/js_kanban_getareacards_method.md)| Как получить данные карточек в колонке |
| [Getting columns state](/api/internal/js_kanban_getstate_method.md) | Как получить состояние колонок              |
| [Getting columns reactive state](/api/internal/js_kanban_getreactivestate_method.md) | Как получить реактивное состояние колонок |
| [Loading column data](/api/config/js_kanban_columns_config.md)    | Как загрузить начальные данные колонок           |
| [Parsing column data](/api/methods/js_kanban_parse_method.md)     | Как распарсить данные колонок                    |
| [Serializing column data](/api/methods/js_kanban_serialize_method.md)| Как сериализовать данные колонок            |
| [Updating column data](/api/methods/js_kanban_updatecolumn_method.md)| Как обновить данные колонок                 |

## Работа со строками (swimlanes)

В этих разделах объясняется, как управлять строками (swimlanes) и их данными.

### Операции со строками (swimlanes)

| Тема                                                           | Описание                                         |
| -------------------------------------------------------------- | ------------------------------------------------ |
| [Adding new rows](/api/methods/js_kanban_addrow_method.md)          | Как добавить новые строки (swimlanes)            |
| [Configuring a rows menu](/api/config/js_kanban_rowshape_config.md) | Как настроить контекстное меню для строк (swimlanes) ([Пример](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))|
| [Deleting rows](/api/methods/js_kanban_deleterow_method.md)         | Как удалить строки (swimlanes)                   |
| [Moving rows](/api/methods/js_kanban_moverow_method.md)             | Как перемещать строки (swimlanes)                |
| [Scrolling to the desired row](/api/methods/js_kanban_scroll_method.md)| Как прокрутить Kanban к нужной строке (swimlane)|

### Работа с данными строк (swimlanes)

| Тема                                                           | Описание                                         |
| -------------------------------------------------------------- | ------------------------------------------------ |
| [Getting card data of the column and row](/api/methods/js_kanban_getareacards_method.md)| Как получить данные карточек по колонке и строке |
| [Getting rows state](/api/internal/js_kanban_getstate_method.md) | Как получить состояние строк                    |
| [Getting rows reactive state](/api/internal/js_kanban_getreactivestate_method.md) | Как получить реактивное состояние строк         |
| [Loading row data](/api/config/js_kanban_rows_config.md)         | Как загрузить начальные данные строк             |
| [Parsing row data](/api/methods/js_kanban_parse_method.md)       | Как распарсить данные строк                     |
| [Serializing row data](/api/methods/js_kanban_serialize_method.md)| Как сериализовать данные строк                  |
| [Updating row data](/api/methods/js_kanban_updaterow_method.md)  | Как обновить данные строк                       |

## Работа с событиями

| Тема                                                       | Описание                                        |
| ---------------------------------------------------------- | ----------------------------------------------- |
| [Executing events](/api/internal/js_kanban_exec_method.md)  | Запуск внутреннего события                      |
| [Intercepting events](/api/internal/js_kanban_intercept_method.md)| Как перехватывать внутреннее событие       |
| [List of inner events](/api/overview/events_overview.md)    | Список внутренних событий Kanban                |
| [Reordering events](/api/internal/js_kanban_setnext_method.md)| Как изменить порядок выполнения события Event Bus |
| [Subscribing on events](/api/internal/js_kanban_on_method.md)| Как подписаться на внутреннее событие           |

## Работа с Kanban REST API

| Тема                                                       | Описание                                        |
| ---------------------------------------------------------- | ----------------------------------------------- |
| [Loading server data for cards](/api/provider/rest_methods/js_kanban_getcards_method.md)| Как загрузить данные карточек с сервера         |
| [Loading server data for columns](/api/provider/rest_methods/js_kanban_getcolumns_method.md)| Как загрузить данные колонок с сервера          |
| [Loading server data for rows](/api/provider/rest_methods/js_kanban_getrows_method.md)| Как загрузить данные строк с сервера            |
| [Working with server](/guides/working_with_server.md)       | Как работать с сервером через REST API ([Пример](https://snippet.dhtmlx.com/f25y0809?tag=kanban))|

## Работа с состоянием Kanban

| Тема                                                       | Описание                                        |
| ---------------------------------------------------------- | ----------------------------------------------- |
| [Getting StateStore and DataStore](/api/internal/js_kanban_getstores_method.md)| Как получить объекты StateStore и DataStore     |
| [Getting StateStore properties](/api/internal/js_kanban_getstate_method.md)| Как получить свойства StateStore                |
| [Getting StateStore reactive properties](/api/internal/js_kanban_getreactivestate_method.md)| Как получить реактивные свойства StateStore     |

## Работа с Toolbar

| Тема                                                       | Описание                                           |
| ---------------------------------------------------------- | -------------------------------------------------- |
| [Configuring a searchbar on Toolbar](/api/config/toolbar_items_config.md) | Как настроить строку поиска на Toolbar ([Пример](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring a sort control on Toolbar](/api/config/toolbar_items_config.md) | Как настроить элемент сортировки на Toolbar ([Пример](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban))|
| [Configuring Toolbar controls](/api/config/toolbar_items_config.md)| Как настроить, кастомизировать и менять порядок элементов Toolbar ([Пример](https://snippet.dhtmlx.com/s5r5h4ju?tag=kanban)) |
| [Including Kanban API in Toolbar](/api/config/toolbar_api_config.md) | Как добавить и использовать Kanban API в Toolbar   |
| [Localizing Toolbar](/api/config/toolbar_locale_config.md) | Как локализовать Toolbar                           |

## Работа с TypeScript

| Тема                                                       | Описание                                        |
| ---------------------------------------------------------- | ----------------------------------------------- |
| [Working with TypeScript](/guides/typescript_support.md)    | Как использовать TypeScript с Kanban            |

## Остались вопросы?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Задать вопрос сообществу</a> </button>

:::info
Вопросы также можно задать в комментариях ниже!
:::
