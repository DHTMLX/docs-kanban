---
sidebar_label: setSearch()
title: Methode setSearch
description: Sie können die Methode setSearch in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setSearch()

### Beschreibung

@short: Findet Karten basierend auf den angegebenen Suchkriterien

### Verwendung

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
Mit dieser Methode können Sie Karten entsprechend den angegebenen Suchkriterien finden. Ein Aufruf von **setSearch()** ohne Argumente setzt das Suchfeld zurück und entfernt alle hervorgehobenen Karten.
:::

### Parameter

- `value` - (erforderlich) der zu suchende Text
- `by` - (optional) das spezifische Kartenfeld, in dem gesucht werden soll

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Hervorheben der Karten, die den Parametern entsprechen
board.setSearch({ value: "Integration", by: "label" });
~~~
