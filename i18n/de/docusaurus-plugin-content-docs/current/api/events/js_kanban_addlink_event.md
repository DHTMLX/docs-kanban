---
sidebar_label: add-link
title: add-link Ereignis
description: Sie können mehr über das add-link Ereignis in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# add-link

### Beschreibung

@short: Wird ausgelöst, wenn ein neuer Link hinzugefügt wird

### Verwendung

~~~jsx {}
"add-link": ({
    id?: string | number,
    link: object,
    skipProvider?: boolean
}) => void;
~~~

### Parameter

Der Callback für das **add-link** Ereignis erhält ein Objekt mit folgenden Eigenschaften:

- `id` - (optional) die ID, die dem neuen Link zugewiesen wurde
- `link` - (erforderlich) das Datenobjekt, das den neuen Link repräsentiert. Die vollständige Liste der Link-Parameter finden Sie [hier](/api/config/js_kanban_links_config.md)
- `skipProvider` - (optional) steuert, ob die Anfrage an den Server verhindert wird oder nicht

:::info
Zur Verwaltung interner Ereignisse können Sie die [**Event Bus Methoden**](/api/overview/main_overview.md/#event-bus-methoden) verwenden
:::

### Beispiel

~~~jsx {8-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    links
});
// abonnieren des "add-link" Ereignisses
board.api.on("add-link", (obj) => {
    console.log(obj.link.masterId);
});
~~~

**Änderungsprotokoll:** Dieses Ereignis wurde in Version v1.4 eingeführt
