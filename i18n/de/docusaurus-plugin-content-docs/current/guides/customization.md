---
sidebar_label: Anpassung
title: Anpassung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Anpassungsmöglichkeiten. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Anpassung

Zusätzlich zu den Konfigurationsoptionen bietet Kanban zahlreiche Möglichkeiten, das Aussehen und Verhalten individuell zu gestalten. Sie können eine eigene Vorlage für Karten festlegen, das Kontextmenü für Karten, Spalten und Zeilen anpassen, das Layout und die Funktionen der Toolbar verändern sowie Ihre eigenen CSS-Stile verwenden, um Kanban ein einzigartiges Aussehen zu verleihen.

## Individuelle Karten

Um Karten mit einem eigenen Aussehen darzustellen, eignet sich die [`cardTemplate`](/api/config/js_kanban_cardtemplate_config.md)-Eigenschaft. Mit dieser Eigenschaft können Sie eine Callback-Funktion nutzen, um eigene Stile und Logik in Kanban einzubringen. Im folgenden Beispiel sehen Sie, wie das funktioniert:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Benutzerdefiniertes Kontextmenü

Wenn Sie das Kontextmenü für Karten, Spalten oder Zeilen anpassen möchten, stehen Ihnen die Eigenschaften [`cardShape`](/api/config/js_kanban_cardshape_config.md), [`columnShape`](/api/config/js_kanban_columnshape_config.md) und [`rowShape`](/api/config/js_kanban_rowshape_config.md) zur Verfügung. Das folgende Beispiel zeigt, wie Sie diese konfigurieren können:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Individuelle Toolbar

Die Toolbar lässt sich mit der [`items`](/api/config/toolbar_items_config.md)-Eigenschaft nach Bedarf anpassen. Im Array können Sie die gewünschten Steuerelemente hinzufügen, beliebig anordnen und deren Verhalten nach Ihren Anforderungen anpassen.

Im folgenden Beispiel sehen Sie, wie Sie unter anderem Folgendes individualisieren können:

- Die Reihenfolge der Steuerelemente
- Die Suchleiste und deren Funktionsweise
- Das Sortier-Steuerelement und dessen Verhalten
- Ein benutzerdefiniertes Steuerelement und dessen Funktion

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigene Stile

Wenn Sie das Erscheinungsbild von Kanban verändern möchten, passen Sie die entsprechenden *CSS-Variablen* an. Weitere Informationen finden Sie im Abschnitt [**Stylization**](../stylization).

Im folgenden Beispiel sehen Sie, wie benutzerdefinierte Stile auf Kanban angewendet werden können:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
