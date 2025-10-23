---
sidebar_label: columnShape
title: columnShape Konfiguration
description: Sie können die columnShape-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# columnShape

### Beschreibung

@short: Optional. Ein Einstellungsobjekt zur Verwaltung des Erscheinungsbilds der Spalten

### Verwendung

~~~jsx {}
columnShape?: {
    menu?: {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled?: boolean,
                onClick?: ({ id, item, column }) => void,
                data?: array // ein Array von Untermenüpunkten
            }, 
            {...}
        ] | ({ column, columnIndex, columns, readonly }) => array | null
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(column => {
        return "Die HTML-Vorlage des Spaltenkopfs im erweiterten Zustand";
    }),
    collapsedTemplate?: template(column => {
        return "Die HTML-Vorlage des Spaltenkopfs im eingeklappten Zustand";
    }),
    confirmDeletion?: boolean
};
~~~

### Parameter

Um das Erscheinungsbild der Spalten zu konfigurieren, können Sie im **columnShape**-Objekt die folgenden Parameter angeben:

- `menu` - (optional) ein Objekt mit Parametern für das Kontextmenü der Spalten. Hier können Sie folgende Parameter angeben:
    - `show` - (optional) aktiviert/deaktiviert das Kontextmenü der Spalte
    - `items` - (optional) ein Array von Objekten, die Parameter der Elemente des Kontextmenüs der Spalten enthalten. Für jedes Element können Sie folgende Parameter angeben:
        - `id` - (optional) eine ID des Menüpunkts. Um die integrierten Aktionen zu implementieren, müssen Sie folgende Werte angeben:
            - ***"add-card"*** - definiert die Aktion zum Hinzufügen einer neuen Karte
            - ***"set-edit"*** - definiert die Aktion zum Bearbeiten eines Spaltennamens
            - ***"move-column:left"*** - definiert die Aktion, eine Spalte nach links zu verschieben
            - ***"move-column:right"*** - definiert die Aktion, eine Spalte nach rechts zu verschieben
            - ***"delete-column"*** - definiert die Aktion, eine Spalte zu löschen

        - `icon` - (optional) ein Klassenname des Symbols des Menüpunkts. Hier können Sie beliebige Symbole verwenden, die zu den Icon-Fonts passen (*mdi-delete*)
        - `text` - (optional) ein Name des Menüpunkts
        - `disabled` - (optional) ein Zustand des Menüpunkts (*aktiv* oder *deaktiviert* abhängig vom *boolean* Wert)
        - `onClick` - (optional) eine benutzerdefinierte Callback-Funktion, die folgende Argumente erhält:
            - ***id*** - die ID des aktuellen Menüpunkts
            - ***item*** - ein Datenobjekt des aktuellen Menüpunkts
            - ***column*** - ein Datenobjekt der Zielspalte

        - `data` - (optional) ein Array von Objekten, die Untermenüpunkte repräsentieren

    :::info
    Sie können den Parameter `menu.items` auch auf eine benutzerdefinierte Funktion setzen, die folgende Argumente erhält:
    - ***column*** - ein Datenobjekt der aktuellen Spalte
    - ***columnIndex*** - ein Index der aktuellen Spalte
    - ***columns*** - ein Array von Objekten, die alle Spaltendaten enthalten
    - ***readonly*** - ein Objekt von readonly [Status-Eigenschaften](api/internal/js_kanban_getstate_method.md)

    Diese Funktion ermöglicht es, das Menü für jede Spalte anzupassen oder für eine bestimmte auszublenden (indem sie *null* oder *false* zurückgibt):

    ~~~jsx {}
    items: ({ column }) => {
        if(column.id === "inprogress"){
            return null;
        } 
        if (column.id === "backlog"){
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "Karte entfernen"
                }
            ];
        }       
    }
    ~~~
    :::

- `fixedHeaders` - (optional) friert die Spaltenüberschriften beim vertikalen Scrollen ein (*true* standardmäßig). Scrollen muss im Kanban selbst aktiviert sein (Höhe muss begrenzt sein)
- `css` - (optional) eine Funktion, die eine CSS-Klasse zurückgibt, die bedingt auf Spalten angewendet wird
- `headerTemplate` - (optional) die HTML-Vorlage des Spaltenkopfs im erweiterten Zustand
- `collapsedTemplate` - (optional) die HTML-Vorlage des Spaltenkopfs im eingeklappten Zustand
- `confirmDeletion` - (optional) zeigt/versteckt den **Bestätigungsdialog**, der es Benutzern erlaubt, das Löschen der Spalte zu bestätigen oder abzulehnen

### Standardkonfiguration

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, readonly }) => [
    { id: "add-card", icon: "wxi-plus", text: "Neue Karte hinzufügen" },
    { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
    {
        id: "move-column:left",
        icon: "wxi-arrow-left",
        text: "Nach links verschieben",
        disabled: columnIndex <= 0
    },
    {
        id: "move-column:right",
        icon: "wxi-arrow-right",
        text: "Nach rechts verschieben",
        disabled: columnIndex >= columns.length - 1
    },
    { id: "delete-column", icon: "wxi-delete", text: "Löschen" }
];
const columnShape = {
    menu: {
        show: true,
        items: getDefaultColumnMenuItems
    },
    fixedHeaders: true,
    confirmDeletion: true
};
~~~

### Beispiel

~~~jsx {1-58,64}
const columnShape = {
    menu: {
        show: true,
        items: [
            {
                id: "color",
                text: "Farbe",
                data: [
                    { 
                        id:"yellow", 
                        text: "Gelb",
                        onClick: ({ column }) => changeColumnColor(column, "yellow")
                    },
                    { 
                        id:"red", 
                        text: "Rot",
                        onClick: ({ column }) => changeColumnColor(column, "red")
                    },
                    { 
                        id:"green", 
                        text: "Grün",
                        onClick: ({ column }) => changeColumnColor(column, "green")
                    }
                ]
            }
        ]
    },
    fixedHeaders: false,
    css: (column, cards) => column.id == "inprogress" && cards.length < 5 ? "green" : "red",
    headerTemplate: template(column => {
        return `<div class="wx-collapse-icon" data-action=${"collapse"}>
                    <i class=${column.column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}></i>
                </div>
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-label" data-action="rename">
                                ${escapeHTML(column.column.label)}
                                (${column.columnState.cardsCount})
                            </div>`
                        : ""
                }
                ${
                    !column.column.collapsed
                        ?   `<div class="wx-menu" data-menu-id=${column.id}>
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""
                }`;
    }),
    collapsedTemplate: template(column => {
        return `<div class="wx-collapsed-label">
                    <div class="wx-label-text">${escapeHTML(column.column.label)} (${
                        column.columnState?.cardsCount
                    })</div>
                </div>`;
    }),
    confirmDeletion: true
};

new kanban.Kanban("#root", {
    cards,
    columns,
    rows,
    columnShape, 
    // weitere Parameter
});
~~~

**Änderungsprotokoll:**
- Der ***css***-Parameter wurde in Version 1.4 hinzugefügt
- Der ***menu.items[0].label***-Parameter wurde in Version 1.4 durch den ***menu.items[0].text***-Parameter ersetzt und als veraltet markiert
- Der ***menu.items[0].items***-Parameter wurde in Version 1.4 durch den ***menu.items[0].data***-Parameter ersetzt und als veraltet markiert
- Der ***fixedHeaders***-Parameter wurde in Version 1.5 hinzugefügt
- Die Parameter ***headerTemplate*** und ***collapsedTemplate*** wurden in Version 1.6 hinzugefügt
- Die Parameter ***menu.items[0].label*** und ***menu.items[0].items*** wurden in Version 1.7 entfernt
- Die Funktion ***menu.items*** wurde in Version 1.7 aktualisiert. Der **store**-Parameter wurde durch den **readonly**-Parameter ersetzt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md)

**Verwandte Beispiele:**
- [Kanban. Ändern der Spaltenfarbe über benutzerdefiniertes Menü](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Fixierte Überschriften, Lazy Rendering und Spaltenscroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Vorlage für Spaltenüberschriften](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)