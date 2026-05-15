---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции с Angular в документации по JavaScript-библиотеке DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Интеграция с Angular

:::tip
Данное руководство предполагает знакомство с концепциями и паттернами Angular. Для углубления знаний обратитесь к [Angular documentation](https://v17.angular.io/docs).
:::

DHTMLX Kanban совместим с Angular. Полный пример кода доступен на [GitHub](https://github.com/DHTMLX/angular-kanban-demo).

## Создание проекта

:::info
Перед созданием проекта установите [Angular CLI](https://v17.angular.io/cli) и [Node.js](https://nodejs.org/en/).
:::

Следующая команда создаёт новый проект *my-angular-kanban-app* с помощью Angular CLI:

~~~json
ng new my-angular-kanban-app
~~~

:::note
При появлении соответствующего запроса отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering), чтобы проект соответствовал данному руководству.
:::

Команда установит все необходимые инструменты. Дополнительные команды не требуются.

### Установка зависимостей

Перейдите в директорию нового приложения:

~~~json
cd my-angular-kanban-app
~~~

Установите зависимости и запустите dev-сервер с помощью менеджера пакетов [yarn](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение будет доступно на localhost (например, `http://localhost:3000`).

## Создание Kanban

Остановите dev-сервер и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [trial Kanban package](/how_to_start/#installing-kanban-via-npm-or-yarn) и следуйте инструкциям из файла README. Пробная версия доступна 30 дней.

### Шаг 2. Создание компонента

Создайте Angular-компонент, который монтирует Kanban и Toolbar. Создайте папку *src/app/kanban/* и добавьте в неё файл *kanban.component.ts*.

#### Импорт исходных файлов

Откройте *kanban.component.ts* и импортируйте исходные файлы Kanban. Путь импорта зависит от версии пакета:

- Для PRO-версии, установленной из локальной папки:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- Для пробной версии:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

В данном руководстве используется пробная версия Kanban.

#### Настройка контейнеров и инициализация Kanban

Чтобы отобразить Kanban с Toolbar, задайте два контейнера и вызовите конструкторы. Следующий фрагмент кода определяет шаблон компонента, ссылки на контейнеры и создаёт экземпляры:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // имя шаблона, используемого в файле "app.component.ts" как <kanban />
    styleUrls: ["./kanban.component.css"], // подключение css-файла
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    // инициализация контейнера для Toolbar
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // инициализация контейнера для Kanban
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // инициализация компонента Kanban
        this._kanban = new Kanban(this.kanban_container.nativeElement, {});

        // инициализация компонента Toolbar
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // другие параметры конфигурации 
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); // уничтожение Kanban
        this._toolbar.destructor(); // уничтожение Toolbar
    }
}
~~~

#### Добавление стилей

Добавьте стили для Kanban и контейнера. Создайте файл *kanban.component.css* в директории *src/app/kanban/*:

~~~css title="kanban.component.css"
/* импорт стилей Kanban */
@import "@dhx/trial-kanban/dist/kanban.css";

/* стили для начальной страницы */
html,
body{
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

Чтобы заполнить Kanban данными, предоставьте набор данных. Создайте файл *data.ts* в директории *src/app/kanban/*:

~~~jsx {2,14,37,48} title="data.ts"
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

Откройте *kanban.component.ts*, импортируйте набор данных и передайте свойства данных в объект конфигурации Kanban внутри `ngOnInit()`:

~~~jsx {2,23,25-27} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // импорт данных
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", 
    styleUrls: ["./kanban.component.css"],
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { cards, columns, rows } = getData(); // инициализация данных
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns, // данные по колонкам
            cards, // данные по карточкам
            rows, // данные по строкам
            rowKey: "type",
            // другие параметры конфигурации 
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // другие параметры конфигурации 
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

В качестве альтернативы загрузите данные после создания экземпляра с помощью [`setConfig()`](/api/methods/js_kanban_setconfig_method/) или [`parse()`](/api/methods/js_kanban_parse_method/) внутри `ngOnInit()`:

~~~jsx {2,23,37-42} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // импорт данных
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", 
    styleUrls: ["./kanban.component.css"],
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        const { cards, columns, rows } = getData(); // инициализация данных
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // другие параметры конфигурации 
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // другие параметры конфигурации 
        });

        // загрузка данных с помощью метода setConfig() или parse()
        this._kanban.setConfig({ 
            columns, 
            cards, 
            rows 
        }); 
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

Компонент Kanban готов к работе. После отрисовки элемента Kanban инициализируется с данными. Полный список поддерживаемых параметров конфигурации см. в [справочнике Kanban API](/api/overview/properties_overview/).

#### Обработка событий

Действия пользователя в Kanban вызывают события. Подписывайтесь на события, чтобы реагировать на конкретные действия. Полный список см. в [справочнике событий Kanban](/api/overview/events_overview/).

Откройте *kanban.component.ts* и расширьте метод `ngOnInit()`:

~~~jsx {5-7} title="kanban.component.ts"
// ...
ngOnInit() {
    this._kanban = new Kanban(this.kanban_container.nativeElement, {});

    this._kanban.api.on("add-card", (obj) => {
        console.log(obj.columnId);
    });
}

ngOnDestroy(): void {
    this._kanban.destructor(); 
}
~~~

### Шаг 3. Добавление Kanban в приложение

Чтобы зарегистрировать `KanbanComponent` в приложении, откройте *src/app/app.component.ts* и замените стандартный код:

~~~jsx {5} title="app.component.ts"
import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    template: `<kanban/>`
})
export class AppComponent {
    name = "";
}
~~~

Создайте *app.module.ts* в директории *src/app/* и объявите `KanbanComponent`:

~~~jsx {4-5,8} title="app.module.ts"
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { KanbanComponent } from "./kanban/kanban.component";

@NgModule({
    declarations: [AppComponent, KanbanComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
~~~

Откройте *src/main.ts* и замените существующий код:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Запустите приложение, чтобы увидеть заполненную доску Kanban на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
  src={trial}
  alt="Kanban with Angular"
  className="img_border"
/>

Полный проект доступен на [GitHub](https://github.com/DHTMLX/angular-kanban-demo).
