---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Ознакомьтесь с интеграцией с React в документации по JavaScript Kanban библиотеке DHTMLX. Изучайте руководства для разработчиков, справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Интеграция с React

:::tip
Это руководство предполагает знакомство с концепциями и паттернами [React](https://react.dev). Для подготовки обратитесь к [документации React](https://react.dev/learn).
:::

DHTMLX Kanban совместим с React. Полный пример кода доступен на [GitHub](https://github.com/DHTMLX/react-kanban-demo).

## Создание проекта

:::info
Перед созданием нового проекта установите [Vite](https://vite.dev/) (опционально) и [Node.js](https://nodejs.org/en/).
:::

Создайте базовый проект React (или React с Vite). Назовём проект *my-react-kanban-app*:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Установка зависимостей

Перейдите в директорию созданного приложения:

~~~json
cd my-react-kanban-app
~~~

Установите зависимости и запустите dev-сервер с помощью одного из менеджеров пакетов:

- Для [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- Для [npm](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение будет работать на локальном адресе (например, `http://localhost:3000`).

## Создание Kanban

Остановите dev-сервер и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [пробный пакет Kanban](/how_to_start/#installing-kanban-via-npm-or-yarn) и выполните шаги, описанные в файле README. Пробная версия доступна в течение 30 дней.

### Шаг 2. Создание компонента

Создайте компонент React, добавляющий Kanban в приложение. Добавьте новый файл в директорию *src/* и назовите его *Kanban.jsx*.

#### Импорт исходных файлов

Откройте *Kanban.jsx* и импортируйте исходные файлы Kanban. Пути к импортам зависят от версии пакета:

- Для PRO-версии, установленной из локальной папки:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Если пакет поставляется с минифицированными исходными файлами, импортируйте CSS-файл как *kanban.min.css*.

- Для пробной версии:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

В этом руководстве используется пробная версия Kanban.

#### Настройка контейнеров и инициализация Kanban

Чтобы отобразить Kanban с Toolbar, создайте два контейнера и вызовите конструкторы. Следующий фрагмент кода связывает рефы и инициализирует компоненты внутри `useEffect()`:

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // подключение стилей Kanban

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // инициализация контейнера для Toolbar
    let kanban_container = useRef(); // инициализация контейнера для Kanban

    useEffect(() => {
        // инициализация компонента Kanban
        const kanban = new Kanban(kanban_container.current, {});

        // инициализация компонента Toolbar
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // передача внутреннего API Kanban
            // другие параметры конфигурации
        });

        return () => {
            kanban.destructor(); // уничтожение Kanban
            toolbar.destructor(); // уничтожение Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### Добавление стилей

Добавьте стили для Kanban и его контейнера в основной CSS-файл:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for Kanban and Toolbar container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* specify styles for Kanban container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных

Чтобы наполнить Kanban данными, предоставьте набор данных. Создайте файл *data.js* в директории *src/*:

~~~jsx {2,14,37,48} title="data.js"
export function getData() {
    const columns = [
        {
            label: "Backlog",
            id: "backlog"
        },
        {
            label: "In progress",
            id: "inprogress"
        },
        // ...
    ];

    const cards = [
        {
            id: 1,
            label: "Integration with Angular/React",
            priority: 1,
            color: "#65D3B3",
            start_date: new Date("01/07/2021"),
            users: [3, 2],
            column: "backlog",
            type: "feature",
        },
        {
            label: "Archive the cards/boards ",
            priority: 3,
            color: "#58C3FE",
            users: [4],
            progress: 1,
            column: "backlog",
            type: "feature",
        },
        // ...
    ];

    const rows = [
        {
            label: "Feature",
            id: "feature",
        },
        {
            label: "Task",
            id: "task",
        }
    ];

    return { columns, cards, rows };
}
~~~

Откройте *App.js*, импортируйте данные и передайте значения в новый компонент `<Kanban/>` через props:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Откройте *Kanban.jsx* и примените props к объекту конфигурации Kanban:

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // данные для колонок
            cards: props.cards, // данные для карточек
            rows: props.rows, // данные для строк
            rowKey: "type",
            // другие параметры конфигурации
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // другие параметры конфигурации
        });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

В качестве альтернативы данные можно загрузить после создания экземпляра с помощью [`setConfig()`](/api/methods/js_kanban_setconfig_method/) или [`parse()`](/api/methods/js_kanban_parse_method/) внутри `useEffect()`:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns;
    let cards = props.cards;
    let rows = props.rows;

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // другие параметры конфигурации
        });

        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api,
            // другие параметры конфигурации
        });
    
        kanban.setConfig({ columns, cards, rows });
        // or kanban.parse({ columns, cards, rows });

        return () => {
            kanban.destructor();
            toolbar.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

Компонент Kanban готов. При рендеринге элемента Kanban инициализируется с данными. Полный список поддерживаемых свойств конфигурации см. в [справочнике API Kanban](/api/overview/properties_overview/).

#### Обработка событий

Действия пользователя в Kanban инициируют события. Подписывайтесь на события, чтобы реагировать на конкретные действия. Полный список см. в [справочнике событий Kanban](/api/overview/events_overview/).

Откройте *Kanban.jsx* и расширьте вызов `useEffect()`:

~~~jsx {5-7} title="Kanban.jsx"
// ...
useEffect(() => {
    const kanban = new Kanban(kanban_container.current, {});

    kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
    
    return () => {
        kanban.destructor();
    };
}, []);
// ...
~~~

Запустите приложение, чтобы увидеть заполненную доску Kanban на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with React"
  className="img_border"
/>

Готовый проект доступен на [GitHub](https://github.com/DHTMLX/react-kanban-demo).
