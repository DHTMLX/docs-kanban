---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Ознакомьтесь с интеграцией с React в документации по JavaScript Kanban библиотеке DHTMLX. Изучайте руководства для разработчиков, справочник по API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Интеграция с React

:::tip
Перед чтением этой документации рекомендуется ознакомиться с базовыми концепциями и паттернами [**React**](https://react.dev). Для обновления знаний обратитесь к [**документации React**](https://react.dev/learn).
:::

DHTMLX Kanban совместим с **React**. Мы подготовили примеры кода, показывающие, как использовать DHTMLX Kanban с **React**. Подробности смотрите в соответствующем [**примере на GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Создание проекта

:::info
Перед созданием нового проекта установите [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Вы можете создать базовый проект **React** или использовать **React с Vite**. Назовём проект **my-react-kanban-app**:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Установка зависимостей

Перейдите в директорию созданного приложения:

~~~json
cd my-react-kanban-app
~~~

Установите зависимости и запустите dev-сервер. Для этого используйте менеджер пакетов:

- если вы используете [**yarn**](https://yarnpkg.com/), выполните следующие команды:

~~~json
yarn
yarn start
~~~

- если вы используете [**npm**](https://www.npmjs.com/), выполните следующие команды:

~~~json
npm install
npm run dev
~~~

Приложение будет работать на локальном сервере (например, `http://localhost:3000`).

## Создание Kanban

Теперь необходимо получить исходный код DHTMLX Kanban. Сначала остановите приложение и приступайте к установке пакета Kanban.

### Шаг 1. Установка пакета

Скачайте [**пробный пакет Kanban**](/how_to_start/#установка-kanban-через-npm-или-yarn) и выполните шаги, описанные в файле README. Обратите внимание, что пробная версия Kanban доступна только 30 дней.

### Шаг 2. Создание компонента

Теперь необходимо создать компонент React, чтобы добавить Kanban в приложение. Создайте новый файл в директории ***src/*** и назовите его ***Kanban.jsx***.

#### Импорт исходных файлов

Откройте файл ***Kanban.jsx*** и импортируйте исходные файлы Kanban. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Kanban из локальной папки, пути к импортам будут следующими:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

Учтите, что в зависимости от используемого пакета исходные файлы могут быть минифицированы. В этом случае убедитесь, что импортируете CSS-файл как ***kanban.min.css***.

- если вы используете пробную версию Kanban, укажите следующие пути:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

В этом руководстве показано, как настроить **пробную** версию Kanban.

#### Задание контейнеров и добавление Kanban с Toolbar

Чтобы отобразить Kanban с Toolbar на странице, необходимо создать контейнеры для Kanban и Toolbar и инициализировать эти компоненты с помощью соответствующих конструкторов:

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

Для корректного отображения Kanban необходимо задать основные стили для Kanban и его контейнера в основном css-файле проекта:

~~~css title="index.css"
/* стили для начальной страницы */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнера Kanban и Toolbar */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* стили для контейнера Kanban */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Загрузка данных

Чтобы добавить данные в Kanban, необходимо предоставить набор данных. Вы можете создать файл ***data.js*** в директории ***src/*** и добавить в него данные:

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

Затем откройте файл ***App.js*** и импортируйте данные. После этого можно передать данные в созданный компонент `<Kanban/>` через **props**:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

Перейдите в файл ***Kanban.jsx*** и примените переданные **props** к объекту конфигурации Kanban:

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

Также можно использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри метода `useEffect()` в React для загрузки данных в Kanban:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns; // данные для колонок
    let cards = props.cards; // данные для карточек
    let rows = props.rows; // данные для строк

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
    
        kanban.parse({ columns, cards, rows });

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

Метод `parse(data)` позволяет перезагружать данные при каждом изменении.

Теперь компонент Kanban готов. Когда элемент будет добавлен на страницу, он инициализирует Kanban с данными. Вы также можете задать необходимые настройки конфигурации. Посетите [документацию по API Kanban](/api/overview/properties_overview/), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий

Когда пользователь выполняет действие в Kanban, возникает событие. Вы можете использовать эти события для определения действия и запуска необходимого кода. Ознакомьтесь с [полным списком событий](/api/overview/events_overview/).

Откройте ***Kanban.jsx*** и дополните метод `useEffect()` следующим образом:

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

После этого вы можете запустить приложение и увидеть Kanban с загруженными данными на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban с React"
    className="img_border"
/>

Теперь вы знаете, как интегрировать DHTMLX Kanban с React. Вы можете доработать код в соответствии с вашими требованиями. Финальный расширенный пример доступен на [**GitHub**](https://github.com/DHTMLX/react-kanban-demo).