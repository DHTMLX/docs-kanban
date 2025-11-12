---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Konfiguration. Stöbern Sie in Entwicklerhandbüchern und der API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Konfiguration

Das Aussehen und die Funktionalität von *Kanban* können Sie über die entsprechende API konfigurieren. Die verfügbaren Parameter ermöglichen es Ihnen:

- das Erscheinungsbild der Karten über die [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft zu konfigurieren
- die Editor-Felder über die [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft zu konfigurieren
- das Verhalten des Editors über die [`editor`](api/config/js_kanban_editor_config.md) Eigenschaft zu konfigurieren
- Rendering und Scrollen über die Eigenschaften [`renderType`](api/config/js_kanban_rendertype_config.md) und [`scrollType`](api/config/js_kanban_scrolltype_config.md) zu konfigurieren
- die Kanban-Historie über die [`history`](api/config/js_kanban_history_config.md) Eigenschaft zu konfigurieren
- das Erscheinungsbild der Karten über die [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) Eigenschaft anzupassen
    - *Details finden Sie im Abschnitt [**Customization**](guides/customization.md)!*
- die gewünschte Sprache über die [`locale`](api/config/js_kanban_locale_config.md) Eigenschaft anzuwenden
    - *Details finden Sie im Abschnitt [**Localization**](guides/localization.md)!*
- Daten für Karten, Spalten, Zeilen und Verknüpfungen über die entsprechenden Eigenschaften [`cards`](api/config/js_kanban_cards_config.md), [`columns`](api/config/js_kanban_columns_config.md), [`rows`](api/config/js_kanban_rows_config.md) und [`links`](api/config/js_kanban_links_config.md) zu laden
    - *Details finden Sie im Abschnitt [**Working with data**](guides/working_with_data.md)!*

## Karten

Das Kanban-Board besteht aus *Karten*, die auf *Spalten* und *Zeilen* verteilt sind. Sie können das Erscheinungsbild der Karten mit der [`cardShape`](api/config/js_kanban_cardshape_config.md) Konfigurationseigenschaft anpassen. Es gibt mehrere vordefinierte Felder, die Sie in die Kartenvorlage einfügen (oder ausschließen) können, nämlich:

- eine Kartenbezeichnung über die `label: boolean` Konfiguration
- eine Kartenbeschreibung über die `description: boolean` Konfiguration

    :::tip
    Sie können die Felder **label** und **description** jeder Karte über die entsprechenden Eingabefelder des Kanban-Editors verwalten. Wenn Sie diese Felder aktivieren, werden die entsprechenden Eingaben im Editor automatisch angezeigt. Zum Konfigurieren dieser Eingaben können Sie die Typen [**text** und **textarea**](#text--und-textarea-typen) verwenden.
    :::

- einen Kartenfortschritt über die `progress: boolean` Konfiguration

    :::tip
    Sie können das **progress**-Feld jeder Karte über das entsprechende Steuerelement des Kanban-Editors verwalten. Wenn Sie dieses Feld aktivieren, wird das entsprechende Steuerelement im Editor automatisch angezeigt. Zum Konfigurieren dieses Steuerelements können Sie den Typ [**progress**](#progress-typ) verwenden.
    :::

- ein Startdatum über die `start_date: boolean` Konfiguration
- ein Enddatum über die `end_date: boolean` Konfiguration

    :::tip
    Sie können die Felder **start date** und **end date** jeder Karte über die entsprechenden Steuerelemente des Kanban-Editors verwalten. Wenn Sie diese Felder aktivieren, werden die entsprechenden Steuerelemente im Editor automatisch angezeigt. Zum Konfigurieren dieser Steuerelemente können Sie den Typ [**date**](#date--und-daterange-typen) verwenden.
    :::

- ein Kontextmenü für Karten über die `menu: boolean` Konfiguration
- einen Dateianhang über die `attached: boolean` Konfiguration

    :::tip
    Sie können **Dateien an jede Karte anhängen** über das entsprechende Feld des Kanban-Editors. Zum Konfigurieren dieses Feldes können Sie den Typ [**files**](#files-typ) verwenden.
    :::

- eine Kartenfarbe über die `color: boolean` Konfiguration

    :::tip
    Sie können die **obere Farblinie** jeder Karte über das entsprechende Steuerelement des Kanban-Editors verwalten. Wenn Sie **color** aktivieren, wird das entsprechende Steuerelement (*colorpicker*) im Editor automatisch angezeigt. Zum Konfigurieren dieses Steuerelements können Sie den Typ [**color**](#color-typ) verwenden.
    :::

- ein Karten-Cover (*Vorschaubild*) über die `cover: boolean` Konfiguration
- Kommentare zu einer Karte über die `comments: boolean` Konfiguration
- einen Bestätigungsdialog zum Löschen der Karte über die `confirmDeletion: boolean` Konfiguration
- eine Abstimmungsmöglichkeit über die `votes: boolean | { show: boolean, clicable: true }` Konfiguration
- eine Benutzerzuweisung über die `users: boolean | { show: boolean, values: object, maxCount: number | false }` Konfiguration

    :::tip
    Sie können einer Karte einen oder mehrere Benutzer über das entsprechende Steuerelement des Kanban-Editors zuweisen. Zum Konfigurieren des Steuerelements für die Zuweisung eines einzelnen Benutzers verwenden Sie die Typen [**combo** oder **select**](#combo--select--und-multiselect-typen). Für die Zuweisung mehrerer Benutzer nutzen Sie den Typ [**multiselect**](#combo--select--und-multiselect-typen).
    :::

- eine Kartenpriorität über die `priority: boolean | { show: boolean, values: object }` Konfiguration

    :::tip
    Sie können die **priority**-Eigenschaft jeder Karte über das entsprechende Steuerelement des Kanban-Editors verwalten. Wenn Sie **priority** aktivieren, wird das entsprechende Steuerelement im Editor automatisch angezeigt. Zum Konfigurieren dieses Steuerelements können Sie nur die Typen [**combo** oder **select**](#combo--select--und-multiselect-typen) verwenden.
    :::

- *ein benutzerdefiniertes Feld* über die `headerFields: [ { key: string, label: string, css: string } ]` Konfiguration

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
Sofern Sie keine Karteneinstellungen über die [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft angeben, verwendet das Widget einen [**defaultCardShape**](api/config/js_kanban_cardshape_config.md#default-config) Parametersatz!
:::

## Editor

:::info
Sie können den Editor als **Seitenleiste** oder **modales Fenster** anzeigen lassen, indem Sie die [`editor.placement`](api/config/js_kanban_editor_config.md) Eigenschaft verwenden!
:::

Der *Editor* von Kanban besteht aus Feldern zur Verwaltung der Kartendaten. Zum Konfigurieren der Editor-Felder (Steuerelemente) verwenden Sie die [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft. Folgende Typen von Editor-Feldern stehen zur Verfügung:

- [**combo**, **select** und **multiselect**](#combo--select--und-multiselect-typen)
- [**color**](#color-typ)
- [**text** und **textarea**](#text--und-textarea-typen)
- [**progress**](#progress-typ)
- [**files**](#files-typ)
- [**date** und **dataRange**](#date--und-daterange-typen)
- [**comments**](#comments-typ)
- [**links**](#links-typ)

### Combo-, Select- und Multiselect-Typen

Die Editor-Felder der Typen **combo**, **select** und **multiselect** können wie folgt gesetzt werden:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // oder "select" und "multiselect"
            key: "priority", // Der "priority"-Schlüssel wird bei der Konfiguration der "cardShape"-Eigenschaft verwendet
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
Für Editor-Felder vom Typ **"multiselect"** und **"combo"** können Sie auch einen Pfad zum Vorschaubild über die Eigenschaft **avatar** angeben:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // oder "combo"
        key: "users", // Der "users"-Schlüssel wird bei der Konfiguration der "cardShape"-Eigenschaft verwendet
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

Das Editor-Feld vom Typ **color** kann wie folgt gesetzt werden:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color", 
            key: "color", // Der "color"-Schlüssel wird bei der Konfiguration der "cardShape"-Eigenschaft verwendet
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

### Text- und Textarea-Typen

Die Editor-Felder der Typen **text** und **textarea** können wie folgt gesetzt werden:

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

Das Editor-Feld vom Typ **progress** kann wie folgt gesetzt werden:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress", 
            key: "progress", // Der "progress"-Schlüssel wird bei der Konfiguration der "cardShape"-Eigenschaft verwendet
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

Das Editor-Feld vom Typ **files** kann wie folgt gesetzt werden:

#### Upload-URL als String konfigurieren

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files", 
            key: "attached", // Der "attached"-Schlüssel wird bei der Konfiguration der "cardShape"-Eigenschaft verwendet
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

### Date- und DateRange-Typen

Das Editor-Feld vom Typ **date** kann wie folgt gesetzt werden:

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

Das Editor-Feld vom Typ **dateRange** kann wie folgt gesetzt werden:

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

### Comments-Typ

Das Editor-Feld vom Typ **comments** kann wie folgt gesetzt werden:

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

### Links-Typ

Das Editor-Feld vom Typ **links** kann wie folgt gesetzt werden:

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

:::info
Um das Editor-Feld mit dem entsprechenden Kartenfeld zu verbinden, müssen Sie einen speziellen **key** im Objekt der [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft angeben (`key: "editor_field_key"`). Der Wert dieses Schlüssels muss auf *true* in der [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft gesetzt werden (für eingebaute Kartenfelder) oder im **headerFields** Array angegeben werden (für benutzerdefinierte Kartenfelder). Sie können die Anfangsdaten jedes Feldes auch über diesen Schlüssel bereitstellen.

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
:::

:::note
Sofern Sie keine Editor-Einstellungen über die [`editorShape`](api/config/js_kanban_editorshape_config.md) Eigenschaft angeben, verwendet das Widget einen [**defaultEditorShape**](api/config/js_kanban_editorshape_config.md#default-config) Parametersatz. In diesem Fall werden die Standard-Steuerelemente und Eingaben im Editor erst angezeigt, nachdem die entsprechenden Felder der Karten über die [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft aktiviert wurden.
:::

### Den Editor konfigurieren

Mit der [`editor`](api/config/js_kanban_editor_config.md) Eigenschaft können Sie den Editor wie folgt konfigurieren:

- Aktivieren/Deaktivieren des Autosave-Modus des Editors über die *`editor.autoSave`* Eigenschaft
- Angabe einer Verzögerungszeit für das automatische Speichern der Daten über die Eigenschaft *`editor.debounce`* (funktioniert nur mit dem Parameter ***autoSave: true***)

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

## Toolbar

Die **Toolbar** von Kanban besteht aus einer Suchleiste zum *Suchen von Karten* sowie Steuerelementen zum *Sortieren von Karten* und zum *Hinzufügen neuer Spalten und Zeilen*. Um die Toolbar anzuzeigen, müssen Sie sie in einem separaten Container mit dem **kanban.Toolbar()** Konstruktor initialisieren.

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

Sie können die Steuerelemente der Toolbar (*ausblenden/anzeigen/anpassen*) mit der Eigenschaft **items** verwalten:

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
        "undo", // Steuerelement zum Rückgängigmachen von Kartenaktionen in der Historie
        "redo", // Steuerelement zum Wiederherstellen von Kartenaktionen in der Historie
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
Um bestimmte Steuerelemente der Toolbar auszublenden, entfernen Sie die entsprechenden Zeichenfolgen aus dem **items** Array.
:::

## Beispiel

In diesem Beispiel sehen Sie, wie Sie **Karten**, **Editor** und **Toolbar** von Kanban konfigurieren können:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>