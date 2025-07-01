---
sidebar_label: setSort()
title: setSort Methode
description: Sie können die setSort Methode in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek kennenlernen. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# setSort()

### Beschreibung

@short: Sortiert Karten basierend auf den angegebenen Kriterien

### Verwendung

~~~jsx {}
setSort(
    {
        by?: string, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### Parameter

Die Methode akzeptiert entweder ein Objekt mit Sortieroptionen oder *null*. Innerhalb des Objekts können Sie die folgenden Eigenschaften definieren:

- `by` - (optional) das Kartenfeld, das für die Sortierung verwendet wird. Dies kann ein *String* oder eine *Funktion* sein, die den Wert zurückgibt, nach dem sortiert wird
- `dir` - (optional) die Sortierrichtung, entweder *"asc"* oder *"desc"*
- `columnId` - (optional) die ID der Spalte, auf die die Sortierung angewendet werden soll
- `preserve` - (optional) steuert, ob der Sortierzustand beibehalten wird (*false* standardmäßig)

:::info
Wenn **preserve** auf *false* gesetzt ist, wird die Sortierung nur einmal angewendet. Das bedeutet, dass nach dem Hinzufügen oder Verschieben von Karten die Sortierreihenfolge nicht beibehalten wird. Wenn **preserve** aktiviert ist, bleibt die Sortierreihenfolge auch nach dem Hinzufügen oder Umordnen von Karten konsistent. Um die beibehaltene Sortierung zu löschen, verwenden Sie **setSort()** mit dem Argument ***null***.
:::

### Beispiel

~~~jsx {7-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// sortiere die Karten aufsteigend nach der Eigenschaft "label"
board.setSort({ 
    by: (obj) => obj.label, // oder by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 hinzugefügt
