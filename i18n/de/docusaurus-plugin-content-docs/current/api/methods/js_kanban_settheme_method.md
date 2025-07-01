---
sidebar_label: setTheme()
title: setTheme Methode
description: Erfahren Sie mehr über die setTheme Methode in der DHTMLX JavaScript Kanban Bibliotheksdokumentation. Entdecken Sie Entwickleranleitungen und API-Referenzen, experimentieren Sie mit Codebeispielen und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setTheme()

### Beschreibung

@short: Wendet dynamisch ein neues Theme auf das Kanban-Board an (initialisiert es neu).

### Verwendung

~~~jsx {}
setTheme({
    name?: string, // "material" (Standard) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### Parameter

- `name` - (optional) Gibt das Theme an, das auf das Kanban-Board angewendet werden soll. Die verfügbaren Optionen sind:
    - "material" (*Standard*)
    - "willow"
    - "willow-dark"
- `fonts` - (optional) Steuert, ob Schriftarten vom CDN (wxi Font) geladen werden.

:::tip
Das Anfangsthema kann über die [`theme`](../../config/js_kanban_theme_config) Eigenschaft festgelegt werden.
:::

### Beispiel

~~~jsx {6}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    // Anfangskonfigurationsparameter
});
// das "willow" Theme anwenden
board.setTheme({ name: "willow", font: false });
~~~

**Änderungsprotokoll:** Diese Methode wurde in Version v1.6 eingeführt.

**Verwandte Artikel:** [Stilisierung](/guides/stylization)

**Verwandte Beispiele:**
- [Kanban. Verwendung von Themes](https://snippet.dhtmlx.com/jnw54xif?tag=kanban)
- [Kanban. Einbinden eines Themes als Stylesheet](https://snippet.dhtmlx.com/k3iw6ti0?tag=kanban)
- [Kanban. Theme-Wechsel über die CSS-Klasse](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)
