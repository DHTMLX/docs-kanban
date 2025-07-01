---
sidebar_label: editorShape
title: editorShape Konfiguration
description: Entdecken Sie die editorShape-Konfiguration in der DHTMLX JavaScript Kanban Bibliothek. Finden Sie Entwickleranleitungen, API-Referenzen, Code-Beispiele, Live-Demos und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# editorShape

### Beschreibung

@short: Optional. Ein Array von Objekten, die die Einstellungen zur Steuerung des Aussehens und Verhaltens des Kanban-Editors definieren.

### Verwendung

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // gemeinsame Parameter für alle Typen
        type: string,
        key: string,
        label?: string,

        // nur für den Typ "dateRange"
        key: {
            start: string,
            end: string
        },
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            done?: boolean,
            error?: boolean,
            format?: string,
            months?: number,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // nur für den Typ "date"
        config?: {
            align?: "start" | "center" | "end",
            editable?: boolean | function,
            buttons?: boolean,
            css?: string,
            disabled?: boolean,
            error?: boolean,
            format?: string,
            placeholder?: string,
            title?: string,
            width?: string
        },

        // nur für den Typ "color"
        values?: array,
        config?: {
            clear?: boolean,
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string
        },

        // nur für die Typen "combo", "select" und "multiselect"
        values?: [
            {
                id: string | number,
                label: string,
                avatar?: string // nur für den Typ "multiselect"
            },
            {...} // andere Optionen
        ],
        config?: {
            clearButton?: boolean, // nur für den Typ "combo"
            label?: string, // nur für den Typ "select"
            checkboxes?: boolean, // nur für den Typ "multiselect"
            // gemeinsame Parameter
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            textField?: string,
            title?: string
        },

        // nur für den Typ "text"
        config?: {
            css?: string,
            disabled?: boolean,
            error?: boolean,
            focus?: boolean,
            icon?: string,
            inputStyle?: string,
            placeholder?: string,
            readonly?: boolean,
            select?: boolean,
            title?: string,
            type?: string
        },

        // nur für den Typ "textarea"
        config? {
            disabled?: boolean,
            error?: boolean,
            placeholder?: string,
            title?: string,
            readonly?: boolean
        },

        // nur für den Typ "progress"
        config?: {
            disabled?: boolean,
            label?: string,
            max?: number,
            min?: number,
            step?: number,
            title?: string,
            width?: number
        },

        // nur für den Typ "files"
        uploadURL?: string | function,
        config?: {
            accept?: string,
            disabled?: boolean,
            multiple?: boolean,
            folder?: boolean,
        },

        // nur für den Typ "comments"
        config?: {
            format?: string,
            placement?: "page" | "editor",
            html?: boolean,
            confirmDeletion?: boolean
        },

        // nur für den Typ "links"
        config?: {
            confirmDeletion?: boolean
        },
    }, { /* andere Steuerungs-Einstellungen */ }
];
~~~

### Parameter

Das Aussehen und die Funktionen des Editors können durch folgende Parameter (Felder) angepasst werden:

#### - Gemeinsame Parameter für alle Typen

- `type` - (erforderlich) definiert den Typ des Editor-Feldes.

:::important
Unterstützte Feldtypen im Kanban-Editor sind: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments** und **links**.
:::

- `key` - (erforderlich) der Schlüssel für das Editor-Feld. Dieser sollte mit dem Wert in der [`cardShape`](../js_kanban_cardshape_config)-Eigenschaft übereinstimmen. Beispiel:

~~~js {8,17}
    // Einstellungen zur Kartenanzeige
    const cardShape = {
        ...kanban.defaultCardShape,
        headerFields: [
            { // benutzerdefiniertes Feld
                label: "Custom field",
                css: "custom_style",
                key: "custom_key"
            }
        ]
    };
    // Einstellungen zum Editor-Aussehen
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (optional) Beschriftung für das Editor-Feld.

#### - Parameter für den Typ "dateRange"

- `key` - (erforderlich) ein Objekt mit den Schlüsseln für das Editor-Feld:
    - `start` - (erforderlich) Schlüssel für das Startdatum
    - `end` - (erforderlich) Schlüssel für das Enddatum

:::important
Diese Schlüssel entsprechen denen in der [`cardShape`](../js_kanban_cardshape_config)-Eigenschaft.
:::

- `config` - (optional) Konfigurationsobjekt für das Feld **"dateRange"** mit folgenden Optionen:
    - `align` - (optional) Ausrichtung des Kalender-Popups relativ zur Date Range Steuerung
    - `editable` - (optional) steuert, ob der Datumsauswahl-Dialog editierbar ist; kann auch ein benutzerdefiniertes Format definieren
    - `buttons` - (optional) zeigt oder versteckt die Heute- und Löschen-Schaltflächen unter dem Kalender-Popup
    - `css` - (optional) passt die Position des Symbols in der Date Range Steuerung an
    - `disabled` - (optional) deaktiviert die Date Range Steuerung
    - `done` - (optional) zeigt oder versteckt die Fertig-Schaltfläche in der Date Range Steuerung
    - `error` - (optional) wendet Fehler-Styling auf die Date Range Steuerung an
    - `format` - (optional) definiert das Datumsformat für die Date Range Steuerung. Siehe verfügbare Optionen [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - (optional) bestimmt, wie viele Kalender in der Date Range Steuerung angezeigt werden
    - `placeholder` - (optional) setzt den Platzhaltertext für die Date Range Steuerung
    - `title` - (optional) fügt Tooltip oder Titel für die Date Range Steuerung hinzu
    - `width` - (optional) passt die Breite des Kalender-Popups an

#### - Parameter für den Typ "date"

- `config` - (optional) Konfigurationsobjekt für das Feld **"date"** mit diesen Optionen:
    - `align` - (optional) steuert die Ausrichtung des Kalender-Popups relativ zur Date Steuerung
    - `editable` - (optional) schaltet die Editierbarkeit des Datumsauswahl-Dialogs ein/aus; kann ein benutzerdefiniertes Format definieren
    - `buttons` - (optional) zeigt oder versteckt Heute- und Löschen-Schaltflächen im Kalender-Popup
    - `css` - (optional) ändert die Symbolposition in der Date Steuerung
    - `disabled` - (optional) deaktiviert die Date Steuerung
    - `error` - (optional) wendet Fehler-Styling auf die Date Steuerung an
    - `format` - (optional) definiert das Datumsformat für die Date Steuerung. Referenz [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (optional) setzt den Platzhaltertext für die Date Steuerung
    - `title` - (optional) fügt Tooltip oder Titel für die Date Steuerung hinzu
    - `width` - (optional) setzt die Breite des Kalender-Popups

#### - Parameter für den Typ "color"

- `values` - (optional) Array gültiger HEX-Farb-Codes
- `config` - (optional) Konfigurationsobjekt für das Feld **"color"** mit:
    - `placeholder` - (optional) Platzhalter für die Farbauswahl
    - `clear` - (optional) zeigt oder versteckt ein Löschen-Symbol
    - `disabled` - (optional) deaktiviert die Farbauswahl
    - `error` - (optional) wendet Fehler-Styling an
    - `title` - (optional) fügt Tooltip oder Titel zur Farbauswahl hinzu

#### - Parameter für die Typen "combo", "select" und "multiselect"

- `values` - (optional) Array von Objekten, die Dropdown-Optionen repräsentieren:
    - `id` - (erforderlich) Options-ID
    - `label` - (erforderlich) Options-Beschriftung
    - `avatar` - (optional) Pfad zu einem Bild (nur für **"multiselect"**)

:::important
Verwenden Sie ***"select"*** oder ***"combo"*** Typen zur Auswahl eines einzelnen Benutzers und ***"multiselect"*** zur Auswahl mehrerer Benutzer.
:::

- `config` - (optional) Konfigurationsobjekt für diese Typen, inklusive:
    - `clearButton` - (optional) fügt eine Löschen-Schaltfläche im Combo-Eingabefeld hinzu (**"combo"** nur)
    - `label` - (optional) bindet Optionen an die Eingabe über diesen Schlüssel (**"select"** nur)
    - `checkboxes` - (optional) aktiviert Checkboxen neben Optionen (**"multiselect"** nur)
    - `textField` - (optional) bindet Combo-Optionen an die Eingabe über diesen Schlüssel (**"combo"** und **"multiselect"**)

    - `disabled` - (optional) deaktiviert die Steuerung
    - `error` - (optional) wendet Fehler-Styling an
    - `placeholder` - (optional) setzt Platzhaltertext
    - `title` - (optional) fügt Tooltip oder Titel hinzu

#### - Parameter für den Typ "text"

- `config` - (optional) Konfigurationsobjekt für das Feld **"text"** mit:
    - `css` - (optional) setzt die Icon-Position innerhalb der Textsteuerung
    - `disabled` - (optional) deaktiviert die Textsteuerung
    - `error` - (optional) wendet Fehler-Styling an
    - `focus` - (optional) setzt den Fokus in die Textsteuerung
    - `icon` - (optional) fügt ein Icon in die Textsteuerung ein
    - `inputStyle` - (optional) wendet benutzerdefiniertes Styling an
    - `placeholder` - (optional) setzt Platzhaltertext
    - `readonly` - (optional) macht die Textsteuerung schreibgeschützt
    - `select` - (optional) markiert den Inhalt der Textsteuerung
    - `title` - (optional) fügt Tooltip oder Titel hinzu
    - `type` - (optional) definiert den Eingabetyp

#### - Parameter für den Typ "textarea"

- `config` - (optional) Konfigurationsobjekt für das Feld **"textarea"** inklusive:
    - `disabled` - (optional) deaktiviert die Textarea-Steuerung
    - `error` - (optional) wendet Fehler-Styling an
    - `placeholder` - (optional) setzt Platzhaltertext
    - `title` - (optional) fügt Tooltip oder Titel hinzu
    - `readonly` - (optional) macht Textarea schreibgeschützt

#### - Parameter für den Typ "progress"

- `config` - (optional) Konfigurationsobjekt für das Feld **"progress"** mit:
    - `disabled` - (optional) deaktiviert die Fortschrittsanzeige
    - `label` - (optional) Beschriftung über der Steuerung
    - `max` - (optional) maximaler Wert
    - `min` - (optional) minimaler Wert
    - `step` - (optional) Schrittweite
    - `title` - (optional) Tooltip oder Titel
    - `width` - (optional) Breite der Fortschrittsanzeige

#### - Parameter für den Typ "files"

- `uploadURL` - (optional) Upload-URL des Editors, Details siehe unten

<details>

Die `uploadURL` kann als **String** oder **Funktion** definiert werden. Hier ein Beispiel mit Funktion:

~~~jsx {}
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
~~~

Der Parameter `rec` ist ein erweitertes `PointerEvent`-Objekt mit zusätzlichen Eigenschaften:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // bedeutet "noch nicht gesendet", "erfolgreich gesendet" oder "Fehler"
    name: string; // Dateiname
    file: string | Blob; // die Datei selbst
}
~~~

</details>

- `config` - (optional) Konfigurationsobjekt für das Feld **"files"** mit:
    - `accept` - (optional) erlaubte Dateitypen (z.B. ***"image/*", "video/*", "audio/*"***)
    - `disabled` - (optional) aktiviert oder deaktiviert den Datei-Upload
    - `multiple` - (optional) erlaubt oder verbietet Mehrfach-Uploads
    - `folder` - (optional) erlaubt oder verbietet Uploads ganzer Ordner

#### - Parameter für den Typ "comments"

- `config` - (optional) Konfigurationsobjekt für das Feld **"comments"** inklusive:
    - `format` - (optional) Datumsformat für Kommentare. Siehe Optionen [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (optional) wo Kommentare angezeigt werden:
        - `"editor"` - im Editor
        - `"page"` - in einem separaten Panel
    - `html` - (optional) aktiviert oder deaktiviert HTML-Markup in Kommentaren
    - `confirmDeletion` - (optional) zeigt oder versteckt eine Bestätigungsabfrage beim Löschen von Kommentaren

#### - Parameter für den Typ "links"

- `config` - (optional) Konfigurationsobjekt für das Feld **"links"** mit:
    - `confirmDeletion` - (optional) zeigt oder versteckt eine Bestätigungsabfrage beim Löschen von Links

:::info
Wenn die Eigenschaft `editorShape` nicht gesetzt ist, verwendet das Widget standardmäßig die Parameter von **defaultEditorShape**.
:::

### Standardkonfiguration

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "Label"
    },
    {
        key: "description",
        type: "textarea",
        label: "Description"
    },
    {
        type: "combo",
        label: "Priority",
        key: "priority",
        config: {
            clearButton: true
        }
    },
    {
        type: "color",
        label: "Color",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "Progress"
    },
    {
        type: "date",
        key: "start_date",
        label: "Start date"
    },
    {
        type: "date",
        key: "end_date",
        label: "End date"
    },
    {
        type: "multiselect",
        key: "users",
        label: "Users"
    }
];
~~~

### Beispiel

~~~jsx {6-33,38}
const users = [ // Benutzerdaten
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const editorShape = [ // Editor-Einstellungen
    ...kanban.defaultEditorShape, // Standard-Einstellungen einbinden
    { // benutzerdefinierte Felder hinzufügen
        type: "multiselect",
        key: "users",
        label: "Users",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "Comments",
        config: {
            format: "%M %d",
            placement: "page",
            html: true,
            confirmDeletion: true
        }
    },
    {
        type: "links",
        key:"links",
        label: "Links",
        config: {
            confirmDeletion: true
        }
    }
];

new kanban.Kanban("#root", {
    cards,
    columns,
    editorShape,
    // weitere Parameter
});
~~~

**Änderungsprotokoll:**

- Der Typ ***dateRange*** wurde in Version v1.3 hinzugefügt
- Die Editor-Typen ***comments*** und ***links*** sowie die ***format***-Parameter wurden in Version v1.4 hinzugefügt

**Verwandte Artikel:** [Konfiguration](/guides/configuration#editor)
