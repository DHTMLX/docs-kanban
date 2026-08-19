---
sidebar_label: DHTMLX MCP-Server
title: DHTMLX Kanban MCP-Integration für Boards und REST-Synchronisierung
description: Der MCP-Server gibt KI-Tools Zugriff auf die aktuelle DHTMLX Kanban-Dokumentation — zu Karten, Spalten, Zeilen, Editor-Feldern und der REST-Datensynchronisierung.
---

# DHTMLX Kanban MCP-Server: Karten, Editor und REST-Synchronisierung

Ein funktionierendes [DHTMLX Kanban](/)-Board setzt voraus, dass mehrere Teile korrekt zusammenspielen: Karten- und Editor-Felder müssen sich [denselben Key teilen](guides/configuration.md#bind-editor-fields-to-card-fields), die [Toolbar](guides/customization.md#custom-toolbar) läuft als eigenes Widget, das an das Board gebunden ist, und die [Server-Synchronisierung](guides/working_with_server.md) stützt sich auf einen bestimmten Satz von Action-Handlern. Generierter Code hält stand, wenn Karten- und Editor-Felder denselben Key verwenden, die Toolbar separat eingebunden ist und die Server-Synchronisierung auf den heutigen Action-Handlern beruht — nicht auf einem Stand aus den Trainingsdaten.

Der DHTMLX MCP-Server sorgt dafür, dass der Assistent mit der aktuellen Kanban-Dokumentation arbeitet statt zu raten. Fragen Sie nach dem [Binden von Editor-Feldern an Karten-Felder](guides/configuration.md#bind-editor-fields-to-card-fields), nach dem [Anpassen der Toolbar](guides/customization.md#custom-toolbar) oder nach dem [Anbinden eines RestDataProvider-Backends](guides/working_with_server.md), und der Assistent ruft die aktuelle Referenz ab, bevor er Code schreibt.

### MCP-Endpoint

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
Der DHTMLX MCP-Server deckt alle wichtigen DHTMLX-Produkte ab, nicht nur DHTMLX Kanban. Derselbe Endpoint und dieselben Konfigurationsanweisungen gelten unabhängig davon, mit welcher DHTMLX-Komponente Sie arbeiten.
:::

## Kanban-Dokumentation über den MCP-Server

Intern hält der Server einen vollständigen Index der DHTMLX Kanban-Dokumentation bereit und beantwortet damit Anfragen wie diese:

- Nachschlagen der aktuellen Kanban-API zu [Methoden](api/overview/methods_overview.md), [Events](api/overview/events_overview.md) und [Eigenschaften](api/overview/properties_overview.md), einschließlich Signaturen und Standardwerten.
- Erzeugen von sofort lauffähigem [Initialisierungscode](guides/initialization.md) sowohl für das Kanban-Board als auch für den separaten Toolbar-Konstruktor.
- Konfigurieren von [Karten- und Editor-Feldern](guides/configuration.md#cards) (`cardShape`, `editorShape`) und deren Bindung über den Key, einschließlich der Feldtypen combo, multiselect, color, date und files.
- [Anpassen](guides/customization.md) von Kartenvorlagen, Kontextmenüs und Spaltenköpfen mit den dokumentierten Template-Callbacks.
- [Gestalten](guides/stylization.md) von Spalten, Zeilen und Karten über CSS-Variablen und bedingte CSS-Klassen.
- [Lokalisieren](guides/localization.md) der Kanban- und Toolbar-Oberfläche mit integrierten oder eigenen Locale-Objekten.
- [Laden, Exportieren und Ändern](guides/working_with_data.md) von Karten, Spalten, Zeilen, Links und Kommentaren über die Daten-API.
- Anbinden eines [REST-Backends](guides/working_with_server.md) über `RestDataProvider` oder Einrichten eines Mehrbenutzer-Boards, das Änderungen über WebSocket synchronisiert.
- [Integrieren](guides/integration.md) von Kanban mit anderen DHTMLX-Widgets wie Gantt und Scheduler oder mit [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md) und [Svelte](guides/integration_with_svelte.md).

## Was eine Kanban-Anfrage im MCP auslöst

Der DHTMLX MCP-Server beantwortet Kanban-Fragen über eine Retrieval-Augmented-Generation-Pipeline (RAG), die auf dem Model Context Protocol (MCP) aufsetzt, und verteilt jede Anfrage auf zwei Abläufe: *Search* liefert die passenden Referenzseiten, auf die sich der Assistent stützt, und *Inference* liest diese Seiten selbst und gibt eine fertige Antwort zurück. Zuvor grenzt der Assistent ein, welcher Teil der Anfrage tatsächlich einen Blick in die Dokumentation erfordert, und beantwortet den Rest aus eigenem Wissen.

Nehmen Sie die Anfrage *"Wie binde ich DHTMLX Kanban so an, dass eine neu hinzugefügte Karte automatisch mit meiner Backend-Datenbank synchronisiert wird?"* als Beispiel:

1. Der Assistent bestimmt den Teil, für den Dokumentation nötig ist: wie `RestDataProvider` eine neue Karte mit einem Server synchronisiert.
2. Der Server ordnet dies der Dokumentation zur Server-Integration zu.
3. Da die Antwort Code erzeugen muss, übernimmt *Search* die Anfrage (eine Frage mit genau einer richtigen Antwort ginge stattdessen an *Inference*).
4. *Search* holt die passenden Seiten aus einem Vektorindex, der auf der aktuellen Kanban-Dokumentation aufgebaut ist.
5. Der Assistent erhält diese Seiten als Kontext zurück.
6. Aus diesem Kontext richtet der Assistent `RestDataProvider` für die Operation `add-card` ein und ergänzt die backend-spezifischen Details der Anfrage aus eigenem Wissen, statt bei der Kanban-API zu raten.

So bleiben Kanban-Codevorschläge auf dem Stand der API, wie sie heute funktioniert.

## Den MCP-Server pro Tool registrieren

Ob über das Terminal oder über eine Konfigurationsdatei — in beiden Fällen verweisen Sie Ihr Tool auf die untenstehende URL. Nach der Registrierung erreicht jedes Kanban-Board, das Sie in diesem Tool bauen, den Server.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Nachfolgend finden Sie die Einrichtungsschritte für die gängigsten Tools.

### Claude Code

:::info
Alle unterstützten Wege, einen MCP-Server zu registrieren, beschreibt die [Dokumentation](https://code.claude.com/docs/en/mcp) von Claude Code selbst.
:::

Um den Server über die Kommandozeile zu registrieren, führen Sie Folgendes aus:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Sie richten es lieber von Hand ein? Fügen Sie diesen Eintrag in Ihre `.mcp.json` ein:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor

:::info
Alle von Cursor unterstützten Wege der MCP-Konfiguration finden Sie in dessen [offizieller Dokumentation](https://cursor.com/en-US/docs/mcp).
:::

Schritte zum Hinzufügen des Servers:

1. Öffnen Sie die Settings (`Cmd+Shift+J` auf dem Mac, `Ctrl+Shift+J` unter Windows/Linux)
2. Wechseln Sie zu **Tools & MCP**
3. Klicken Sie auf **Add Custom MCP**
4. Fügen Sie die folgende Konfiguration ein:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Alle Details zur MCP-Integration in Antigravity stehen in der [offiziellen Dokumentation](https://antigravity.google/docs/mcp).
:::

Diese Schritte verbinden den DHTMLX MCP-Server mit Google Antigravity:

1. Öffnen Sie die Befehlspalette
2. Geben Sie "mcp add" ein
3. Wählen Sie "HTTP"
4. Geben Sie die folgenden Werte an:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
Die [zugehörige Anleitung](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) behandelt die Migration von der Gemini CLI zur Antigravity CLI.
:::

Um den DHTMLX MCP-Server mit der Antigravity CLI zu verbinden, legen Sie `mcp_config.json` an einem dieser Orte an:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Fügen Sie die folgende Konfiguration hinzu:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Führen Sie anschließend `agy` im Terminal aus.

### ChatGPT

:::info
Die [offizielle Dokumentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) von ChatGPT führt durch die vollständige Einrichtung des MCP-Connectors.
:::

Schritte zur Konfiguration des Connectors:

1. Gehen Sie zu **Settings** → **Apps & Connectors**
2. Klicken Sie auf **Advanced settings**
3. Aktivieren Sie den **Developer mode**
4. Kehren Sie zu **Apps & Connectors** zurück und klicken Sie auf "Create"
5. Füllen Sie die Angaben zum Connector aus:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentifizierung: `No authentication`
6. Klicken Sie auf **Create**

Sobald der Connector angelegt ist, zieht ChatGPT die Dokumentation während der Unterhaltung vom MCP-Server.

:::info
Für intensive Coding-Workflows sind andere MCP-fähige Tools womöglich besser geeignet.
:::

### Weitere Tools

Tools ohne eigenen Abschnitt hier unterstützen MCP in der Regel trotzdem — in den Einstellungen meist als "Model Context Protocol" oder "Context Sources" bezeichnet. Tragen Sie dort `https://docs.dhtmlx.com/mcp` als eigene Quelle ein.

## Was der MCP-Server mit Ihren Daten macht

Der MCP-Server ist ein gehosteter Dienst: Auf Ihrem Rechner läuft nichts, es werden keine Dateien aus Ihrem Projekt gelesen und keine personenbezogenen Daten gespeichert.

Zur Fehlersuche und zur Verbesserung des Dienstes können Anfragen protokolliert werden.

Bei strengeren Datenschutzanforderungen können Organisationen eine kommerzielle Bereitstellung ohne Protokollierung der Anfragen anfragen. Details erhalten Sie unter `info@dhtmlx.com`.

## Vorlagen für Kanban-Board-Prompts

Die folgenden Prompts sind nach dem Teil der API gruppiert, auf den sie abzielen. Übernehmen Sie einen davon und passen Sie die Details an Ihr Board an.

**Karten, Spalten und Zeilen**

~~~
Wie erlaube ich Nutzern, Karten in DHTMLX Kanban zwischen Spalten und Zeilen zu ziehen? Nutze die Dokumentation.
~~~
~~~
Wie begrenze ich die Anzahl der Karten in einer bestimmten Spalte oder Zeile?
~~~
~~~
Wie dupliziere ich eine Karte und verschiebe die Kopie mit der Kanban-API in eine andere Zeile?
~~~

**Editor und Feldtypen**

~~~
Wie binde ich ein eigenes Editor-Feld an ein Karten-Feld, damit es auf der Karte und im Editor erscheint?
~~~
~~~
Wie konfiguriere ich im DHTMLX Kanban-Editor ein multiselect-Feld mit Benutzer-Avataren?
~~~
~~~
Wie aktiviere ich im DHTMLX Kanban-Editor das automatische Speichern mit Debounce-Verzögerung?
~~~

**Toolbar und Board-Steuerelemente**

~~~
Wie füge ich der Kanban-Toolbar ein eigenes Suchfeld hinzu und binde es an das Board?
~~~
~~~
Wie entferne ich die Undo- und Redo-Schaltflächen aus der DHTMLX Kanban-Toolbar?
~~~

**REST- und Mehrbenutzer-Synchronisierung**

~~~
Wie verbinde ich DHTMLX Kanban mit einem Go-Backend und lade die Anfangsdaten?
~~~
~~~
Wie passe ich an, wie DHTMLX Kanban eine bestimmte Aktion mit meinem Backend synchronisiert?
~~~
~~~
Wie richte ich ein Mehrbenutzer-Board mit DHTMLX Kanban ein, das Änderungen in Echtzeit über WebSocket synchronisiert?
~~~

## Bessere Ergebnisse bei Kanban-Prompts

- **Benennen Sie das Zielelement.** Unterscheiden Sie zwischen dem Board, einer Spalte, einer Zeile (Swimlane) und einer Karte (zum Beispiel "auf dem Kanban-Board" gegenüber "für eine bestimmte Zeile" gegenüber "auf einer Karte in der Spalte Testing"). Ein genaues Ziel hilft dem Server, die richtigen Referenzseiten zu finden.
- **Geben Sie den Feldtyp an.** `cardShape` und `editorShape` unterstützen viele Feldtypen (combo, multiselect, color, date, files). Nennen Sie den Typ ausdrücklich (zum Beispiel "ein multiselect-Feld mit Avataren") statt nur "ein Feld", damit der Assistent die passende Konfigurationsreferenz heranzieht.
- **Ergänzen Sie "Nutze die Dokumentation"** in Ihrem Prompt. Dieser Satz signalisiert dem Assistenten, dass er eine MCP-Abfrage auslösen soll, statt allein aus den Trainingsdaten zu antworten. Am wichtigsten ist das bei `RestDataProvider`-Handlern und der Feldkonfiguration, wo sich die API am ehesten geändert hat.
- **Sagen Sie, ob die Operation clientseitig oder serverseitig ist.** Kanban arbeitet sowohl mit lokalen Daten als auch mit einer REST-API über `RestDataProvider`. Erwähnen Sie, was zutrifft (zum Beispiel "mit RestDataProvider" oder "ohne Backend"), damit der Assistent keine REST-spezifischen Aufrufe in ein reines Client-Beispiel mischt.
