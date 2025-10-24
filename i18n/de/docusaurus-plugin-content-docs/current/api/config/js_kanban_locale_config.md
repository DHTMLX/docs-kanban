---
sidebar_label: locale
title: locale-Konfiguration
description: Sie können die locale-Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# locale

### Beschreibung

@short: Optional. Ein Objekt für eine benutzerdefinierte Kanban-Lokalisierung

:::info
Das **locale**-Objekt muss alle Bezeichnungen von Kanban und der Toolbar mit den entsprechenden Übersetzungen enthalten.
:::

### Verwendung

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration

Standardmäßig verwendet Kanban die [**englische**](guides/localization.md#default-locale) locale. Sie können diese auch auf eine benutzerdefinierte locale einstellen.

:::tip
Um die aktuelle locale dynamisch zu ändern, können Sie die [**setLocale()**](api/methods/js_kanban_setlocale_method.md)-Methode von Kanban verwenden.
:::

### Beispiel

~~~jsx {5}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: kanban.locales["cn"] // die "cn"-locale wird initial gesetzt
    // weitere Parameter
});
~~~

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)

**Verwandtes Beispiel:** [Kanban. Lokalisierung](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)