---
sidebar_label: locale
title: Toolbar locale Konfiguration API
description: Lesen Sie die Toolbar locale Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie eine benutzerdefinierte Lokalisierung auf die Toolbar anwenden.
---

# locale

### Beschreibung

@short: Optional. Ein Objekt einer benutzerdefinierten Toolbar-Lokalisierung

:::info
Das **locale**-Objekt muss alle Bezeichnungen von Kanban und Toolbar mit den entsprechenden Übersetzungen enthalten.
:::

### Verwendung

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration

Standardmäßig verwendet Toolbar die [**englische**](guides/localization.md#default-locale) Lokalisierung. Sie können sie auch auf eine benutzerdefinierte Lokalisierung einstellen.

:::tip
Um die aktuelle Lokalisierung dynamisch zu ändern, können Sie die [**setLocale()**](api/methods/toolbar_setlocale_method.md) Methode von Toolbar verwenden.
:::

### Beispiel

~~~jsx {8}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    locale: cn
});
// Toolbar erstellen
new kanban.Toolbar("#toolbar", {
    api: board.api,
    locale: cn // die "cn" Lokalisierung auf Toolbar anwenden
});
~~~

**Verwandte Artikel:** [Lokalisierung](guides/localization.md)

**Verwandte Beispiel:** [Kanban. Lokalisierung](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)