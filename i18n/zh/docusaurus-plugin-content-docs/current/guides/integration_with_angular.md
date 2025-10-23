---
sidebar_label: 与 Angular 的集成
title: 与 Angular 的集成
description: 您可以在 DHTMLX JavaScript Kanban 库的文档中了解与 Angular 的集成。浏览开发者指南和 API 参考，尝试代码示例和在线演示，并下载 DHTMLX Kanban 的免费 30 天评估版。
---

# 与 Angular 的集成

:::tip
在阅读本篇文档前，您应熟悉 **Angular** 的基本概念和模式。如需回顾相关知识，请参考 [**Angular documentation**](https://v17.angular.io/docs)。
:::

DHTMLX Kanban 与 **Angular** 兼容。我们已经准备了如何在 **Angular** 中使用 DHTMLX Kanban 的代码示例。更多信息请参阅对应的 [**GitHub 示例**](https://github.com/DHTMLX/angular-kanban-demo)。

## 创建项目

:::info
在开始创建新项目之前，请先安装 [**Angular CLI**](https://v17.angular.io/cli) 和 [**Node.js**](https://nodejs.org/en/)。
:::

使用 Angular CLI 创建一个新的 **my-angular-kanban-app** 项目。请运行以下命令：

~~~json
ng new my-angular-kanban-app
~~~

:::note
如果您希望按照本指南操作，请在创建新的 Angular 应用时禁用服务端渲染（SSR）和静态站点生成（SSG/Prerendering）！
:::

上述命令会安装所有必要工具，无需额外运行其他命令。

### 安装依赖

进入新创建的应用目录：

~~~json
cd my-angular-kanban-app
~~~

安装依赖并启动开发服务器。为此，请使用 [**yarn**](https://yarnpkg.com/) 包管理器：

~~~json
yarn
yarn start
~~~

应用将会在本地（例如 `http://localhost:3000`）运行。

## 创建 Kanban

接下来需要获取 DHTMLX Kanban 的源代码。首先，停止当前应用并开始安装 Kanban 包。

### 步骤 1. 安装包

下载 [**试用版 Kanban 包**](/how_to_start/#通过-npm-或-yarn-安装-kanban)，并按照 README 文件中的步骤进行操作。请注意，试用版 Kanban 仅可使用 30 天。

### 步骤 2. 创建组件

现在需要创建一个 Angular 组件，将 Kanban 和 Toolbar 添加到应用中。在 **src/app/** 目录下创建 **kanban** 文件夹，并在其中新建一个名为 **kanban.component.ts** 的文件。

#### 导入源文件

打开 **kanban.component.ts** 文件并导入 Kanban 源文件。请注意：

- 如果您使用 PRO 版本并从本地文件夹安装 Kanban 包，导入路径如下：

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- 如果您使用 Kanban 的试用版，请指定如下路径：

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

本教程展示了如何配置 **trial** 版本的 Kanban。

#### 设置容器并初始化带有 Toolbar 的 Kanban

要在页面上显示带有 Toolbar 的 Kanban，需要为 Kanban 和 Toolbar 设置容器，并使用相应的构造函数初始化这些组件：

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // 在 "app.component.ts" 文件中以 <kanban /> 形式使用的模板名
    styleUrls: ["./kanban.component.css"], // 引入 css 文件
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    // 初始化 Toolbar 容器
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // 初始化 Kanban 容器
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // 初始化 Kanban 组件
        this._kanban = new Kanban(this.kanban_container.nativeElement, {});

        // 初始化 Toolbar 组件
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // 其他配置属性 
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); // 销毁 Kanban
        this._toolbar.destructor(); // 销毁 Toolbar
    }
}
~~~

#### 添加样式

为了正确显示 Kanban，需要提供相应的样式。为此，您可以在 **src/app/kanban/** 目录下创建 **kanban.component.css** 文件，并为 Kanban 及其容器指定必要样式：

~~~css title="kanban.component.css"
/* 导入 Kanban 样式 */
@import "@dhx/trial-kanban/dist/kanban.css";

/* 为初始页面指定样式 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* 为 Kanban 和 Toolbar 容器指定样式 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* 为 Kanban 容器指定样式 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 加载数据

要向 Kanban 添加数据，需要提供一组数据。您可以在 **src/app/kanban/** 目录下创建 **data.ts** 文件，并在其中添加一些数据：

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

然后打开 ***kanban.component.ts*** 文件。导入数据文件，并在 `ngOnInit()` 方法中将相应的数据属性指定到 Kanban 的配置对象，如下所示：

~~~jsx {2,23,25-27} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // 导入数据
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
        const { cards, columns, rows } = getData(); // 初始化数据属性
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns, // 应用列数据
            cards, // 应用卡片数据
            rows, // 应用行数据
            rowKey: "type",
            // 其他配置属性 
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // 其他配置属性 
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

您还可以在 Angular 的 `ngOnInit()` 方法中使用 [`parse()`](/api/methods/js_kanban_parse_method/) 方法将数据加载到 Kanban。

~~~jsx {2,23,37-42} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // 导入数据
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
        const { cards, columns, rows } = getData(); // 初始化数据属性
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // 其他配置属性 
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // 其他配置属性 
        });

        // 通过 parse() 方法应用数据
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

`parse(data)` 方法可在每次更改时重新加载数据。

现在 Kanban 组件已经可以使用。当该元素被添加到页面时，会自动初始化带有数据的 Kanban。您还可以根据需要提供其他配置设置。请访问我们的 [Kanban API 文档](/api/overview/properties_overview/) 查看所有可用属性的完整列表。

#### 事件处理

当用户在 Kanban 上执行某些操作时，会触发事件。您可以利用这些事件检测操作并执行所需代码。参阅 [完整事件列表](/api/overview/events_overview/)。

打开 **kanban.component.ts** 文件，并按以下方式补充 `ngOnInit()` 方法：

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

### 步骤 3. 将 Kanban 添加到应用中

要将 ***KanbanComponent*** 组件添加到您的应用中，请打开 ***src/app/app.component.ts*** 文件，并用以下内容替换默认代码：

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

然后在 ***src/app/*** 目录下创建 ***app.module.ts*** 文件，并按如下方式指定 *KanbanComponent*：

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

最后一步，打开 ***src/main.ts*** 文件，并用以下内容替换现有代码：

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

此后，您即可启动应用，在页面上看到加载了数据的 Kanban。

import trial from '@site/static/img/trial_kanban.png';

<img
    src={trial}
    alt="Kanban with Angular"
    className="img_border"
/>

现在您已经了解如何将 DHTMLX Kanban 集成到 Angular 中。您可以根据具体需求自定义代码。最终的高级示例可在 [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo) 查看。