---
sidebar_label: setTheme()
title: setTheme Methode
description: Sie können die setTheme-Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setTheme()

### Beschreibung

@short: Wendet dynamisch ein neues Theme auf Kanban an (mit Reinitialisierung)

### Verwendung

~~~jsx {}
setTheme({
    name?: string, // "material" (Standard) | "willow" | "willow-dark"
    fonts?: boolean
}): void;
~~~

### Parameter

- `name` - (optional) ein Theme-Name, der auf Kanban angewendet werden soll. Es gibt 3 verfügbare Themes:
    - "material" (*Standard*)
    - "willow"
    - "willow-dark"
- `fonts` - (optional) aktiviert/deaktiviert das Laden von Schriftarten vom CDN (wxi font)

:::tip
Um das Anfangs-Theme festzulegen, können Sie die [`theme`](api/config/js_kanban_theme_config.md) Eigenschaft verwenden.
:::

### Beispiel

~~~jsx {6}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    // Anfangskonfigurationsparameter
});
// das "willow"-Theme setzen
board.setTheme({ name: "willow", font: false });
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.6 hinzugefügt

**Verwandte Artikel:** [Stilisierung](guides/stylization.md)

**Verwandte Beispiel:** [Kanban. Ändern eines Themes über die CSS-Klasse](https://snippet.dhtmlx.com/7qzp561m?tag=kanban)