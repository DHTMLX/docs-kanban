---
sidebar_label: locale
title: locale Konfiguration
description: Erfahren Sie, wie Sie die (Toolbar) locale in der DHTMLX JavaScript Kanban-Bibliothek konfigurieren. Entdecken Sie Entwicklerhandbücher und API-Referenzen, experimentieren Sie mit Codebeispielen und Live-Demos und erhalten Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban.
---

# locale

### Beschreibung

@short: Optional. Ein Objekt, das eine benutzerdefinierte Locale für die Toolbar definiert.

:::info
Das **locale**-Objekt sollte alle Bezeichnungen für sowohl Kanban als auch Toolbar sowie deren Übersetzungen enthalten.
:::

### Verwendung

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration

Standardmäßig ist die Toolbar auf die [**Englische**](/guides/localization/#standard-locale) locale eingestellt. Sie können auch Ihre eigene benutzerdefinierte Locale angeben.

:::tip
Um die locale dynamisch zu wechseln, können Sie die [**setLocale()**](../../methods/toolbar_setlocale_method) Methode der Toolbar verwenden.
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
    locale: cn // wendet die "cn" locale auf die Toolbar an
});
~~~

**Verwandte Artikel:** [Lokalisierung](/guides/localization)

**Verwandtes Beispiel:** [Kanban. Lokalisierung](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
