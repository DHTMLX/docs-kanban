---
sidebar_label: setSearch()
title: setSearch Methode API
description: Lesen Sie die API-Dokumentation der setSearch-Methode für DHTMLX Kanban. Erfahren Sie, wie Sie Karten anhand angegebener Parameter suchen.
---

# setSearch()

### Beschreibung

@short: Sucht nach Karten anhand der angegebenen Parameter

### Verwendung

~~~jsx {}
setSearch({
    value: string,
    by?: string
}): void;
~~~

:::info
Mit dieser Methode können Sie nach den benötigten Karten anhand der angegebenen Parameter suchen. Wenn Sie die **setSearch()** Methode ohne Parameter aufrufen, wird die Suchleiste und die Hervorhebung der Karten gelöscht.
:::

### Parameter

- `value` - (erforderlich) der Suchwert
- `by` - (optional) das Kartenfeld, nach dem gesucht wird

### Beispiel

~~~jsx {7}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Hervorhebung der Karten, die den Parametern entsprechen
board.setSearch({ value: "Integration", by: "label" });
~~~