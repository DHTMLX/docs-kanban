---
sidebar_label: rowShape
title: rowShape Konfiguration
description: Sie können mehr über die rowShape-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# rowShape

### Beschreibung

@short: Optional. Ein Objekt mit Einstellungen zur Verwaltung des Erscheinungsbilds der Zeilen

### Verwendung

~~~jsx {}
rowShape?: {
    menu?: {
        show?: boolean, 
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, row }) => void,
                data?: array // ein Array von Untermenüpunkten
            }, {...} // weitere Elementdaten
        ] | ({ row, rowIndex, rows, readonly }) => array | null
    },
    css?: (row, cards) => string,
    confirmDeletion?: boolean
};
~~~

### Parameter

Um das Erscheinungsbild der Zeilen zu konfigurieren, können Sie im **rowShape**-Objekt folgende Parameter angeben:

- `menu` - (optional) ein Objekt mit Parametern für das Kontextmenü der Zeilen. Hier können Sie folgende Parameter festlegen:
    - `show` - (optional) aktiviert/deaktiviert das Kontextmenü einer Zeile
    - `items` - (optional) ein Array von Objekten mit Parametern der Elemente des Kontextmenüs der Zeilen. Für jedes Element können Sie folgende Parameter angeben:
        - `id` - (optional) eine ID des Menüelements. Um die eingebauten Aktionen zu verwenden, müssen Sie folgende Werte angeben:
            - ***"set-edit"*** - definiert die Aktion zum Bearbeiten eines Zeilennamens
            - ***"move-row:up"*** - definiert die Aktion zum Verschieben einer Zeile nach oben
            - ***"move-row:down"*** - definiert die Aktion zum Verschieben einer Zeile nach unten
            - ***"delete-row"*** - definiert die Aktion zum Löschen einer Zeile

        - `icon` - (optional) ein Klassenname des Icons des Menüelements. Hier können Sie beliebige Icons verwenden, die zu Icon-Fonts passen (*mdi-delete*)
        - `text` - (optional) ein Name des Menüelements
        - `disabled` - (optional) ein Zustand des Menüelements (*aktiv* oder *deaktiviert* abhängig vom *boolean* Wert)
        - `onClick` - (optional) eine benutzerdefinierte Callback-Funktion, die folgende Argumente erhält:
            - ***id*** - die ID des aktuellen Menüelements
            - ***item*** - ein Datenobjekt des aktuellen Menüelements
            - ***row*** - ein Datenobjekt der Zielzeile

        - `data` - (optional) ein Array von Objekten, die Untermenüpunkte des Menüs repräsentieren

    :::info
    Sie können den Parameter `menu.items` auch auf eine benutzerdefinierte Funktion setzen, die folgende Argumente erhält:
    - ***row*** - ein Datenobjekt der aktuellen Zeile
    - ***rowIndex*** - der Index der aktuellen Zeile
    - ***rows*** - ein Array von Objekten mit allen Zeilendaten
    - ***readonly*** - ein Objekt mit readonly [Status-Eigenschaften](api/internal/js_kanban_getstate_method.md)

    Diese Funktion ermöglicht es, das Menü für jede Zeile anzupassen oder für eine bestimmte Zeile zu verbergen (indem *null* oder *false* zurückgegeben wird):

    ~~~jsx {}
    items: ({ rowIndex }) => {
        if(rowIndex == 0){
            return null;
        } else {
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
                {
                    id: "custom-delete-row",
                    icon: "wxi-delete",
                    text: "Zeile entfernen"
                },
                {
                    id: "custom-move-row:up",
                    icon: "wxi-arrow-up",
                    text: "Nach oben verschieben"
                }
            ];
        }
    }
    ~~~
    :::

- `css` - eine Funktion, die eine CSS-Klasse zurückgibt, die bedingt auf Zeilen angewendet wird
- `confirmDeletion` - (optional) zeigt/versteckt den **Bestätigungsdialog**, der es Nutzern ermöglicht, das Löschen einer Zeile zu bestätigen oder abzulehnen

### Standardkonfiguration

~~~jsx {}
const getDefaultRowMenuItems = ({ row, rowIndex, rows, readonly }) => [
    { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
    {
        id: "move-row:up",
        icon: "wxi-arrow-up",
        text: "Nach oben verschieben",
        disabled: rowIndex <= 0
    },
    {
        id: "move-row:down",
        icon: "wxi-arrow-down",
        text: "Nach unten verschieben",
        disabled: rowIndex >= rows.length - 1
    },
    { id: "delete-row", icon: "wxi-delete", text: "Löschen" }
];
const rowShape = {
    menu: {
        show: true,
        items: getDefaultRowMenuItems
    },
    confirmDeletion: true
};
~~~

### Beispiel

~~~jsx {10-43,48}
const changeRowColor = (row, cssClass) => board.updateRow({ 
    id: row.id,
    row: {
        css: cssClass,
        collapsed: false
    },
    replace: false
});

const rowShape = {
    menu: {
        show: true,
        items: ({ row, rowIndex, rows, readonly }) => {
            if (rowIndex == 0){
                return false;
            } else {
                return [
                    {
                        id: "color",
                        text: "Farbe",
                        data: [
                            { 
                                id:"gray", 
                                text: "Grau",
                                onClick: ({ id, item, row }) => changeRowColor(row, "gray")
                            },
                            { 
                                id:"yellow", 
                                text: "Gelb",
                                onClick: ({ id, item, row }) => changeRowColor(row, "yellow")
                            },
                            { 
                                id:"red", 
                                text: "Rot",
                                onClick: ({ id, item, row }) => changeRowColor(row, "red")
                            }
                        ]
                    }
                ];
            }     
        }
    },
    css: (row, cards) => row.id == "task" && cards.length < 3 ? "green" : "red",
    confirmDeletion: false
};

new kanban.Kanban("#root", {
    cards,
    rows,
    rows,
    rowShape, 
    // weitere Parameter
});
~~~

**Änderungsprotokoll:**
- Der Parameter ***css*** wurde in Version 1.4 hinzugefügt
- Der Parameter ***menu.items[0].label*** wurde in Version 1.4 durch ***menu.items[0].text*** ersetzt und als veraltet markiert
- Der Parameter ***menu.items[0].items*** wurde in Version 1.4 durch ***menu.items[0].data*** ersetzt und als veraltet markiert
- Die Parameter ***menu.items[0].label*** und ***menu.items[0].items*** wurden in Version 1.7 entfernt
- Die Funktion ***menu.items*** wurde aktualisiert. Der **store**-Parameter wurde in Version 1.7 durch den **readonly**-Parameter ersetzt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandtes Beispiel:** [Kanban. Ändern der Farbe von Zeilen über ein benutzerdefiniertes Menü](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)