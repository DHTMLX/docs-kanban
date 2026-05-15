---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Konfiguration. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Konfiguration

Das Aussehen und die Funktionalität von Kanban können Sie mit den folgenden Eigenschaften konfigurieren:

- [`cardShape`](api/config/js_kanban_cardshape_config.md) — Erscheinungsbild und integrierte Felder der Karten festlegen
- [`editorShape`](api/config/js_kanban_editorshape_config.md) — Editor-Felder definieren
- [`editor`](api/config/js_kanban_editor_config.md) — Sichtbarkeit, Autosave und Platzierung des Editors steuern
- [`renderType`](api/config/js_kanban_rendertype_config.md), [`scrollType`](api/config/js_kanban_scrolltype_config.md) — Karten-Rendering und Board-Scrollen anpassen
- [`history`](api/config/js_kanban_history_config.md) — Historie der Kartenoperationen verwalten
- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — Erscheinungsbild der Karten anpassen (siehe Abschnitt [Customization](guides/customization.md))
- [`locale`](api/config/js_kanban_locale_config.md) — eine Sprache anwenden (siehe Abschnitt [Localization](guides/localization.md))
- [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md), [`links`](api/config/js_kanban_links_config.md) — Daten für Karten, Spalten, Zeilen und Verknüpfungen laden (siehe Abschnitt [Working with data](guides/working_with_data.md))

## Karten {#cards}

Das Kanban-Board besteht aus Karten, die auf Spalten und Zeilen verteilt sind. Verwenden Sie die [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft, um das Erscheinungsbild und die integrierten Felder der Karten zu konfigurieren:

- `label: boolean | { show }` — Kartenbezeichnung, bearbeitet mit dem Typ [`text`](#text-und-textarea-typen)
- `description: boolean | { show }` — Kartenbeschreibung, bearbeitet mit dem Typ [`textarea`](#text-und-textarea-typen)
- `progress: boolean | { show }` — Kartenfortschritt, bearbeitet mit dem Typ [`progress`](#progress-typ)
- `start_date: boolean | { show, format }` — Startdatum der Karte, bearbeitet mit dem Typ [`date`](#date-und-daterange-typen)
- `end_date: boolean | { show, format }` — Enddatum der Karte, bearbeitet mit dem Typ [`date`](#date-und-daterange-typen)
- `menu: boolean | { show, items }` — Kontextmenü der Karte
- `attached: boolean | { show }` — Dateianhang der Karte, bearbeitet mit dem Typ [`files`](#files-typ)
- `color: boolean | { show, values }` — obere Farblinie der Karte, bearbeitet mit dem Typ [`color`](#color-typ)
- `cover: boolean | { show }` — Vorschaubild der Karte
- `comments: boolean | { show }` — Kommentare zur Karte
- `confirmDeletion: boolean | { show }` — Bestätigungsdialog zum Löschen der Karte
- `votes: boolean | { show, clickable }` — Abstimmungsmöglichkeit bei der Karte
- `users: boolean | { show, values, maxCount }` — der Karte zugewiesene Benutzer, bearbeitet mit den Typen [`combo`, `select` oder `multiselect`](#combo-select-und-multiselect-typen)
- `priority: boolean | { show, values }` — Kartenpriorität, bearbeitet mit dem Typ [`combo` oder `select`](#combo-select-und-multiselect-typen)
- `css: (card) => string` — Funktion, die eine CSS-Klasse zurückgibt, die bedingt auf eine Karte angewendet wird
- `headerFields: [{ key, label, css }]` — benutzerdefinierte Kartenfelder

:::tip
Wenn Sie ein Feld in `cardShape` aktivieren, zeigt der Editor das entsprechende Steuerelement automatisch an. Konfigurieren Sie jedes Steuerelement über die [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft — verfügbare Typen finden Sie unter [Editor](#editor).
:::

Das folgende Code-Beispiel konfiguriert Karten mit benutzerdefinierten Benutzern, Prioritäten und einem benutzerdefinierten Header-Feld:

~~~jsx {12-35,42}
const users = [ // Nutzerdaten
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // Prioritätsdaten für Karten
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardShape = { // Karteneinstellungen
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    priority: {
        show: true,
        values: cardPriority
    },
    users: {
        show: true,
        values: users
    },
    headerFields: [
        {
            key: "sprint",
            label: "Custom field",
            css: "custom_css_class"
        }
    ]
};

new kanban.Kanban("#root", {
    // Kartendaten
    columns,
    cards,
    // Karteneinstellungen
    cardShape
});
~~~

:::note
Sofern Sie keine Karteneinstellungen über die [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft angeben, greift das Widget auf [`defaultCardShape`](api/config/js_kanban_cardshape_config.md#default-config) zurück.
:::

## Editor

Der Kanban-Editor enthält Felder zur Verwaltung der Kartendaten. Verwenden Sie die [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft, um Editor-Felder zu konfigurieren. Folgende Feldtypen stehen zur Verfügung:

- [`combo`, `select`, `multiselect`](#combo-select-und-multiselect-typen) — Dropdown-Optionen
- [`color`](#color-typ) — Farbauswahl
- [`text`, `textarea`](#text-und-textarea-typen) — Texteingaben
- [`progress`](#progress-typ) — Fortschrittsregler
- [`files`](#files-typ) — Datei-Upload
- [`date`, `dateRange`](#date-und-daterange-typen) — einzelnes Datum oder Datumsbereich
- [`comments`](#comments-type) — Kartenkommentare
- [`links`](#links-type) — Kartenverknüpfungen

:::info
Zeigen Sie den Editor als Seitenleiste oder modales Fenster an, indem Sie die [`editor.placement`](api/config/js_kanban_editor_config.md) Eigenschaft verwenden.
:::

### Combo-, Select- und Multiselect-Typen {#combo-select-und-multiselect-typen}

Das folgende Code-Beispiel konfiguriert ein Dropdown zur Auswahl einer Kartenpriorität:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // oder "select" und "multiselect"
            key: "priority", // Den "priority"-Schlüssel in der "cardShape"-Eigenschaft verwenden
            label: "Priority",
            values: [
                { id: 1, label: "high" },
                { id: 2, label: "medium" },
                { id: 3, label: "low" }
            ]
        },
        // Einstellungen anderer Felder
    ]
});
~~~

:::info
Für Felder vom Typ `multiselect` und `combo` können Sie über die Eigenschaft `avatar` einen Pfad zum Vorschaubild angeben:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // oder "combo"
        key: "users", // Den "users"-Schlüssel in der "cardShape"-Eigenschaft verwenden
        label: "Users",
        values: [
            { 
                id: 1, label: "Alan", 
                avatar: "preview_image_path_1.png" 
            },
            { 
                id: 2, label: "John", 
                avatar: "preview_image_path_2.png" 
            }
        ]
    },
    // Einstellungen anderer Felder
]
~~~

[**Kanban. Limiting assignments to one user only**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Color-Typ

Das folgende Code-Beispiel konfiguriert das Editor-Feld zur Auswahl einer Kartenfarbe:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // Den "color"-Schlüssel in der "cardShape"-Eigenschaft verwenden
            label: "Card color",
            values: ["#65D3B3", "#FFC975", "#58C3FE"],
            config: {
                clear: true,
                placeholder: "Select color"
            }
        },
        // Einstellungen anderer Felder
    ]
});
~~~

### Text- und Textarea-Typen {#text-und-textarea-typen}

Das folgende Code-Beispiel konfiguriert das Editor-Feld zur Eingabe einer Kartenbezeichnung:

~~~jsx {3-14}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "text", // oder "textarea"
            key: "label",
            label: "Label",
            config: {
                placeholder: "Type your tips here", 
                readonly: false, 
                focus: true,
                disabled: false,
                inputStyle: "height: 50px;"
            }
        },
        // Einstellungen anderer Felder
    ]
});
~~~

### Progress-Typ

Das folgende Code-Beispiel konfiguriert das Editor-Feld zur Festlegung des Kartenfortschritts:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // Den "progress"-Schlüssel in der "cardShape"-Eigenschaft verwenden
            label: "Progress",
            config: {
                min: 10,
                max: 90,
                step: 5
            }
        },
        // Einstellungen anderer Felder
    ]
});
~~~

### Files-Typ

Setzen Sie den Parameter `uploadURL` auf einen String für einen einfachen Upload oder auf eine Funktion für eine benutzerdefinierte Anfrage.

#### Upload-URL als String konfigurieren

Das folgende Code-Beispiel verwendet eine String-URL für den Datei-Upload:

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // Den "attached"-Schlüssel in der "cardShape"-Eigenschaft verwenden
            label: "Attachment",
            uploadURL: url + "/uploads", // URL als String angeben
            config: {
                accept: "image/*", // "video/*", "audio/*"
                disabled: false,
                multiple: true,
                folder: false
            }
        },
        // Einstellungen anderer Felder
    ]
});
~~~

#### Upload-URL als Funktion konfigurieren

Übergeben Sie eine Funktion an `uploadURL`, um benutzerdefinierte Header, Tokens oder eine eigene Antwortverarbeitung hinzuzufügen. Das folgende Code-Beispiel sendet jede Datei mit einem Bearer-Token:

~~~jsx {9-31}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        ...defaultEditorShape,
        {
            key: "attached",
            type: "files",
            label: "Files",
            uploadURL: rec => {
                const formData = new FormData();
                formData.append("upload", rec.file);

                const config = {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Authorization': 'Bearer ' + token  // token oder andere Header hier
                    }
                };

                return fetch(url + "/uploads", config) // URL hier
                    .then(res => res.json())
                    .then(
                        data => {
                            return { id: rec.id, ...data };
                        },
                        () => ({ id: rec.id, status: "error" })
                    )
                    .catch();
            }
        }
    ]
});
~~~

### Date- und DateRange-Typen {#date-und-daterange-typen}

Das folgende Code-Beispiel konfiguriert das Editor-Feld für ein einzelnes Datum:

~~~jsx {3-8}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "date", 
            key: "start_date",
            label: "Start date",
            format: "%d/%m/%y"
        },
        // Einstellungen anderer Felder
    ]
});
~~~

Das folgende Code-Beispiel konfiguriert das Editor-Feld für einen Start-/Enddatumsbereich:

~~~jsx {3-11}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "dateRange", 
            key: {
                start: "start_date",
                end: "end_date"
            },
            label: "Date Range",
            format: "%d/%m/%y"
        },
        // Einstellungen anderer Felder
    ]
});
~~~

### Comments-Typ {#comments-type}

Das folgende Code-Beispiel konfiguriert das Kommentarfeld des Editors:

~~~jsx {3-13}
new kanban.Kanban("#root", {
    editorShape: [
       {
            type: "comments",
            key: "comments",
            label: "Comments",
            config: {
                dateFormat: "%M %d",
                placement: "page", // oder "editor"
                html: true,
                confirmDeletion: true
            }
        },
        // Einstellungen anderer Felder
    ]
});
~~~

### Links-Typ {#links-type}

Das folgende Code-Beispiel konfiguriert das Verknüpfungsfeld des Editors:

~~~jsx {3-10}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "links",
            key: "links",
            label: "Links",
            config: {
                confirmDeletion: true
            }
        },
        // Einstellungen anderer Felder
    ]
});
~~~

### Editor-Felder an Kartenfelder binden

Jedes Editor-Feld ist über einen gemeinsamen `key` mit einem Kartenfeld verknüpft. Setzen Sie denselben `key`-Wert im [`editorShape`](api/config/js_kanban_editorshape_config.md)-Eintrag und in der [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft. Bei integrierten Kartenfeldern setzen Sie den Schlüssel auf `true`. Bei benutzerdefinierten Feldern tragen Sie den Schlüssel im `headerFields`-Array ein. Derselbe Schlüssel liefert auch die Anfangsdaten der Karte.

Das folgende Code-Beispiel bindet die Editor-Felder `label` und `note` an die entsprechenden Kartenfelder:

~~~jsx {5,13,22,25,33-34,38-39,45-47}
// Editor-Einstellungen
const editorShape = [ 
    { 
        type: "text",
        key: "label",
        label: "Label",
        config: {
            placeholder: "Enter new label here"
        }
    },
    { 
        type: "textarea",
        key: "note",
        label: "Note",
        config: {
            placeholder: "Enter usefull note here"
        }
    }
];
// Karteneinstellungen
const cardShape = {
    label: true, // Schlüssel eines eingebauten Feldes
    headerFields: [
        {
            key: "note", // Schlüssel eines benutzerdefinierten Feldes
            label: "Note"
        }
    ]
};
// Kartendaten
const cards = [
    {
        label: "Volvo",
        note: "It is the swedish car",
        column: "backlog"
    },
    {
        label: "Audi",
        note: "It is the german car",
        column: "backlog"
    }
];
// Kanban erstellen
new kanban.Kanban("#root", {
    editorShape,
    cardShape,
    cards,
    columns
    // andere Konfigurationsparameter
});
~~~

:::note
Sofern Sie keine Editor-Einstellungen über die [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft angeben, greift das Widget auf [`defaultEditorShape`](api/config/js_kanban_editorshape_config.md#default-config) zurück. Die Standard-Steuerelemente und Eingaben werden im Editor erst angezeigt, nachdem Sie die entsprechenden Kartenfelder über die [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft aktiviert haben.
:::

### Editor-Verhalten konfigurieren {#configure-editor-behavior}

Die [`editor`](api/config/js_kanban_editor_config.md) Eigenschaft steuert Sichtbarkeit, Autosave und Platzierung des Editors:

- [`editor.show`](api/config/js_kanban_editor_config.md) — Editor aktivieren oder deaktivieren
- [`editor.placement`](api/config/js_kanban_editor_config.md) — Editor als `"sidebar"` oder `"modal"`-Fenster anzeigen
- [`editor.autoSave`](api/config/js_kanban_editor_config.md) — Autosave-Modus aktivieren oder deaktivieren
- [`editor.debounce`](api/config/js_kanban_editor_config.md) — Verzögerung vor dem automatischen Speichern (gilt nur mit `autoSave: true`)

Das folgende Code-Beispiel aktiviert Autosave mit einer Verzögerung von 2 Sekunden:

~~~jsx {6-9}
// Kanban erstellen
new kanban.Kanban("#root", {
    columns,
    cards,
    editorShape,
    editor: {
        autoSave: true,
        debounce: 2000
    }
    // weitere Parameter
});
~~~

## Rendering und Scrollen

Standardmäßig rendert das Kanban-Widget alle Karten und scrollt das gesamte Board. Bei Boards mit vielen Karten können Sie auf Lazy Rendering oder spaltenweises Scrollen umschalten:

- [`renderType`](api/config/js_kanban_rendertype_config.md) — auf `"lazy"` setzen, um nur die auf dem Board sichtbaren Karten zu rendern
- [`scrollType`](api/config/js_kanban_scrolltype_config.md) — auf `"column"` setzen, um jede Spalte unabhängig zu scrollen

Das folgende Code-Beispiel aktiviert Lazy Rendering und spaltenweises Scrollen:

~~~jsx {5-7}
new kanban.Kanban("#root", {
    columns,
    cards,
    rows,
    renderType: "lazy",
    scrollType: "column",
    cardHeight: 150
});
~~~

:::important
Wenn Sie `renderType: "lazy"` mit einem beliebigen `scrollType` kombinieren, legen Sie über die [`cardHeight`](api/config/js_kanban_cardheight_config.md) Eigenschaft eine statische Höhe für Karten fest. Ohne `cardHeight` werden Karten beim Lazy Rendering nicht korrekt angezeigt.
:::

## Änderungsverlauf

Kanban verfolgt Kartenoperationen und stellt Undo- und Redo-Steuerelemente in der Toolbar bereit. Verwenden Sie die [`history`](api/config/js_kanban_history_config.md) Eigenschaft, um dieses Verhalten zu deaktivieren.

Das folgende Code-Beispiel deaktiviert die Verlaufsverfolgung:

~~~jsx {4}
new kanban.Kanban("#root", {
    columns,
    cards,
    history: false
});
~~~

:::tip
Um einzelne Operationen aus dem Verlauf auszuschließen, übergeben Sie den [`$meta`](api/common/js_kanban_meta_parameter.md) Parameter an Methoden oder Events.
:::

## Toolbar

Die Kanban-Toolbar bietet eine Suchleiste, Sortiersteuerelemente sowie Steuerelemente zum Hinzufügen von Spalten und Zeilen. Initialisieren Sie die Toolbar in einem separaten Container mit dem Konstruktor `kanban.Toolbar()`.

Das folgende Code-Beispiel erstellt eine Toolbar, die an die Kanban-Instanz gebunden ist:

~~~jsx {13}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    // Daten
    columns,
    cards,
    rows,
    // Karteneinstellungen
    cardShape,
    // Editor-Einstellungen
    editorShape
});

new kanban.Toolbar("#toolbar", { api: board.api });
~~~

Verwenden Sie die [`items`](api/config/toolbar_items_config.md) Eigenschaft, um Toolbar-Steuerelemente anzuzeigen, auszublenden oder anzupassen. Das folgende Code-Beispiel setzt eine benutzerdefinierte Suchleiste, Undo- und Redo-Steuerelemente, eine benutzerdefinierte Sortierung sowie Spalten- und Zeilensteuerelemente:

~~~jsx {6-51}
// Kanban erstellen
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        { // benutzerdefinierte Suchleiste
            type: "search",
            options: [
                {
                    id: "label",
                    label: "By label"
                },
                {
                    id: "start_date",
                    label: "By date",
                    searchRule: (card, value, by) => {
                        const date = card[by];
                        return date?.toString().includes(value);
                    }
                }
            ],
            resultTemplate: kanban.template(searchResult => {
                return `<div class="list-item">
                            <div class="list-item-text">${searchResult.result.label}</div>
                            ${searchResult.result.description ? `<div class="list-item-text item-description">${searchResult.result.description}</div>` : ""}
                        </div>`
            })
        },
        "spacer", // Leerraum
        "undo", // Kartenaktionen in der Historie rückgängig machen
        "redo", // Kartenaktionen in der Historie wiederherstellen
        { // benutzerdefiniertes Sortier-Steuerelement
            type: "sort",
            options: [
                {
                    text: "Sort by label",
                    by: "label",
                    dir: "asc"
                },
                {
                    text: "Sort by description",
                    by: "description",
                    dir: "desc"
                }
            ]
        },
        "addColumn", // Steuerelement zum Hinzufügen neuer Spalten
        "addRow", // Steuerelement zum Hinzufügen neuer Zeilen
        // benutzerdefinierte Elemente
    ]
});
~~~

:::tip
Entfernen Sie ein Steuerelement aus dem `items`-Array, um es auszublenden.
:::

## Beispiel

Das folgende Beispiel konfiguriert Karten, Editor und Toolbar von Kanban:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
