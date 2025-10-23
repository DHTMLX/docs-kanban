---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Вы можете узнать об интеграции с Angular в документации по JavaScript-библиотеке DHTMLX Kanban. Ознакомьтесь с руководствами для разработчиков и справочником по API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную ознакомительную версию DHTMLX Kanban.
---

# Интеграция с Angular

:::tip
Перед прочтением данной документации рекомендуется ознакомиться с базовыми концепциями и паттернами **Angular**. Для обновления знаний обратитесь к [**Angular documentation**](https://v17.angular.io/docs).
:::

DHTMLX Kanban совместим с **Angular**. Мы подготовили примеры кода по использованию DHTMLX Kanban с **Angular**. Для получения дополнительной информации обратитесь к соответствующему [**Example on GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Создание проекта

:::info
Перед началом создания нового проекта установите [**Angular CLI**](https://v17.angular.io/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Создайте новый проект **my-angular-kanban-app** с помощью Angular CLI. Для этого выполните следующую команду:

~~~json
ng new my-angular-kanban-app
~~~

:::note
Если вы хотите следовать этому руководству, отключите Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering) при создании нового приложения Angular!
:::

Команда выше установит все необходимые инструменты, поэтому дополнительные команды запускать не требуется.

### Установка зависимостей

Перейдите в директорию только что созданного приложения:

~~~json
cd my-angular-kanban-app
~~~

Установите зависимости и запустите dev-сервер. Для этого используйте менеджер пакетов [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Приложение будет доступно на localhost (например, `http://localhost:3000`).

## Создание Kanban

Теперь необходимо получить исходный код DHTMLX Kanban. Для начала остановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**trial Kanban package**](/how_to_start/#installing-kanban-via-npm-or-yarn) и следуйте инструкциям из файла README. Обратите внимание, что пробная версия Kanban доступна только 30 дней.
  
### Шаг 2. Создание компонента

Теперь нужно создать Angular-компонент, чтобы добавить Kanban с Toolbar в приложение. Создайте папку **kanban** в директории **src/app/**, добавьте в неё новый файл и назовите его **kanban.component.ts**.

#### Импорт исходных файлов

Откройте файл **kanban.component.ts** и импортируйте исходные файлы Kanban. Обратите внимание:

- если вы используете PRO-версию и устанавливаете пакет Kanban из локальной папки, импорт будет выглядеть так:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- если вы используете пробную версию Kanban, укажите следующий путь:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

В этом руководстве показано, как настроить **trial** версию Kanban.

#### Задание контейнеров и инициализация Kanban с Toolbar

Чтобы отобразить Kanban с Toolbar на странице, нужно задать контейнеры для Kanban и Toolbar, а также инициализировать эти компоненты с помощью соответствующих конструкторов:

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

Для корректного отображения Kanban необходимо добавить соответствующие стили. Для этого создайте файл **kanban.component.css** в директории **src/app/kanban/** и пропишите в нём основные стили для Kanban и его контейнера:

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

Чтобы добавить данные в Kanban, необходимо предоставить набор данных. Вы можете создать файл **data.ts** в директории **src/app/kanban/** и добавить туда данные:

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

Далее откройте файл ***kanban.component.ts***. Импортируйте файл с данными и укажите соответствующие свойства данных в объекте конфигурации Kanban внутри метода `ngOnInit()`, как показано ниже:

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

Также вы можете использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри метода `ngOnInit()` компонента Angular для загрузки данных в Kanban.

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

        // загрузка данных с помощью метода parse()
        this._kanban.parse({ 
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

Метод `parse(data)` позволяет перезагружать данные при каждом изменении.

Теперь компонент Kanban готов к использованию. После добавления элемента на страницу Kanban будет инициализирован с данными. Вы также можете задать необходимые параметры конфигурации. Посетите [Kanban API docs](/api/overview/properties_overview/), чтобы ознакомиться с полным списком доступных свойств.

#### Обработка событий

Когда пользователь выполняет какое-либо действие в Kanban, вызывается событие. Вы можете использовать эти события для отслеживания действий и запуска необходимого кода. Ознакомьтесь с [полным списком событий](/api/overview/events_overview/).

Откройте файл **kanban.component.ts** и дополните метод `ngOnInit()` следующим образом:

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

Чтобы добавить компонент ***KanbanComponent*** в ваше приложение, откройте файл ***src/app/app.component.ts*** и замените стандартный код следующим образом:

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

Затем создайте файл ***app.module.ts*** в директории ***src/app/*** и укажите компонент *KanbanComponent* следующим образом:

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

Последний шаг — откройте файл ***src/main.ts*** и замените существующий код следующим:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

После этого вы можете запустить приложение и увидеть Kanban с загруженными данными на странице.

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Angular"
    className="img_border"
/>

Теперь вы знаете, как интегрировать DHTMLX Kanban с Angular. Вы можете доработать код под свои задачи. Финальный продвинутый пример доступен на [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).