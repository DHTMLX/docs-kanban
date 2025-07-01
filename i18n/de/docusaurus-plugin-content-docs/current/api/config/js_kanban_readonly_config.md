---
sidebar_label: readonly
title: readonly Config
description: Erkunden Sie die readonly-Konfiguration in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Sehen Sie sich Entwickleranleitungen, API-Referenzen an, probieren Sie Codebeispiele und Live-Demos aus und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# readonly

### Beschreibung

@short: Optional. Steuert, ob das Bearbeiten, Hinzufügen, Auswählen und Ziehen von Karten aktiviert oder deaktiviert ist.

### Verwendung

~~~js {}
readonly?: boolean;
//oder
readonly?: {
    edit?: boolean,
    add?: boolean,
    select?: boolean,
    dnd?: boolean
};
~~~

### Parameter

Es gibt zwei Möglichkeiten, den **readonly-Modus** einzurichten: mit dem **kurzen** oder dem **ausführlichen** Format.

Das **kurze** Format:
- `readonly` - (optional) aktiviert oder deaktiviert den **readonly-Modus** für das Kanban.

Das **ausführliche** Format:
- `readonly` - (optional) ein Objekt mit detaillierten Einstellungen. Es akzeptiert:
    - `edit` - (optional) aktiviert oder deaktiviert die **Kartenbearbeitung**.
    - `add` - (optional) aktiviert oder deaktiviert das **Hinzufügen neuer Karten**.
    - `select` - (optional) aktiviert oder deaktiviert die **Kartenauswahl**.
    - `dnd` - (optional) aktiviert oder deaktiviert das **Ziehen von Karten**.

### Standardkonfiguration

~~~jsx {}
readonly: false // readonly-Modus ist standardmäßig deaktiviert
//oder
readonly: {
    edit: true, // Bearbeitung ist aktiviert
    add: true, // Hinzufügen ist aktiviert
    select: true, // Auswahl ist aktiviert
    dnd: true // Ziehen ist aktiviert
}
~~~

### Beispiel

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // Bearbeitung deaktiviert
        add: true, // Hinzufügen aktiviert
        select: false, // Auswahl deaktiviert
        dnd: true // Ziehen aktiviert
    },
    // weitere Parameter
});
~~~

**Verwandtes Beispiel:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)
