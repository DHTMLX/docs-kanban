---
sidebar_label: cardTemplate
title: cardTemplate Konfiguration
description: Erfahren Sie alles über die cardTemplate-Konfiguration in der DHTMLX JavaScript Kanban Bibliothek. Entdecken Sie Entwickleranleitungen und API-Referenzen, experimentieren Sie mit Codebeispielen und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# cardTemplate

### Beschreibung

@short: Optional. Erzeugt und wendet eine benutzerdefinierte HTML-Vorlage für die Karte an.

### Verwendung

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML template of the card";
};
~~~

### Parameter

Die Callback-Funktion erhält ein Objekt mit folgenden Eigenschaften:

- `cardFields` - enthält die Daten der Karte
- `selected` - gibt an, ob die Karte ausgewählt ist
- `dragging` - gibt an, ob die Karte gerade gezogen wird
- `cardShape` - das Konfigurationsobjekt der Karte

:::important
Um ein Kontextmenü zur Karten-Vorlage hinzuzufügen, fügen Sie ein benutzerdefiniertes Symbol im Markup ein und verwenden Sie das Attribut `data-menu-id=${cardFields.id}`, wie im folgenden Beispiel gezeigt.
:::

### Beispiel

~~~jsx {1-23,28}
const cardTemplate = ({ cardFields, selected, dragging, cardShape }) => {
    const { label, color, id } = cardFields;
    if (selected) {
        return `
            <div class="custom-card" style="padding:20px">
                <div class="status-color" style="background:${color}"></div>
                <div data-menu-id=${id} >
                    <i class="wxi-dots-v"></i>
                </div>
                Selected:${label}
            </div>
        `;
    }
    return `
        <div class="custom-card" style="padding:20px">
            <div class="status-color" style="background:${color}"></div>
            <div data-menu-id=${id} >
                <i class="wxi-dots-v"></i>
            </div>
            ${label}
        </div>
    `;
}

new kanban.Kanban("#root", {
    cards,
    columns,
    cardTemplate: kanban.template(card => cardTemplate(card)),
    // other parameters
});
~~~

**Änderungsprotokoll:** Unterstützung für Kontextmenüs wurde in Version 1.4 eingeführt

**Verwandte Artikel:** [Anpassung](/guides/customization#individuelle-karten)

**Verwandte Beispiel:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)
