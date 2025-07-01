---
sidebar_label: Angular와의 통합
title: Angular와의 통합
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 Angular와의 통합 방법을 확인할 수 있습니다. 개발자 가이드와 API 참조 문서를 살펴보고, 코드 예제와 라이브 데모를 시도해 보세요. 또한 DHTMLX Kanban의 30일 무료 평가판도 다운로드할 수 있습니다.
---

# Angular와의 통합

:::tip
이 가이드를 시작하기 전에 **Angular**에 대한 기본적인 이해가 있으면 도움이 됩니다. 복습이 필요하다면 [**Angular 문서**](https://angular.io/docs)를 확인해 보세요.
:::

DHTMLX Kanban은 **Angular**와 원활하게 작동합니다. DHTMLX Kanban을 **Angular**와 함께 사용하는 방법에 대한 코드 예제가 제공되어 있습니다. 자세한 내용은 [**GitHub 예제**](https://github.com/DHTMLX/angular-kanban-demo)에서 확인할 수 있습니다.

## 프로젝트 생성하기

:::info
새 프로젝트를 시작하기 전에 [**Angular CLI**](https://angular.io/cli)와 [**Node.js**](https://nodejs.org/en/)가 설치되어 있는지 확인하세요.
:::

Angular CLI로 **my-angular-kanban-app**라는 새 프로젝트를 생성하려면 다음 명령어를 실행하세요:

~~~json
ng new my-angular-kanban-app
~~~

:::note
이 가이드를 따르는 경우, Angular 앱을 생성할 때 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG/Prerendering)을 비활성화해야 합니다!
:::

이 명령어를 실행하면 필요한 모든 설정이 완료되며, 추가 명령 없이 바로 사용할 수 있습니다.

### 의존성 설치

새로 생성한 앱 디렉터리로 이동하세요:

~~~json
cd my-angular-kanban-app
~~~

이제 의존성을 설치하고 개발 서버를 실행할 차례입니다. [**yarn**](https://yarnpkg.com/)을 사용하는 방법은 다음과 같습니다:

~~~json
yarn
yarn start
~~~

앱이 로컬에서 실행됩니다(예: `http://localhost:3000`).

## Kanban 생성

이제 DHTMLX Kanban 소스 코드를 준비해야 합니다. 먼저 앱을 중지한 후 Kanban 패키지를 설치하세요.

### 1단계. 패키지 설치

[**평가판 Kanban 패키지**](/how_to_start/#kanban을-npm-또는-yarn으로-설치하기)를 다운로드하고, README에 안내된 단계를 따르세요. 평가판은 30일 동안 사용할 수 있습니다.

### 2단계. 컴포넌트 생성

다음으로, Kanban과 Toolbar를 앱에 추가하기 위한 Angular 컴포넌트를 생성하세요. **src/app/** 경로에 **kanban** 폴더를 만들고, **kanban.component.ts** 파일을 추가합니다.

#### 소스 파일 임포트

**kanban.component.ts**를 열고 Kanban 소스 파일을 임포트하세요. 임포트 경로 예시는 다음과 같습니다:

- 로컬 폴더에서 PRO 버전을 설치한 경우:

~~~jsx
import { Kanban, Toolbar } from 'dhx-kanban-package';
~~~

- 평가판을 사용하는 경우:

~~~jsx
import { Kanban, Toolbar } from '@dhx/trial-kanban';
~~~

여기서는 **평가판** 예제를 사용합니다.

#### 컨테이너 설정 및 Kanban, Toolbar 초기화

Kanban과 Toolbar를 표시하려면 각각의 컨테이너를 만들고 생성자를 통해 컴포넌트를 초기화하세요:

~~~jsx {1,8-11,15-18,24-31} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, ViewEncapsulation} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "kanban", // "app.component.ts" 파일에서 <kanban />으로 사용할 템플릿 명칭
    styleUrls: ["./kanban.component.css"], // css 파일 포함
    template:  `<div class = "component_container">
                    <div #toolbar_container></div>
                    <div #kanban_container class = "widget"></div>
                </div>`
})

export class KanbanComponent implements OnInit, OnDestroy {
    // Toolbar 컨테이너 초기화
    @ViewChild("toolbar_container", { static: true }) toolbar_container!: ElementRef;
    // Kanban 컨테이너 초기화
    @ViewChild("kanban_container", { static: true }) kanban_container!: ElementRef;

    private _kanban!: Kanban;
    private _toolbar!: Toolbar;

    ngOnInit() {
        // Kanban 컴포넌트 초기화
        this._kanban = new Kanban(this.kanban_container.nativeElement, {});

        // Toolbar 컴포넌트 초기화
        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // 기타 설정 속성
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); // Kanban 해제
        this._toolbar.destructor(); // Toolbar 해제
    }
}
~~~

#### 스타일 추가

Kanban이 올바르게 표시되도록 필요한 스타일을 추가하세요. **src/app/kanban/** 경로에 **kanban.component.css** 파일을 생성하고 아래 스타일을 입력합니다:

~~~css title="kanban.component.css"
/* Kanban 스타일 임포트 */
@import "@dhx/trial-kanban/dist/kanban.css";

/* 페이지 초기 스타일 지정 */
html,
body{
    height: 100%;
    padding: 0;
    margin: 0;
}

/* Kanban과 Toolbar 컨테이너 스타일 지정 */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* Kanban 컨테이너 스타일 지정 */
.widget {
    height: calc(100% - 56px);
}
~~~

#### 데이터 불러오기

Kanban에 데이터를 입력하려면 데이터 세트를 준비해야 합니다. **src/app/kanban/** 경로에 **data.ts** 파일을 만들고 아래와 같이 데이터를 추가하세요:

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

이제 ***kanban.component.ts*** 파일을 열고, 데이터 파일을 임포트한 후 `ngOnInit()` 메서드 내 Kanban 설정에 데이터 속성을 전달하세요:

~~~jsx {2,23,25-27} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // 데이터 임포트
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
        const { cards, columns, rows } = getData(); // 데이터 속성 초기화
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns, // 컬럼 데이터 적용
            cards, // 카드 데이터 적용
            rows, // 행 데이터 적용
            rowKey: "type",
            // 기타 설정 속성
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // 기타 설정 속성
        });
    }

    ngOnDestroy(): void {
        this._kanban.destructor(); 
        this._toolbar.destructor();
    }
}
~~~

또 다른 방법으로는, [`parse()`](/api/methods/js_kanban_parse_method/) 메서드를 `ngOnInit()` 메서드 내에서 사용해 Kanban에 데이터를 불러올 수 있습니다.

~~~jsx {2,23,37-42} title="kanban.component.ts"
import { Kanban, Toolbar } from '@dhx/trial-kanban';
import { getData } from "./data"; // 데이터 임포트
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
        const { cards, columns, rows } = getData(); // 데이터 속성 초기화
        this._kanban = new Kanban(this.kanban_container.nativeElement, {
            columns: [],
            cards: [],
            rows: [],
            rowKey: "type",
            // 기타 설정 속성
        });

        this._toolbar = new Toolbar(this.toolbar_container.nativeElement, {
            api: this._kanban.api,
            // 기타 설정 속성
        });

        // parse() 메서드로 데이터 적용
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

`parse(data)`를 사용하면 필요할 때마다 데이터를 다시 불러올 수 있습니다.

이제 Kanban 컴포넌트 준비가 완료되었습니다. 페이지에 해당 요소를 추가하면 데이터 세트로 Kanban이 초기화됩니다. 설정이 필요하다면 언제든 조정할 수 있습니다. 사용 가능한 속성의 전체 목록은 [Kanban API 문서](/api/overview/properties_overview/)에서 확인할 수 있습니다.

#### 이벤트 처리

Kanban에서 사용자가 상호작용할 때마다 이벤트가 발생합니다. 이러한 이벤트를 이용해 동작을 추적하거나 직접 코드를 실행할 수 있습니다. [이벤트 전체 목록](/api/overview/events_overview/)을 참고하세요.

**kanban.component.ts** 파일을 열고 `ngOnInit()` 메서드를 다음과 같이 업데이트하세요:

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

### 3단계. Kanban을 앱에 추가

***KanbanComponent***를 앱에 연결하려면 ***src/app/app.component.ts*** 파일을 열고 기본 코드를 다음으로 교체하세요:

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

다음으로, ***src/app/*** 경로에 ***app.module.ts*** 파일을 생성하고 *KanbanComponent*를 선언하세요:

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

마지막으로, ***src/main.ts*** 파일을 열고 다음 코드를 입력하세요:

~~~jsx title="main.ts"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
~~~

이제 앱을 실행하면 Kanban이 데이터와 함께 페이지에 표시되는 것을 볼 수 있습니다.

![Kanban initialization](/assets/trial_kanban.png)

여기까지가 DHTMLX Kanban을 Angular에 통합하는 기본적인 방법입니다. 코드는 필요에 따라 자유롭게 수정할 수 있습니다. 더 발전된 예제는 [**GitHub**](https://github.com/DHTMLX/angular-kanban-demo)에서 확인하세요.
