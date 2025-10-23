---
sidebar_label: cardShape
title: cardShape Konfiguration
description: Sie können die cardShape-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwickleranleitungen und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# cardShape

### Beschreibung

@short: Optional. Ein Objekt mit Einstellungen zur Verwaltung des Aussehens der Karten

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
                onClick?: ({ id, item, card }) => void,
                data?: array // ein Array von Untermenüpunkten
            }, 
            {...}
        ] | ({ card, readonly }) => array | null
    },
    users?: boolean | {
        show?: boolean,
        values: [
            {
                id: string | number,
                label?: string,
                avatar?: string
            },
            {...} // weitere Benutzerdaten
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
In manchen Fällen können Sie den Parameter als **kurzen** oder **ausführlichen** Wert setzen. Siehe das folgende Beispiel:

~~~jsx {3,6}
    label: boolean | { show?: boolean }
    // kurzer Wert
    label: true
    // oder
    // ausführlicher Wert
    label: { show: true }
~~~
:::

Um das Aussehen der Karte zu konfigurieren, können Sie im **cardShape**-Objekt die folgenden Parameter (Felder) angeben:

- `label` - (optional) zeigt/versteckt ein **Label**-Feld
- `description` - (optional) zeigt/versteckt ein **Beschreibung**-Feld
- `progress` - (optional) zeigt/versteckt ein **Fortschritt**-Feld
- `attached` - (optional) zeigt/versteckt ein **Anhang**-Feld
- `cover` - (optional) zeigt/versteckt ein **Kartenbild**
- `comments` - (optional) zeigt/versteckt **Kommentare** auf den Karten
- `confirmDeletion` - (optional) zeigt/versteckt den **Bestätigungsdialog**, der es Benutzern erlaubt, das Löschen einer Karte zu bestätigen oder abzulehnen
- `start_date` - (optional) ein Objekt mit Parametern für ein **Startdatum**-Feld
    - `show` - (optional) zeigt/versteckt das Startdatum der Karte
    - `format` - (optional) definiert das Format des Startdatums der Karte. Die verfügbaren Parameter finden Sie [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `end_date` - (optional) ein Objekt mit Parametern für ein **Enddatum**-Feld
    - `show` - (optional) zeigt/versteckt das Enddatum der Karte
    - `format` - (optional) definiert das Format des Enddatums der Karte. Die verfügbaren Parameter finden Sie [hier](https://docs.dhtmlx.com/suite/calendar/api/calendar_dateformat_config/)
- `color` - (optional) ein Objekt mit Parametern für die **obere Farbzeile** der Karte
    - `show` - (optional) zeigt/versteckt die obere Farbzeile
    - `values` - (optional) ein Array gültiger HEX-Codes
- `menu` - (optional) ein Objekt mit Parametern für das **Kontextmenü der Karte**. Hier können Sie die folgenden Parameter angeben:
    - `show` - (optional) aktiviert/deaktiviert das Kontextmenü der Karte
    - `items` - (optional) ein Array von Objekten mit Parametern der Menüeinträge der Karten. Für jeden Eintrag können Sie folgende Parameter angeben:
        - `id` - (optional) eine ID des Menüeintrags. Um die eingebauten Aktionen zu implementieren, müssen Sie folgende Werte angeben:
            - ***"set-edit"*** - definiert die Aktion zum Bearbeiten des Kartennamens
            - ***"delete-card"*** - definiert die Aktion zum Löschen einer Karte
        - `icon` - (optional) ein Klassenname für das Icon des Menüeintrags. Hier können Sie beliebige Icons aus Icon-Fonts angeben (*mdi-delete*)
        - `text` - (optional) ein Name des Menüeintrags
        - `disabled` - (optional) der Status des Menüeintrags (*aktiv* oder *deaktiviert* je nach *boolean*-Wert)
        - `onClick` - (optional) eine benutzerdefinierte Callback-Funktion, die folgende Argumente erhält:
            - ***id*** - eine ID des aktuellen Menüeintrags
            - ***item*** - ein Datenobjekt des aktuellen Menüeintrags
            - ***card*** - ein Datenobjekt der Zielkarte
        - `data` - (optional) ein Array von Objekten, die Untermenüpunkte des Menüs darstellen

    :::info
    Sie können den Parameter `menu.items` auch auf eine benutzerdefinierte Funktion setzen, die folgende Argumente erhält:
    - ***card*** - ein Datenobjekt der aktuellen Karte
    - ***readonly*** - ein Objekt mit readonly [Status-Eigenschaften](api/internal/js_kanban_getstate_method.md)

    Diese Funktion erlaubt es, das Menü für jede Karte anzupassen oder für eine spezifische Karte auszublenden (indem *null* oder *false* zurückgegeben wird):

    ~~~jsx {}
    items: ({ card, readonly }) => {
        if (card.id === 1){
            return false;
        }  

        const menu = [];

        if (!readonly.delete){
            menu.push({ 
                id: "delete-card", icon: "wxi-delete", label: "Delete"
            });
        }
            
        if (!readonly.edit){
            menu.push({ 
                id: "set-edit", icon: "wxi-edit", label: "Edit"
            });
        }
        return menu.length ? menu : null;
    }
    ~~~
    :::

- `users` - (optional) ein Objekt mit Parametern für ein **Benutzer**-Feld
    - `show` - (optional) zeigt/versteckt die zugewiesenen Benutzer
    - `values` - (erforderlich) ein Array von Objekten mit Benutzerdaten. Für jeden Benutzer können Sie folgende Parameter angeben:
        - `id` - (erforderlich) eine Benutzer-**ID**
        - `label` - (optional) ein Benutzername
        - `avatar` - (optional) ein Pfad zum Benutzeravatar
    - `maxCount` - (optional) eine maximale Anzahl der auf der Karte angezeigten Benutzer (oder ***false***)

    Sie können die Eigenschaft `maxCount` auf eine Zahl setzen, die angibt, wie viele Benutzer auf der Karte angezeigt werden sollen.
    Wenn Sie `maxCount` auf `false` setzen, werden alle zugewiesenen Benutzer auf der Karte angezeigt.

    :::info
    Das ***users***-Feld ist standardmäßig deaktiviert. Um es zu aktivieren, müssen Sie den Parameter `show` auf `true` setzen und die entsprechenden Benutzerdaten über den Parameter `values` bereitstellen. Um neue Benutzer über den Editor zuzuweisen, müssen Sie die entsprechende Steuerung über die [`editorShape`](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types)-Eigenschaft konfigurieren. Verwenden Sie den Typ ***select***, um einen oder mehrere Benutzer zuzuweisen, oder den Typ ***multiselect***, um mehrere Benutzer zuzuweisen.

    ~~~jsx {}
    cardShape: {
        users: {
            show: true,
            values: [
                { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
                { id: 2, label: "Aaron Short" }
            ],
            maxCount: 4 // nur 4 Benutzer werden auf der Karte angezeigt
        }
    }
    ~~~
    :::

- `priority` - (optional) ein Objekt mit Parametern für ein **Prioritäts**-Feld
    - `show` - (optional) zeigt/versteckt die Priorität der Karte
    - `values` - (optional) ein Array von Objekten mit Prioritätsdaten. Für jede Priorität können Sie folgende Parameter angeben:
        - `id` - (erforderlich) eine Prioritäts-**ID**
        - `label` - (optional) ein Prioritätsname
        - `color` - (erforderlich) ein gültiger HEX-Code
- `votes` - (optional) spezifiziert die **Abstimmungs**-Funktionalität
    - `show` - (optional) zeigt/versteckt das Abstimmungssymbol auf der Karte und im Editor
    - `clickable` - (optional) macht das Abstimmungssymbol auf der Karte anklickbar. Wenn `true`, können Benutzer für die Karte über das Symbol auf der Karte abstimmen. Andernfalls können Benutzer nur über das Symbol im Editor abstimmen.
- `css` - eine Funktion, die eine CSS-Klasse zurückgibt, die bedingt auf Karten angewendet wird
- `headerFields` - (optional) ein Array von Objekten mit Daten zu **benutzerdefinierten Feldern**. Hier können Sie folgende Parameter angeben:
    - `key` - (erforderlich) ein Schlüssel des benutzerdefinierten Felds. Er wird bei der Konfiguration des Editors über die [editorShape](api/config/js_kanban_editorshape_config.md)-Eigenschaft verwendet
    - `label` - (optional) ein Label des benutzerdefinierten Felds
    - `css` - (optional) eine CSS-Klasse des benutzerdefinierten Felds

:::info
Sofern Sie die Karteneinstellungen nicht über die **cardShape**-Eigenschaft angeben, verwendet das Widget die Parameter aus dem **defaultCardShape**!
:::

### Standardkonfiguration

~~~jsx {}
const defaultPriorities = [
    { id: 1, color: "#FE6158", label: "Hoch" },
    { id: 2, color: "#F1B941", label: "Mittel" },
    { id: 3, color: "#77D257", label: "Niedrig" }
];

const defaultColors = ["#33B0B4", "#0096FA", "#F1B941"];

export const getDefaultCardMenuItems = ({ readonly }: { readonly: DataStore }) => {
    const { readonly } = readonly.getState();
    const baseItems = [
        { id: "duplicate-card", icon: "wxi-content-copy", text: "Duplizieren" },
        { id: "delete-card", icon: "wxi-delete-outline", text: "Löschen" }
    ];

    if (!readonly?.select && readonly?.edit) {
        return [
            { id: "set-edit", icon: "wxi-edit-outline", text: "Bearbeiten" },
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
const users = [ // Benutzerdaten
    { id: 1, label: "John Smith", avatar: "../assets/user.jpg" },
    { id: 2, label: "Aaron Short" }
];

const  cardPriority = [ // Prioritätsdaten der Karten
    { id: 1, color: "#FF5252", label: "hoch" },
    { id: 2, color: "#FFC975", label: "mittel" },
    { id: 3, color: "#0AB169", label: "niedrig" }
];

const cardColors = ["#65D3B3", "#FFC975", "#58C3FE"];

const cardShape = { // Karteneinstellungen
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
        {   // benutzerdefiniertes Feld
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
- Die Parameter ***comments***, ***css*** und ***votes*** wurden in Version 1.4 hinzugefügt
- Der Parameter ***menu.items[0].label*** wurde in Version 1.4 durch ***menu.items[0].text*** ersetzt und als veraltet markiert
- Der Parameter ***menu.items[0].items*** wurde in Version 1.4 durch ***menu.items[0].data*** ersetzt und als veraltet markiert
- Die Parameter ***users.maxCount*** und ***votes.clickable*** wurden in Version 1.6 hinzugefügt
- Die Parameter ***menu.items[0].label*** und ***menu.items[0].items*** wurden in Version 1.7 entfernt
- Die Funktion ***menu.items*** wurde in Version 1.7 aktualisiert. Der Parameter **store** wurde durch **readonly** ersetzt

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#cards)

**Verwandte Beispiele:**
- [Kanban. Swimlanes, Kommentare, Abstimmungen](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)
- [Kanban. Hervorhebung veralteter und aktiver Aufgaben](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)
- [Kanban. Styling von Karten](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
- [Kanban. Unbegrenzte Benutzerzuweisungen pro Aufgabe](https://snippet.dhtmlx.com/w205dvzg?tag=kanban)