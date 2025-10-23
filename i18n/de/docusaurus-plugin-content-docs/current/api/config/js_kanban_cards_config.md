---
sidebar_label: karten
title: Karten-Konfiguration
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Karten-Konfiguration. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# karten

### Beschreibung

@short: Optional. Ein Array von Objekten mit den Kartendaten

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
                size?: number
            }, {...}
        ],
        color?: string,
        users?: array | string | number,
            // users?: array - für mehrere Benutzer, wenn Sie den Editor-Typ "multiselect" verwenden, um Benutzer zuzuweisen
            // users?: string | number - für einen einzelnen Benutzer, wenn Sie die Editor-Typen "combo" oder "select" verwenden, um einen Benutzer zuzuweisen
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

Für jede Karte können Sie folgende Parameter (Daten) angeben:

- `id` - (optional) eine Karten-**ID**. Wird zur Verwaltung der Karte über die entsprechenden Methoden verwendet
- `label` - (optional) eine Kartenbezeichnung. Wird im Feld **Label** angezeigt
- `description` - (optional) eine Kartenbeschreibung. Wird im Feld **Beschreibung** angezeigt
- `progress` - (optional) ein Wert für die Fortschrittsanzeige. Sie können einen Wert im Bereich von 0 bis 100 angeben. Wird im Feld **Fortschrittsbalken** angezeigt
- `start_date` - (optional) ein Start-Datum-Objekt (kein String-Datum angeben). Wird im Feld **Startdatum** angezeigt
- `end_date` - (optional) ein End-Datum-Objekt (kein String-Datum angeben). Wird im Feld **Enddatum** angezeigt
- `attached` - (optional) ein Array von Objekten mit Daten der angehängten Datei(en). Wird im Feld **Anhang** angezeigt. Für jedes Objekt können Sie folgende Parameter angeben:
	- `id` - (erforderlich) eine **ID** der angehängten Datei
    - `url` - (optional) Pfad zur anzuhängenden Datei
    - `previewURL` - (optional) Pfad zum Vorschaubild
    - `coverURL` - (optional) Pfad zum Bild, das als Cover gesetzt wird
    - `name` - (optional) Dateiname
    - `isCover` - (optional) aktiviert ein Coverbild. Wenn **true**, wird das Coverbild über die URL "coverURL" geladen
    - `size` - (optional) Größe der angehängten Datei (in Bytes)
- `color` - (optional) ein gültiger HEX-Farbcode. Es ist die Farbe der oberen Linie der Karte
- `users` - (optional) ein **Array** mit **IDs** für mehrere zugewiesene Benutzer oder **string | number** für einen einzelnen zugewiesenen Benutzer. Um die zugewiesenen Benutzer anzugeben, müssen Sie ein Array mit Benutzerdaten in der Eigenschaft [cardShape.users](api/config/js_kanban_cardshape_config.md) definieren. Die Benutzer werden im Feld **Benutzer** angezeigt

:::info
`users?: array` - geben Sie ein **Array** mit Benutzer-**IDs** an, wenn Sie den Editor-Typ [**multiselect**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) verwenden, um mehrere Benutzer zuzuweisen

`users?: string | number` - geben Sie eine einzelne **ID** an, wenn Sie die Editor-Typen [**combo** oder **select**](api/config/js_kanban_editorshape_config.md#--parameters-for-combo-select-and-multiselect-types) verwenden, um einen einzelnen Benutzer zuzuweisen
:::

- `priority` - (optional) eine Kartenprioritäts-**ID**. Um die Kartenpriorität anzugeben, müssen Sie ein Array mit Prioritätsdaten in der Eigenschaft [cardShape.priority](api/config/js_kanban_cardshape_config.md) definieren. Wird im Feld **Priorität** angezeigt
- `css` - (optional) definiert CSS-Stile für eine einzelne Karte
- `votes` - (optional) ein Array von Benutzer-IDs
- `comments` - (optional) ein Array von Objekten mit Kommentardaten. Für jedes Kommentarobjekt können Sie folgende Parameter angeben:
    - `id` - (erforderlich) eine **ID** des Kommentars
    - `userId` - (erforderlich) eine **ID** des Benutzers, der den Kommentar verfasst hat
    - `cardId` - (erforderlich) eine **ID** der Karte, zu der der Kommentar gehört
    - `text` - (optional) Text des Kommentars. Kann auch HTML-Markup enthalten
    - `date` - (optional) ein Date-Objekt (kein String-Datum angeben). Das Datum, an dem der Kommentar verfasst wurde. Wird nach der Bearbeitung nicht aktualisiert
- `custom_key` - (optional) ein benutzerdefinierter Schlüssel der Karte. Sie können benutzerdefinierte Schlüssel angeben, um die Karte in Spalte und Zeile zu platzieren. Siehe die Eigenschaften [columnKey](../js_kanban_columnkey_config) und [rowKey](api/config/js_kanban_rowkey_config.md)

:::info
Wenn Sie neue Daten für Karten dynamisch laden möchten, können Sie die Methode [**parse()**](api/methods/js_kanban_parse_method.md) verwenden!
:::

### Beispiel

~~~jsx {1-41,45}
const cards = [
    {
        id: 1,
        label: "Integration mit React",
        description: "Eine Beschreibung",
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
                isCover: true,
                size: 11979
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
                text: "Grüße, liebe Kollegen. Ich möchte meine Einsichten zu dieser Aufgabe teilen. Ich denke, wir sollten mindestens die Hälfte der Punkte im Plan ohne weitere Verzögerungen erledigen.",
                date: new Date(),
            }, {...} // weitere Kommentare
        ],
        priority: 1,
        // benutzerdefiniertes Feld, um die Karte in der Zeile "feature" zu platzieren 
        // die rowKey-Konfiguration muss auf den Wert "type" gesetzt sein
        type: "feature",
        // benutzerdefiniertes Feld, um die Karte in der Spalte "backlog" zu platzieren 
        // die columnKey-Konfiguration muss auf den Wert "stage" gesetzt sein
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

**Änderungsprotokoll:** Die Parameter ***css***, ***comments*** und ***votes*** wurden in Version 1.4 hinzugefügt

**Verwandte Artikel:**
- [Arbeiten mit Daten](guides/working_with_data.md)
- [updateCard()](api/methods/js_kanban_updatecard_method.md)

**Verwandtes Beispiel:** [Kanban. Styling von Karten](https://snippet.dhtmlx.com/qu6rpktk?tag=kanban)