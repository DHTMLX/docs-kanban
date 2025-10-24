---
sidebar_label: editorShape
title: editorShape Konfiguration
description: Sie können mehr über die editorShape-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# editorShape

### Beschreibung

@short: Optional. Ein Array von Objekten mit Einstellungen zur Verwaltung des Aussehens und der Funktionalität des Kanban-Editors

### Verwendung

~~~jsx {3,8,28,42,52,73,88,97,108,117,125}
editorShape?: [
    {
        // allgemeine Parameter für alle Typen
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
            {...} // weitere Optionen
        ],
        config?: {
            clear?: boolean, // nur für die Typen "combo" und "color"
            label?: string, // nur für den Typ "select"
            checkboxes?: boolean, // nur für den Typ "multiselect"
            // allgemeine Parameter
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
    }, { /* weitere Steuerungseinstellungen */ }
];
~~~

### Parameter

Um das Erscheinungsbild und die Funktionalität des Editors zu konfigurieren, können Sie die folgenden Parameter (Felder) angeben:

#### - Allgemeine Parameter für alle Typen

- `type` - (erforderlich) ein Editor-Feldtyp

:::important
Im Kanban-Editor können Sie die folgenden Feldtypen verwenden: **dateRange**, **date**, **combo**, **select**, **multiselect**, **color**, **text**, **textarea**, **progress**, **files**, **comments** und **links**
:::

- `key` - (erforderlich) ein Schlüssel für das Editor-Feld. Hier müssen Sie den Wert verwenden, der in der [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft angegeben ist. Siehe folgendes Beispiel:

~~~js {8,17}
    // Kartendarstellungseinstellungen
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
    // Editor-Darstellungseinstellungen
    const editorShape = [
        {
            label: "Custom field",
            type: "text",
            key: "custom_key"
        }
    ];
~~~

- `label` - (optional) eine Beschriftung für das Editor-Feld

#### - Parameter für den Typ "dateRange"

- `key` - (erforderlich) ein Objekt mit Schlüsseln für das Editor-Feld. Hier können Sie folgende Parameter angeben:
    - `start` - (erforderlich) Schlüssel für das Startdatum
    - `end` - (erforderlich) Schlüssel für das Enddatum

:::important
Die Werte dieser Schlüssel werden in der [`cardShape`](api/config/js_kanban_cardshape_config.md) Eigenschaft verwendet!
:::

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"dateRange"**. Hier können Sie folgende Parameter angeben:
    - `align` - (optional) legt die Ausrichtung des Popups mit Kalendern relativ zur Date Range-Steuerung fest
    - `editable` - (optional) definiert, ob der Datumsauswahl-Dialog bearbeitbar ist und legt optional ein benutzerdefiniertes Format für die Datumsbearbeitung fest
    - `buttons` - (optional) zeigt/versteckt die Schaltflächen Heute und Löschen im unteren Bereich des Popups mit Kalendern
    - `css` - (optional) ändert die Position des Symbols in der Date Range-Steuerung
    - `disabled` - (optional) definiert, ob die Date Range-Steuerung deaktiviert ist
    - `done` - (optional) zeigt/versteckt die Schaltfläche Fertig in der Date Range-Steuerung
    - `error` - (optional) definiert, ob die Fehlerstilierung auf die Date Range-Steuerung angewandt wird
    - `format` - (optional) legt das Datumsformat der Date Range-Steuerung fest. Verfügbare Parameter finden Sie [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `months` - (optional) legt die Anzahl der Kalender in der Date Range-Steuerung fest
    - `placeholder` - (optional) setzt einen Platzhalter für die Date Range-Steuerung
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Date Range-Steuerung
    - `width` - (optional) legt die Breite des Popups mit Kalendern fest

#### - Parameter für den Typ "date"

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"date"**. Hier können Sie folgende Parameter angeben:
    - `align` - (optional) legt die Ausrichtung des Popups mit Kalendern relativ zur Date-Steuerung fest
    - `editable` - (optional) definiert, ob der Datumsauswahl-Dialog bearbeitbar ist und legt optional ein benutzerdefiniertes Format für die Datumsbearbeitung fest
    - `buttons` - (optional) zeigt/versteckt die Schaltflächen Heute und Löschen im unteren Bereich des Popups mit Kalendern
    - `css` - (optional) ändert die Position des Symbols in der Date-Steuerung
    - `disabled` - (optional) definiert, ob die Date-Steuerung deaktiviert ist
    - `error` - (optional) definiert, ob die Fehlerstilierung auf die Date-Steuerung angewandt wird
    - `format` - (optional) legt das Datumsformat der Date-Steuerung fest. Verfügbare Parameter finden Sie [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placeholder` - (optional) setzt einen Platzhalter für die Date-Steuerung
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Date-Steuerung
    - `width` - (optional) legt die Breite des Popups mit Kalendern fest

#### - Parameter für den Typ "color"

- `values` - (optional) ein Array mit gültigen HEX-Farbwerten
- `config` - (optional) ein Konfigurationsobjekt für das Feld **"color"**. Hier können Sie folgende Parameter angeben:
    - `placeholder` - (optional) setzt einen Platzhalter für die Farbsteuerung
    - `clear` - (optional) zeigt/versteckt ein "Löschen"-Symbol für die Farbsteuerung
    - `disabled` - (optional) definiert, ob die Farbsteuerung deaktiviert ist
    - `error` - (optional) definiert, ob Fehlerstilierung auf die Farbsteuerung angewandt wird
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Farbsteuerung

#### - Parameter für die Typen "combo", "select" und "multiselect"

- `values` - (optional) ein Array von Objekten mit den Dropdown-Optionen. Hier können Sie folgende Parameter angeben:
    - `id` - (erforderlich) eine Options-ID
    - `label` - (erforderlich) eine Optionsbeschriftung
    - `avatar` - (optional) Pfad zum Vorschaubild der Option (nur für den Typ **"multiselect"**)

:::important
Um eine Steuerung für die Zuweisung eines einzelnen Benutzers zu setzen, müssen Sie die Typen ***"select"*** oder ***"combo"*** verwenden! Für die Zuweisung mehrerer Benutzer verwenden Sie den Typ ***"multiselect"***.
:::

- `config` - (optional) ein Konfigurationsobjekt für die Felder **"combo"**, **"select"** und **"multiselect"**. Hier können Sie folgende Parameter angeben:
    - `clear` - (optional) fügt die Löschen-Schaltfläche in ein Combo-Eingabefeld ein (**nur für die Typen "combo" und "color"**)
    - `label` - (optional) bindet Optionen an das Eingabefeld über den angegebenen Schlüssel (**nur für den Typ "select"**)
    - `checkboxes` - (optional) definiert, ob Optionen Kontrollkästchen neben sich haben (**nur für den Typ "multiselect"**)
    - `textField` - (optional) bindet Combo-Optionen an das Eingabefeld über den angegebenen Schlüssel (**nur für die Typen "combo" und "multiselect"**)

    - `disabled` - (optional) definiert, ob die Steuerung deaktiviert ist
    - `error` - (optional) definiert, ob Fehlerstilierung auf die Steuerung angewandt wird
    - `placeholder` - (optional) setzt einen Platzhalter für die Steuerung
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Steuerung

#### - Parameter für den Typ "text"

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"text"**. Hier können Sie folgende Parameter angeben:
    - `css` - (optional) setzt die Position des Symbols in der Textsteuerung
    - `disabled` - (optional) definiert, ob die Textsteuerung deaktiviert ist
    - `error` - (optional) definiert, ob Fehlerstilierung auf die Textsteuerung angewandt wird
    - `focus` - (optional) setzt den Fokus in der Textsteuerung
    - `icon` - (optional) fügt ein Symbol in die Textsteuerung ein
    - `inputStyle` - (optional) wendet einen benutzerdefinierten Stil auf die Textsteuerung an
    - `placeholder` - (optional) setzt einen Platzhalter für die Textsteuerung
    - `readonly` - (optional) definiert, ob die Textsteuerung schreibgeschützt ist
    - `select` - (optional) wählt den Inhalt der Textsteuerung aus
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Textsteuerung
    - `type` - (optional) legt den Typ der Textsteuerung fest

#### - Parameter für den Typ "textarea"

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"textarea"**. Hier können Sie folgende Parameter angeben:
    - `disabled` - (optional) definiert, ob die Textarea-Steuerung deaktiviert ist
    - `error` - (optional) definiert, ob Fehlerstilierung auf die Textarea-Steuerung angewandt wird
    - `placeholder` - (optional) setzt einen Platzhalter für die Textarea-Steuerung
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Textsteuerung
    - `readonly` - (optional) definiert, ob die Textsteuerung schreibgeschützt ist

#### - Parameter für den Typ "progress"

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"progress"**. Hier können Sie folgende Parameter angeben:
    - `disabled` - (optional) definiert, ob die Fortschrittssteuerung deaktiviert ist
    - `label` - (optional) setzt eine Beschriftung über der Fortschrittssteuerung
    - `max` - (optional) legt den Maximalwert der Fortschrittssteuerung fest
    - `min` - (optional) legt den Minimalwert der Fortschrittssteuerung fest
    - `step` - (optional) legt den Sprung zwischen Werten der Fortschrittssteuerung fest
    - `title` - (optional) setzt einen Titel mit zusätzlichen Informationen zur Fortschrittssteuerung
    - `width` - (optional) legt die Breite der Fortschrittssteuerung fest

#### - Parameter für den Typ "files"

- `uploadURL` - (optional) eine URL für den Editor-Uploader. Details siehe unten

<details>

Die Eigenschaft `uploadURL` kann als **String** oder **Funktion** angegeben werden. Das folgende Beispiel zeigt, wie man die Upload-URL über eine Funktion setzt:

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

wobei `rec` der einzige Parameter der Funktion ist und ein erweitertes `PointerEvent`-Objekt (nativ plus 4 eigene Eigenschaften) darstellt:

~~~jsx {}
interface UploadEvent extends PointerEvent {
    id: number;
    status: "client" | "server" | "error"; // bedeutet auf Deutsch "noch nicht gesendet", "erfolgreich gesendet", "Fehler, nicht gesendet"
    name: string; // der Name der Datei
    file: string | Blob; // die Datei
}
~~~

</details>

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"files"**. Hier können Sie folgende Parameter angeben:
    - `accept` - (optional) ein Dateityp, der hochgeladen werden darf (***"image/\*", "video/\*", "audio/\*"*** *und andere*)
    - `disabled` - (optional) aktiviert/deaktiviert das Hochladen von *Dateien*
    - `multiple` - (optional) aktiviert/deaktiviert das Hochladen von *mehreren Dateien*
    - `folder` - (optional) aktiviert/deaktiviert das Hochladen von *Ordnern*

#### - Parameter für den Typ "comments"

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"comments"**. Hier können Sie folgende Parameter angeben:
    - `format` - (optional) - ein Datumsformat für Kommentare. Verfügbare Formate finden Sie [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
    - `placement` - (optional) - ein Ort, an dem Kommentare angezeigt werden. Diese Eigenschaft kann folgende Werte annehmen:
        - `"editor"` - Kommentare werden im Editor angezeigt
        - `"page"` - Kommentare werden in einem separaten Bereich angezeigt
    - `html` - (optional) - aktiviert/deaktiviert die Verwendung von HTML-Markup in Kommentaren
    - `confirmDeletion` - (optional) zeigt/versteckt den **Bestätigungsdialog**, der Benutzern erlaubt, das Löschen eines Kommentars zu bestätigen oder abzulehnen

#### - Parameter für den Typ "links"

- `config` - (optional) ein Konfigurationsobjekt für das Feld **"links"**. Hier können Sie folgende Parameter angeben:
    - `confirmDeletion` - (optional) zeigt/versteckt den **Bestätigungsdialog**, der Benutzern erlaubt, das Löschen eines Links zu bestätigen oder abzulehnen

:::info
Wenn Sie die Editor-Einstellungen nicht über die Eigenschaft `editorShape` angeben, verwendet das Widget einen Satz von Parametern namens **defaultEditorShape**!
:::

### Standardkonfiguration

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "Hoch" },
    { id: 2, color: "#F1B941", label: "Mittel" },
    { id: 3, color: "#77D257", label: "Niedrig" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

const defaultEditorShape = [
    {
        key: "label",
        type: "text",
        label: "Beschriftung"
    },
    {
        key: "description",
        type: "textarea",
        label: "Beschreibung"
    },
    {
        type: "combo",
        label: "Priorität",
        key: "priority",
        config: {
            clear: true
        }
    },
    {
        type: "color",
        label: "Farbe",
        key: "color"
    },
    {
        type: "progress",
        key: "progress",
        label: "Fortschritt"
    },
    {
        type: "date",
        key: "start_date",
        label: "Startdatum"
    },
    {
        type: "date",
        key: "end_date",
        label: "Enddatum"
    },
    {
        type: "multiselect",
        key: "users",
        label: "Benutzer"
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
        label: "Benutzer",
        values: users
    },
    {
        type: "comments",
        key: "comments",
        label: "Kommentare",
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

- Der Typ ***dateRange*** wurde in Version 1.3 hinzugefügt
- Die Typen ***comments*** und ***links*** für den Editor sowie der Parameter ***format*** wurden in Version 1.4 hinzugefügt
- Der Parameter ***clearButton*** wurde durch den Parameter ***clear*** ersetzt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md/#editor)