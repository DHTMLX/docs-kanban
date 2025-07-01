---
sidebar_label: Интеграция с React
title: Интеграция с React
description: Ознакомьтесь с документацией по интеграции с React для JavaScript-библиотеки DHTMLX Kanban. Просматривайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Интеграция с React

:::tip
Перед началом работы с этой документацией рекомендуется знать основы [**React**](https://react.dev). Если вы хотите освежить знания по React, ознакомьтесь с [**официальной документацией React**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Kanban отлично работает с **React**. Существуют примеры кода, показывающие, как использовать DHTMLX Kanban в React-проектах. Для подробностей смотрите [**пример на GitHub**](https://github.com/DHTMLX/react-kanban-demo).

## Создание проекта

:::info
Перед началом работы убедитесь, что у вас установлены [**Vite**](https://vite.dev/) (опционально) и [**Node.js**](https://nodejs.org/en/).
:::

Вы можете начать со стандартного проекта **React** или создать его с помощью **React и Vite**. В этом примере проект называется **my-react-kanban-app**:

~~~json
npx create-react-app my-react-kanban-app
~~~

### Установка зависимостей

Перейдите в директорию приложения:

~~~json
cd my-react-kanban-app
~~~

Добавьте зависимости и запустите сервер разработки. Можно использовать любимый пакетный менеджер:

- С помощью [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

- С помощью [**npm**](https://www.npmjs.com/):

~~~json
npm install
npm run dev
~~~

Приложение будет доступно локально, обычно по адресу `http://localhost:3000`.

## Создание Kanban

Далее получите исходный код DHTMLX Kanban. Для начала остановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**пробную версию Kanban**](/how_to_start/#установка-kanban-через-npm-или-yarn) и следуйте инструкциям из файла README. Помните, что пробная версия действует 30 дней.

### Шаг 2. Создание компонента

Создайте новый компонент React, чтобы добавить Kanban-доску в приложение. Добавьте файл ***Kanban.jsx*** в директорию ***src/***.

#### Импорт исходных файлов

Откройте ***Kanban.jsx*** и импортируйте исходные файлы Kanban. Обратите внимание на следующее:

- Для PRO-версии, установленной локально, импортируйте так:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from 'dhx-kanban-package';
import 'dhx-kanban-package/dist/kanban.css';
~~~

В зависимости от пакета, CSS-файл может быть минифицирован. В таком случае используйте ***kanban.min.css***.

- Для пробной версии используйте такие пути импорта:

~~~jsx title="Kanban.jsx"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import "@dhx/trial-kanban/dist/kanban.css";
~~~

В этом руководстве показано, как работать с **пробной** версией.

#### Настройка контейнеров и добавление Kanban с Toolbar

Чтобы вывести Kanban с Toolbar на страницу, создайте контейнеры для обоих компонентов и инициализируйте их конструкторами:

~~~jsx {2,6-7,10-11,13-17} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import '@dhx/trial-kanban/dist/kanban.css'; // подключаем стили Kanban

export default function KanbanComponent(props) {
    let toolbar_container = useRef(); // инициализация контейнера для Toolbar
    let kanban_container = useRef(); // инициализация контейнера для Kanban

    useEffect(() => {
        // инициализация компонента Kanban
        const kanban = new Kanban(kanban_container.current, {});

        // инициализация компонента Toolbar
        const toolbar = new Toolbar(toolbar_container.current, {
            api: kanban.api, // передаем внутренний API Kanban
            // другие параметры конфигурации
        });

        return () => {
            kanban.destructor(); // уничтожаем Kanban
            toolbar.destructor(); // уничтожаем Toolbar
        };
    }, []);

    return  <div className="component_container">
                <div ref={toolbar_container}></div>
                <div ref={kanban_container} className="widget"></div>
            </div>
}
~~~

#### Добавление стилей

Чтобы Kanban корректно отображался, добавьте следующие стили в основной CSS-файл:

~~~css title="index.css"
/* задаем стили для начальной страницы */
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

Чтобы отобразить данные в Kanban, потребуется набор данных. Создайте файл ***data.js*** в ***src/*** и добавьте, например, такой код:

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

Теперь в ***App.js*** импортируйте данные и передайте их в компонент `<Kanban/>` через **props**:

~~~jsx {2,5-6} title="App.js"
import Kanban from "./Kanban";
import { getData } from "./data";

function App() {
    const { columns, cards, rows } = getData();
    return <Kanban columns={columns} cards={cards} rows={rows} />;
}

export default App;
~~~

В ***Kanban.jsx*** используйте переданные props для конфигурации Kanban:

~~~jsx {5,11-13} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    useEffect(() => {
        const kanban = new Kanban(kanban_container.current, {
            columns: props.columns, // передаем данные столбцов
            cards: props.cards, // передаем данные карточек
            rows: props.rows, // передаем данные строк
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

Если хотите загружать данные в Kanban с помощью метода [`parse()`](/api/methods/js_kanban_parse_method/) внутри `useEffect()`, можно сделать так:

~~~jsx {9-11,27} title="Kanban.jsx"
import { useEffect, useRef } from "react";
import { Kanban, Toolbar } from "@dhx/trial-kanban";
import "@dhx/trial-kanban/dist/kanban.css";

export default function KanbanComponent(props) {
    let kanban_container = useRef();
    let toolbar_container = useRef();

    let columns = props.columns; // данные столбцов
    let cards = props.cards; // данные карточек
    let rows = props.rows; // данные строк

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

Использование `parse(data)` позволяет перезагружать данные Kanban при их изменении.

На этом этапе компонент Kanban настроен. При рендере он инициализируется с вашими данными, и вы можете при необходимости добавить дополнительные настройки. Для ознакомления с дополнительными параметрами смотрите [документацию по API Kanban](/api/overview/properties_overview/).

#### Обработка событий

При взаимодействии пользователей с Kanban возникают различные события. С помощью этих событий можно реагировать на действия пользователя и запускать свой код. [Полный список событий](/api/overview/events_overview/) доступен в документации.

Пример простой обработки события в ***Kanban.jsx***:

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

Теперь запустите приложение, и вы увидите Kanban-доску с вашими данными.

![Инициализация Kanban](/assets/trial_kanban.png)

Теперь DHTMLX Kanban работает внутри React. Вы можете адаптировать код под свои задачи. Для более продвинутого примера перейдите на [**GitHub**](https://github.com/DHTMLX/react-kanban-demo).
