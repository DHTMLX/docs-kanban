---
sidebar_label: locale
title: locale-Konfiguration
description: Erkunden Sie die locale-Konfiguration in der DHTMLX JavaScript Kanban Bibliothek Dokumentation. Sehen Sie Entwickleranleitungen, API-Referenzen, Codebeispiele, Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# locale

### Beschreibung

@short: Optional. Ein Objekt, das eine benutzerdefinierte Locale für Kanban definiert.

:::info
Das **locale**-Objekt sollte alle Kanban- und Toolbar-Bezeichnungen sowie deren übersetzte Versionen enthalten.
:::

### Verwendung

~~~jsx {}
locale?: object;
~~~

### Standardkonfiguration

Kanban verwendet standardmäßig die [**englische**](/guides/localization/#standard-locale) Locale. Sie können bei Bedarf auch eine benutzerdefinierte Locale angeben.

:::tip
Um die Locale zur Laufzeit zu wechseln, steht in Kanban die Methode [**setLocale()**](../../methods/js_kanban_setlocale_method) zur Verfügung.
:::

### Beispiel

~~~jsx {5}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards,
    locale: cn // die Locale "cn" wird anfänglich angewendet
    // weitere Parameter
});
~~~

**Verwandte Artikel:** [Lokalisierung](/guides/localization)

**Verwandte Beispiel:** [Kanban. Lokalisierung](https://snippet.dhtmlx.com/hrblf1mm?tag=kanban)
