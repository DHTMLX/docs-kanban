---
sidebar_label: Integration mit Salesforce
title: Integration mit Salesforce
description: Erfahren Sie, wie Sie DHTMLX Kanban in Salesforce integrieren. Diese Anleitung erklärt das erforderliche HTML-Setup und die Konfiguration der Umgebung für einen reibungslosen Betrieb innerhalb von Salesforce Lightning-Komponenten.
---

# Integration mit Salesforce

:::tip
Diese Anleitung setzt Kenntnisse der [Salesforce](https://www.salesforce.com/)-Konzepte und -Muster voraus. Hintergrundinformationen finden Sie in der [Salesforce-Dokumentation](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban ist mit der [Salesforce](https://www.salesforce.com/) Plattform kompatibel. Das vollständige Codebeispiel ist auf [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo) verfügbar.

:::note
Das Kanban-Widget erkennt die Salesforce-Umgebung und konfiguriert die Integrationslogik intern. In den meisten Fällen müssen Sie keine [Salesforce-spezifischen Methoden](#salesforce-spezifische-methoden) manuell aufrufen.
:::

## Umgebung vorbereiten

Um Kanban in ein Salesforce-Projekt einzubinden, versehen Sie den *Root*-Container mit dem HTML-Attribut `data-wx-root="true"`. Die Bibliothek verwendet dieses Attribut, um den Hauptknoten für das Mounten von Kanban und der Toolbar zu finden:

~~~html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
~~~

Verschachtelte Elemente mit dem Attribut `data-wx-portal-root="1"` dienen als Container für die DHTMLX-Komponenten (Toolbar, Kanban).

## Salesforce-Umgebungs-API

DHTMLX Kanban stellt die Hilfsklasse `salesForceEnv` mit Methoden für die manuelle Steuerung der Salesforce-Umgebung bereit. Importieren Sie die Hilfsklasse wie folgt:

~~~jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
~~~

:::note
Salesforce-spezifische Methoden sind in der Regel nicht erforderlich. Verwenden Sie sie als Fallback, wenn die automatische Erkennung fehlschlägt.
:::

### Salesforce-spezifische Methoden

Die Hilfsklasse `salesForceEnv` stellt die folgenden Methoden bereit:

| Methode                                                        | Beschreibung                                                                |
| :------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                       | Erkennt, ob Kanban innerhalb von Salesforce ausgeführt wird                 |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`| Hängt ein globales Event an das erste verfügbare HTML-Element an            |
| `salesForceEnv.getTopNode()`                                   | Gibt das erste verfügbare HTML-Element innerhalb der Salesforce-DOM-Hierarchie zurück |

Das folgende Code-Snippet importiert die Hilfsklasse und führt die Erkennung durch:

~~~jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
~~~

### Zusätzlich exportierte Funktion

| Funktion              | Beschreibung                                                                       |
| :-------------------- | :--------------------------------------------------------------------------------- |
| `enableSalesForce()`  | Setzt die Salesforce-Umgebung manuell, wenn die automatische Erkennung nicht verfügbar ist |

Das folgende Code-Snippet importiert `enableSalesForce()` und erzwingt die Salesforce-Umgebung:

~~~jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
~~~

## Arbeitsablauf

1. Fügen Sie das Attribut `data-wx-root="true"` zu Ihrem LWC-Container hinzu.
2. Importieren und initialisieren Sie Kanban und die Toolbar (die Toolbar ist optional).
3. Kanban erkennt den Salesforce-Kontext und wendet die interne Konfiguration automatisch an.
4. Verzichten Sie auf den Aufruf von `enableSalesForce()` und die Methoden von `salesForceEnv`, sofern die App nicht in einem nicht standardmäßigen Einbettungsszenario ausgeführt wird.

### Beispiel

Das folgende Code-Snippet initialisiert Kanban und die Toolbar innerhalb einer LWC-Komponente:

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

DHTMLX Kanban ist nun in die Salesforce Lightning-Umgebung integriert. Das Widget übernimmt die DOM-Hierarchie und das Event-Binding innerhalb von LWC. Konfigurieren Sie Kanban weiterhin über die Standard-API, um das Erscheinungsbild und das Verhalten anzupassen. Das vollständige Beispiel ist auf [GitHub](https://github.com/DHTMLX/salesforce-lwc-demo) verfügbar.
