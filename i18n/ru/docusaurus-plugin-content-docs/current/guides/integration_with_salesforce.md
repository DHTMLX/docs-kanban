---
sidebar_label: Интеграция с Salesforce
title: Интеграция с Salesforce
description: Узнайте, как интегрировать DHTMLX Kanban в Salesforce. В этом руководстве описывается необходимая HTML-разметка и настройка окружения для корректной работы внутри компонентов Salesforce Lightning.
---

# Интеграция с Salesforce

:::tip
Это руководство предполагает знакомство с концепциями и паттернами работы с [Salesforce](https://www.salesforce.com/). Для ознакомления с материалом воспользуйтесь [документацией Salesforce](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban совместим с платформой [Salesforce](https://www.salesforce.com/). Полный пример кода доступен на [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).

:::note
Виджет Kanban автоматически определяет окружение Salesforce и настраивает внутреннюю логику интеграции. В большинстве случаев вам не нужно вручную вызывать какие-либо [специфические методы Salesforce](#специфические-методы-salesforce).
:::

## Подготовка окружения

Чтобы добавить Kanban в проект Salesforce, пометьте *корневой* контейнер HTML-атрибутом `data-wx-root="true"`. Библиотека использует этот атрибут для определения основного узла монтирования Kanban и Toolbar:

~~~html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
~~~

Вложенные элементы с атрибутом `data-wx-portal-root="1"` служат контейнерами для компонентов DHTMLX (Toolbar, Kanban).

## API окружения Salesforce

DHTMLX Kanban предоставляет вспомогательный класс `salesForceEnv` с методами для ручного управления окружением Salesforce. Импортируйте его следующим образом:

~~~jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
~~~

:::note
Специфические для Salesforce методы, как правило, не требуются. Используйте их как запасной вариант, если автоматическое определение не сработает.
:::

### Специфические методы Salesforce

Вспомогательный класс `salesForceEnv` предоставляет следующие методы:

| Метод                                                          | Описание                                                                 |
| :------------------------------------------------------------- | :----------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                       | Определяет, работает ли Kanban внутри Salesforce                         |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`| Подключает глобальное событие к первому доступному HTML-элементу         |
| `salesForceEnv.getTopNode()`                                   | Возвращает первый доступный HTML-элемент в DOM-иерархии Salesforce       |

Следующий фрагмент кода импортирует класс и запускает проверку определения окружения:

~~~jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
~~~

### Дополнительная экспортируемая функция

| Функция              | Описание                                                                          |
| :------------------- | :-------------------------------------------------------------------------------- |
| `enableSalesForce()` | Ручная установка окружения Salesforce, если автоматическое определение недоступно  |

Следующий фрагмент кода импортирует `enableSalesForce()` и принудительно устанавливает окружение Salesforce:

~~~jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
~~~

## Этапы работы

1. Добавьте атрибут `data-wx-root="true"` в ваш LWC-контейнер.
2. Импортируйте и инициализируйте Kanban и Toolbar (Toolbar опционален).
3. Kanban автоматически определяет контекст Salesforce и применяет внутреннюю конфигурацию.
4. Не вызывайте `enableSalesForce()` и не используйте методы `salesForceEnv`, если приложение не работает в нестандартном сценарии встраивания.

### Пример

Следующий фрагмент кода инициализирует Kanban и Toolbar внутри LWC-компонента:

~~~jsx title="kanban.js"
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default class KanbanLWC {
    connectedCallback() {
        const kanban_container = this.template.querySelector(".sf_kanban");
        const toolbar_container = this.template.querySelector(".sf_toolbar");
        const kanban = new Kanban(kanban_container, { /* configuration properties */ });
        const toolbar = new Toolbar(toolbar_container, { api: kanban.api });
    }
}
~~~

DHTMLX Kanban теперь интегрирован в окружение Salesforce Lightning. Виджет обрабатывает DOM-иерархию и привязку событий внутри LWC. Продолжите настройку Kanban через его стандартный API для изменения внешнего вида и поведения. Полный пример доступен на [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).
