---
sidebar_label: setSort()
title: setSort Methode
description: Sie können die setSort Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# setSort()

### Beschreibung

@short: Sortiert Karten nach den angegebenen Parametern

### Verwendung

~~~jsx {}
setSort(
    {
        by?: string | function, // by?: ((card: object) => any),
        dir?: "asc" | "desc",
        columnId?: string | number,
        preserve?: boolean
    } | null
): void;
~~~

### Parameter

Die Methode kann ein Objekt mit Sortierparametern oder den Wert *null* annehmen. Im Objekt können Sie folgende Parameter angeben:

- `by` - (optional) das Kartenfeld, nach dem sortiert werden soll. Dieser Parameter kann als *string* oder *function* angegeben werden. Die Funktion muss das Kartenfeld zurückgeben, nach dem sortiert werden soll
- `dir` - (optional) die Sortierreihenfolge. Mögliche Werte sind *"asc"* und *"desc"*
- `columnId` - (optional) die ID der zu sortierenden Spalte
- `preserve` - (optional) aktiviert/deaktiviert das Beibehalten des Sortierzustands (standardmäßig *false*)

:::info
Wenn der **preserve**-Parameter auf *false* gesetzt ist, wird die Sortierung einmalig angewendet. Das bedeutet, dass nach dem Hinzufügen oder Verschieben von Karten der Sortierzustand nicht beibehalten wird (die Reihenfolge ändert sich). Andernfalls bleibt der Sortierzustand auch nach dem Hinzufügen oder Verschieben von Karten erhalten. Um das Beibehalten zurückzusetzen, rufen Sie die **setSort()** Methode mit dem Parameter ***null*** auf.
:::

### Beispiel

~~~jsx {7-12}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// sortiere die Karten aufsteigend nach dem Parameter "label"
board.setSort({ 
    by: (obj) => obj.label, // oder by: "label"
    dir: "asc",
    columnId: "backlog",
    preserve: false
});
~~~

**Änderungsprotokoll:** Die Methode wurde in Version v1.2 hinzugefügt