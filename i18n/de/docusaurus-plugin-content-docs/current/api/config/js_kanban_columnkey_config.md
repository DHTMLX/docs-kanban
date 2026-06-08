---
sidebar_label: columnKey
title: columnKey Konfiguration API
description: Lesen Sie die columnKey Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie Karten über einen benutzerdefinierten Datenschlüssel an Spalten binden.
---

# columnKey

### Beschreibung

@short: Optional. Definiert die Zugehörigkeit der Karte zur Spalte

:::info
Um die Karten auf die Spalten zu verteilen, müssen Sie einen Schlüssel (**column** oder einen *benutzerdefinierten*) angeben und diesen im Kartendatenobjekt auf die **ID** der gewünschten Spalte setzen. Die Eigenschaft **columnKey** muss im Widget-Konfigurationsobjekt auf diesen Schlüssel gesetzt werden.
:::

### Verwendung

~~~jsx {}
columnKey?: string;
~~~

### Standardkonfiguration

:::note
Sofern Sie keinen Spaltenschlüssel über die Eigenschaft **columnKey** registrieren, verwendet das Widget standardmäßig den Schlüssel **"column"**! In diesem Fall müssen Sie den Schlüssel **column** im Kartendatenobjekt auf die benötigte Spalten-**ID** setzen.

~~~jsx {3}
const cards = [
    {
        column: "backlog",
        // weitere Daten
    }
];
~~~
:::

### Beispiel

~~~jsx {4,8,15}
const cards = [
    {
        label: "Backlog task",
        column_custom_key: "backlog"
    },
    {
        label: "In progress task",
        column_custom_key: "inprogress"
    }
];

new kanban.Kanban("#root", {
    columns,
    cards,
    columnKey: "column_custom_key",
    // weitere Parameter
});
~~~