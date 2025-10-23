---
sidebar_label: Интеграция с Salesforce
title: Интеграция с Salesforce
description: Узнайте, как интегрировать DHTMLX Kanban в Salesforce. В этом руководстве описывается необходимая HTML-разметка и настройка окружения для корректной работы внутри компонентов Salesforce Lightning.
---

# Интеграция с Salesforce

:::tip
Перед прочтением этой документации рекомендуется ознакомиться с базовыми концепциями и паттернами работы с [**Salesforce**](https://www.salesforce.com/). Для повторения материала воспользуйтесь [**официальной документацией Salesforce**](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban совместим с платформой [Salesforce](https://www.salesforce.com/). Мы подготовили примеры кода по добавлению DHTMLX Kanban в окружение Salesforce. Дополнительную информацию можно найти в соответствующем [примере на GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).

:::note
Виджет Kanban на JavaScript автоматически определяет, что работает в окружении [**Salesforce**](https://www.salesforce.com/) и настраивает внутреннюю логику интеграции. В большинстве случаев вам не нужно вручную вызывать какие-либо [**специфические методы Salesforce**](#salesforce-specific-methods).
:::

## Подготовка окружения

Если вы хотите добавить Kanban в свой проект Salesforce, необходимо пометить *корневой* контейнер HTML-атрибутом `data-wx-root="true"`. Этот атрибут позволяет библиотеке определить основной узел для монтирования виджетов **Kanban** и **Toolbar**.

```html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
```

Вложенные элементы с атрибутом `data-wx-portal-root="1"` служат контейнерами для компонентов DHTMLX (например, **Toolbar** и **Kanban**).

## API окружения Salesforce

DHTMLX Kanban включает вспомогательный класс `salesForceEnv`, который содержит методы для ручного управления окружением Salesforce. Вы можете импортировать класс `salesForceEnv` следующим образом:

```jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
```

:::note
Обычно специфические для Salesforce методы не требуются, но они доступны как запасной вариант на случай, если автоматическое определение не сработает.
:::

### Специфические методы Salesforce

Вы можете использовать следующие методы вспомогательного класса `salesForceEnv`:

| Метод                                                          | Описание                                                                 |
| :------------------------------------------------------------- | :----------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                       | Определяет, работает ли Kanban внутри Salesforce                         |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`| Подключает глобальное событие к первому доступному HTML-элементу         |
| `salesForceEnv.getTopNode()`                                   | Возвращает первый доступный HTML-элемент в DOM-иерархии Salesforce       |

```jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
```

### Дополнительная экспортируемая функция

| Функция              | Описание                                                                          |
| :------------------- | :-------------------------------------------------------------------------------- |
| `enableSalesForce()` | Ручная установка окружения Salesforce, если автоматическое определение недоступно  |

```jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
```

## Этапы работы

1. Добавьте атрибут `data-wx-root="true"` в ваш LWC-контейнер
2. Импортируйте и инициализируйте DHTMLX Kanban и Toolbar (опционально)
3. Виджет Kanban на JavaScript автоматически определяет контекст Salesforce и применяет внутреннюю конфигурацию
4. Нет необходимости вызывать функцию `enableSalesForce()` или использовать методы `salesForceEnv`, если ваше приложение не работает в нестандартном сценарии встраивания

### Пример

```jsx title="kanban.js"
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
```

Теперь компонент DHTMLX Kanban полностью интегрирован в ваше окружение **Salesforce Lightning**. Виджет автоматически обрабатывает DOM-иерархию и привязку событий внутри LWC. Вы можете продолжить настройку Kanban через его стандартный API, а также изменять внешний вид и логику Kanban в соответствии с требованиями вашего проекта. Финальный пример вы найдете на [**GitHub**](https://github.com/DHTMLX/salesforce-lwc-demo).