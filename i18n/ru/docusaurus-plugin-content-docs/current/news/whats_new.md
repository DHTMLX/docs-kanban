---
sidebar_label: Что нового
title: Что нового
description: Здесь вы можете узнать о последних функциях и обновлениях DHTMLX Kanban, ознакомиться с историей релизов, просмотреть руководства для разработчиков и детали API, попробовать примеры кода и живые демо, а также скачать бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Что нового

При обновлении Kanban с более старой версии рекомендуется ознакомиться с разделом [Переход на новые версии](/news/migration.md) для получения дополнительной информации.

## Версия 1.6.5

Релиз 14 июля 2025

### Исправления

- Конфиг `disabled: true` не работает для пунктов меню
- При добавлении строки в Kanban без предопределённой структуры строк заголовки строк не отображаются

## Версия 1.6.4

Релиз 12 июня 2025

### Исправления

- Карточки теряются при добавлении в колонки/строки, которые были удалены, а затем восстановлены
- Отсутствуют метки локализации для кнопок списка загрузчика
- Отсутствуют файлы readme в коммерческих версиях пакетов

## Версия 1.6.3

Релиз 8 апреля 2025

### Исправления

- Лимит колонок иногда применяется ко всей колонке некорректно
- Ошибки появляются после перемещения карточки и закрытия модального редактора
- Подтверждение удаления появляется за модальным редактором
- Иконка «ещё» в Toolbar появляется и исчезает при медленном изменении размера окна
- Событие `delete-card` всегда закрывает редактор
- Редактор нельзя открыть, если приоритет установлен на ID, отсутствующий в списке опций

## Версия 1.6.2

Релиз 14 февраля 2025

### Исправления

- Неправильная дата окончания действия в триальной версии
- Drag and drop вызывает предупреждение на touch-устройствах
- Установка `add: false` в readonly-конфиге не убирает опцию **Add** из меню колонки
- Редактор не загружается для карточек с числовыми ID в виде строк
- Устаревшие ссылки на примеры в пакете
- Проблемы drag and drop при одновременном использовании прокрутки колонок и ленивого рендера
- Метод `setConfig()` не обновляет фиксированное состояние заголовков колонок

## Версия 1.6.1

Релиз 29 ноября 2024

### Исправления

- Иконка «ещё» в Toolbar смещена на узких экранах
- `RestDataProvider` не использует заголовки, заданные через `setHeaders()`
- Ошибка "RestDataProvider.getIDResolver is not a function"

## Версия 1.6

Релиз 13 ноября 2024

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### Новая функциональность

- Теперь можно настроить, сколько назначенных пользователей отображается на карточке с помощью [`cardShape.users.maxCount`](/api/config/js_kanban_cardshape_config) (см. [**пример**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- Изменяйте содержимое заголовков колонок через [`columnShape`](/api/config/js_kanban_columnshape_config) (см. [**пример**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- Настройте отображение результатов поиска в Toolbar через [`items.searchResult`](/api/config/toolbar_items_config) (см. [**пример**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- Открывайте редактор как модальное окно с помощью [`editor.placement`](/api/config/js_kanban_editor_config) (см. [**пример**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- Карточки теперь поддерживают голосование с помощью кликабельной иконки через [`cardShape.votes.clickable`](/api/config/js_kanban_cardshape_config) (см. [**пример**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))
- Можно применить тему через [`setTheme()`](/api/methods/js_kanban_settheme_method)

### Обновления

- #### Свойства

    - [`cardShape`](/api/config/js_kanban_cardshape_config) теперь включает ***users.maxCount*** и ***votes.clickable***
    - [`columnShape`](/api/config/js_kanban_columnshape_config) теперь поддерживает ***headerTemplate*** и ***collapsedTemplate***
    - [`editor`](/api/config/js_kanban_editor_config) теперь включает опцию ***placement***
    - В Toolbar свойство [`items`](/api/config/toolbar_items_config) для **search** теперь поддерживает ***searchResult***

- #### События

    - [`set-edit`](/api/events/js_kanban_setedit_event) теперь предоставляет параметр ***eventSource*** (см. [**пример**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban))

- #### Методы

    - [`setConfig()`](/api/methods/js_kanban_setconfig_method) теперь работает иначе:
        - Не меняет историю (ее нельзя изменить этим методом)
        - Темы не изменяются этим методом (используйте [`setTheme()`](/api/methods/js_kanban_settheme_method))
        - Datastore Kanban не уничтожается, поэтому повторно создавать обработчики событий и Toolbar не требуется

    - [`setLocale()`](/api/methods/js_kanban_setlocale_method) также не уничтожает datastore, события и Toolbar остаются прикрепленными
    - Параметр `api` в Toolbar [`setLocale()`](/api/methods/toolbar_setlocale_method) теперь устарел

### Исправления

- При удалении комментария во время редактирования может исчезнуть область комментариев
- Некоторые строки локализации отсутствовали
- Drag and drop не работал при одновременном использовании [`scrollType: "column"`](/api/config/js_kanban_scrolltype_config) и [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config)
- Редактор нельзя было закрыть с помощью иконки закрытия
- В Willow skin правая часть редактора совпадала с цветом фона прогресс-бара

## Версия 1.5.13

Релиз 12 сентября 2024

### Исправления

- Кнопка "Make cover" не отображается, если расширение файла в верхнем регистре
- Клик по неактивному Multiselect вызывает ошибку
- После использования [`addCard()`](/api/methods/js_kanban_addcard_method) прокрутка может привести к ошибкам при включённых прокрутке колонок и ленивом рендере
## Версия 1.5.12

Релиз 2 мая 2024

### Исправления

- Регрессия intercept: возврат `false` не блокирует внутренние события
- Неактивные файлы всё равно позволяют загружать файлы

## Версия 1.5.11

Релиз 25 марта 2024

### Исправления

- CSS-переменные Kanban для темы *Dark willow* отсутствуют в Toolbar и Portals
- Изменения комментариев и голосов не сохраняются в значениях формы при выключенном автосохранении
- Функция **onClick** пользовательского подменю колонки получает аргумент `null`
- Невозможно сделать Datepickers редактируемыми в редакторе
- Предупреждения в консоли в примерах Kanban

## Версия 1.5.10

Релиз 29 февраля 2024

### Исправления

- Сломанная сборка на npm
- Добавлен параметр `select` в событие [`duplicate-card`](/api/events/js_kanban_duplicatecard_event) и метод [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method)
- Поле комментария в редакторе имеет неправильные стили
- Смена темы вызвала регрессию

## Версия 1.5.9

Релиз 20 февраля 2024

### Исправления

- Стили Kanban влияют на другие виджеты
- Элементы пользовательского подменю колонки с `disabled: true` всё равно кликабельны
- Невозможно установить пользовательскую функцию загрузки для элемента **Uploader**

## Версия 1.5.8

Релиз 28 ноября 2023

### Исправления

- Определение **currentUser** TS отсутствовало в **IKanbanConfig**

## Версия 1.5.7

Релиз 14 ноября 2023

### Обновления

- В метод Toolbar [`setLocale()`](/api/methods/toolbar_setlocale_method) добавлен параметр ***api***

### Исправления

- `disabled: true` не работает для пунктов меню карточки
- Лишние предупреждения в консоли в примерах Kanban
- Невозможно сбросить приоритет задачи
- Выпадающие элементы управления в редакторе не закрываются при клике вне их области

## Версия 1.5.6

Релиз 13 сентября 2023

### Обновления

- Kanban теперь можно импортировать как ES-модуль

### Исправления

- Регрессия в npm-пакетах

## Версия 1.5.4

Релиз 9 августа 2023

### Исправления

- Загруженные файлы остаются в форме после переключения на другую карточку
- Загрузка файлов drag-and-drop не работает
- Карточки можно удалить нажав Delete, когда форма открыта
- Выпадающее меню "Search in" становится пустым после выбора карточки в поиске
- Добавленные ссылки не удаляются на сервере при откате операции add-link

## Версия 1.5.1

### Исправления

- Теперь корректно генерируются определения TypeScript

## Версия 1.5

Релиз 15 июня 2023

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### Новая функциональность

- Теперь можно создавать и удалять связи между карточками во время работы
- Связи между карточками можно управлять на серверной стороне
- Заголовки колонок могут быть зафиксированы (см. [**пример**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))

### Новый API

- #### Методы

    - [`addLink()`](/api/methods/js_kanban_addlink_method)
    - [`deleteLink()`](/api/methods/js_kanban_deletelink_method)
    - [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method)

- #### Роуты

    - [`DELETE /links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route)
    - [`GET /links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route)
    - [`POST /links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route)

### Обновления

- #### Свойства

    - [`columnShape`](/api/config/js_kanban_columnshape_config) теперь включает параметр ***fixedHeaders***.

### Исправления

- Связи не могли быть разобраны, экспортированы или сериализованы во время работы
- Не удавалось создать раздел комментариев, если раздел пользователей не был активен
- Связи в store изменяли оригинальные данные и не сохранялись корректно
- Ленивый рендер нарушал стили наведения для свернутых колонок
- Перемещение карточек в новую колонку делало их невидимыми
- Текстовое поле для новых комментариев не закрывалось при начале редактирования

## Версия 1.4.2

Релиз 13 апреля 2023

### Исправления

- Backend ID не сохранялись в локальные данные карточек/колонок/строк после добавления
- Некоторые определения TS отсутствовали
- Стили dark skin протекали на другие элементы

## Версия 1.4.1

Релиз 29 марта 2023

### Исправления

- Сохранение сортировки работало некорректно
- Отключение контекстного меню через **cardShape**, **columnShape** или **rowShape** работало не так, как ожидалось
- Добавление связей в редакторе без данных по связям работало некорректно
- Меню колонки могло совпадать с карточкой или не появляться вовсе
- Можно было перетянуть две задачи вместо одной

## Версия 1.4

Релиз 21 марта 2023

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### Новая функциональность

- Теперь можно добавлять комментарии (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Доступны темы **material**, **willow** и **willow-dark** (см. [**пример**](https://snippet.dhtmlx.com/jnw54xif?tag=kanban))
- Можно ограничить количество пользователей (см. [**пример**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- Устанавливайте связи между карточками (см. [**пример**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Карточки можно оценивать голосованием (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### Новый API

- #### События

    - [`add-comment`](/api/events/js_kanban_addcomment_event)
    - [`add-link`](/api/events/js_kanban_addlink_event)
    - [`delete-comment`](/api/events/js_kanban_deletecomment_event)
    - [`delete-link`](/api/events/js_kanban_deletelink_event)
    - [`drag-card`](/api/events/js_kanban_dragcard_event)
    - [`end-drag-card`](/api/events/js_kanban_enddragcard_event)
    - [`start-drag-card`](/api/events/js_kanban_startdragcard_event)
    - [`update-comment`](/api/events/js_kanban_updatecomment_event)

- #### Методы

    - [`addComment()`](/api/methods/js_kanban_addcomment_method)
    - [`deleteComment()`](/api/methods/js_kanban_deletecomment_method)
    - [`updateComment()`](/api/methods/js_kanban_updatecomment_method)

- #### Свойства

    - [`currentUser`](/api/config/js_kanban_currentuser_config)
    - [`links`](/api/config/js_kanban_links_config)
    - [`theme`](/api/config/js_kanban_theme_config) (Kanban)
    - [`theme`](/api/config/toolbar_items_config) (Toolbar)

### Обновления

- #### Методы

    - [`api.getState()`](/api/internal/js_kanban_getstate_method) обновлён

- #### Свойства

    - [`cards`](/api/config/js_kanban_cards_config) теперь поддерживает ***css***, ***comments*** и ***votes***
    - [`cardShape`](/api/config/js_kanban_cardshape_config) теперь поддерживает ***comments***, ***votes*** (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)), и ***css*** (см. [**пример**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban))
    - [`cardTemplate`](/api/config/js_kanban_cardtemplate_config) теперь может отображать контекстное меню
    - [`columns`](/api/config/js_kanban_columns_config) теперь поддерживает ***css*** (см. [**пример**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) и ***overlay*** (см. [**пример**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban))
    - [`columnShape`](/api/config/js_kanban_columnshape_config) теперь поддерживает ***css*** (см. [**пример**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - [`editorShape`](/api/config/js_kanban_editorshape_config) добавляет [***comments***](/guides/configuration/#тип-comments), [***links***](/guides/configuration/#тип-links) и ***format*** для типов date/dateRange
    - [`rows`](/api/config/js_kanban_rows_config) теперь поддерживает ***css*** (см. [**пример**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - [`rowShape`](/api/config/js_kanban_rowshape_config) теперь поддерживает ***css*** (см. [**пример**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Устаревший API

- #### Свойства

    - Поле label в объектах меню в `cardShape.menu.items`, `columnShape.menu.items` и `rowShape.menu.items` устарело

### Исправления

- Позиция меню неправильная, если Kanban размещён в контейнере с отступами
- Свернутые колонки неправильно позиционируются при пользовательской ширине
- Перемещение карточки в свернутую колонку делает ее невидимой
- Свернутые колонки некорректно позиционируются при кастомной ширине
- В swimlanes контекстное меню карточки может перекрываться панелью редактирования, что затрудняет удаление карточек

## Версия 1.3

Релиз 29 сентября 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### Новая функциональность

- Карточки можно дублировать с помощью API, меню (три точки) или сочетания клавиш `Ctrl (Command)` + `D` (работает для нескольких карточек)
- Данные Kanban можно экспортировать в файл JSON
- Управление историей Kanban:
    - Контролы Undo и Redo в Toolbar
    - Сочетания клавиш:
        - `Ctrl (Command)`+`Z` для отмены
        - `Ctrl (Command)`+`Y` или `Ctrl (Command)`+`Shift`+`Z` для возврата изменений
    - Через API

### Новый API

- **События:**
    [`duplicate-card`](/api/events/js_kanban_duplicatecard_event)

- **Методы:**
    [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method),
    [`export.json()`](/api/internal/js_kanban_json_method),
    [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method),
    [`redo()`](/api/methods/js_kanban_redo_method),
    [`undo()`](/api/methods/js_kanban_undo_method)

- **Свойства:**
    [`editor`](/api/config/js_kanban_editor_config),
    [`history`](/api/config/js_kanban_history_config)

- **Общие настройки:**
    [`$meta`](/api/common/js_kanban_meta_parameter)

### Устаревший API

- **Свойства:**
    [`editorAutoSave`](/api/config/js_kanban_editorautosave_config)

### Обновления

- #### События

    - Обновлено событие [`update-card`](/api/events/js_kanban_updatecard_event)
    - Обновлено событие [`update-column`](/api/events/js_kanban_updatecolumn_event)
    - Обновлено событие [`update-row`](/api/events/js_kanban_updaterow_event)

- #### Методы

    - Обновлён метод [`updateCard()`](/api/methods/js_kanban_updatecard_method)
    - Обновлён метод [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method)
    - Обновлён метод [`updateRow()`](/api/methods/js_kanban_updaterow_method)

- #### Свойства

    - В Toolbar [`items`](/api/config/toolbar_items_config) теперь есть контролы ***"undo"*** и ***"redo"***
    - [`editorShape`](/api/config/js_kanban_editorshape_config) добавляет тип ***dateRange***

## Версия 1.2.2

Релиз 30 августа 2022

### Исправления

- Дублирующиеся иконки появлялись в меню и Toolbar

## Версия 1.2.1

Релиз 28 июля 2022

### Исправления

- `cardHeight` не работал при включённом `scrollType:"column"`
- Uploader не отображал загруженные файлы в редакторе карточек
- Локализация не работала для полей "combo" и "progress" в редакторе

## Версия 1.2

Релиз 29 июня 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### Новая функциональность

- Теперь можно добавлять новые карточки через меню колонки (см. [**пример**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Доступен ленивый рендер (см. [**пример**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Для каждой колонки можно настроить отдельную прокрутку (см. [**пример**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Kanban автоматически прокручивается к новым карточкам, колонкам и строкам при их создании (API и UI) (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Карточки можно сортировать (API и UI) (см. [**пример**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### Новый API

- **События:**
    [`scroll`](/api/events/js_kanban_scroll_event),
    [`set-edit`](/api/events/js_kanban_setedit_event),
    [`set-sort`](/api/events/js_kanban_setsort_event)

- **Методы:**
    [`scroll()`](/api/methods/js_kanban_scroll_method),
    [`setEdit()`](/api/methods/js_kanban_setedit_method),
    [`setSort()`](/api/methods/js_kanban_setsort_method)

- **Свойства:**
    [`cardHeight`](/api/config/js_kanban_cardheight_config),
    [`columnShape`](/api/config/js_kanban_columnshape_config),
    [`rowShape`](/api/config/js_kanban_rowshape_config),
    [`renderType`](/api/config/js_kanban_rendertype_config),
    [`scrollType`](/api/config/js_kanban_scrolltype_config)
### Обновления
    - [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) обновлён
    - [`api.getState()`](/api/internal/js_kanban_getstate_method) обновлён
    - [`api.getStores()`](/api/internal/js_kanban_getstores_method) обновлён
    - [`setLocale()`](/api/methods/js_kanban_setlocale_method) Kanban обновлён
    - [`setLocale()`](/api/methods/toolbar_setlocale_method) Toolbar обновлён

- #### Свойства

    - [`items`](/api/config/toolbar_items_config) Toolbar обновлён
    - [`cardShape`](/api/config/js_kanban_cardshape_config) обновляет ***start_date***, ***end_date***, ***menu*** и ***users***
    - [`editorShape`](/api/config/js_kanban_editorshape_config) обновляет тип ***multiselect***

#### Общее

- Префиксы CSS-классов изменились (*см. [Стилизация](/guides/stylization)*)
- Структура локализации обновлена (*см. [Локализация](/guides/localization)*)

### Исправления

- Привязка карточек к swimlanes через настройку `rowKey` работала некорректно
- Клик по меню карточки открывал редактор
- Перетаскивание нескольких карточек работало неправильно
- Редактирование карточек не работало при `select: false` (**readonly**)
- Новые карточки, добавленные через `addCard()`, не выбирались корректно
- Настройки `label: false` и `menu: false` в `cardShape` работали некорректно

## Версия 1.1.1

Релиз 28 февраля 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Исправления

- Пользовательские поля редактора не работали, если не были определены в cardShape
- Сложно было выбрать нужную карточку в выпадающем списке поиска

## Версия 1.1

Релиз 15 февраля 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### Новая функциональность

- Колонки можно сворачивать и разворачивать стрелкой рядом с названием
- Можно установить лимит на количество карточек в колонках и swimlanes
- Колонки можно перемещать через контекстное меню (иконка с тремя точками)
- Строки также можно перемещать через контекстное меню (иконка с тремя точками)
- Несколько карточек в одной колонке можно выделить с помощью **Shift** + **клик**
- Теперь доступны определения TypeScript для Kanban

### Новый API

- Новые **события** для перемещения колонок и строк:
    [`move-column`](/api/events/js_kanban_movecolumn_event),
    [`move-row`](/api/events/js_kanban_moverow_event)
- Новые **методы** для перемещения колонок и строк:
    [`moveColumn()`](/api/methods/js_kanban_movecolumn_method),
    [`moveRow()`](/api/methods/js_kanban_moverow_method)

### Обновления

#### Свойства

- [`cards`](/api/config/js_kanban_cards_config) теперь опционально

- [`columns`](/api/config/js_kanban_columns_config) теперь опционально и добавляет:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- Опция ***color*** в [`cardShape`](/api/config/js_kanban_cardshape_config) обновлена

#### Методы

- [`addColumn`](/api/methods/js_kanban_addcolumn_method) обновлён
- [`addRow`](/api/methods/js_kanban_addrow_method) обновлён
- [`updateCard`](/api/methods/js_kanban_updatecard_method) обновлён
- [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) обновлён
- [`updateRow`](/api/methods/js_kanban_updaterow_method) обновлён
- [`parse`](/api/methods/js_kanban_parse_method) обновлён

#### События

- [`add-column`](/api/events/js_kanban_addcolumn_event) обновлено
- [`add-row`](/api/events/js_kanban_addrow_event) обновлено
- [`update-card`](/api/events/js_kanban_updatecard_event) обновлено
- [`update-column`](/api/events/js_kanban_updatecolumn_event) обновлено
- [`update-row`](/api/events/js_kanban_updaterow_event) обновлено

## Версия 1.0

Релиз 23 ноября 2021

[Обзор релиза в блоге](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Первая версия

- **Карточки** можно:
    - добавлять новые карточки
    - выделять карточки (включая мультивыделение)
    - удалять карточки
    - искать карточки
    - изменять порядок карточек перетаскиванием между колонками и строками
    - редактировать детали карточки в редакторе:
        - label
        - описание
        - прогресс
        - дата начала
        - дата окончания
        - цвет
        - приоритет
        - вложения (*файлы* и *изображения*)
        - *кастомные поля*

- **Колонки** и **строки** можно:
    - добавлять новые колонки и строки
    - удалять колонки и строки
    - переименовывать колонки и строки
    - сворачивать/разворачивать строки

- [Локализация](/guides/localization)
- [Интеграция с сервером](/guides/working_with_server) (Go и Node)
- Кроссбраузерная совместимость
- Поддержка touch-устройств
