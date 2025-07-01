---
sidebar_label: setLocale()
title: setLocale Methode
description: Sie können die setLocale-Methode der Toolbar in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setLocale()

### Beschreibung

@short: Aktualisiert die Toolbar von Kanban mit einer neuen Spracheinstellung

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) setzt die Toolbar auf die Standardsprache (*Englisch*) zurück
- `locale` - (optional) ein Objekt, das die neuen Sprachdaten enthält, die auf die Toolbar angewendet werden sollen

:::info
Die **Toolbar** in Kanban ist eine eigenständige Komponente. Verwenden Sie die Methode `toolbar.setLocale()`, wenn Sie nur die Spracheinstellung der Toolbar ändern möchten. Ein Aufruf von `toolbar.setLocale()` ohne Argumente (oder mit *null*) setzt die Spracheinstellung auf die Standardversion zurück. Um die Spracheinstellung für Kanban selbst zu aktualisieren, verwenden Sie die Methode [`kanban.setLocale()`](/api/methods/js_kanban_setlocale_method.md).
:::

### Beispiel

~~~jsx {8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {});
// Toolbar erstellen
const toolbar = new kanban.Toolbar("#toolbar", { api: board.api });
// setze die "de" Spracheinstellung für Kanban
board.setLocale(de);
// setze die "de" Spracheinstellung für die Toolbar
toolbar.setLocale(de);
~~~

**Änderungsprotokoll:** Der Parameter **api** wurde in Version v1.6 veraltet

**Verwandte Artikel:** [Lokalisierung](/guides/localization.md)
