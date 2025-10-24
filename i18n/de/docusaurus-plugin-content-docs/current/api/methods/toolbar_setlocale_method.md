---
sidebar_label: setLocale()
title: Methode setLocale
description: Sie können die Methode setLocale der Toolbar in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setLocale()

### Beschreibung

@short: Wendet eine neue Locale auf die Toolbar des Kanban an

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) setzt die Toolbar auf die Standard-Locale (*Englisch*) zurück
- `locale` - (optional) das Objekt mit neuen Locale-Daten, die auf die Toolbar angewendet werden sollen

:::info
Die **Toolbar** des Kanban ist eine separate Komponente. Verwenden Sie die Methode `toolbar.setLocale()`, um nur auf die Toolbar eine neue Locale anzuwenden. Um die Toolbar auf die Standard-Locale zurückzusetzen, rufen Sie die Methode `toolbar.setLocale()` ohne Argumente (oder mit dem Wert *null*) auf. Verwenden Sie die Methode [`kanban.setLocale()`](api/methods/js_kanban_setlocale_method.md), um nur auf das Kanban eine neue Locale anzuwenden.
:::

### Beispiel

~~~jsx {8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Toolbar erstellen
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// die Locale "de" auf Kanban anwenden
board.setLocale(de);
// die Locale "de" auf die Toolbar anwenden
toolbar.setLocale(de);
~~~

**Änderungsprotokoll:** Der Parameter **api** wurde in Version 1.6 veraltet

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)