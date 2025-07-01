---
sidebar_label: columnShape
title: columnShape Konfiguration
description: Entdecken Sie die columnShape-Konfiguration in der DHTMLX JavaScript Kanban Bibliothek. Erkunden Sie Entwickleranleitungen und API-Referenzen, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# columnShape

### Beschreibung

@short: Optional. Einstellungsobjekt zur individuellen Anpassung des Aussehens der Spalten

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
                onClick?: ({ id, item, column }) => void
            },
            {...}
        ] | ({ column, columnIndex, columns, store }) => array | boolean
    },
    fixedHeaders?: boolean,
    css?: (column, cards) => string,
    headerTemplate?: template(column => {
        return "Das HTML-Template der Spaltenüberschrift im erweiterten Zustand";
    }),
    collapsedTemplate?: template(column => {
        return "Das HTML-Template der Spaltenüberschrift im zusammengeklappten Zustand";
    }),
    confirmDeletion?: boolean
};
~~~

### Parameter

Um die Spalten zu gestalten, unterstützt das **columnShape**-Objekt folgende Optionen:

- `menu` - (optional) Einstellungen für das Kontextmenü der Spalte. Dies beinhaltet:
    - `show` - (optional) schaltet das Kontextmenü der Spalte ein oder aus
    - `items` - (optional) ein Array, das Menüpunkte definiert. Jeder Eintrag kann folgende Eigenschaften haben:
        - `id` - (optional) Menüpunkt-ID. Verwenden Sie diese Werte für integrierte Aktionen:
            - ***"add-card"*** - fügt eine neue Karte hinzu
            - ***"set-edit"*** - bearbeitet den Spaltennamen
            - ***"move-column:left"*** - verschiebt die Spalte nach links
            - ***"move-column:right"*** - verschiebt die Spalte nach rechts
            - ***"delete-column"*** - löscht die Spalte
        - `icon` - (optional) Icon-Klasse für den Menüpunkt, z.B. *mdi-delete*
        - `text` - (optional) Beschriftung des Menüpunkts
        - `disabled` - (optional) legt fest, ob der Menüpunkt aktiv oder deaktiviert ist
        - `onClick` - (optional) Callback mit folgenden Argumenten:
            - ***id*** - aktuelle Menüpunkt-ID
            - ***item*** - aktuelles Datenobjekt des Menüpunkts
            - ***column*** - Ziel-Spalten-Datenobjekt

:::info
Sie können `items` auch als Funktion setzen, die folgende Parameter erhält:

- ***column*** - aktuelle Spaltendaten
- ***columnIndex*** - Index der aktuellen Spalte
- ***columns*** - Array aller Spaltendaten
- ***store*** - *dataStore* Objekt

Dies ermöglicht individuelle Menüs pro Spalte oder das Ausblenden von Menüs für bestimmte Spalten durch Zurückgeben von *null* oder *false*:

~~~jsx {}
    items: ({ column, columnIndex, columns, store }) => {
        if(column.id === "inprogress")
            return null

        if (column.id === "backlog")
            return [
                { id: "set-edit", icon: "wxi-edit", text: "Umbenennen" },
                {
                    id: "delete-card",
                    icon: "wxi-delete",
                    text: "Karte entfernen"
                }
            ]
    }
~~~
:::

- `fixedHeaders` - (optional) hält die Spaltenüberschriften beim vertikalen Scrollen sichtbar (*true* standardmäßig). Hinweis: Scrollen muss im Kanban aktiviert sein (Höhe begrenzt).
- `css` - (optional) Funktion, die eine CSS-Klasse für bedingte Spaltengestaltung zurückgibt
- `headerTemplate` - (optional) HTML-Template für Spaltenüberschriften im erweiterten Zustand
- `collapsedTemplate` - (optional) HTML-Template für Spaltenüberschriften im zusammengeklappten Zustand
- `confirmDeletion` - (optional) aktiviert den Bestätigungsdialog beim Löschen einer Spalte

### Standardkonfiguration

~~~jsx {}
const getDefaultColumnMenuItems = ({ column, columnIndex, columns, store }) => [
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
                items: [
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

**Änderungen:**
- Die ***css***-Option wurde in Version 1.4 hinzugefügt
- Die ***menu.items[0].label*** wurde in Version 1.4 in ***menu.items[0].text*** umbenannt
- Die ***fixedHeaders***-Option wurde in Version 1.5 hinzugefügt
- Die ***headerTemplate*** und ***collapsedTemplate*** Optionen wurden in Version 1.6 hinzugefügt

**Verwandte Artikel:** [Konfiguration](/guides/configuration)

**Verwandte Beispiele:**
- [Kanban. Farbänderung der Spalte über benutzerdefiniertes Menü](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)
- [Kanban. Fixierte Überschriften, Lazy Rendering und Spaltenscroll](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)
- [Kanban. Template für Spaltenüberschriften](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban)
