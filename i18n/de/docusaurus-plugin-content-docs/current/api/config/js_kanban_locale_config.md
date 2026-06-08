---
sidebar_label: locale
title: locale Konfiguration API
description: Lesen Sie die locale Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie eine benutzerdefinierte Lokalisierung auf die Board-Oberfläche anwenden.
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