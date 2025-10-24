---
sidebar_label: api.on()
title: on Methode
description: Sie können mehr über die on Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# api.on()

### Beschreibung

@short: Ermöglicht das Anhängen eines Handlers an interne Ereignisse

### Verwendung

~~~jsx {}
api.on(
    event: string,
    handler: function
    config?: { intercept?: boolean, tag?: number | string | symbol }
): void;
~~~

### Parameter

- `event` - (erforderlich) ein auszulösendes Ereignis
- `handler` - (erforderlich) ein anzuhängender Handler (die Argumente des Handlers hängen vom ausgelösten Ereignis ab)
- `config` - (optional) ein Objekt, das folgende Parameter enthält:
    - `intercept` - (optional) wenn Sie beim Erstellen des Ereignis-Listeners `intercept: true` setzen, wird dieser Listener vor allen anderen ausgeführt
    - `tag` - (optional) ein Aktions-Tag. Sie können den Tag-Namen verwenden, um einen Aktions-Handler über die [`detach`](api/internal/js_kanban_detach_method.md) Methode zu entfernen

### Ereignisse

:::info
Die vollständige Liste der internen Kanban-Ereignisse finden Sie [**hier**](api/overview/main_overview.md/#kanban-events)
:::

### Beispiel

~~~jsx {7-9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// gibt die Kartendaten in der Konsole aus, wenn sie verschoben wird
board.api.on("move-card", ({ id, columnId }) => {
    console.log({ id, columnId });
}, {tag: "move"});
~~~

**Änderungsprotokoll**: Die Parameter **config.tag** und **config.intercept** wurden in Version 1.7 hinzugefügt