---
sidebar_label: setLocale()
title: setLocale Methode
description: Sie können die setLocale-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setLocale()

### Beschreibung

@short: Setzt eine neue Lokalisierung für die Kanban-Komponente

### Verwendung

~~~jsx {}
setLocale(null | locale?: object): void;
~~~

### Parameter

- `null` - (optional) setzt die Lokalisierung zurück auf die Standardeinstellung (*Englisch*)
- `locale` - (optional) ein Objekt, das die neuen Lokalisierungsdaten definiert, die angewendet werden sollen

:::info
Die Methode `setLocale()` ist speziell dafür ausgelegt, die Lokalisierung für Kanban zu aktualisieren. Um Kanban auf die Standard-Lokalisierung zurückzusetzen, rufen Sie `setLocale()` ohne Argumente auf (oder übergeben Sie *null*). Wenn Sie nur die Lokalisierung der Toolbar ändern möchten, verwenden Sie die Methode [`toolbar.setLocale()`](/api/methods/toolbar_setlocale_method.md).
:::

### Beispiel

~~~jsx {7,9}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
});
// die "de"-Lokalisierung für Kanban einstellen
board.setLocale(de);
// Kanban auf die Standard-Lokalisierung zurücksetzen
board.setLocale(); // oder board.setLocale(null);
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version 1.2 aktualisiert

**Verwandte Artikel:** [Lokalisierung](/guides/localization.md)
