---
sidebar_label: Was ist neu
title: Was ist neu
description: Entdecken Sie die Neuerungen in DHTMLX Kanban sowie die Release-Historie in der Dokumentation der DHTMLX JavaScript UI-Bibliothek. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Evaluierungsversion von DHTMLX Kanban herunter.
---

# Was ist neu

Wenn Sie Kanban von einer älteren Version aktualisieren, beachten Sie bitte [Migration zu neueren Versionen](news/migration.md) für Details.

## Version 1.7.0

Veröffentlicht am 14. Oktober 2025

[Release-Bewertung im Blog](https://dhtmlx.com/blog/meet-dhtmlx-kanban-1-7/)

### Salesforce-Integration

Ab Version 1.7 können Sie das JavaScript Kanban innerhalb der Salesforce-Umgebung nutzen. Weitere Informationen finden Sie im folgenden Leitfaden: [**Integration mit Salesforce**](guides/integration_with_salesforce.md).

Sie können auch unser [**GitHub-Beispiel**](https://github.com/DHTMLX/salesforce-lwc-demo) erkunden oder die [**Online-Demo**](https://dhtmlx-dev-ed.develop.lightning.force.com/) ausführen (*Login*: ***user***, *Passwort*: ***demo***).

### Neue API

- #### Events

    - [`undo`](api/events/js_kanban_undo_event.md)
    - [`redo`](api/events/js_kanban_redo_event.md)

- #### Methoden

    - [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md)
    - [`detach()`](api/internal/js_kanban_detach_method.md)

### Updates

- #### Methoden

    - Die interne Methode [`on`](api/internal/js_kanban_on_method.md) wurde um die Parameter `config.tag` und `config.intercept` erweitert.
    - Die interne Methode [`intercept`](api/internal/js_kanban_intercept_method.md) wurde um die Parameter `config.tag` und `config.intercept` erweitert.

- #### Eigenschaften

    - Die Eigenschaft [`links`](api/config/js_kanban_links_config.md) wurde wie folgt aktualisiert:
        - Der Parameter `masterId` wurde durch den Parameter `source` ersetzt.
        - Der Parameter `slaveId` wurde durch den Parameter `target` ersetzt.

    - Die Eigenschaft [`editorShape`](api/config/js_kanban_editorshape_config.md) wurde aktualisiert. Der Parameter `clearButton` wurde durch `clear` ersetzt.

    - Die Funktion [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) wurde aktualisiert. Der Parameter `store` wurde durch `readonly` ersetzt.

    - Die Eigenschaft [`cards[i].attached[i]`](api/config/js_kanban_cards_config.md) wurde um den Parameter `size` erweitert.

### Entfernte API

- Die Eigenschaft `editorAutoSave` wurde entfernt. Verwenden Sie stattdessen die Eigenschaft [`editor.autoSave`](api/config/js_kanban_editor_config.md).

- Die Parameter `dragItemsCoords` und `dropAreasCoords` wurden aus dem Event [`start-drag-card`](api/events/js_kanban_startdragcard_event.md) entfernt.

### Fehlerbehebungen

- Beim Hochladen eines Stapels von Dateien oder mehrerer großer Dateien wird das Formular aktualisiert, bevor alle Dateien vollständig auf den Server geladen wurden. In diesem Fall werden die Kartendaten fehlerhaft an den Server gesendet.
- Dateigröße wird nur für neu geladene Dateien angezeigt.
- Jahr- und Monatswerte werden nach Klick auf den **Fertig**-Button im Editor nicht aktualisiert.
- Das erweiterbare Textfeld für Kommentare verschiebt den Button außerhalb des Klickbereichs.
- Ein Skriptfehler tritt auf, wenn eine Karte geöffnet wird, die mit einer gelöschten Karte verknüpft ist.

## Version 1.6.5

Veröffentlicht am 14. Juli 2025

### Fehlerbehebungen

- Die Konfiguration `disabled: true` funktioniert nicht für Menüeinträge.
- Wenn Sie eine Zeile zu Kanban hinzufügen, ohne eine vordefinierte Zeilenstruktur, erscheinen keine Zeilenköpfe.

## Version 1.6.4

Veröffentlicht am 12. Juni 2025

### Fehlerbehebungen

- Karten gehen verloren, wenn sie zu Spalten/Zeilen hinzugefügt werden, die entfernt und dann wiederhergestellt wurden.
- Fehlende lokale Bezeichnungen für Uploader-Listen-Buttons.
- Fehlende Readmes in kommerziellen Versionen.

## Version 1.6.3

Veröffentlicht am 8. April 2025

### Fehlerbehebungen

- Limit wird fälschlicherweise auf die gesamte Spalte angewendet.
- Fehler tritt auf, wenn eine Karte nach Schließen des Modal-Editors verschoben wird.
- Bestätigung für das Löschen wird unterhalb des Modal-Editors angezeigt.
- Das Symbol "mehr" in der Toolbar erscheint und verschwindet unerwartet bei langsamer Fenstergrößenänderung.
- Das Event `delete-card` schließt immer den Editor.
- Der Editor kann nicht geöffnet werden, wenn die Priorität auf eine ID außerhalb der bereitgestellten Optionen gesetzt ist.

## Version 1.6.2

Veröffentlicht am 14. Februar 2025

### Fehlerbehebungen

- Falsches Ablaufdatum im Testpaket.
- Warnung beim Drag & Drop auf Touchgeräten.
- Readonly-Konfiguration `add: false` entfernt die **Hinzufügen**-Option nicht aus dem Spaltenmenü.
- Der Editor wird für Karten mit numerischen IDs als Strings nicht gerendert.
- Veralteter Link zu Beispielen im Paket.
- Spaltenscrollen mit Lazy Rendering hat Drag & Drop-Probleme.
- Die Methode `setConfig()` aktualisiert den festen Zustand der Spaltenköpfe nicht.

## Version 1.6.1

Veröffentlicht am 29. November 2024

### Fehlerbehebungen

- Die Toolbar auf schmalen Bildschirmen hat ein falsch ausgerichtetes "mehr"-Symbol.
- `RestDataProvider` ignoriert Header, die über `setHeaders()` definiert wurden.
- Fehler "`RestDataProvider.getIDResolver` ist keine Funktion".

## Version 1.6

Veröffentlicht am 13. November 2024

[Release-Bewertung im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### Neue Funktionalität

- Möglichkeit, wie viele zugewiesene Benutzer auf einer Karte angezeigt werden, über die Eigenschaft [`cardShape.users.maxCount`](api/config/js_kanban_cardshape_config.md) zu ändern (siehe [**Beispiel**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- Möglichkeit, den Inhalt von Spaltenköpfen über die Eigenschaft [`columnShape`](api/config/js_kanban_columnshape_config.md) zu ändern (siehe [**Beispiel**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- Möglichkeit, Ansicht und Inhalt der Suchergebnisse über die Eigenschaft [`items.searchResult`](api/config/toolbar_items_config.md) der Toolbar-**Suche**-Steuerung zu ändern (siehe [**Beispiel**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- Möglichkeit, den Editor als modales Fenster über die Eigenschaft [`editor.placement`](api/config/js_kanban_editor_config.md) anzuzeigen (siehe [**Beispiel**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- Möglichkeit, das Voting für eine Karte (mit dem Abstimmungs-Icon auf der Karte) über die Eigenschaft [`cardShape.votes.clickable`](api/config/js_kanban_cardshape_config.md) zu aktivieren (siehe [**Beispiel**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))

### Updates

- #### Eigenschaften

    - Die Eigenschaft [`cardShape`](api/config/js_kanban_cardshape_config.md) wurde um die Parameter ***users.maxCount*** und ***votes.clickable*** erweitert.
    - Die Eigenschaft [`columnShape`](api/config/js_kanban_columnshape_config.md) wurde um die Parameter ***headerTemplate*** und ***collapsedTemplate*** erweitert.
    - Die Eigenschaft [`editor`](api/config/js_kanban_editor_config.md) wurde um den Parameter ***placement*** erweitert.
    - Die Eigenschaft [`items`](api/config/toolbar_items_config.md) der Toolbar-**Suche**-Steuerung wurde um den Parameter ***searchResult*** erweitert.

- #### Events

    - Das Event [`set-edit`](api/events/js_kanban_setedit_event.md) wurde um den Parameter ***eventSource*** erweitert (siehe [**Beispiel**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban)).

- #### Methoden

    - Die Funktionalität der Methode [`setConfig()`](api/methods/js_kanban_setconfig_method.md) wurde wie folgt aktualisiert:

        - Die Methode ändert nicht die Historie (Sie können die Historie überhaupt nicht ändern).
        - Die Methode zerstört nicht den Kanban-Datenspeicher. Sie müssen Event-Listener und Toolbar nicht neu erstellen oder erneut anhängen.

    - Die Methode [`setLocale()`](api/methods/js_kanban_setlocale_method.md) zerstört nicht den Kanban-Datenspeicher. Sie müssen Event-Listener und Toolbar nicht neu erstellen oder erneut anhängen.
    - Der Parameter `api` der Toolbar-Methode [`setLocale()`](api/methods/toolbar_setlocale_method.md) wurde als veraltet markiert.

### Fehlerbehebungen

- Ein Kommentar, der gerade bearbeitet wird, kann entfernt werden und das Textfeld für neue Kommentare verschwindet.
- Fehlende Lokalisierungsstrings wurden hinzugefügt.
- Drag-n-Drop funktioniert nicht, wenn die Einstellungen [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) und [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) kombiniert werden.
- Der Editor kann nicht über das Schließen-Symbol geschlossen werden.
- Der rechte Bereich des Editors hat die gleiche Farbe wie der Hintergrund der Fortschrittsleiste (nur im Willow-Skin).

## Version 1.5.13

Veröffentlicht am 12. September 2024

### Fehlerbehebungen

- Der Button "Als Titelbild festlegen" erscheint nicht, wenn die Erweiterung großgeschrieben ist.
- Ein Klick auf ein deaktiviertes Multiselect-Steuerelement verursacht einen Fehler.
- Nach dem Aufruf der Methode [`addCard()`](api/methods/js_kanban_addcard_method.md) führt das Scrollen bei [Spaltenscroll](api/config/js_kanban_scrolltype_config.md) und [Lazy Rendering](api/config/js_kanban_rendertype_config.md) zu einem Fehler.
- Es werden keine Kommentare gespeichert, sondern "" statt [].
- Der Editorstil wird durch globale Styles mit einem gleichnamigen nicht eindeutigen Klassenselektor überschrieben. [Siehe den Migrationsabschnitt](news/migration.md/#1512---1513).

## Version 1.5.12

Veröffentlicht am 2. Mai 2024

### Fehlerbehebungen

- Intercept-Regression: `return false` verhindert keine internen Events.
- Deaktivierte Dateien erlauben Dateien.

## Version 1.5.11

Veröffentlicht am 25. März 2024

### Fehlerbehebungen

- Kanban-CSS-Variablen des *Dark willow*-Skins fehlen für Toolbar und Portale.
- Änderungen an Kommentaren und Abstimmungen werden nicht auf die Formularwerte angewendet, wenn Autosave deaktiviert ist.
- Benutzerdefiniertes Spaltenuntermenü erhält `null` im Argument der **onClick**-Funktion.
- Es ist nicht möglich, den bearbeitbaren Modus für Datepicker im Editor zu setzen.
- Konsolenwarnungen in Kanban-Beispielen.

## Version 1.5.10

Veröffentlicht am 29. Februar 2024

### Fehlerbehebungen

- Fehlerhafter Build auf dem npm-Server.
- Der Parameter `select` wurde dem Event [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md) und der Methode [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) hinzugefügt.
- Falsche Stile für das Kommentarfeld im Kanban-Editor.

## Version 1.5.9

Veröffentlicht am 20. Februar 2024

### Fehlerbehebungen

- Kanban beeinflusst die Styles anderer Widgets.
- Benutzerdefinierte Spaltenuntermenüeinträge mit `disabled: true` sind weiterhin aktiv.
- Es ist nicht möglich, eine benutzerdefinierte Upload-Funktion für das **Uploader**-Steuerelement festzulegen.

## Version 1.5.8

Veröffentlicht am 28. November 2023

### Fehlerbehebungen

- Fehlende **currentUser**-TS-Definition in der **IKanbanConfig**-Typdefinition.

## Version 1.5.7

Veröffentlicht am 14. November 2023

### Updates

- Die Methode [`setLocale()`](api/methods/toolbar_setlocale_method.md) der Toolbar wurde um den Parameter ***api*** erweitert.

### Fehlerbehebungen

- Die Konfiguration `disabled: true` funktioniert nicht für Kartenmenüeinträge.
- Unerwünschte Konsolenwarnungen in Kanban-Beispielen.
- Es ist nicht möglich, die Priorität einer Aufgabe zurückzusetzen.
- Dropdown-Steuerelemente im Kanban-Editor schließen sich nicht beim Klick außerhalb.

## Version 1.5.6

Veröffentlicht am 13. September 2023

### Updates

- Möglichkeit, die Komponente als ES-Modul zu importieren.

### Fehlerbehebungen

- Regression in npm-Paketen.

## Version 1.5.4

Veröffentlicht am 9. August 2023

### Fehlerbehebungen

- Zuvor hochgeladene Dateien bleiben im Formular, nachdem zu einer anderen Karte gewechselt wurde.
- Datei-Upload via Drag-and-Drop funktioniert nicht.
- Unerwartetes Löschen von Karten, während der Benutzer die Entf-Taste drückt und das Formular geöffnet ist.
- Das Dropdown "Suche in" wird leer, nachdem eine Karte über die Suche ausgewählt wurde.
- Hinzugefügte Links werden im Backend nicht gelöscht, wenn die Hinzufügen-Link-Operation rückgängig gemacht wird.

## Version 1.5.1

### Fehlerbehebungen

- Korrekte Generierung von TypeScript-Definitionen.

## Version 1.5

Veröffentlicht am 15. Juni 2023

[Release-Bewertung im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### Neue Funktionalität

- Möglichkeit, Verknüpfungen zwischen Karten zur Laufzeit zu setzen und zu löschen.
- Möglichkeit, Verknüpfungen zwischen Karten serverseitig zu verwalten.
- Möglichkeit, Spaltenköpfe zu fixieren (siehe [**Beispiel**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban)).

### Neue API

- #### Methoden

    - [`addLink()`](api/methods/js_kanban_addlink_method.md)
    - [`deleteLink()`](api/methods/js_kanban_deletelink_method.md)
    - [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md)

- #### Routen

    - [`DELETE /links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)
    - [`GET /links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)
    - [`POST /links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)

### Updates

- #### Eigenschaften

    - Die Eigenschaft [`columnShape`](api/config/js_kanban_columnshape_config.md) wurde um den Parameter ***fixedHeaders*** erweitert.

### Fehlerbehebungen

- Verknüpfungen können zur Laufzeit nicht geparst, exportiert oder serialisiert werden.
- Erstellen des Kommentarbereichs schlägt fehl, wenn der Benutzerbereich nicht aktiviert wurde.
- Verknüpfungen im Store verändern die Originaldaten und werden nicht korrekt gespeichert.
- Lazy Rendering zerstört die Styles des Hover-Bereichs eingeklappter Spalten.
- Karten, die in neu erstellte Spalten verschoben werden, verschwinden.
- Das Textfeld für einen neuen Kommentar wird beim Bearbeiten nicht geschlossen.

## Version 1.4.2

Veröffentlicht am 13. April 2023

### Fehlerbehebungen

- Backend-ID wird nach Hinzufügeaktionen nicht zu lokalen Karten-/Spalten-/Zeilendaten gespeichert.
- Fehlende TS-Definitionen ergänzt.
- Dark Skin verliert seine Styles.

## Version 1.4.1

Veröffentlicht am 29. März 2023

### Fehlerbehebungen

- Falsches Verhalten beim Beibehalten der Sortierung.
- Falsches Verhalten, wenn ein Kontextmenü über die Eigenschaften **cardShape**, **columnShape** oder **rowShape** deaktiviert wird.
- Falsches Verhalten, wenn Sie im Editor Links hinzufügen, aber keine Links in den Daten bereitstellen.
- Das Menü auf der Spalte kann wie auf der Karte sein oder nicht angezeigt werden.
- Zwei Aufgaben werden anstelle von einer gezogen.

## Version 1.4

Veröffentlicht am 21. März 2023

[Release-Bewertung im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### Neue Funktionalität

- Möglichkeit, Kommentare hinzuzufügen (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Möglichkeit, Benutzer zu begrenzen (siehe [**Beispiel**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- Möglichkeit, Verknüpfungen zwischen Karten zu setzen (siehe [**Beispiel**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Möglichkeit, für eine Karte abzustimmen (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### Neue API

- #### Events

    - [`add-comment`](api/events/js_kanban_addcomment_event.md)
    - [`add-link`](api/events/js_kanban_addlink_event.md)
    - [`delete-comment`](api/events/js_kanban_deletecomment_event.md)
    - [`delete-link`](api/events/js_kanban_deletelink_event.md)
    - [`drag-card`](api/events/js_kanban_dragcard_event.md)
    - [`end-drag-card`](api/events/js_kanban_enddragcard_event.md)
    - [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)
    - [`update-comment`](api/events/js_kanban_updatecomment_event.md)

- #### Methoden

    - [`addComment()`](api/methods/js_kanban_addcomment_method.md)
    - [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md)
    - [`updateComment()`](api/methods/js_kanban_updatecomment_method.md)

- #### Eigenschaften

    - [`currentUser`](api/config/js_kanban_currentuser_config.md)
    - [`links`](api/config/js_kanban_links_config.md)

### Updates

- #### Methoden

    - Die Methode [`api.getState()`](api/internal/js_kanban_getstate_method.md) wurde aktualisiert.

- #### Eigenschaften

    - Die Eigenschaft [`cards`](api/config/js_kanban_cards_config.md) wurde um die Parameter ***css***, ***comments*** und ***votes*** erweitert.
    - Die Eigenschaft [`cardShape`](api/config/js_kanban_cardshape_config.md) wurde um die Parameter ***comments***, ***votes*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)) und ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)) erweitert.
    - Die Eigenschaft [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) kann jetzt das Kontextmenü anzeigen.
    - Die Eigenschaft [`columns`](api/config/js_kanban_columns_config.md) wurde um die Parameter ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) und ***overlay*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)) erweitert.
    - Die Eigenschaft [`columnShape`](api/config/js_kanban_columnshape_config.md) wurde um den Parameter ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) erweitert.
    - Die Eigenschaft [`editorShape`](api/config/js_kanban_editorshape_config.md) wurde um die Typen [***comments***](guides/configuration.md#comments-type) und [***links***](guides/configuration.md#links-type) sowie den Parameter ***format*** für *date/dateRange*-Typen erweitert.
    - Die Eigenschaft [`rows`](api/config/js_kanban_rows_config.md) wurde um den Parameter ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)) erweitert.
    - Die Eigenschaft [`rowShape`](api/config/js_kanban_rowshape_config.md) wurde um den Parameter ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban)) erweitert.

### Veraltete API

- #### Eigenschaften

    - Label in Menüeintragsobjekten in `cardShape.menu.items`, `columnShape.menu.items` und `rowShape.menu.items`.

### Fehlerbehebungen

- Die Position des Menüs ist falsch, wenn Kanban in einem Container mit Rändern platziert ist.
- Falsche Position eingeklappter Spalten bei benutzerdefinierter Spaltenbreite.
- Das Ablegen einer Karte in eine eingeklappte Spalte führt dazu, dass die Karte verschwindet.
- Falsche Position eingeklappter Spalten bei benutzerdefinierter Spaltenbreite.
- Swimlanes: Das Kontextmenü der Karte wird vom Bearbeitungsbereich überlagert und die Karte kann daher nicht gelöscht werden.

## Version 1.3

Veröffentlicht am 29. September 2022

[Release-Bewertung im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### Neue Funktionalität

- Duplizieren von Karten über die API, ein Kontextmenü (3-Punkte-Symbol) oder die Tastenkombinationen `Ctrl (Command)` + `D` (ermöglicht das Duplizieren mehrerer Karten).
- Exportieren von Kanban-Daten in eine JSON-Datei.
- Verwalten der Kanban-Historie:
    - Über *Undo*- und *Redo*-Steuerelemente in der Toolbar.
    - Über Tastenkombinationen:
        - `Ctrl (Command)`+`Z` - Aktion rückgängig machen
        - `Ctrl (Command)`+`Y` oder `Ctrl (Command)`+`Shift`+`Z` - Aktion wiederholen
    - Über die API

### Neue API

- **Events:**
    [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md)

- **Methoden:**
    [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md),
    [`export.json()`](api/internal/js_kanban_json_method.md),
    [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md),
    [`redo()`](api/methods/js_kanban_redo_method.md) und
    [`undo()`](api/methods/js_kanban_undo_method.md)

- **Eigenschaften:**
    [`editor`](api/config/js_kanban_editor_config.md) und
    [`history`](api/config/js_kanban_history_config.md)

- **Allgemeine Einstellungen:**
    [`$meta`](api/common/js_kanban_meta_parameter.md)

### Veraltete API

- **Eigenschaften:**
    [`editorAutoSave`](api/config/js_kanban_editorautosave_config.md)

### Updates

- #### Events

    - Das Event [`update-card`](api/events/js_kanban_updatecard_event.md) von Kanban wurde aktualisiert.
    - Das Event [`update-column`](api/events/js_kanban_updatecolumn_event.md) von Kanban wurde aktualisiert.
    - Das Event [`update-row`](api/events/js_kanban_updaterow_event.md) von Kanban wurde aktualisiert.

- #### Methoden

    - Die Methode [`updateCard()`](api/methods/js_kanban_updatecard_method.md) von Kanban wurde aktualisiert.
    - Die Methode [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) von Kanban wurde aktualisiert.
    - Die Methode [`updateRow()`](api/methods/js_kanban_updaterow_method.md) von Kanban wurde aktualisiert.

- #### Eigenschaften

    - Die Eigenschaft [`items`](api/config/toolbar_items_config.md) der Toolbar wurde um die Parameter ***"undo"*** und ***"redo"*** (Steuerelemente) erweitert.
    - Die Eigenschaft [`editorShape`](api/config/js_kanban_editorshape_config.md) wurde um den Typ ***dateRange*** erweitert.

## Version 1.2.2

Veröffentlicht am 30. August 2022

### Fehlerbehebungen

- Doppelte Anzeige einiger Symbole in Menü und Toolbar.

## Version 1.2.1

Veröffentlicht am 28. Juli 2022

### Fehlerbehebungen​

- Die Eigenschaft `cardHeight` funktioniert nicht mit aktiviertem `scrollType:"column"`.
- Uploader zeigt hochgeladene Dateien im Karteneditor nicht an.
- Lokalisierung funktioniert nicht für "combo"- und "progress"-Felder im Karteneditor.

## Version 1.2

Veröffentlicht am 29. Juni 2022

[Release-Bewertung im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### Neue Funktionalität 

- Hinzufügen neuer Karten über das Spaltenmenü (siehe [**Beispiel**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Lazy Rendering (siehe [**Beispiel**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Scrollen für einzelne Spalten (siehe [**Beispiel**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Kanban zu neuen Karten, Spalten und Zeilen scrollen (API und UI) (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Karten sortieren (API und UI) (siehe [**Beispiel**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### Neue API

- **Events:**
    [`scroll`](api/events/js_kanban_scroll_event.md),
    [`set-edit`](api/events/js_kanban_setedit_event.md) und
    [`set-sort`](api/events/js_kanban_setsort_event.md)

- **Methoden:**
    [`scroll()`](api/methods/js_kanban_scroll_method.md),
    [`setEdit()`](api/methods/js_kanban_setedit_method.md) und
    [`setSort()`](api/methods/js_kanban_setsort_method.md)

- **Eigenschaften:**
    [`cardHeight`](api/config/js_kanban_cardheight_config.md),
    [`columnShape`](api/config/js_kanban_columnshape_config.md),
    [`rowShape`](api/config/js_kanban_rowshape_config.md), 
    [`renderType`](api/config/js_kanban_rendertype_config.md) und
    [`scrollType`](api/config/js_kanban_scrolltype_config.md)

### Updates

- #### Methoden

    - Die Methode [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) wurde aktualisiert.
    - Die Methode [`api.getState()`](api/internal/js_kanban_getstate_method.md) wurde aktualisiert.
    - Die Methode [`api.getStores()`](api/internal/js_kanban_getstores_method.md) wurde aktualisiert.
    - Die Methode [`setLocale()`](api/methods/js_kanban_setlocale_method.md) von Kanban wurde aktualisiert.
    - Die Methode [`setLocale()`](api/methods/toolbar_setlocale_method.md) von Toolbar wurde aktualisiert.

- #### Eigenschaften

    - Die Eigenschaft [`items`](api/config/toolbar_items_config.md) der Toolbar wurde aktualisiert.
    - Die Parameter ***start_date***, ***end_date***, ***menu*** und ***users*** der Eigenschaft [`cardShape`](api/config/js_kanban_cardshape_config.md) wurden aktualisiert.
    - Der Typ ***multiselect*** der Eigenschaft [`editorShape`](api/config/js_kanban_editorshape_config.md) wurde aktualisiert.

#### Allgemein

- Präfixe der CSS-Klassen (*siehe den Abschnitt [Stilisierung](guides/stylization.md)*)
- Locale-Struktur (*siehe den Abschnitt [Lokalisierung](guides/localization.md)*)

### Fehlerbehebungen

- Das Binden von Karten an Swimlanes über die Konfiguration `rowKey` funktioniert nicht korrekt.
- Klick auf Kartenmenü öffnet den Editor.
- Das Ziehen mehrerer Karten funktioniert nicht korrekt.
- Das Bearbeiten von Karten bei `select: false` (**readonly** config.md) funktioniert nicht korrekt.
- Das Auswählen neu hinzugefügter Karten über die Methode `addCard()` funktioniert nicht korrekt.
- Die Parameter `label: false` und `menu: false` der Eigenschaft `cardShape` funktionieren nicht korrekt.

## Version 1.1.1

Veröffentlicht am 28. Februar 2022

[Release-Bewertung im Blog](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Fehlerbehebungen

- Benutzerdefiniertes Editor-Feld funktioniert nicht ohne Definition im cardShape-Config.
- Auswahl der gewünschten Karte aus dem Dropdown-Menü der Suchleiste.

## Version 1.1

Veröffentlicht am 15. Februar 2022

[Release-Bewertung im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### Neue Funktionalität

- Möglichkeit, Spalten mit einem Pfeil links neben dem Spaltenlabel ein- und auszuklappen.
- Möglichkeit, die Anzahl der Karten für Spalten und Swimlanes zu begrenzen.
- Möglichkeit, Spalten über das Kontextmenü (3-Punkte-Symbol) zu verschieben.
- Möglichkeit, Zeilen über das Kontextmenü (3-Punkte-Symbol) zu verschieben.
- Möglichkeit, mehrere Karten derselben Spalte mit **Shift** + **Klick** auszuwählen.
- Möglichkeit, [TypeScript-Definitionen](guides/typescript_support.md) von Kanban zu verwenden.

### Neue API

- Neue **Events** zum Verschieben von Spalten und Zeilen: 
    [`move-column`](api/events/js_kanban_movecolumn_event.md)
    und
    [`move-row`](api/events/js_kanban_moverow_event.md)
- Neue **Methoden** zum Verschieben von Spalten und Zeilen: 
    [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) 
    und
    [`moveRow()`](api/methods/js_kanban_moverow_method.md)

### Updates

#### Eigenschaften

- Die Eigenschaft [`cards`](api/config/js_kanban_cards_config.md) ist jetzt optional.

- Die Eigenschaft [`columns`](api/config/js_kanban_columns_config.md) ist jetzt optional und wurde um folgende Parameter erweitert:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- Der Parameter ***color*** der Eigenschaft [`cardShape`](api/config/js_kanban_cardshape_config.md) wurde aktualisiert.

#### Methoden

- Die Methode [`addColumn`](api/methods/js_kanban_addcolumn_method.md) wurde aktualisiert.
- Die Methode [`addRow`](api/methods/js_kanban_addrow_method.md) wurde aktualisiert.
- Die Methode [`updateCard`](api/methods/js_kanban_updatecard_method.md) wurde aktualisiert.
- Die Methode [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) wurde aktualisiert.
- Die Methode [`updateRow`](api/methods/js_kanban_updaterow_method.md) wurde aktualisiert.
- Die Methode [`parse`](api/methods/js_kanban_parse_method.md) wurde aktualisiert.

#### Events

- Das Event [`add-column`](api/events/js_kanban_addcolumn_event.md) wurde aktualisiert.
- Das Event [`add-row`](api/events/js_kanban_addrow_event.md) wurde aktualisiert.
- Das Event [`update-card`](api/events/js_kanban_updatecard_event.md) wurde aktualisiert.
- Das Event [`update-column`](api/events/js_kanban_updatecolumn_event.md) wurde aktualisiert.
- Das Event [`update-row`](api/events/js_kanban_updaterow_event.md) wurde aktualisiert.

## Version 1.0

Veröffentlicht am 23. November 2021

[Release-Bewertung im Blog](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Grundfunktionalität

- Möglichkeit, mit **Karten** wie folgt zu arbeiten:
    - Neue Karten hinzufügen
    - Karten auswählen (Mehrfachauswahl)
    - Karten löschen
    - Nach Karten suchen
    - Karten durch Ziehen in die gewünschte Spalte (und Zeile) umsortieren
    - Kartendaten über den Editor verwalten:
        - Label
        - Beschreibung
        - Fortschritt
        - Startdatum
        - Enddatum
        - Farbe
        - Priorität
        - Anhang (*Dateien* und *Bilder*)
        - *Benutzerdefinierte Felder*

- Möglichkeit, mit **Spalten** und **Zeilen** wie folgt zu arbeiten:
    - Neue Spalten und Zeilen hinzufügen
    - Spalten und Zeilen löschen
    - Spalten und Zeilen umbenennen
    - Zeilen ein- und ausklappen

- [Lokalisierung](guides/localization.md)
- [Integration mit Backend](guides/working_with_server.md) (Go und Node)
- Kompatibilität mit verschiedenen Browsern
- Touch-Unterstützung