---
sidebar_label: karten
title: Karten Konfiguration
description: Sie können die Karten-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# karten

### Beschreibung

@short: Optional. Ein Array von Objekten, die die Kartendaten enthalten

### Verwendung

~~~jsx {}
cards?: [
    {
        id?: string | number,
        label?: string,
        description?: string,
        progress?: number,
        start_date?: Date,
        end_date?: Date,
        attached?: [
            {
                id: string | number,
                url?: string,
                previewURL?: string,
                coverURL?: string,
                name?: string,
                isCover?: boolean
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - für mehrere Benutzer, wenn Sie den Editor-Typ "multiselect" zur Benutzerzuweisung verwenden
            // users?: string | number - für einen einzelnen Benutzer, wenn Sie den Editor-Typ "combo" oder "select" zur Benutzerzuweisung verwenden
        priority?: string | number,
        css?: string,
        votes?: array,
        comments?: [
            {
                id: string | number,
                userId: string | number,
                cardId: string | number,
                text?: string,
                date?: Date,
            }, {...}
        ],
        [custom_key: string]?: any
    }, {...} // weitere Kartendaten
];
~~~

### Parameter

Jede Karte kann folgende Parameter enthalten:

- `id` - (optional) Karten-**ID**, die zur Verwaltung der Karte über zugehörige Methoden verwendet wird
- `label` - (optional) Textlabel, angezeigt im **Label**-Feld
- `description` - (optional) Beschreibungstext, angezeigt im **Beschreibung**-Feld
- `progress` - (optional) Wert der Fortschrittsanzeige von 0 bis 100, angezeigt im **Fortschrittsbalken**-Feld
- `start_date` - (optional) Startdatum als Date-Objekt (keine String-Daten), angezeigt im **Startdatum**-Feld
- `end_date` - (optional) Enddatum als Date-Objekt (keine String-Daten), angezeigt im **Enddatum**-Feld
- `attached` - (optional) Array mit Details angehängter Dateien, angezeigt im **Anhang**-Feld. Jedes Objekt kann enthalten:
	- `id` - (erforderlich) ID der angehängten Datei
    - `url` - (optional) Dateipfad
    - `previewURL` - (optional) Pfad zum Vorschaubild
    - `coverURL` - (optional) Pfad zum als Cover gesetzten Bild
    - `name` - (optional) Dateiname
    - `isCover` - (optional) wenn **true**, wird das Coverbild von "coverURL" geladen
- `color` - (optional) HEX-Farbcode, der die obere Linienfarbe der Karte darstellt
- `users` - (optional) entweder ein **Array** von Benutzer-IDs für mehrere Benutzer oder ein **string | number** für einen einzelnen Benutzer. Zur Zuweisung von Benutzern definieren Sie ein Array mit Benutzerdaten in der Eigenschaft [cardShape.users](../js_kanban_cardshape_config). Benutzer erscheinen im **Benutzer**-Feld

:::info
`users?: array` - verwenden Sie ein **Array** von Benutzer-**IDs**, wenn Sie den Editor-Typ [**multiselect**](../js_kanban_editorshape_config/#--parameter-für-die-typen-combo-select-und-multiselect) für die Zuweisung mehrerer Benutzer verwenden

`users?: string | number` - geben Sie eine einzelne Benutzer-**ID** an, wenn Sie die Editor-Typen [**combo** oder **select**](../js_kanban_editorshape_config/#--parameter-für-die-typen-combo-select-und-multiselect) für die Zuweisung eines einzelnen Benutzers verwenden
:::

- `priority` - (optional) Prioritäts-**ID** der Karte. Definieren Sie ein Array von Prioritäten in der Eigenschaft [cardShape.priority](../js_kanban_cardshape_config). Angezeigt im **Priorität**-Feld
- `css` - (optional) benutzerdefinierte CSS-Stile für die Karte
- `votes` - (optional) Array von Benutzer-IDs, die abgestimmt haben
- `comments` - (optional) Array von Kommentarobjekten mit:
    - `id` - (erforderlich) Kommentar-**ID**
    - `userId` - (erforderlich) Benutzer-**ID** des Kommentierenden
    - `cardId` - (erforderlich) Karten-**ID**, zu der der Kommentar gehört
    - `text` - (optional) Kommentartext, der HTML-Markup enthalten kann
    - `date` - (optional) Date-Objekt, das den Zeitpunkt der Kommentierung angibt (wird nach Änderungen nicht aktualisiert)
- `custom_key` - (optional) beliebiger benutzerdefinierter Schlüssel für die Karte. Dies kann verwendet werden, um die Karte innerhalb von Spalten oder Reihen zu positionieren, siehe die Eigenschaften [columnKey](../js_kanban_columnkey_config) und [rowKey](../js_kanban_rowkey_config)

:::info
Um neue Kartendaten dynamisch zu laden, kann die Methode [**parse()**](../../methods/js_kanban_parse_method) verwendet werden.
:::

### Beispiel

~~~jsx {1-40,44}
const cards = [
    {
        id: 1,
        label: "Integration mit React",
        description: "Einige Beschreibung",
        progress: 25,
        start_date: new Date("02/24/2022"),
        end_date: new Date("02/24/2023"),
        attached: [
            {
                id: 234,
                url: "../assets/img-1.jpg",
                previewURL: "../assets/img-1.jpg",
                coverURL: "../assets/img-1.jpg",
                name: "img-1.jpg",
                isCover: true
            }, {...} // weitere angehängte Dateien
        ],
        color: "#65D3B3",
        users: [1,2],
        votes: [3,6,8],
        comments: [
            {
                id: 1,
                userId: 1,
                cardId: 1,
                text: "Grüße, liebe Kollegen. Ich möchte meine Einsichten zu dieser Aufgabe teilen. Ich denke, wir sollten mindestens die Hälfte der Punkte im Plan ohne weitere Verzögerungen bearbeiten.",
                date: new Date(),
            }, {...} // weitere Kommentare
        ],
        priority: 1,
        // benutzerdefiniertes Feld, um die Karte in die "feature"-Reihe zu platzieren
        // die rowKey-Konfiguration muss auf den Wert "type" gesetzt werden
        type: "feature",
        // benutzerdefiniertes Feld, um die Karte in die "backlog"-Spalte zu platzieren
        // die columnKey-Konfiguration muss auf den Wert "stage" gesetzt werden
        stage: "backlog",
        css: "red",
    }, {...} // weitere Kartendaten
];

new kanban.Kanban("#root", {
    columns,
    cards,
    // weitere Parameter
});
~~~

**Änderungsprotokoll:** Die Parameter ***css***, ***comments*** und ***votes*** wurden in Version v1.4 eingeführt

**Verwandte Artikel:**
- [Arbeiten mit Daten](/guides/working_with_data)
- [updateCard()](/api/methods/js_kanban_updatecard_method.md)

**Verwandte Beispiel:** [Kanban. Styling cards](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)
