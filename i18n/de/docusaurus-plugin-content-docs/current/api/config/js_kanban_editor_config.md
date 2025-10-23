---
sidebar_label: editor
title: editor-Konfiguration
description: Sie können mehr über die editor-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# editor

### Beschreibung

@short: Optional. Ein Einstellungsobjekt zur Konfiguration des Kanban-Editors

### Verwendung

~~~jsx {}
editor?: {
    show?: boolean,
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Parameter

- `show` - (optional) - aktiviert/deaktiviert den Editor
- `autoSave` - (optional) aktiviert/deaktiviert den Autospeichermodus des Editors
- `debounce` - (optional) Verzögerungszeit für das automatische Speichern von Daten (funktioniert nur mit dem Parameter ***autoSave: true***)
- `placement` - (optional) gibt die Position des Editors an. Folgende Werte sind möglich:
    - `"sidebar"` - zeigt den Editor als Seitenleiste an
    - `"modal"` - zeigt den Editor als modales Fenster an

### Standardkonfiguration

~~~jsx {}
editor: {
    show: true,
    debounce: 100,
    autoSave: true,
    placement: "sidebar"
}
~~~

### Beispiel

~~~jsx {4-8}
new kanban.Kanban("#root", {
    columns,
    cards,
    editor: {
        show: true
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Der Parameter `placement` wurde in Version 1.6 hinzugefügt

**Verwandte Beispiele:** [Kanban. Öffnen des Editors in einem modalen Fenster](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)