---
sidebar_label: Что нового
title: Что нового
description: Ознакомьтесь с новыми возможностями DHTMLX Kanban и историей его релизов в документации JavaScript UI библиотеки DHTMLX. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Что нового

Если вы обновляете Kanban с более старой версии, ознакомьтесь с разделом [Миграция на новые версии](news/migration.md) для получения подробной информации.

## Версия 1.7.2

Выпущена 9 марта 2026

### Исправления

-   Карточки исчезают при прокрутке с `renderType:lazy`
-   Динамическая отрисовка при прокрутке в колонках: неправильный конечный индекс при медленной прокрутке ползунком
-   Динамическая отрисовка и прокрутка в колонке: проблемы drag and drop
-   Горячие клавиши для undo/redo: регрессии и неожиданное поведение
-   Странное поведение прокрутки на touch-устройствах iOS
-   Несохранённые данные теряются при обновлении комментария или голоса
-   Некорректная позиция меню для элементов, расположенных близко к правому краю экрана
-   Drag and drop на touch-устройствах: drag-элемент слишком большой
-   Тулбар: отсутствуют 2 локализованные строки для тултипов
-   Параметры `config` загрузчика файлов не применяются

## Версия 1.7.1

Выпущена 20 ноября 2025

### Исправления

-   Ошибка скрипта при использовании `dateRange` в редакторе
-   `parse()` не работает после вызова `setConfig()`
-   Ошибка скрипта после закрытия редактора с несохранёнными данными новых ссылок

## Версия 1.7.0

Выпущена 14 октября 2025

[Обзор релиза в блоге](https://dhtmlx.com/blog/meet-dhtmlx-kanban-1-7/)

### Интеграция с Salesforce

Начиная с v1.7 вы можете использовать JavaScript Kanban в среде Salesforce. Подробнее см. в руководстве: [**Интеграция с Salesforce**](guides/integration_with_salesforce.md).

Также доступны [**пример на GitHub**](https://github.com/DHTMLX/salesforce-lwc-demo) и [**онлайн-демо**](https://dhtmlx-dev-ed.develop.lightning.force.com/) (*Логин*: ***user***, *Пароль*: ***demo***).

### Новый АПИ

- #### События

    - [`undo`](api/events/js_kanban_undo_event.md)
    - [`redo`](api/events/js_kanban_redo_event.md)

- #### Методы

    - [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md)
    - [`detach()`](api/internal/js_kanban_detach_method.md)

### Обновления

- #### Методы

    - Внутренний метод [`on`](api/internal/js_kanban_on_method.md) расширен параметрами `config.tag` и `config.intercept`
    - Внутренний метод [`intercept`](api/internal/js_kanban_intercept_method.md) расширен параметрами `config.tag` и `config.intercept`

- #### Свойства

    - Свойство [`links`](api/config/js_kanban_links_config.md) обновлено следующим образом:
        - Параметр `masterId` заменён параметром `source`
        - Параметр `slaveId` заменён параметром `target`

    - Свойство [`editorShape`](api/config/js_kanban_editorshape_config.md) обновлено: параметр `clearButton` заменён параметром `clear`

    - Функция [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) обновлена: параметр `store` заменён параметром `readonly`

    - Свойство [`cards[i].attached[i]`](api/config/js_kanban_cards_config.md) расширено параметром `size`

### Удалённый АПИ

- Свойство `editorAutoSave` удалено. Используйте свойство [`editor.autoSave`](api/config/js_kanban_editor_config.md)

- Параметры `dragItemsCoords` и `dropAreasCoords` удалены из события [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)

### Исправления

- При загрузке большого количества файлов или нескольких крупных файлов форма обновляется до завершения загрузки всех файлов на сервер, что приводит к некорректным данным карточек, отправляемых на сервер
- Размер файла отображается только для вновь загруженных файлов
- Значения года и месяца не обновляются после нажатия кнопки **Done** в редакторе
- Расширяемое текстовое поле комментариев смещает кнопку за пределы кликабельной зоны
- Ошибка скрипта при открытии карточки, связанной с удалённой карточкой

## Версия 1.6.5

Выпущена 14 июля 2025

### Исправления

- Конфигурация `disabled: true` не работает для элементов меню
- При добавлении строки в Kanban без предопределённой структуры строк заголовки строк не отображаются

## Версия 1.6.4

Выпущена 12 июня 2025

### Исправления

- Карточки теряются при добавлении в колонки/строки, которые были удалены и затем восстановлены
- Отсутствуют локализованные строки для кнопок списка загрузчика файлов
- Отсутствуют файлы readme в пакетах коммерческой версии

## Версия 1.6.3

Выпущена 8 апреля 2025

### Исправления

- Лимит применяется ко всей колонке некорректно
- Ошибка при перемещении карточки после закрытия модального редактора
- Подтверждение удаления отображается под модальным редактором
- Иконка "ещё" на тулбаре неожиданно появляется и исчезает при медленном изменении размера окна
- Событие `delete-card` всегда закрывает редактор
- Редактор не открывается, если приоритет задан ID, выходящим за пределы допустимых вариантов

## Версия 1.6.2

Выпущена 14 февраля 2025

### Исправления

- Неверная дата истечения срока в пробном пакете
- Предупреждение при drag and drop на touch-устройствах
- Конфигурация `add: false` в режиме только для чтения не убирает пункт **Add** из меню колонки
- Редактор не отображается для карточек с числовыми ID в виде строк
- Устаревшая ссылка на примеры в пакете
- Прокрутка колонки с динамической отрисовкой имеет проблемы с drag and drop
- Метод `setConfig()` не обновляет фиксированное состояние заголовков колонок

## Версия 1.6.1

Выпущена 29 ноября 2024

### Исправления

- Иконка "ещё" на тулбаре выровнена неправильно на узких экранах
- `RestDataProvider` игнорирует заголовки, заданные через `setHeaders()`
- Ошибка: `RestDataProvider.getIDResolver` не является функцией

## Версия 1.6

Выпущена 13 ноября 2024

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### Новая функциональность

- Возможность изменять количество отображаемых на карточке назначенных пользователей через свойство [`cardShape.users.maxCount`](api/config/js_kanban_cardshape_config.md) (см. [**пример**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- Возможность изменять содержимое заголовков колонок через свойство [`columnShape`](api/config/js_kanban_columnshape_config.md) (см. [**пример**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- Возможность изменять вид и содержимое результатов поиска через свойство [`items.resultTemplate`](api/config/toolbar_items_config.md) элемента управления **search** тулбара (см. [**пример**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- Возможность отображать редактор в виде модального окна через свойство [`editor.placement`](api/config/js_kanban_editor_config.md) (см. [**пример**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- Возможность включить голосование за карточку (с помощью иконки голосования на карточке) через свойство [`cardShape.votes.clickable`](api/config/js_kanban_cardshape_config.md) (см. [**пример**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))

### Обновления

- #### Свойства

    - Свойство [`cardShape`](api/config/js_kanban_cardshape_config.md) расширено параметрами ***users.maxCount*** и ***votes.clickable***
    - Свойство [`columnShape`](api/config/js_kanban_columnshape_config.md) расширено параметрами ***headerTemplate*** и ***collapsedTemplate***
    - Свойство [`editor`](api/config/js_kanban_editor_config.md) расширено параметром ***placement***
    - Свойство [`editorShape`](api/config/js_kanban_editorshape_config.md) расширено параметром ***modalSection***
    - Свойство [`items`](api/config/toolbar_items_config.md) элемента управления **search** тулбара расширено параметром ***resultTemplate***

- #### События

    - Событие [`set-edit`](api/events/js_kanban_setedit_event.md) расширено параметром ***eventSource*** (см. [**пример**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban))

- #### Методы

    - Функциональность метода [`setConfig()`](api/methods/js_kanban_setconfig_method.md) обновлена следующим образом:

        - Метод не изменяет историю (изменение истории недоступно)
        - Метод не уничтожает хранилище данных Kanban. Нет необходимости пересоздавать обработчики событий и повторно подключать тулбар к Kanban

    - Метод [`setLocale()`](api/methods/js_kanban_setlocale_method.md) не уничтожает хранилище данных Kanban. Нет необходимости пересоздавать обработчики событий и повторно подключать тулбар к Kanban
    - Параметр `api` метода [`setLocale()`](api/methods/toolbar_setlocale_method.md) тулбара объявлен устаревшим

### Исправления

- Комментарий в процессе редактирования может быть удалён, а поле ввода для новых комментариев исчезает
- Добавлены недостающие строки локализации
- Drag-n-drop не работает при совместном использовании настроек [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) и [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md)
- Редактор невозможно закрыть с помощью иконки закрытия
- Правая часть редактора имеет тот же цвет, что и фон прогресс-бара (только в теме Willow)

## Версия 1.5.13

Выпущена 12 сентября 2024

### Исправления

- Кнопка "Make cover" не появляется, если расширение файла написано в верхнем регистре
- Клик по отключённому элементу управления Multiselect вызывает ошибку
- Прокрутка после вызова метода [`addCard()`](api/methods/js_kanban_addcard_method.md) выбрасывает ошибку при использовании [прокрутки колонок](api/config/js_kanban_scrolltype_config.md) и [динамической отрисовки](api/config/js_kanban_rendertype_config.md)
- Пустые комментарии сохраняются как "" вместо []
- Стили редактора перекрываются глобальными стилями с одноимённым неуникальным селектором класса. [См. раздел миграции](news/migration.md/#1512---1513)

## Версия 1.5.12

Выпущена 2 мая 2024

### Исправления

- Регрессия в intercept: возврат `false` не предотвращает внутренние события
- Отключённый загрузчик файлов всё равно принимает файлы

## Версия 1.5.11

Выпущена 25 марта 2024

### Исправления

- CSS-переменные Kanban темы *Dark willow* теряются для тулбара и порталов
- Изменения комментариев и голосов не применяются к значениям формы при отключённом автосохранении
- Пользовательское подменю колонки получает `null` в аргументе функции **onClick**
- Невозможно установить режим редактирования для элементов Datepicker в редакторе
- Предупреждения в консоли в примерах Kanban

## Версия 1.5.10

Выпущена 29 февраля 2024

### Исправления

- Сломанная сборка на npm-сервере
- Добавлен параметр `select` в событие [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md) и метод [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md)
- Некорректные стили поля комментариев в редакторе Kanban

## Версия 1.5.9

Выпущена 20 февраля 2024

### Исправления

- Kanban влияет на стили других виджетов
- Пользовательские элементы подменю колонки с `disabled: true` остаются активными
- Невозможно задать пользовательскую функцию загрузки для элемента управления **Uploader**

## Версия 1.5.8

Выпущена 28 ноября 2023

### Исправления

- Отсутствует определение TypeScript для **currentUser** в типе **IKanbanConfig**

## Версия 1.5.7

Выпущена 14 ноября 2023

### Обновления

- Метод [`setLocale()`](api/methods/toolbar_setlocale_method.md) тулбара расширен параметром ***api***

### Исправления

- Конфигурация `disabled: true` не работает для элементов меню карточки
- Нежелательные предупреждения в консоли в примерах Kanban
- Невозможно сбросить приоритет задачи
- Выпадающие элементы управления в редакторе Kanban не закрываются при клике за их пределами

## Версия 1.5.6

Выпущена 13 сентября 2023

### Обновления

- Возможность импортировать компонент как ES-модуль

### Исправления

- Регрессия в npm-пакетах

## Версия 1.5.4

Выпущена 9 августа 2023

### Исправления

- Ранее загруженные файлы остаются в форме при переключении на другую карточку
- Загрузка файлов через drag-and-drop не работает
- Непредвиденное удаление карточек при нажатии клавиши Delete, когда форма открыта
- Поле выпадающего списка "Search in" становится пустым после выбора карточки через поиск
- Добавленные ссылки не удаляются на бэкенде при отмене операции add-link

## Версия 1.5.1

### Исправления

- Корректная генерация определений TypeScript

## Версия 1.5

Выпущена 15 июня 2023

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### Новая функциональность

- Возможность устанавливать и удалять связи между карточками в режиме реального времени
- Возможность управлять связями между карточками на стороне сервера
- Возможность фиксировать заголовки колонок (см. [**пример**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))

### Новый АПИ

- #### Методы

    - [`addLink()`](api/methods/js_kanban_addlink_method.md)
    - [`deleteLink()`](api/methods/js_kanban_deletelink_method.md)
    - [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md)

- #### Маршруты

    - [`DELETE /links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)
    - [`GET /links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)
    - [`POST /links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)

### Обновления

- #### Свойства

    - Свойство [`columnShape`](api/config/js_kanban_columnshape_config.md) расширено параметром ***fixedHeaders***.

### Исправления

- Ссылки невозможно распарсить в режиме реального времени, экспортировать или сериализовать
- Создание раздела комментариев завершается ошибкой, если раздел пользователей не был активирован
- Ссылки в хранилище мутируют исходные данные и не сохраняются должным образом
- Динамическая отрисовка нарушает стили области наведения свёрнутых колонок
- Карточки, перемещённые во вновь созданные колонки, исчезают
- Поле ввода нового комментария не закрывается при начале редактирования

## Версия 1.4.2

Выпущена 13 апреля 2023

### Исправления

- ID бэкенда не сохраняется в локальные данные карточки/колонки/строки после операций добавления
- Добавлены недостающие определения TypeScript
- Стили тёмной темы оказывают влияние на другие элементы

## Версия 1.4.1

Выпущена 29 марта 2023

### Исправления

- Некорректное поведение сохранения сортировки
- Некорректное поведение при отключении контекстного меню через свойства **cardShape**, **columnShape** или **rowShape**
- Некорректное поведение при добавлении ссылок в редакторе без предоставления ссылок в данных
- Меню колонки может совпадать с меню карточки или не отображаться
- Перетаскиваются две задачи вместо одной

## Версия 1.4

Выпущена 21 марта 2023

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### Новая функциональность

- Возможность добавлять комментарии (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Возможность ограничивать количество пользователей (см. [**пример**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- Возможность устанавливать связи между карточками (см. [**пример**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Возможность голосовать за карточку (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### Новый АПИ

- #### События

    - [`add-comment`](api/events/js_kanban_addcomment_event.md)
    - [`add-link`](api/events/js_kanban_addlink_event.md)
    - [`delete-comment`](api/events/js_kanban_deletecomment_event.md)
    - [`delete-link`](api/events/js_kanban_deletelink_event.md)
    - [`drag-card`](api/events/js_kanban_dragcard_event.md)
    - [`end-drag-card`](api/events/js_kanban_enddragcard_event.md)
    - [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)
    - [`update-comment`](api/events/js_kanban_updatecomment_event.md)

- #### Методы

    - [`addComment()`](api/methods/js_kanban_addcomment_method.md)
    - [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md)
    - [`updateComment()`](api/methods/js_kanban_updatecomment_method.md)

- #### Свойства

    - [`currentUser`](api/config/js_kanban_currentuser_config.md)
    - [`links`](api/config/js_kanban_links_config.md)

### Обновления

- #### Методы

    - Метод [`api.getState()`](api/internal/js_kanban_getstate_method.md) обновлён

- #### Свойства

    - Свойство [`cards`](api/config/js_kanban_cards_config.md) расширено параметрами ***css***, ***comments*** и ***votes***
    - Свойство [`cardShape`](api/config/js_kanban_cardshape_config.md) расширено параметрами ***comments***, ***votes*** (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)) и ***css*** (см. [**пример**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)).
    - Свойство [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) поддерживает отображение контекстного меню
    - Свойство [`columns`](api/config/js_kanban_columns_config.md) расширено параметрами ***css*** (см. [**пример**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) и ***overlay*** (см. [**пример**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban))
    - Свойство [`columnShape`](api/config/js_kanban_columnshape_config.md) расширено параметром ***css*** (см. [**пример**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - Свойство [`editorShape`](api/config/js_kanban_editorshape_config.md) расширено типами [***comments***](guides/configuration.md#comments-type) и [***links***](guides/configuration.md#links-type), а также параметром ***format*** для типов *date/dateRange*
    - Свойство [`rows`](api/config/js_kanban_rows_config.md) расширено параметром ***css*** (см. [**пример**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - Свойство [`rowShape`](api/config/js_kanban_rowshape_config.md) расширено параметром ***css*** (см. [**пример**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Устаревший АПИ

- #### Свойства

    - Параметр label в объектах элементов меню `cardShape.menu.items`, `columnShape.menu.items` и `rowShape.menu.items`

### Исправления

- Позиция меню неверна, когда Kanban находится внутри контейнера с отступами
- Неверная позиция свёрнутых колонок при пользовательской ширине колонки
- Перетаскивание карточки в свёрнутую колонку приводит к её исчезновению
- Неверная позиция свёрнутых колонок при пользовательской ширине колонки
- Swimlanes. Контекстное меню карточки перекрывается панелью редактирования, и поэтому карточку невозможно удалить

## Версия 1.3

Выпущена 29 сентября 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### Новая функциональность

- Дублирование карточек через АПИ, контекстное меню (иконка с тремя точками) или сочетание клавиш `Ctrl (Command)` + `D` (позволяет дублировать несколько карточек)
- Экспорт данных Kanban в файл JSON
- Управление историей Kanban:
    - через элементы управления *Undo* и *Redo* на тулбаре
    - через сочетания клавиш:
        - `Ctrl (Command)`+`Z` — отменить действие
        - `Ctrl (Command)`+`Y` или `Ctrl (Command)`+`Shift`+`Z` — повторить действие
    - через АПИ

### Новый АПИ

- **События:**
    [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md)

- **Методы:**
    [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md),
    [`export.json()`](api/internal/js_kanban_json_method.md),
    [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md),
    [`redo()`](api/methods/js_kanban_redo_method.md) и
    [`undo()`](api/methods/js_kanban_undo_method.md)

- **Свойства:**
    [`editor`](api/config/js_kanban_editor_config.md) и
    [`history`](api/config/js_kanban_history_config.md)

- **Общие настройки:**
    [`$meta`](api/common/js_kanban_meta_parameter.md)

### Устаревший АПИ

- **Свойства:**
    [`editorAutoSave`](api/config/js_kanban_editorautosave_config.md)

### Обновления

- #### События

    - Событие [`update-card`](api/events/js_kanban_updatecard_event.md) Kanban обновлено
    - Событие [`update-column`](api/events/js_kanban_updatecolumn_event.md) Kanban обновлено
    - Событие [`update-row`](api/events/js_kanban_updaterow_event.md) Kanban обновлено

- #### Методы

    - Метод [`updateCard()`](api/methods/js_kanban_updatecard_method.md) Kanban обновлён
    - Метод [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) Kanban обновлён
    - Метод [`updateRow()`](api/methods/js_kanban_updaterow_method.md) Kanban обновлён

- #### Свойства

    - Свойство [`items`](api/config/toolbar_items_config.md) тулбара расширено параметрами (элементами управления) ***"undo"*** и ***"redo"***
    - Свойство [`editorShape`](api/config/js_kanban_editorshape_config.md) расширено типом ***dateRange***

## Версия 1.2.2

Выпущена 30 августа 2022

### Исправления

- Дублирование некоторых иконок в меню и тулбаре

## Версия 1.2.1

Выпущена 28 июля 2022

### Исправления

- Свойство `cardHeight` не работает при включённой конфигурации `scrollType:"column"`
- Загрузчик файлов не отображает загруженные файлы в редакторе карточки
- Локализация не работает для полей "combo" и "progress" в редакторе карточки

## Версия 1.2

Выпущена 29 июня 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### Новая функциональность

- Добавление новых карточек через меню колонки (см. [**пример**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Динамическая отрисовка (см. [**пример**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Прокрутка отдельных колонок (см. [**пример**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Прокрутка Kanban до вновь созданных карточек, колонок и строк (АПИ и интерфейс) (см. [**пример**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Сортировка карточек (АПИ и интерфейс) (см. [**пример**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### Новый АПИ

- **События:**
    [`scroll`](api/events/js_kanban_scroll_event.md),
    [`set-edit`](api/events/js_kanban_setedit_event.md) и
    [`set-sort`](api/events/js_kanban_setsort_event.md)

- **Методы:**
    [`scroll()`](api/methods/js_kanban_scroll_method.md),
    [`setEdit()`](api/methods/js_kanban_setedit_method.md) и
    [`setSort()`](api/methods/js_kanban_setsort_method.md)

- **Свойства:**
    [`cardHeight`](api/config/js_kanban_cardheight_config.md),
    [`columnShape`](api/config/js_kanban_columnshape_config.md),
    [`rowShape`](api/config/js_kanban_rowshape_config.md), 
    [`renderType`](api/config/js_kanban_rendertype_config.md) и
    [`scrollType`](api/config/js_kanban_scrolltype_config.md)

### Обновления

- #### Методы

    - Метод [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) обновлён
    - Метод [`api.getState()`](api/internal/js_kanban_getstate_method.md) обновлён
    - Метод [`api.getStores()`](api/internal/js_kanban_getstores_method.md) обновлён
    - Метод [`setLocale()`](api/methods/js_kanban_setlocale_method.md) Kanban обновлён
    - Метод [`setLocale()`](api/methods/toolbar_setlocale_method.md) тулбара обновлён

- #### Свойства

    - Свойство [`items`](api/config/toolbar_items_config.md) тулбара обновлено
    - Параметры (поля) ***start_date***, ***end_date***, ***menu*** и ***users*** свойства [`cardShape`](api/config/js_kanban_cardshape_config.md) обновлены
    - Тип ***multiselect*** свойства [`editorShape`](api/config/js_kanban_editorshape_config.md) обновлён

#### Общее

- Префиксы CSS-классов (*см. раздел [Стилизация](guides/stylization.md)*)
- Структура локализации (*см. раздел [Локализация](guides/localization.md)*)

### Исправления

- Привязка карточек к swimlane через конфигурацию `rowKey` работает некорректно
- Клик по меню карточки открывает редактор
- Перетаскивание нескольких карточек работает некорректно
- Редактирование карточек при `select: false` (конфигурация **readonly**) работает некорректно
- Выбор вновь добавленных карточек через метод `addCard()` работает некорректно
- Параметры `label: false` и `menu: false` свойства `cardShape` работают некорректно

## Версия 1.1.1

Выпущена 28 февраля 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Исправления

- Пользовательское поле редактора не работает без его определения в конфигурации cardShape
- Выбор нужной карточки из выпадающего меню строки поиска

## Версия 1.1

Выпущена 15 февраля 2022

[Обзор релиза в блоге](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### Новая функциональность

- Возможность *сворачивать/разворачивать* колонки с помощью стрелки слева от метки колонки
- Возможность *ограничивать* количество карточек для колонок и swimlane
- Возможность *перемещать* колонки через контекстное меню (иконка с тремя точками)
- Возможность *перемещать* строки через контекстное меню (иконка с тремя точками)
- Возможность *выбирать несколько карточек* в одной колонке с помощью привычного сочетания **Shift** + **клик**
- Возможность использовать [определения TypeScript](guides/typescript_support.md) Kanban

### Новый АПИ

- Новые **события** для перемещения колонок и строк: 
    [`move-column`](api/events/js_kanban_movecolumn_event.md)
  и
    [`move-row`](api/events/js_kanban_moverow_event.md)
- Новые **методы** для перемещения колонок и строк: 
    [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) 
  и
    [`moveRow()`](api/methods/js_kanban_moverow_method.md)

### Обновления

#### Свойства

- Свойство [`cards`](api/config/js_kanban_cards_config.md) стало необязательным

- Свойство [`columns`](api/config/js_kanban_columns_config.md) стало необязательным и расширено следующими параметрами:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- Параметр ***color*** свойства [`cardShape`](api/config/js_kanban_cardshape_config.md) обновлён

#### Методы

- Метод [`addColumn`](api/methods/js_kanban_addcolumn_method.md) обновлён
- Метод [`addRow`](api/methods/js_kanban_addrow_method.md) обновлён
- Метод [`updateCard`](api/methods/js_kanban_updatecard_method.md) обновлён
- Метод [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) обновлён
- Метод [`updateRow`](api/methods/js_kanban_updaterow_method.md) обновлён
- Метод [`parse`](api/methods/js_kanban_parse_method.md) обновлён

#### События

- Событие [`add-column`](api/events/js_kanban_addcolumn_event.md) обновлено
- Событие [`add-row`](api/events/js_kanban_addrow_event.md) обновлено
- Событие [`update-card`](api/events/js_kanban_updatecard_event.md) обновлено
- Событие [`update-column`](api/events/js_kanban_updatecolumn_event.md) обновлено
- Событие [`update-row`](api/events/js_kanban_updaterow_event.md) обновлено

## Версия 1.0

Выпущена 23 ноября 2021

[Обзор релиза в блоге](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Начальная функциональность

- Возможность работать с **карточками** следующим образом:
    - добавлять новые карточки
    - выбирать карточки (мультивыбор)
    - удалять карточки
    - искать карточки
    - изменять порядок карточек путём перетаскивания в нужную колонку (и строку)
    - управлять данными карточки через редактор:
        - метка
        - описание
        - прогресс
        - дата начала
        - дата окончания
        - цвет
        - приоритет
        - вложение (*файлы* и *изображения*)
        - *пользовательские поля*

- Возможность работать с **колонками** и **строками** следующим образом:
    - добавлять новые колонки и строки
    - удалять колонки и строки
    - переименовывать колонки и строки
    - сворачивать/разворачивать строки

- [Локализация](guides/localization.md)
- [Интеграция с бэкендом](guides/working_with_server.md) (Go и Node)
- Кросс-браузерная совместимость
- Поддержка touch-устройств
