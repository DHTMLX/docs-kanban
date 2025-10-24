---
sidebar_label: api.intercept()
title: intercept-Methode
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die intercept-Methode. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.intercept()

### Beschreibung

@short: Ermöglicht das Abfangen und Verhindern von internen Ereignissen

### Verwendung

~~~jsx {}
api.intercept(
    event: string,
    callback: function,
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### Parameter

- `event` - (erforderlich) ein auszulösendes Ereignis
- `callback` - (erforderlich) eine auszuführende Rückruffunktion (die Argumente des Rückrufs hängen vom auszulösenden Ereignis ab)
- `config` - (optional) ein Objekt, das folgende Parameter enthält:
    - `intercept` - (optional) wenn Sie `intercept: true` bei der Erstellung des Ereignis-Listeners setzen, wird dieser Listener vor allen anderen ausgeführt
    - `tag` - (optional) ein Aktions-Tag. Sie können den Tag-Namen verwenden, um einen Aktions-Handler über die [`detach`](api/internal/js_kanban_detach_method.md)-Methode zu entfernen

### Ereignisse

:::info
Die vollständige Liste der internen Kanban-Ereignisse finden Sie [**hier**](api/overview/main_overview.md/#kanban-events)
:::

### Beispiel

~~~jsx {7-11}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Verhindert das Verschieben von Karten in die Spalte mit der ID "done"
board.api.intercept("move-card", ({ id, columnId }) => {
    if(columnId !== "done" ){
        return false;
    }
}, {tag: "move"});
~~~

**Änderungsprotokoll**: Die Parameter **config.tag** und **config.intercept** wurden in Version v1.7 hinzugefügt