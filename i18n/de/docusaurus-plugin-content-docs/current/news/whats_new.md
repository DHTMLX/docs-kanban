---
sidebar_label: Was ist neu
title: Was ist neu
description: Informieren Sie sich über die neuesten Funktionen und Updates von DHTMLX Kanban, überprüfen Sie die Release-Historie, stöbern Sie in Entwickleranleitungen und API-Details, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Was ist neu

Wenn Sie Kanban von einer älteren Version aktualisieren, empfiehlt es sich, [Migration zu neueren Versionen](/news/migration.md) für weitere Informationen zu prüfen.

## Version 1.6.3

Veröffentlicht am 8. April 2025

### Fehlerbehebungen

- Das Spaltenlimit wird manchmal fälschlicherweise auf die gesamte Spalte angewendet
- Fehler erscheinen nach dem Verschieben einer Karte und dem Schließen des Modaleditor
- Die Bestätigung zum Löschen wird hinter dem Modaleditor angezeigt
- Das "Mehr"-Symbol der Toolbar erscheint und verschwindet beim langsamen Ändern der Fenstergröße
- Das `delete-card` Ereignis schließt immer den Editor
- Der Editor kann nicht geöffnet werden, wenn die Priorität auf eine ID gesetzt wird, die nicht in den Optionen vorhanden ist

## Version 1.6.2

Veröffentlicht am 14. Februar 2025

### Fehlerbehebungen

- Falsches Ablaufdatum in der Testversion
- Drag and Drop gibt eine Warnung auf Touch-Geräten aus
- Das Setzen von `add: false` in der readonly-Konfiguration entfernt die **Hinzufügen**-Option nicht aus dem Spaltenmenü
- Der Editor lädt nicht für Karten mit numerischen IDs als Zeichenketten
- Veraltete Beispiel-Links im Paket
- Drag and Drop Probleme, wenn Spaltenscrolling und Lazy Rendering zusammen verwendet werden
- Die Methode `setConfig()` aktualisiert den festen Zustand der Spaltenüberschriften nicht

## Version 1.6.1

Veröffentlicht am 29. November 2024

### Fehlerbehebungen

- Das "Mehr"-Symbol der Toolbar ist auf schmalen Bildschirmen nicht korrekt ausgerichtet
- `RestDataProvider` verwendet nicht die von `setHeaders()` gesetzten Header
- `RestDataProvider.getIDResolver` ist kein Funktionsfehler

## Version 1.6

Veröffentlicht am 13. November 2024

[Release Review im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### Neue Funktionen

- Es kann festgelegt werden, wie viele zugewiesene Nutzer auf einer Karte angezeigt werden, mit [`cardShape.users.maxCount`](/api/config/js_kanban_cardshape_config) (siehe [**Beispiel**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- Der Inhalt der Spaltenüberschriften kann mit [`columnShape`](/api/config/js_kanban_columnshape_config) angepasst werden (siehe [**Beispiel**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- Die Darstellung der Suchergebnisse in der Toolbar-Suche kann über [`items.searchResult`](/api/config/toolbar_items_config) angepasst werden (siehe [**Beispiel**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- Der Editor kann als Modalfenster mit [`editor.placement`](/api/config/js_kanban_editor_config) geöffnet werden (siehe [**Beispiel**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- Karten unterstützen nun das Abstimmen per klickbarem Symbol über [`cardShape.votes.clickable`](/api/config/js_kanban_cardshape_config) (siehe [**Beispiel**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))
- Ein Theme kann mit [`setTheme()`](/api/methods/js_kanban_settheme_method) angewendet werden

### Aktualisierungen

- #### Eigenschaften

    - [`cardShape`](/api/config/js_kanban_cardshape_config) enthält jetzt ***users.maxCount*** und ***votes.clickable***
    - [`columnShape`](/api/config/js_kanban_columnshape_config) hat jetzt ***headerTemplate*** und ***collapsedTemplate***
    - [`editor`](/api/config/js_kanban_editor_config) enthält jetzt die ***placement*** Option
    - Die Eigenschaft [`items`](/api/config/toolbar_items_config) der Toolbar für **search** enthält jetzt ***searchResult***

- #### Ereignisse

    - [`set-edit`](/api/events/js_kanban_setedit_event) bietet jetzt einen ***eventSource***-Parameter (siehe [**Beispiel**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban))

- #### Methoden

    - [`setConfig()`](/api/methods/js_kanban_setconfig_method) funktioniert nun anders:
        - Es ändert den Verlauf nicht (History kann auf diese Weise nicht geändert werden)
        - Themes werden mit dieser Methode nicht geändert (verwenden Sie stattdessen [`setTheme()`](/api/methods/js_kanban_settheme_method))
        - Der Kanban-Datenspeicher wird nicht zerstört, Sie müssen Event-Listener oder die Toolbar nicht neu anhängen

    - [`setLocale()`](/api/methods/js_kanban_setlocale_method) zerstört ebenfalls nicht den Datenspeicher, so bleiben Event-Listener und Toolbar verbunden
    - Der `api` Parameter in der Toolbar-Methode [`setLocale()`](/api/methods/toolbar_setlocale_method) ist jetzt veraltet

### Fehlerbehebungen

- Das Entfernen eines Kommentars während des Bearbeitens kann dazu führen, dass der Kommentarbereich verschwindet
- Einige Lokalisierungsstrings fehlten
- Drag and Drop funktionierte nicht, wenn sowohl [`scrollType: "column"`](/api/config/js_kanban_scrolltype_config) als auch [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config) gesetzt waren
- Der Editor konnte nicht über das Schließen-Symbol geschlossen werden
- Im Willow-Skin entsprach die rechte Seite des Editors der Hintergrundfarbe der Fortschrittsanzeige

## Version 1.5.13

Veröffentlicht am 12. September 2024

### Fehlerbehebungen

- Der Button "Als Titelbild festlegen" erscheint nicht, wenn die Dateiendung großgeschrieben ist
- Das Klicken auf eine deaktivierte Multiselect führt zu einem Fehler
- Nach der Verwendung von [`addCard()`](/api/methods/js_kanban_addcard_method) kann das Scrollen zu Fehlern führen, wenn Spaltenscrolling und Lazy Rendering aktiviert sind
- Es werden keine Kommentare als leere Zeichenkette statt als leeres Array gespeichert
- Editor-Stile können durch gleichnamige globale Klassen überschrieben werden. [Siehe Migrationsabschnitt](/news/migration.md/#1512---1513)

## Version 1.5.12

Veröffentlicht am 2. Mai 2024

### Fehlerbehebungen

- Intercept Regression: Das Zurückgeben von `false` blockiert innere Ereignisse nicht
- Deaktivierte Dateien erlauben trotzdem Datei-Uploads

## Version 1.5.11

Veröffentlicht am 25. März 2024

### Fehlerbehebungen

- Kanban CSS-Variablen für das *Dark willow* Skin fehlen in Toolbar und Portalen
- Änderungen an Kommentaren und Abstimmungen werden nicht in Formulardaten gespeichert, wenn Autosave deaktiviert ist
- Die **onClick**-Funktion des benutzerdefinierten Spaltenuntermenüs erhält ein `null`-Argument
- Datepicker können im Editor nicht auf bearbeitbar gesetzt werden
- Konsolenwarnungen in Kanban-Beispielen

## Version 1.5.10

Veröffentlicht am 29. Februar 2024

### Fehlerbehebungen

- Fehlerhafter Build auf npm
- Der Parameter `select` wurde zum [`duplicate-card`](/api/events/js_kanban_duplicatecard_event) Ereignis und zur [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method) Methode hinzugefügt
- Das Kommentarfeld im Editor hat falsche Styles
- Das Ändern des Themes verursachte eine Regression

## Version 1.5.9

Veröffentlicht am 20. Februar 2024

### Fehlerbehebungen

- Kanban-Stile beeinflussen andere Widgets
- Benutzerdefinierte Spaltenuntermenüeinträge mit `disabled: true` sind weiterhin anklickbar
- Für das **Uploader**-Control kann keine benutzerdefinierte Upload-Funktion gesetzt werden

## Version 1.5.8

Veröffentlicht am 28. November 2023

### Fehlerbehebungen

- Die **currentUser** TS-Definition fehlte in **IKanbanConfig**

## Version 1.5.7

Veröffentlicht am 14. November 2023

### Aktualisierungen

- Die Toolbar-Methode [`setLocale()`](/api/methods/toolbar_setlocale_method) hat jetzt einen ***api*** Parameter

### Fehlerbehebungen

- `disabled: true` funktioniert nicht für Karteneinträge im Menü
- Unerwünschte Konsolenwarnungen in Kanban-Beispielen
- Die Aufgabenpriorität kann nicht zurückgesetzt werden
- Drop-down-Steuerelemente im Editor schließen nicht beim Klick außerhalb

## Version 1.5.6

Veröffentlicht am 13. September 2023

### Aktualisierungen

- Kanban kann jetzt als ES-Modul importiert werden

### Fehlerbehebungen

- Regression in npm-Paketen

## Version 1.5.4

Veröffentlicht am 9. August 2023

### Fehlerbehebungen

- Hochgeladene Dateien bleiben im Formular nach dem Wechsel zu einer anderen Karte
- Datei-Upload per Drag-and-Drop funktioniert nicht
- Karten können durch Drücken von Delete gelöscht werden, während das Formular offen ist
- Das Dropdown "Suche in" wird nach Kartenauswahl in der Suche leer
- Hinzugefügte Links werden beim Rückgängigmachen der Link-Hinzufügung nicht im Backend gelöscht

## Version 1.5.1

### Fehlerbehebungen

- Es werden jetzt die korrekten TypeScript-Definitionen generiert

## Version 1.5

Veröffentlicht am 15. Juni 2023

[Release Review im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### Neue Funktionen

- Es ist jetzt möglich, Links zwischen Karten zur Laufzeit zu erstellen und zu löschen
- Links zwischen Karten können serverseitig verwaltet werden
- Spaltenüberschriften können fixiert werden (siehe [**Beispiel**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))

### Neue API

- #### Methoden

    - [`addLink()`](/api/methods/js_kanban_addlink_method)
    - [`deleteLink()`](/api/methods/js_kanban_deletelink_method)
    - [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method)

- #### Routen

    - [`DELETE /links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route)
    - [`GET /links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route)
    - [`POST /links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route)

### Aktualisierungen

- #### Eigenschaften

    - [`columnShape`](/api/config/js_kanban_columnshape_config) enthält jetzt den Parameter ***fixedHeaders***.

### Fehlerbehebungen

- Links konnten zur Laufzeit nicht geparst, exportiert oder serialisiert werden
- Das Erstellen eines Kommentarbereichs schlug fehl, wenn der Benutzerbereich nicht aktiv war
- Links im Store veränderten die Originaldaten und wurden nicht korrekt gespeichert
- Lazy Rendering zerstörte die Hover-Styles für eingeklappte Spalten
- Beim Verschieben von Karten in eine neue Spalte verschwanden diese
- Das Textfeld für neue Kommentare schloss sich nicht, wenn das Bearbeiten begann

## Version 1.4.2

Veröffentlicht am 13. April 2023

### Fehlerbehebungen

- Backend-IDs wurden nach dem Hinzufügen nicht in den lokalen Karten-/Spalten-/Zeilendaten gespeichert
- Einige TS-Definitionen fehlten
- Dunkle Skin-Styles wirkten sich auf andere Elemente aus

## Version 1.4.1

Veröffentlicht am 29. März 2023

### Fehlerbehebungen

- Das Beibehalten der Sortierung funktionierte nicht richtig
- Das Deaktivieren des Kontextmenüs in **cardShape**, **columnShape** oder **rowShape** funktionierte nicht wie erwartet
- Das Hinzufügen von Links im Editor ohne Daten für Links funktionierte nicht richtig
- Das Spaltenmenü konnte mit dem der Karte übereinstimmen oder gar nicht angezeigt werden
- Es konnten zwei Aufgaben statt einer gezogen werden

## Version 1.4

Veröffentlicht am 21. März 2023

[Release Review im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### Neue Funktionen

- Kommentare können jetzt hinzugefügt werden (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Die **material**, **willow** und **willow-dark** Themes sind verfügbar (siehe [**Beispiel**](https://snippet.dhtmlx.com/jnw54xif?tag=kanban))
- Es ist möglich, die Anzahl der Nutzer zu begrenzen (siehe [**Beispiel**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- Links zwischen Karten setzen (siehe [**Beispiel**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Karten können bewertet werden (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### Neue API

- #### Ereignisse

    - [`add-comment`](/api/events/js_kanban_addcomment_event)
    - [`add-link`](/api/events/js_kanban_addlink_event)
    - [`delete-comment`](/api/events/js_kanban_deletecomment_event)
    - [`delete-link`](/api/events/js_kanban_deletelink_event)
    - [`drag-card`](/api/events/js_kanban_dragcard_event)
    - [`end-drag-card`](/api/events/js_kanban_enddragcard_event)
    - [`start-drag-card`](/api/events/js_kanban_startdragcard_event)
    - [`update-comment`](/api/events/js_kanban_updatecomment_event)

- #### Methoden

    - [`addComment()`](/api/methods/js_kanban_addcomment_method)
    - [`deleteComment()`](/api/methods/js_kanban_deletecomment_method)
    - [`updateComment()`](/api/methods/js_kanban_updatecomment_method)

- #### Eigenschaften

    - [`currentUser`](/api/config/js_kanban_currentuser_config)
    - [`links`](/api/config/js_kanban_links_config)
    - [`theme`](/api/config/js_kanban_theme_config) (Kanban)
    - [`theme`](/api/config/toolbar_items_config) (Toolbar)

### Aktualisierungen

- #### Methoden

    - [`api.getState()`](/api/internal/js_kanban_getstate_method) wurde aktualisiert

- #### Eigenschaften

    - [`cards`](/api/config/js_kanban_cards_config) unterstützt jetzt ***css***, ***comments*** und ***votes***
    - [`cardShape`](/api/config/js_kanban_cardshape_config) enthält jetzt ***comments***, ***votes*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)) und ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban))
    - [`cardTemplate`](/api/config/js_kanban_cardtemplate_config) kann jetzt ein Kontextmenü anzeigen
    - [`columns`](/api/config/js_kanban_columns_config) enthält jetzt ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) und ***overlay*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban))
    - [`columnShape`](/api/config/js_kanban_columnshape_config) hat jetzt ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - [`editorShape`](/api/config/js_kanban_editorshape_config) ergänzt [***comments***](/guides/configuration/#comments-typ), [***links***](/guides/configuration/#links-typ) und ***format*** für date/dateRange-Typen
    - [`rows`](/api/config/js_kanban_rows_config) hat jetzt ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - [`rowShape`](/api/config/js_kanban_rowshape_config) enthält jetzt ***css*** (siehe [**Beispiel**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Veraltete API

- #### Eigenschaften

    - Das Label in Menüobjekten unter `cardShape.menu.items`, `columnShape.menu.items` und `rowShape.menu.items` ist veraltet

### Fehlerbehebungen

- Die Position des Menüs ist falsch, wenn Kanban in einem Container mit Rändern ist
- Eingeklappte Spalten werden bei benutzerdefinierter Breite nicht richtig positioniert
- Das Ablegen einer Karte in einer eingeklappten Spalte lässt diese verschwinden
- Eingeklappte Spalten werden mit benutzerdefinierten Breiten nicht korrekt positioniert
- Im Swimlane-Modus kann das Kontextmenü der Karte vom Bearbeiten-Panel verdeckt werden, was das Löschen erschwert

## Version 1.3

Veröffentlicht am 29. September 2022

[Release Review im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### Neue Funktionen

- Karten können per API, über das 3-Punkte-Kontextmenü oder mit `Ctrl (Command)` + `D` dupliziert werden (funktioniert für mehrere Karten)
- Kanban-Daten können als JSON-Datei exportiert werden
- Kanban-Historie kann verwaltet werden:
    - Undo- und Redo-Steuerelemente in der Toolbar
    - Tastenkombinationen:
        - `Ctrl (Command)`+`Z` für Rückgängig
        - `Ctrl (Command)`+`Y` oder `Ctrl (Command)`+`Shift`+`Z` für Wiederherstellen
    - Über die API

### Neue API

- **Ereignisse:**
    [`duplicate-card`](/api/events/js_kanban_duplicatecard_event)

- **Methoden:**
    [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method),
    [`export.json()`](/api/internal/js_kanban_json_method),
    [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method),
    [`redo()`](/api/methods/js_kanban_redo_method),
    [`undo()`](/api/methods/js_kanban_undo_method)

- **Eigenschaften:**
    [`editor`](/api/config/js_kanban_editor_config),
    [`history`](/api/config/js_kanban_history_config)

- **Gemeinsame Einstellungen:**
    [`$meta`](/api/common/js_kanban_meta_parameter)

### Veraltete API

- **Eigenschaften:**
    [`editorAutoSave`](/api/config/js_kanban_editorautosave_config)

### Aktualisierungen

- #### Ereignisse

    - Das Ereignis [`update-card`](/api/events/js_kanban_updatecard_event) wurde aktualisiert
    - Das Ereignis [`update-column`](/api/events/js_kanban_updatecolumn_event) wurde aktualisiert
    - Das Ereignis [`update-row`](/api/events/js_kanban_updaterow_event) wurde aktualisiert

- #### Methoden

    - [`updateCard()`](/api/methods/js_kanban_updatecard_method) wurde aktualisiert
    - [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method) wurde aktualisiert
    - [`updateRow()`](/api/methods/js_kanban_updaterow_method) wurde aktualisiert

- #### Eigenschaften

    - Die [`items`](/api/config/toolbar_items_config) der Toolbar enthalten jetzt ***"undo"*** und ***"redo"*** Steuerelemente
    - [`editorShape`](/api/config/js_kanban_editorshape_config) ergänzt den ***dateRange*** Typ

## Version 1.2.2

Veröffentlicht am 30. August 2022

### Fehlerbehebungen

- Doppelte Symbole erschienen in Menüs und Toolbar

## Version 1.2.1

Veröffentlicht am 28. Juli 2022

### Fehlerbehebungen

- `cardHeight` funktionierte nicht mit aktiviertem `scrollType:"column"`
- Hochgeladene Dateien wurden im Karteneditor nicht angezeigt
- Lokalisierung funktionierte nicht für "combo"- und "progress"-Felder im Editor

## Version 1.2

Veröffentlicht am 29. Juni 2022

[Release Review im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### Neue Funktionen

- Es ist jetzt möglich, neue Karten über das Spaltenmenü hinzuzufügen (siehe [**Beispiel**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Lazy Rendering ist verfügbar (siehe [**Beispiel**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Jede Spalte kann ihr eigenes Scrollen haben (siehe [**Beispiel**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Kanban scrollt zu neuen Karten, Spalten und Zeilen, wenn diese erstellt werden (API und UI) (siehe [**Beispiel**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Karten können sortiert werden (API und UI) (siehe [**Beispiel**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### Neue API

- **Ereignisse:**
    [`scroll`](/api/events/js_kanban_scroll_event),
    [`set-edit`](/api/events/js_kanban_setedit_event),
    [`set-sort`](/api/events/js_kanban_setsort_event)

- **Methoden:**
    [`scroll()`](/api/methods/js_kanban_scroll_method),
    [`setEdit()`](/api/methods/js_kanban_setedit_method),
    [`setSort()`](/api/methods/js_kanban_setsort_method)

- **Eigenschaften:**
    [`cardHeight`](/api/config/js_kanban_cardheight_config),
    [`columnShape`](/api/config/js_kanban_columnshape_config),
    [`rowShape`](/api/config/js_kanban_rowshape_config), 
    [`renderType`](/api/config/js_kanban_rendertype_config),
    [`scrollType`](/api/config/js_kanban_scrolltype_config)

### Aktualisierungen

- #### Methoden

    - [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) wurde aktualisiert
    - [`api.getState()`](/api/internal/js_kanban_getstate_method) wurde aktualisiert
    - [`api.getStores()`](/api/internal/js_kanban_getstores_method) wurde aktualisiert
    - Kanbans [`setLocale()`](/api/methods/js_kanban_setlocale_method) wurde aktualisiert
    - Toolbars [`setLocale()`](/api/methods/toolbar_setlocale_method) wurde aktualisiert

- #### Eigenschaften

    - Die [`items`](/api/config/toolbar_items_config) der Toolbar wurden aktualisiert
    - [`cardShape`](/api/config/js_kanban_cardshape_config) aktualisiert ***start_date***, ***end_date***, ***menu*** und ***users***
    - [`editorShape`](/api/config/js_kanban_editorshape_config) aktualisiert den ***multiselect*** Typ

#### Allgemein

- CSS-Klassenpräfixe wurden geändert (*siehe [Stilgestaltung](/guides/stylization)*)
- Die Struktur der Lokalisierung wurde aktualisiert (*siehe [Lokalisierung](/guides/localization)*)

### Fehlerbehebungen

- Das Binden von Karten an Swimlanes mit der `rowKey`-Konfiguration funktionierte nicht richtig
- Das Klicken auf ein Kartenmenü öffnete den Editor
- Das Ziehen mehrerer Karten verhielt sich nicht wie erwartet
- Das Bearbeiten von Karten funktionierte nicht, wenn `select: false` (**readonly** Konfiguration)
- Neue Karten, die über `addCard()` hinzugefügt wurden, konnten nicht richtig ausgewählt werden
- Die Einstellungen `label: false` und `menu: false` in `cardShape` funktionierten nicht wie erwartet

## Version 1.1.1

Veröffentlicht am 28. Februar 2022

[Release Review im Blog](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Fehlerbehebungen

- Benutzerdefinierte Editor-Felder funktionierten nur, wenn sie in der cardShape-Konfiguration definiert waren
- Die richtige Karte aus dem Dropdown der Suchleiste auszuwählen war schwierig

## Version 1.1

Veröffentlicht am 15. Februar 2022

[Release Review im Blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### Neue Funktionen

- Spalten können mit dem Pfeil neben dem Label eingeklappt oder ausgeklappt werden
- Es kann ein Limit für die Anzahl der Karten in Spalten und Swimlanes gesetzt werden
- Spalten können über das Kontextmenü (Drei-Punkte-Symbol) verschoben werden
- Zeilen können ebenfalls mit dem Kontextmenü (Drei-Punkte-Symbol) verschoben werden
- Mehrere Karten in derselben Spalte können mit **Shift** + **Klick** ausgewählt werden
- TypeScript-Definitionen sind jetzt für Kanban verfügbar

### Neue API

- Neue **Ereignisse** zum Verschieben von Spalten und Zeilen:
    [`move-column`](/api/events/js_kanban_movecolumn_event),
    [`move-row`](/api/events/js_kanban_moverow_event)
- Neue **Methoden** zum Verschieben von Spalten und Zeilen:
    [`moveColumn()`](/api/methods/js_kanban_movecolumn_method),
    [`moveRow()`](/api/methods/js_kanban_moverow_method)

### Aktualisierungen

#### Eigenschaften

- [`cards`](/api/config/js_kanban_cards_config) ist jetzt optional

- [`columns`](/api/config/js_kanban_columns_config) ist jetzt optional und ergänzt:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- Die ***color*** Option in [`cardShape`](/api/config/js_kanban_cardshape_config) wurde aktualisiert

#### Methoden

- [`addColumn`](/api/methods/js_kanban_addcolumn_method) wurde aktualisiert
- [`addRow`](/api/methods/js_kanban_addrow_method) wurde aktualisiert
- [`updateCard`](/api/methods/js_kanban_updatecard_method) wurde aktualisiert
- [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) wurde aktualisiert
- [`updateRow`](/api/methods/js_kanban_updaterow_method) wurde aktualisiert
- [`parse`](/api/methods/js_kanban_parse_method) wurde aktualisiert

#### Ereignisse

- [`add-column`](/api/events/js_kanban_addcolumn_event) wurde aktualisiert
- [`add-row`](/api/events/js_kanban_addrow_event) wurde aktualisiert
- [`update-card`](/api/events/js_kanban_updatecard_event) wurde aktualisiert
- [`update-column`](/api/events/js_kanban_updatecolumn_event) wurde aktualisiert
- [`update-row`](/api/events/js_kanban_updaterow_event) wurde aktualisiert

## Version 1.0

Veröffentlicht am 23. November 2021

[Release Review im Blog](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Grundfunktionen

- **Karten** können verwaltet werden durch:
    - Hinzufügen neuer Karten
    - Auswählen von Karten (inklusive Mehrfachauswahl)
    - Löschen von Karten
    - Suchen nach Karten
    - Karten durch Ziehen zwischen Spalten und Zeilen neu anordnen
    - Bearbeiten von Kartendetails mit einem Editor:
        - Label
        - Beschreibung
        - Fortschritt
        - Startdatum
        - Enddatum
        - Farbe
        - Priorität
        - Anhänge (*Dateien* und *Bilder*)
        - *benutzerdefinierte Felder*

- **Spalten** und **Zeilen** können verwaltet werden durch:
    - Hinzufügen neuer Spalten und Zeilen
    - Löschen von Spalten und Zeilen
    - Umbenennen von Spalten und Zeilen
    - Zeilen einklappen oder ausklappen

- [Lokalisierung](/guides/localization)
- [Backend-Integration](/guides/working_with_server) (Go und Node)
- Browserübergreifende Kompatibilität
- Unterstützung für Touch-Geräte
