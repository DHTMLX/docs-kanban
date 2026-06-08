---
sidebar_label: getCardHeight
title: getCardHeight Konfiguration API
description: Lesen Sie die getCardHeight Konfigurations-API für DHTMLX Kanban. Erfahren Sie, wie Sie eine Funktion festlegen, die eine geschätzte Kartenhöhe zurückgibt.
---

# getCardHeight

### Beschreibung

@short: Optional. Eine Funktion, die eine geschätzte Höhe einer Karte zurückgibt

Die Funktion `getCardHeight` wird vom Widget zur Schätzung der Kartenhöhen verwendet, wenn die Eigenschaft [`cardHeight`](api/config/js_kanban_cardheight_config.md) nicht gesetzt ist und das Board mit [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md) und [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) konfiguriert ist. Die geschätzten Höhen ermöglichen es dem Widget, die Scrollleiste korrekt darzustellen, bevor die tatsächlichen Karten im DOM gemessen werden.

:::info
Wenn Sie die Eigenschaft [`cardHeight`](api/config/js_kanban_cardheight_config.md) setzen, verwendet das Widget die feste Höhe und `getCardHeight` wird nicht aufgerufen. Das Setzen von `cardHeight` ist die empfohlene Vorgehensweise, um `renderType: "lazy"` mit `scrollType: "column"` zu kombinieren.
:::

### Verwendung

~~~jsx {}
getCardHeight?: (cardShape: object, card: object, cardWidth: number) => number;
~~~

### Parameter

Die Callback-Funktion erhält folgende Argumente:

- `cardShape` - das Konfigurationsobjekt der Karte (die Eigenschaft [`cardShape`](api/config/js_kanban_cardshape_config.md))
- `card` - das Datenobjekt der Karte
- `cardWidth` - die aktuelle Breite der Karte in Pixeln

Die Funktion muss eine Zahl zurückgeben — die geschätzte Höhe der Karte in Pixeln.

### Standardkonfiguration

Standardmäßig verwendet das Widget eine integrierte Funktion, die die Kartenhöhe anhand der in [`cardShape`](api/config/js_kanban_cardshape_config.md) deklarierten sichtbaren Felder und der in der Karte gespeicherten Daten schätzt. Diese Standardeinstellung funktioniert für Boards, die das integrierte Kartenlayout verwenden.

Wenn Sie ein benutzerdefiniertes [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) bereitstellen, kann die integrierte Schätzung die tatsächliche Höhe des gerenderten Markup-Codes nicht mehr vorhersagen. Geben Sie in diesem Fall eine benutzerdefinierte `getCardHeight`-Funktion an, die die Höhe der gerenderten Vorlage zurückgibt, oder setzen Sie stattdessen eine statische [`cardHeight`](api/config/js_kanban_cardheight_config.md).

### Beispiel

Das folgende Beispiel stellt eine benutzerdefinierte `getCardHeight`-Funktion für ein Board mit einer benutzerdefinierten Kartenvorlage bereit:

~~~jsx {15-22,27}
const cardTemplate = ({ cardFields }) => {
    const { label, description } = cardFields;
    return `
        <div class="custom-card" style="padding:20px">
            <div class="custom-label">${label}</div>
            <div class="custom-description">${description || ""}</div>
        </div>
    `;
};

new kanban.Kanban("#root", {
    cards,
    columns,
    renderType: "lazy",
    scrollType: "column",
    cardTemplate: kanban.template(card => cardTemplate(card)),
    getCardHeight: (cardShape, card, cardWidth) => {
        // Höhe der benutzerdefinierten Vorlage schätzen
        let height = 60; // Basis-Padding + Label-Zeile
        if (card.description) {
            height += Math.ceil(card.description.length / 40) * 18;
        }
        return height;
    },
    // weitere Parameter
});
~~~

**Verwandte Artikel:** [Konfiguration](guides/configuration.md#rendering-and-scrolling)
