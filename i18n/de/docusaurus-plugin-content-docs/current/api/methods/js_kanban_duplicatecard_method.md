---
sidebar_label: duplicateCard()
title: duplicateCard Methode
description: Sie können die duplicateCard Methode in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek kennenlernen. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# duplicateCard()

### Beschreibung

@short: Dupliziert eine Karte anhand der angegebenen ID

### Verwendung

~~~jsx {}
duplicateCard({
    id: string | number,
    card?: object,
    select?: boolean
}): void;
~~~

### Parameter

- `id` - (erforderlich) die ID der zu duplizierenden Karte
- `card` - (optional) das Datenobjekt der neuen Karte. Die vollständige Liste der Kartenparameter finden Sie [**hier**](api/config/js_kanban_cards_config.md)
- `select` - (optional) aktiviert/deaktiviert die Auswahl der neu hinzugefügten Karte

### Beispiel

~~~jsx {7-10}
// Kanban erstellen
const board = new kanban.Kanban("#root", {
    columns,
    cards
});
// Karte mit der ID 1 duplizieren
board.duplicateCard({
    id: 1,
    card: { label: "Duplicated card" },
    select: true
});
~~~

**Änderungsprotokoll:** Der Parameter `select` wurde in Version v1.5.10 hinzugefügt