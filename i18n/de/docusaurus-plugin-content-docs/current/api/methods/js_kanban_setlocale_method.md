---
sidebar_label: setLocale()
title: setLocale Methode
description: Sie können mehr über die setLocale Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setLocale()

### Beschreibung

@short: Wendet eine neue Locale auf Kanban an

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) setzt die Locale auf die Standard-Locale (*Englisch*) zurück
- `locale` - (optional) das Objekt mit den Daten der neuen Locale, die angewendet werden soll

:::info
Verwenden Sie die Methode `setLocale()`, um ausschließlich eine neue Locale auf Kanban anzuwenden. Um Kanban auf die Standard-Locale zurückzusetzen, rufen Sie die Methode `setLocale()` ohne Argumente (oder mit dem Wert *null*) auf. Verwenden Sie die Methode [`toolbar.setLocale()`](api/methods/toolbar_setlocale_method.md), um ausschließlich eine neue Locale auf die Toolbar anzuwenden.
:::

### Beispiel

~~~jsx {7,9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// wendet die Locale "de" auf Kanban an
board.setLocale(kanban.locales["de"]);
// wendet die Standard-Locale auf Kanban an
board.setLocale(); // oder board.setLocale(null);
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 aktualisiert

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)