---
sidebar_label: cardTemplate
title: cardTemplate Konfiguration
description: Sie können mehr über die cardTemplate Konfiguration in der Dokumentation der DHTMLX JavaScript Kanban Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# cardTemplate

### Beschreibung

@short: Optional. Gibt eine neue HTML-Vorlage der Karte zurück und wendet sie an.

### Verwendung

~~~jsx
function cardTemplate ({ cardFields, selected, dragging, cardShape }){
    return "HTML template of the card";
};
~~~

### Parameter

Die Callback-Funktion erhält ein Objekt mit folgenden Parametern:

- `cardFields` - das Datenobjekt der Karte
- `selected` - der Auswahlstatus der Karte
- `dragging` - der Ziehstatus der Karte
- `cardShape` - das Konfigurationsobjekt der Karte

:::important
Wenn Sie ein Kontextmenü in die Karten-Vorlage einfügen möchten, geben Sie ein benutzerdefiniertes Icon im Template-Markup an und verwenden Sie den Ausdruck `data-menu-id=${cardFields.id}`, wie im folgenden Beispiel gezeigt.
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

**Änderungsprotokoll:** Die Möglichkeit, ein Kontextmenü anzuzeigen, wurde in Version v1.4 hinzugefügt.

**Verwandte Artikel:** [Anpassung](guides/customization.md#custom-cards)

**Verwandtes Beispiel:** [Kanban. Custom card](https://snippet.dhtmlx.com/8rhdq81d?tag=kanban)