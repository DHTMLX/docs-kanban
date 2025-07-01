---
sidebar_label: cardShape
title: cardShape Konfiguration
description: Erkunden Sie die cardShape-Konfiguration in der DHTMLX JavaScript Kanban-Bibliothek Dokumentation. Entdecken Sie Entwicklerhandbücher, API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# cardShape

### Beschreibung

@short: Optional. Einstellungsobjekt, das steuert, wie Karten dargestellt werden.

### Verwendung

~~~jsx {}
cardShape?: {
    label?: boolean | { show?: boolean },
    description?: boolean | { show?: boolean },
    progress?: boolean | { show?: boolean },
    attached?: boolean | { show?: boolean },
    cover?: boolean | { show?: boolean },
    comments?: boolean | { show?: boolean },
    confirmDeletion?: boolean | { show?: boolean },
    start_date?: boolean | {
        show?: boolean,
        format?: string
    },
    end_date?: boolean | {
        show?: boolean,
        format?: string
    },
    color?: boolean | {
        show?: boolean,
        values?: array
    },
    menu?: boolean | {
        show?: boolean,
        items?: [
            {
                id?: string,
                icon?: string,
                text?: string,
                disabled? boolean,
                onClick?: ({ id, item, card }) => void
            },
            {...}
        ] | ({ card, store }) => array | boolean
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // weitere Nutzerdaten
        ],
        maxCount?: number | false
    },
    priority?: boolean | {
        show?: boolean,
        values?: [
            {
                id: string | number,
                label?: string,
                color: string
            },
            {...} // weitere Prioritätsdaten
        ]
    },
    votes?: boolean | {
        show?: boolean,
        clickable?: boolean
    },
    css?: (card) => string,
    headerFields?: [
        {
            key: string,
            label?: string,
            css?: string
        },
        {...} // weitere Felddaten
    ]
};
~~~

### Parameter

:::info
Manchmal können Parameter in einer **kurzen** oder **ausführlichen** Form angegeben werden. Zum Beispiel:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // kurze Form
    label: true
    // oder
    // ausführliche Form
    label: { show: true }
~~~
:::

Das **cardShape**-Objekt ermöglicht Ihnen, das Erscheinungsbild der Karten durch folgende Felder zu steuern:

- `label` - (optional) steuert die Sichtbarkeit des **label**-Felds
- `description` - (optional) steuert die Sichtbarkeit des **description**-Felds
- `progress` - (optional) steuert die Sichtbarkeit des **progress**-Felds
- `attached` - (optional) steuert die Sichtbarkeit des **attachment**-Felds
- `cover` - (optional) steuert die Sichtbarkeit des **Kartenbildes**
- `comments` - (optional) steuert die Anzeige von **Kommentare** auf Karten
- `confirmDeletion` - (optional) steuert den **Bestätigungsdialog** für das Löschen von Karten
- `start_date` - (optional) konfiguriert das **Startdatum**-Feld
    - `show` - (optional) steuert die Sichtbarkeit des Startdatums
    - `format` - (optional) legt das Datumsformat fest. Siehe verfügbare Optionen [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (optional) konfiguriert das **Enddatum**-Feld
    - `show` - (optional) steuert die Sichtbarkeit des Enddatums
    - `format` - (optional) legt das Datumsformat fest. Siehe verfügbare Optionen [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (optional) konfiguriert die **obere Farblinie** der Karte
    - `show` - (optional) steuert die Sichtbarkeit der Farblinie
    - `values` - (optional) ein Array von HEX-Farbcodes
- `menu` - (optional) konfiguriert das **Karten-Kontextmenü**
    - `show` - (optional) aktiviert oder deaktiviert das Kontextmenü
    - `items` - (optional) ein Array von Menüobjekten mit folgenden Eigenschaften:
        - `id` - (optional) Menüelement-ID. Verwenden Sie diese für eingebaute Aktionen:
            - ***"set-edit"*** - Kartenname bearbeiten
            - ***"delete-card"*** - Karte löschen
        - `icon` - (optional) Icon-Klassenname (z.B. *mdi-delete*)
        - `text` - (optional) Menüelement-Beschriftung
        - `disabled` - (optional) aktiviert oder deaktiviert das Menüelement
        - `onClick` - (optional) Callback-Funktion mit folgenden Parametern:
            - ***id*** - Menüelement-ID
            - ***item*** - Menüelement-Daten
            - ***card*** - Zielkarten-Daten

:::info
Sie können auch eine eigene Funktion für `items` bereitstellen, die folgende Parameter erhält:

- ***card*** - aktuelle Kartendaten
- ***store*** - *dataStore*-Objekt

Damit können Sie das Menü für bestimmte Karten anpassen oder ausblenden, indem Sie *null* oder *false* zurückgeben:

~~~jsx {}
    items: ({ card, store }) => {
        if(card.id === 1)
            return false
        return [
            { id: "set-edit", icon: "wxi-edit", label: "Edit" },
            { id: "delete-card", icon: "wxi-delete", label: "Delete" }
        ]
    }
~~~
:::

- `users` - (optional) konfiguriert das **Benutzer**-Feld
    - `show` - (optional) steuert die Sichtbarkeit der zugewiesenen Benutzer
    - `values` - (erforderlich) Array von Benutzerobjekten:
        - `id` - (erforderlich) Benutzer-ID
        - `label` - (optional) Benutzername
        - `avatar` - (optional) Pfad zum Benutzeravatar
    - `maxCount` - (optional) maximale Anzahl der auf einer Karte angezeigten Benutzer oder ***false*** für unbegrenzt

    Die Einstellung von `maxCount` kontrolliert, wie viele zugewiesene Benutzer auf der Karte sichtbar sind. `false` zeigt alle zugewiesenen Benutzer an.

:::info
Das ***users***-Feld ist standardmäßig deaktiviert. Um es zu aktivieren, setzen Sie `show` auf `true` und geben Sie Benutzerdaten in `values` an. Um Benutzer über den Editor zuzuweisen, konfigurieren Sie die entsprechende Steuerung in [`editorShape`](/api/config/js_kanban_editorshape_config.md#--parameter-für-die-typen-combo-select-und-multiselect). Verwenden Sie ***select*** für einen einzelnen Benutzer oder ***multiselect*** für mehrere Benutzer.

~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // Anzeige auf 4 Benutzer pro Karte begrenzen
        }
    }
~~~
:::

- `priority` - (optional) konfiguriert das **Priorität**-Feld
    - `show` - (optional) steuert die Sichtbarkeit der Priorität
    - `values` - (optional) Array von Prioritätsobjekten:
        - `id` - (erforderlich) Prioritäts-ID
        - `label` - (optional) Prioritätsname
        - `color` - (erforderlich) HEX-Farbcode
- `votes` - (optional) konfiguriert die **Abstimmungsfunktion**
    - `show` - (optional) steuert das Abstimmungssymbol auf Karten und im Editor
    - `clickable` - (optional) wenn `true`, können Nutzer durch Klicken auf das Symbol auf der Karte abstimmen; sonst ist Abstimmung nur über den Editor möglich
- `css` - Funktion, die eine CSS-Klasse zurückgibt, um Karten bedingt zu stylen
- `headerFields` - (optional) Array von Objekten zur Definition von **benutzerdefinierten Feldern**
    - `key` - (erforderlich) Schlüssel des benutzerdefinierten Felds, verwendet bei der Konfiguration des Editors via [editorShape](../js_kanban_editorshape_config)
    - `label` - (optional) Bezeichnung des benutzerdefinierten Felds
    - `css` - (optional) CSS-Klasse für das benutzerdefinierte Feld

:::info
Wenn Sie keine Kartenoptionen über **cardShape** festlegen, werden die Standardparameter aus **defaultCardShape** verwendet.
:::

### Standardkonfiguration

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "High" },
    { id: 2, color: "#F1B941", label: "Medium" },
    { id: 3, color: "#77D257", label: "Low" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ store }: { store: DataStore }) => {
    const { readonly } = store.getState();
    const baseItems = [
        { id: "duplicate-card", icon: "wxi-content-copy", text: "Duplicate" },
        { id: "delete-card", icon: "wxi-delete-outline", text: "Delete" }
    ];

    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit-outline", text: "Edit" },
            ...baseItems,
        ];
    }
    return baseItems;
};

const defaultCardShape = {
    label: { show: true },
    description: { show: false },
    progress: { show: false },
    start_date: { show: false },
    end_date: { show: false },
    users: { show: false },
    confirmDeletion: { show: true },
    priority: {
        show: false,
        values: defaultPriorities
    },
    color: {
        show: false,
        values: defaultColors
    },
    cover: { show: false },
    attached: { show: false },
    menu: { show: true }
};
~~~

### Beispiel

~~~jsx {14-49,54}
const users = [ // Beispiel-Benutzerdaten
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // Beispiel-Prioritätsdaten
    { id: 1, color: "#FF5252", label: "high" },
    { id: 2, color: "#FFC975", label: "medium" },
    { id: 3, color: "#0AB169", label: "low" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // Kartendarstellungseinstellungen
    label: true,
    description: true,
    progress: true,
    start_date: true,
    end_date: true,
    menu: true,
    attached: true,
    cover: false,
    comments: false,
    confirmDeletion: false,
    color: {
        show: true,
        values: cardColors
    },
    users: {
        show: true,
        values: users,
        maxCount: false
    },
    priority: {
        show: true,
        values: cardPriority
    },
    votes: {
        show: true,
        clickable: true
    },
    css: (card) => card.type == "feature" ? "green" : "red",
    headerFields: [
        {   // Beispiel für benutzerdefiniertes Feld
            key: "sprint",
            css: "custom_style",
            label: "Sprint"
        }
    ]
};

new kanban.Kanban("#root", {
    cards,
    columns,
    cardShape,
    // weitere Parameter
});
~~~

**Änderungsprotokoll:**
- Die Optionen ***comments***, ***css*** und ***votes*** wurden in Version 1.4 hinzugefügt
- Die Option ***menu.items[0].label*** wurde in Version 1.4 zu ***menu.items[0].text*** umbenannt
- Die Optionen ***users.maxCount*** und ***votes.clickable*** wurden in Version 1.6 hinzugefügt

**Verwandte Artikel:** [Konfiguration](/guides/configuration#karten)

**Verwandte Beispiele:**
- [Kanban. Swimlanes, Kommentare, Abstimmungen](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Hervorhebung veralteter und aktiver Aufgaben](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Kartendesign](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unbegrenzte Benutzerzuweisungen pro Aufgabe](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)
