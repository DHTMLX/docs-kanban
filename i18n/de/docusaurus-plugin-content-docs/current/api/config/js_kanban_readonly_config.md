---
sidebar_label: readonly
title: readonly Konfiguration API
description: Lesen Sie die readonly Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie die Bearbeitung deaktivieren und reine Anzeigeansichten des Boards erstellen.
---

# readonly

### Beschreibung

@short: Optional. Aktiviert/deaktiviert das Bearbeiten, Hinzufügen, Auswählen und Ziehen der Karten

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

Um den **readonly-Modus** zu konfigurieren, können Sie die **kurzen** oder **erweiterten** Parameter verwenden.

Der **kurze** Parameter:
- `readonly` - (optional) aktiviert/deaktiviert den **readonly-Modus** des Kanban

Die **erweiterten** Parameter:
- `readonly` - (optional) ein Objekt mit erweiterten Einstellungen. Hier können Sie folgende Parameter angeben:
    - `edit` - (optional) aktiviert/deaktiviert das **Bearbeiten** der Karten
    - `add` - (optional) aktiviert/deaktiviert das **Hinzufügen** neuer Karten
    - `select` - (optional) aktiviert/deaktiviert das **Auswählen** der Karten
    - `dnd` - (optional) aktiviert/deaktiviert das **Ziehen** der Karten

### Standardkonfiguration

~~~jsx {}
readonly: false // readonly-Modus ist deaktiviert
//oder
readonly: {
    edit: true, // Bearbeiten ist aktiviert
    add: true, // Hinzufügen ist aktiviert
    select: true, // Auswählen ist aktiviert
    dnd: true // Ziehen ist aktiviert
}
~~~

### Beispiel

~~~jsx {4-9}
new kanban.Kanban("#root", {
    cards,
    columns,
    readonly: {
        edit: false, // Bearbeiten deaktivieren
        add: true, // Hinzufügen aktivieren
        select: false, // Auswählen deaktivieren
        dnd: true // Ziehen aktivieren
    },
    // weitere Parameter
});
~~~

**Verwandtes Beispiel:** [Readonly mode](https://snippet.dhtmlx.com/b8x84yln?tag=kanban)