---
sidebar_label: Anpassung
title: Anpassung
description: In der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek erfahren Sie mehr über die Anpassungsmöglichkeiten. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Kanban herunter.
---

# Anpassung

Neben der Konfiguration von Kanban können Sie auch das Aussehen und Verhalten individuell anpassen. Das Widget ermöglicht es Ihnen, eine eigene Vorlage für Karten festzulegen, das Kontextmenü für Karten, Spalten und Zeilen zu modifizieren, die Struktur und Funktionalität der Toolbar zu verändern sowie eigene CSS-Stile auf Kanban anzuwenden.

## Eigene Karten

Um Karten mit einer eigenen Vorlage darzustellen, können Sie die [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md)-Eigenschaft verwenden. Dies ist eine Callback-Funktion, mit der Sie gewünschte Stile und Logik definieren und auf Kanban anwenden können. Siehe folgendes Beispiel:

<iframe src="https://snippet.dhtmlx.com/8rhdq81d?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigenes Kontextmenü

Um das Kontextmenü für Karten, Spalten und Zeilen anzupassen, können Sie die entsprechenden Eigenschaften [`cardShape`](api/config/js_kanban_cardshape_config.md), [`columnShape`](api/config/js_kanban_columnshape_config.md) und [`rowShape`](api/config/js_kanban_rowshape_config.md) verwenden. Siehe folgendes Beispiel:

<iframe src="https://snippet.dhtmlx.com/8eo65gr5?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigene Toolbar

Um die Struktur und Funktionalität der Toolbar anzupassen, können Sie die [`items`](api/config/toolbar_items_config.md)-Eigenschaft verwenden. In diesem Array können Sie die benötigten Steuerelemente definieren, sie in der gewünschten Reihenfolge anordnen und ihr Verhalten anpassen.

Im folgenden Beispiel sehen Sie, wie Sie Folgendes anpassen können:

- die Reihenfolge der Steuerelemente
- eine Suchleiste und deren Verhalten
- ein Sortier-Steuerelement und dessen Verhalten
- ein eigenes Steuerelement und dessen Verhalten

<iframe src="https://snippet.dhtmlx.com/s5r5h4ju?mode=js&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Eigene Stile

Sie können das Aussehen von Kanban anpassen, indem Sie die Werte der entsprechenden *CSS-Variablen* ändern. Weitere Informationen finden Sie im Abschnitt [**Stilisierung**](guides/stylization.md).

Im folgenden Beispiel sehen Sie, wie Sie eigene Stile auf Kanban anwenden können:

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html&tag=kanban" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>