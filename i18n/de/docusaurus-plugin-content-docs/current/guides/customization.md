---
sidebar_label: Anpassung
title: Anpassung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Anpassungsmöglichkeiten. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Anpassung

Das Erscheinungsbild und Verhalten von Kanban können Sie mit folgenden Eigenschaften anpassen:

- [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) — Karten mit einer eigenen HTML-Vorlage rendern
- [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md), [`rowShape.menu`](api/config/js_kanban_rowshape_config.md) — das Kontextmenü für Karten, Spalten und Zeilen anpassen
- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md), [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — Spaltenheader-Vorlagen ersetzen
- [`cardShape.css`](api/config/js_kanban_cardshape_config.md), [`columnShape.css`](api/config/js_kanban_columnshape_config.md), [`rowShape.css`](api/config/js_kanban_rowshape_config.md) — CSS-Klassen bedingt anwenden
- [`items`](api/config/toolbar_items_config.md) — Toolbar-Struktur neu anordnen und eigene Steuerelemente hinzufügen
- CSS-Variablen — visuelle Stile anpassen (siehe den Abschnitt [Stilisierung](guides/stylization.md))

## Eigene Karten {#custom-cards}

Verwenden Sie die [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)-Eigenschaft, um Karten mit einer eigenen HTML-Vorlage zu rendern. Der Callback gibt das Markup für jede Karte zurück.

Der Callback erhält ein Objekt mit folgenden Parametern:

- `cardFields` — Kartendaten
- `selected` — ob die Karte ausgewählt ist
- `dragging` — ob die Karte gerade verschoben wird
- `cardShape` — Kartenkonfiguration

Um in einer eigenen Kartenvorlage einen Kontextmenü-Auslöser einzubetten, umschließen Sie das Menüsymbol mit einem `<div>` mit dem Attribut `data-menu-id=${cardFields.id}` (dieselbe Struktur wie bei der eingebauten Karte). Das Widget bindet das Menü über dieses Attribut an den Container.

Das folgende Demo wendet eine eigene Kartenvorlage an:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigenes Kontextmenü

Konfigurieren Sie das Kontextmenü für Karten, Spalten und Zeilen über die Eigenschaften [`cardShape.menu`](api/config/js_kanban_cardshape_config.md), [`columnShape.menu`](api/config/js_kanban_columnshape_config.md) und [`rowShape.menu`](api/config/js_kanban_rowshape_config.md). Jeder Eintrag in `menu.items` kann eine eingebaute Aktions-ID verwenden, um eine Standardoperation auszuführen, oder einen eigenen `onClick`-Handler für beliebiges Verhalten definieren.

### `cardShape.menu`

Standardmäßig zeigt das Kartenmenü die Optionen **Duplizieren** und **Löschen**. Verfügbare eingebaute Aktions-IDs:

- `"duplicate-card"` — die Karte duplizieren
- `"delete-card"` — die Karte löschen

### `columnShape.menu`

- `"add-card"` — eine neue Karte zur Spalte hinzufügen
- `"set-edit"` — die Spalte umbenennen
- `"move-column:left"`, `"move-column:right"` — die Spalte nach links oder rechts verschieben
- `"delete-column"` — die Spalte löschen

### `rowShape.menu`

- `"set-edit"` — die Zeile umbenennen
- `"move-row:up"`, `"move-row:down"` — die Zeile nach oben oder unten verschieben
- `"delete-row"` — die Zeile löschen

Setzen Sie `menu.items` auf eine Funktion, um pro Karte, Spalte oder Zeile ein unterschiedliches Menü anzuzeigen. Geben Sie `null` oder `false` aus der Funktion zurück, um das Menü für ein bestimmtes Element auszublenden.

Das folgende Demo wendet ein eigenes Kontextmenü an:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigene Spaltenheader

Die [`columnShape`](api/config/js_kanban_columnshape_config.md)-Eigenschaft stellt Vorlagen und Verhalten für Spaltenheader bereit:

- [`columnShape.headerTemplate`](api/config/js_kanban_columnshape_config.md) — HTML-Vorlage des Spaltenheaders im ausgeklappten Zustand
- [`columnShape.collapsedTemplate`](api/config/js_kanban_columnshape_config.md) — HTML-Vorlage des Spaltenheaders im eingeklappten Zustand
- [`columnShape.fixedHeaders`](api/config/js_kanban_columnshape_config.md) — Spaltenheader beim vertikalen Scrollen einfrieren (Standard: `true`)

Der folgende Codeausschnitt setzt eine eigene Headervorlage mit einem Einklapp-Symbol, einem Label mit Kartenanzahl und einem Menüauslöser:

~~~jsx {5-21}
new kanban.Kanban("#root", {
    columns,
    cards,
    columnShape: {
        headerTemplate: kanban.template(({ column, columnState }) => {
            return `<div class="wx-collapse-icon" data-action="collapse">
                        <i class="${column.collapsed ? "wxi-angle-right" : "wxi-angle-left"}"></i>
                    </div>
                    ${!column.collapsed
                        ? `<div class="wx-label" data-action="rename">
                                ${column.label} (${columnState.cardsCount})
                            </div>
                            <div class="wx-menu" data-menu-id="${column.id}">
                                <i class="wxi-dots-h"></i>
                            </div>`
                        : ""}`;
        }),
        collapsedTemplate: kanban.template(({ column }) => `<div class="wx-collapsed-label">${column.label}</div>`)
    }
});
~~~

:::tip
Damit `fixedHeaders` wirksam wird, legen Sie eine feste Höhe am Kanban-Container fest, sodass das Board vertikal scrollt.
:::

## Bedingte CSS-Klassen {#conditional-css-classes}

Um eine CSS-Klasse bedingt anzuwenden, übergeben Sie eine Funktion an den `css`-Parameter von [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md) oder [`rowShape`](api/config/js_kanban_rowshape_config.md). Die Funktion gibt einen Klassennamen basierend auf den aktuellen Daten zurück:

- [`cardShape.css: (card) => string`](api/config/js_kanban_cardshape_config.md) — Klasse, die auf eine Karte angewendet wird
- [`columnShape.css: (column, cards) => string`](api/config/js_kanban_columnshape_config.md) — Klasse, die auf eine Spalte angewendet wird
- [`rowShape.css: (row, cards) => string`](api/config/js_kanban_rowshape_config.md) — Klasse, die auf eine Zeile angewendet wird

Der folgende Codeausschnitt hebt überfällige Karten und gering ausgelastete Spalten hervor:

~~~jsx {5,8}
new kanban.Kanban("#root", {
    columns,
    cards,
    cardShape: {
        css: (card) => card.end_date < new Date() ? "overdue" : ""
    },
    columnShape: {
        css: (column, cards) => cards.length < 5 ? "low-load" : ""
    }
});
~~~

## Eigene Toolbar {#custom-toolbar}

Verwenden Sie die [`items`](api/config/toolbar_items_config.md)-Eigenschaft, um die Toolbar-Struktur anzupassen. Das Array legt fest, welche Steuerelemente angezeigt werden, in welcher Reihenfolge und mit welchem Verhalten. Ein Eintrag kann sein:

- ein eingebautes Steuerelement: `"search"`, `"sort"`, `"undo"`, `"redo"`, `"addColumn"`, `"addRow"`, `"spacer"`
- ein Objekt, das die Suchleiste oder das Sortier-Steuerelement mit eigenen Optionen überschreibt
- ein eigenes Steuerelement als Zeichenketten-Bezeichner oder als Funktion

Das folgende Demo passt die Reihenfolge der Steuerelemente, die Suchleiste, das Sortier-Steuerelement und ein eigenes Steuerelement an:

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigene Stile

Ändern Sie die Werte der CSS-Variablen, um das Erscheinungsbild von Kanban anzupassen. Die vollständige Liste finden Sie im Abschnitt [Stilisierung](guides/stylization.md).

Das folgende Beispiel wendet eigene Stile auf Kanban an:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
