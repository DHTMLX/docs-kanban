---
sidebar_label: editor
title: editor Konfiguration
description: Entdecken Sie die editor Konfiguration in der DHTMLX JavaScript Kanban-Bibliotheksdokumentation. Sehen Sie sich Entwicklerhandbücher, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# editor

### Beschreibung

@short: Optional. Enthält Einstellungen zur Anpassung des Kanban-Editors

### Verwendung

~~~jsx {}
editor?: {
    autoSave?: boolean,
    debounce?: number,
    placement?: "sidebar" | "modal"
}; 
~~~

### Parameter

- `autoSave` - (optional) aktiviert oder deaktiviert die automatische Speicherfunktion
- `debounce` - (optional) legt die Verzögerungszeit vor dem automatischen Speichern der Daten fest (wirksam nur bei ***autoSave: true***)
- `placement` - (optional) definiert, wo der Editor angezeigt wird. Mögliche Werte sind:
    - `"sidebar"` - zeigt den Editor als Seitenleiste an
    - `"modal"` - zeigt den Editor in einem modalen Fenster an

### Standardkonfiguration

~~~jsx {}
editor: {
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
        autoSave: true,
        debounce: 2000,
        placement: "modal"
    }
    // andere Parameter
});
~~~

**Änderungsprotokoll:** Die Option `placement` wurde in Version v1.6 eingeführt

**Verwandte Beispiele:** [Kanban. Öffnen des Editors in einem modalen Fenster](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban)
