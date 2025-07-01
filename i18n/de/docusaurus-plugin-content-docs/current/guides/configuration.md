---
sidebar_label: Konfiguration
title: Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Konfiguration. Stöbern Sie in Entwicklerhandbüchern und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Konfiguration

Das *Kanban*-Widget kann sowohl im Aussehen als auch in den Funktionen über seine API angepasst werden. Es gibt eine Vielzahl von Optionen, die Sie anpassen können, wie zum Beispiel:

- Passen Sie das Aussehen der Karten mit der [`cardShape`](/api/config/js_kanban_cardshape_config.md)-Eigenschaft an
- Richten Sie die Editor-Felder über die [`editorShape`](/api/config/js_kanban_editorshape_config.md)-Eigenschaft ein
- Steuern Sie das Verhalten des Editors mit der [`editor`](/api/config/js_kanban_editor_config.md)-Eigenschaft
- Verwalten Sie Rendering und Scrollen über [`renderType`](/api/config/js_kanban_rendertype_config.md) und [`scrollType`](/api/config/js_kanban_scrolltype_config.md)
- Behalten Sie Änderungen mit der [`history`](/api/config/js_kanban_history_config.md)-Eigenschaft im Blick
- Passen Sie das Erscheinungsbild der Karten mit der [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md)-Eigenschaft an
    - *(Der Abschnitt [**Anpassung**](/guides/customization.md) behandelt dies ausführlich)*
- Ändern Sie die Sprache mit der [`locale`](/api/config/js_kanban_locale_config.md)-Eigenschaft
    - *(Weitere Informationen finden Sie unter [**Lokalisierung**](/guides/localization.md))*
- Laden Sie Daten für Karten, Spalten, Zeilen und Verknüpfungen über die entsprechenden [`cards`](/api/config/js_kanban_cards_config.md)-, [`columns`](/api/config/js_kanban_columns_config.md)-, [`rows`](/api/config/js_kanban_rows_config.md)- und [`links`](/api/config/js_kanban_links_config.md)-Eigenschaften
    - *(Mehr Details unter [**Arbeiten mit Daten**](/guides/working_with_data.md))*

## Karten

Im Kanban werden Karten in Spalten und Zeilen organisiert. Sie können das Aussehen der Karten und die angezeigten Informationen mit der [`cardShape`](/api/config/js_kanban_cardshape_config.md)-Eigenschaft steuern. Es gibt mehrere integrierte Felder, die Sie ein- oder ausblenden können, darunter:

- Kartenbezeichnung mit der Option `label: boolean`
- Kartenbeschreibung mit der Option `description: boolean`

:::tip
Sowohl das Feld **label** als auch **description** können im Kanban-Editor bearbeitet werden. Wenn Sie diese aktivieren, werden die entsprechenden Eingabefelder automatisch angezeigt. Diese Eingaben werden über die Typen [**text** und **textarea**](#text--und-textarea-typen) bereitgestellt.
:::

- Fortschrittsbalken mit `progress: boolean`

:::tip
Das Feld **progress** kann ebenfalls über den Kanban-Editor verwaltet werden. Wenn aktiviert, erscheint die Steuerung automatisch. Dies wird mit dem Typ [**progress**](#progress-typ) konfiguriert.
:::

- Startdatum mit `start_date: boolean`
- Enddatum mit `end_date: boolean`

:::tip
Sowohl **start date** als auch **end date** werden über Steuerelemente im Kanban-Editor verwaltet. Wenn diese aktiv sind, erscheinen die Steuerelemente automatisch. Verwenden Sie den Typ [**date**](#date--und-daterange-typen) zur Einrichtung.
:::

- Kontextmenü der Karte mit `menu: boolean`
- Anhänge mit `attached: boolean`

:::tip
Karten können über den Kanban-Editor Dateien angehängt bekommen. Dies wird über den Typ [**files**](#files-typ) bereitgestellt.
:::

- Kartenfarbe mit `color: boolean`

:::tip
Die **obere Farblinie** einer Karte wird mit einem Steuerelement im Kanban-Editor verwaltet. Wenn **color** aktiviert ist, erscheint automatisch ein Farbwähler. Dies erfolgt über den Typ [**color**](#color-typ).
:::

- Karten-Coverbild (Vorschau) über `cover: boolean`
- Kommentare zu Karten mit `comments: boolean`
- Bestätigungsdialog für das Löschen von Karten mit `confirmDeletion: boolean`
- Abstimmungen auf Karten mit `votes: boolean | { show: boolean, clicable: true }`
- Benutzerzuweisungen mit `users: boolean | { show: boolean, values: object, maxCount: number | false }`

:::tip
Die Zuweisung von Benutzern zu Karten erfolgt über ein Steuerelement im Kanban-Editor. Um nur einen Benutzer zu erlauben, verwenden Sie die Typen [**combo** oder **select**](#combo--select--und-multiselect-typen). Für mehrere Zuweisungen verwenden Sie den Typ [**multiselect**](#combo--select--und-multiselect-typen).
:::

- Prioritätsfeld mit `priority: boolean | { show: boolean, values: object }`

:::tip
Die **Priorität** einer Karte kann über ein Steuerelement im Kanban-Editor gesetzt werden. Wenn **priority** aktiviert ist, erscheint das Steuerelement automatisch. Hier werden nur die Typen [**combo** oder **select**](#combo--select--und-multiselect-typen) verwendet.
:::

- *Benutzerdefinierte Felder* können in `headerFields: [ { key: string, label: string, css: string } ]` hinzugefügt werden

~~~jsx {12-35,42}
const users = [ // Benutzerdaten
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
Wenn Sie keine eigenen Karteneinstellungen über [`cardShape`](/api/config/js_kanban_cardshape_config.md) definieren, verwendet Kanban die [**defaultCardShape**](/api/config/js_kanban_cardshape_config.md#standardkonfiguration)-Einstellungen!
:::

## Editor

:::info
Sie können steuern, ob der Editor als **Sidebar** oder als **modales Fenster** angezeigt wird, indem Sie die [`editor.placement`](/api/config/js_kanban_editor_config.md)-Eigenschaft setzen!
:::

Der Kanban-*Editor* ist der Ort, an dem Kartendetails verwaltet werden. Sie können festlegen, welche Felder im Editor angezeigt werden, indem Sie die [`editorShape`](/api/config/js_kanban_editorshape_config.md)-Eigenschaft verwenden. Folgende Feldtypen stehen zur Verfügung:

- [**combo**, **select** und **multiselect**](#combo--select--und-multiselect-typen)
- [**color**](#color-typ)
- [**text** und **textarea**](#text--und-textarea-typen)
- [**progress**](#progress-typ)
- [**files**](#files-typ)
- [**date** und **dataRange**](#date--und-daterange-typen)
- [**comments**](#comments-typ)
- [**links**](#links-typ)

### Combo-, Select- und Multiselect-Typen

Editor-Felder dieser Typen werden wie folgt eingerichtet:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "combo", // oder "select" und "multiselect"
            key: "priority", // der "priority"-Key entspricht der Konfiguration in "cardShape"
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
Für Editor-Felder des Typs **"multiselect"** und **"combo"** können Sie eine Vorschaubild mit der Eigenschaft **avatar** angeben:

~~~jsx {3,9,13}
editorShape: [
    {
        type: "multiselect", // oder "combo"
        key: "users", // der "users"-Key wie in "cardShape"
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

[**Kanban. Begrenzung der Zuweisungen auf nur einen Benutzer**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban)
:::

### Color-Typ

Um einen Farbwähler im Editor bereitzustellen, verwenden Sie:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "color",
            key: "color", // der "color"-Key wie in "cardShape"
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

Fügen Sie Textfelder oder mehrzeilige Eingaben wie folgt hinzu:

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

Fortschrittsbalken im Editor werden so eingerichtet:

~~~jsx {3-12}
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "progress",
            key: "progress", // der "progress"-Key wie in "cardShape"
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

Datei-Uploads im Editor können auf zwei Arten eingerichtet werden:

#### Upload-URL als String konfigurieren

~~~jsx {4-15}
const url = "https://docs.dhtmlx.com/kanban-backend";
new kanban.Kanban("#root", {
    editorShape: [
        {
            type: "files",
            key: "attached", // der "attached"-Key wie in "cardShape"
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
                        'Authorization': 'Bearer ' + token  // Token oder andere Header hier
                    }
                };

                return fetch(url + "/uploads", config) // URL hier
                    .then(res => res.json())
                    .then(
                        data => {
                            rec.id = data.id;
                            return data;
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

Fügen Sie Datumsauswahlfelder oder Datumsbereiche wie folgt hinzu:

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

Für einen Datumsbereich:

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

Fügen Sie ein Kommentarfeld im Editor wie folgt hinzu:

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

Um das Hinzufügen von Links im Editor zu ermöglichen, verwenden Sie:

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

### Verknüpfung von Editor-Feldern mit Karten-Feldern

:::info
Um ein Editor-Feld mit einem Karten-Feld zu verbinden, setzen Sie den **key** im [`editorShape`](/api/config/js_kanban_editorshape_config.md)-Objekt (`key: "editor_field_key"`). Für integrierte Kartenfelder stellen Sie sicher, dass dieser Key in [`cardShape`](/api/config/js_kanban_cardshape_config.md) auf *true* steht. Für benutzerdefinierte Felder fügen Sie ihn dem **headerFields**-Array hinzu. Sie können auch einen Anfangswert für jedes Feld mit diesem Key setzen.

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
    label: true, // Key eines integrierten Felds
    headerFields: [
        {
            key: "note", // Key eines benutzerdefinierten Felds
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
    // weitere Konfigurationsparameter
});
~~~
:::

:::note
Wenn keine Editor-Einstellungen über [`editorShape`](/api/config/js_kanban_editorshape_config.md) definiert werden, verwendet das Widget die [**defaultEditorShape**](/api/config/js_kanban_editorshape_config.md#standardkonfiguration). Die Standardeingaben und -steuerungen werden dann nur angezeigt, wenn Sie die entsprechenden Kartenfelder in [`cardShape`](/api/config/js_kanban_cardshape_config.md) aktivieren.
:::

### Konfiguration des Editors

Sie können das Verhalten des Editors mit der [`editor`](/api/config/js_kanban_editor_config.md)-Eigenschaft anpassen:

- Aktivieren oder deaktivieren Sie das automatische Speichern mit *`editor.autoSave`*
- Legen Sie die Wartezeit für das automatische Speichern mit *`editor.debounce`* fest (funktioniert nur, wenn ***autoSave: true*** aktiviert ist)

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

Die Kanban-**Toolbar** bietet eine Suchleiste (zum Auffinden von Karten), Steuerungen zum Sortieren sowie Schaltflächen zum Hinzufügen neuer Spalten oder Zeilen. Um die Toolbar zu verwenden, initialisieren Sie diese in einem separaten Container mit **kanban.Toolbar()**.

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

Toolbar-Steuerelemente können mit der **items**-Eigenschaft angezeigt, ausgeblendet oder angepasst werden:

~~~jsx {6-51}
// Kanban erstellen
const board = new kanban.Kanban("#root", {...});

new kanban.Toolbar("#toolbar", {
    api: board.api,
    items: [
        { // Benutzerdefinierte Suchleiste
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
        "undo", // Rückgängig-Funktion für Kartenoperationen im Verlauf
        "redo", // Wiederherstellen-Funktion für Kartenoperationen im Verlauf
        { // Benutzerdefinierte Sortiersteuerung
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
        "addColumn", // Steuerung zum Hinzufügen neuer Spalten
        "addRow", // Steuerung zum Hinzufügen neuer Zeilen
        // benutzerdefinierte Elemente
    ]
});
~~~

:::tip
Wenn Sie einige Toolbar-Steuerelemente ausblenden möchten, entfernen Sie einfach deren Bezeichner aus dem **items**-Array.
:::

## Beispiel

Hier sehen Sie ein Beispiel, wie **Karten**, **Editor** und **Toolbar** für Kanban eingerichtet werden können:

<iframe src="https://snippet.dhtmlx.com/5hcx01h4?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
