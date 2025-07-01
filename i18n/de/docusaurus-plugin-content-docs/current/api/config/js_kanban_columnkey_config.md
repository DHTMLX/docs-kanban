---
sidebar_label: columnKey
title: columnKey-Konfiguration
description: Entdecken Sie die columnKey-Konfiguration in der DHTMLX JavaScript Kanban-Bibliothek. Finden Sie Entwicklerhandbücher, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# columnKey

### Beschreibung

@short: Optional. Gibt an, zu welcher Spalte eine Karte gehört.

:::info
Um Karten bestimmten Spalten zuzuordnen, ist es notwendig, einen Schlüssel (**column** oder einen *benutzerdefinierten*) zu verwenden und diesen auf die entsprechende Spalten-**ID** im Kartendatenobjekt zu setzen. Die Eigenschaft **columnKey** sollte in der Konfiguration des Widgets auf diesen Schlüssel gesetzt werden.
:::

### Verwendung

~~~jsx {}
columnKey?: string;
~~~

### Standardkonfiguration

:::note
Wenn Sie keinen benutzerdefinierten Spaltenschlüssel über die Eigenschaft **columnKey** angeben, verwendet das Widget standardmäßig den Schlüssel **"column"**! In diesem Fall sollte das Kartendatenobjekt den Schlüssel **column** mit der entsprechenden Spalten-**ID** enthalten.

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
