---
sidebar_label: Integration mit Salesforce
title: Integration mit Salesforce
description: Erfahren Sie, wie Sie DHTMLX Kanban in Salesforce integrieren. Diese Anleitung erklärt das erforderliche HTML-Setup und die Konfiguration der Umgebung für einen reibungslosen Betrieb innerhalb von Salesforce Lightning-Komponenten.
---

# Integration mit Salesforce

:::tip
Sie sollten mit den grundlegenden Konzepten und Mustern von [**Salesforce**](https://www.salesforce.com/) vertraut sein, bevor Sie diese Dokumentation lesen. Um Ihr Wissen aufzufrischen, lesen Sie bitte die [**Salesforce-Dokumentation**](https://developer.salesforce.com/docs).
:::

DHTMLX Kanban ist mit der [Salesforce](https://www.salesforce.com/) Plattform kompatibel. Wir haben Codebeispiele vorbereitet, die zeigen, wie Sie DHTMLX Kanban in die Salesforce-Umgebung einbinden können. Weitere Informationen finden Sie im entsprechenden [Beispiel auf GitHub](https://github.com/DHTMLX/salesforce-lwc-demo).

:::note
Das JavaScript Kanban-Widget erkennt automatisch, wenn es innerhalb einer [**Salesforce**](https://www.salesforce.com/) Umgebung ausgeführt wird und konfiguriert die Integrationslogik intern. In den meisten Fällen müssen Sie keine [**Salesforce-spezifischen Methoden**](#salesforce-specific-methods) manuell aufrufen.
:::

## Vorbereitung der Umgebung

Wenn Sie Kanban in Ihr Salesforce-Projekt einbinden möchten, müssen Sie den *Root*-Container mit dem HTML-Attribut `data-wx-root="true"` versehen. Dieses Attribut ermöglicht es der Bibliothek, den Hauptknoten für das Mounten der **Kanban**- und **Toolbar**-Widgets zu finden.

```html title="kanban.html"
<template>
    <div id="wx-root" data-wx-root="true" class="kanban-wrapper" tabindex="0">
        <div class="sf_toolbar" lwc:dom="manual" data-wx-portal-root="1"></div>
        <div class="sf_kanban" lwc:dom="manual" data-wx-portal-root="1"></div>
    </div>
</template>
```

Verschachtelte Elemente mit dem Attribut `data-wx-portal-root="1"` dienen als Container für DHTMLX-Komponenten (zum Beispiel **Toolbar** und **Kanban**).

## Salesforce-Umgebungs-API

DHTMLX Kanban enthält die Hilfsklasse `salesForceEnv`, die Methoden für die manuelle Steuerung der Salesforce-Umgebung bereitstellt. Sie können die Hilfsklasse `salesForceEnv` wie folgt importieren:

```jsx {4}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";
```

:::note
Normalerweise sind Salesforce-spezifische Methoden nicht erforderlich, sie stehen aber als Fallback zur Verfügung, falls die automatische Erkennung fehlschlägt.
:::

### Salesforce-spezifische Methoden

Sie können die folgenden Methoden der Hilfsklasse `salesForceEnv` verwenden:

| Methode                                                        | Beschreibung                                                                |
| :------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `salesForceEnv.detect()`                                       | Erkennt, ob Kanban innerhalb von Salesforce ausgeführt wird                 |
| `salesForceEnv.addGlobalEvent(eventName, handler, htmlElement)`| Hängt ein globales Event an das erste verfügbare HTML-Element an            |
| `salesForceEnv.getTopNode()`                                   | Gibt das erste verfügbare HTML-Element innerhalb der Salesforce-DOM-Hierarchie zurück |

```jsx {4,7}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv
} from "@dhx/trial-kanban";

salesForceEnv.detect();
```

### Zusätzlich exportierte Funktion

| Funktion              | Beschreibung                                                                       |
| :-------------------- | :--------------------------------------------------------------------------------- |
| `enableSalesForce()`  | Setzt die Salesforce-Umgebung manuell, wenn die automatische Erkennung nicht verfügbar ist |

```jsx {5,8}
import { 
    Kanban, 
    Toolbar, 
    salesForceEnv,
    enableSalesForce
} from "@dhx/trial-kanban";

enableSalesForce();
```

## Arbeitsablauf

1. Fügen Sie das Attribut `data-wx-root="true"` zu Ihrem LWC-Container hinzu
2. Importieren und initialisieren Sie DHTMLX Kanban und optional die Toolbar
3. Das JavaScript Kanban-Widget erkennt automatisch den Salesforce-Kontext und wendet die interne Konfiguration an
4. Sie müssen die Funktion `enableSalesForce()` oder Methoden von `salesForceEnv` nur dann aufrufen, wenn Ihre App in einem nicht standardmäßigen Einbettungsszenario läuft

### Beispiel

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

Nun ist die DHTMLX Kanban-Komponente vollständig in Ihre **Salesforce Lightning**-Umgebung integriert. Das Widget übernimmt automatisch die DOM-Hierarchie und das Event-Binding innerhalb von LWC. Sie können Kanban weiterhin über die Standard-API konfigurieren sowie das Erscheinungsbild und die Logik von Kanban nach den Anforderungen Ihres Projekts anpassen. Das vollständige Beispiel finden Sie auf [**GitHub**](https://github.com/DHTMLX/salesforce-lwc-demo).