---
sidebar_label: Интеграция с Angular
title: Интеграция с Angular
description: Ознакомьтесь с интеграцией с Angular в документации на JavaScript-библиотеку DHTMLX Kanban. Изучите руководства для разработчиков и справочник API, попробуйте примеры кода и живые демо, а также скачайте бесплатную 30-дневную версию DHTMLX Kanban.
---

# Интеграция с Angular

:::tip
Перед началом работы с этим руководством рекомендуется иметь базовое понимание **Angular**. Если нужно освежить знания, обратитесь к [**документации Angular**](https://angular.io/docs).
:::

DHTMLX Kanban отлично работает с **Angular**. Доступны примеры кода, показывающие, как использовать DHTMLX Kanban вместе с **Angular**. Подробнее смотрите в этом [**примере на GitHub**](https://github.com/DHTMLX/angular-kanban-demo).

## Создание проекта

:::info
Перед началом работы убедитесь, что у вас установлены [**Angular CLI**](https://angular.io/cli) и [**Node.js**](https://nodejs.org/en/).
:::

Чтобы создать новый проект под названием **my-angular-kanban-app** с помощью Angular CLI, выполните:

~~~json
ng new my-angular-kanban-app
~~~

:::note
Если вы следуете этому руководству, не забудьте отключить Server-Side Rendering (SSR) и Static Site Generation (SSG/Prerendering) при создании вашего Angular-приложения!
:::

Эта команда создаст всё необходимое, дополнительных команд не требуется.

### Установка зависимостей

Перейдите в директорию вашего нового приложения:

~~~json
cd my-angular-kanban-app
~~~

Далее установите зависимости и запустите сервер разработки. Для этого используйте [**yarn**](https://yarnpkg.com/):

~~~json
yarn
yarn start
~~~

Ваше приложение должно работать локально (например, по адресу `http://localhost:3000`).

## Создание Kanban

На этом этапе потребуется получить исходный код DHTMLX Kanban. Сначала остановите приложение и установите пакет Kanban.

### Шаг 1. Установка пакета

Скачайте [**триальную версию Kanban**](/how_to_start/#установка-kanban-через-npm-или-yarn) и следуйте инструкциям в файле README. Обратите внимание, что триальная версия действует 30 дней.

### Шаг 2. Создание компонента

Далее создайте компонент Angular для добавления Kanban с Toolbar в ваше приложение. Создайте папку **kanban** в **src/app/**, затем добавьте новый файл **kanban.component.ts**.

#### Импорт исходных файлов

Откройте **kanban.component.ts** и импортируйте исходники Kanban. Пути импорта будут следующими:

- Для PRO-версии, установленной из локальной папки:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- Для триальной версии:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

В примерах используется **триальная** версия.

#### Задайте контейнеры и инициализируйте Kanban с Toolbar

Чтобы отобразить Kanban с Toolbar, создайте для них контейнеры и инициализируйте компоненты через их конструкторы:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // имя шаблона, используемое в "app.component.ts" как <kanban />
    styleUrls: ["./kanban.component.css"], // подключите css-файл
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    // инициализируем контейнер для Toolbar
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // инициализируем контейнер для Kanban
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
        this._kanban.destructor(); // уничтожить Kanban
        this._toolbar.destructor(); // уничтожить Toolbar
    }
}
~~~

#### Добавление стилей

Чтобы Kanban корректно отображался, добавьте необходимые стили. Для этого создайте файл **kanban.component.css** в **src/app/kanban/** и вставьте туда следующие стили:

~~~css title="kanban.component.css"
/* импортируйте стили Kanban */
@import "@dhx/trial-kanban/dist/kanban.css";

/* стили для начальной страницы */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* стили для контейнеров Kanban и Toolbar */
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

Чтобы загрузить данные в Kanban, подготовьте набор данных. Создайте файл **data.ts** в **src/app/kanban/** и добавьте туда ваши данные:

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

Теперь откройте ***kanban.component.ts***. Импортируйте ваш файл с данными и передайте свойства данных в конфиг Kanban внутри метода `ngOnInit()` следующим образом:

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
        const { cards, columns, rows } = getData(); // инициализация свойств данных
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns, // передаем данные колонок
            cards, // передаем данные карточек
            rows, // передаем данные строк
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

Другой способ загрузить данные в Kanban - использовать метод [`parse()`](/api/methods/js_kanban_parse_method/) внутри метода `ngOnInit()`.

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
        const { cards, columns, rows } = getData(); // инициализация свойств данных
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

        // применяем данные через метод parse()
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

Использование `parse(data)` позволяет перезагружать данные в любое время.

Теперь компонент Kanban готов к использованию. Как только вы добавите элемент на страницу, Kanban будет инициализирован с набором данных. Вы также можете изменить любые настройки конфигурации. Полный список доступных свойств смотрите в [документации Kanban API](/api/overview/properties_overview/).

#### Обработка событий

Когда пользователь взаимодействует с Kanban, происходит событие. Вы можете использовать эти события для отслеживания действий и запуска собственного кода. Полный список событий доступен [здесь](/api/overview/events_overview/).

Откройте **kanban.component.ts** и обновите метод `ngOnInit()` так:

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

Чтобы добавить ***KanbanComponent*** в ваше приложение, откройте ***src/app/app.component.ts*** и замените стандартный код на следующий:

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

Далее создайте ***app.module.ts*** в ***src/app/*** и объявите *KanbanComponent*, как показано ниже:

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

Наконец, откройте ***src/main.ts*** и вставьте следующий код:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

Теперь вы можете запустить приложение и увидеть Kanban с загруженными данными на странице.

![Kanban initialization](/assets/trial_kanban.png)

Это базовая схема интеграции DHTMLX Kanban с Angular. Код можно адаптировать под ваши задачи. Для более продвинутого примера смотрите [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo).
