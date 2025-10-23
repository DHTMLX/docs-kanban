---
sidebar_label: Übersicht der REST-Routen
title: Übersicht der REST-Routen
description: Sie finden eine Übersicht der internen RestDataProvider-Routen von JavaScript Kanban in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek. Durchstöbern Sie Entwicklerhandbücher und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Übersicht der REST-Routen

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Diese Seite bietet Ihnen eine Liste aller REST-Routen mit einer kurzen Beschreibung und Links zu Seiten mit weiteren Details.<br/> Bevor Sie sich mit der Beschreibung der einzelnen Routen befassen, wird empfohlen, den Abschnitt [Arbeiten mit dem Server](guides/working_with_server.md) zu lesen.

---

Für eine schnelle Navigation können Sie entweder die untenstehenden Tabs oder das Seitenmenü verwenden:
- Das Seitenmenü zeigt Routen gruppiert nach HTTP-Methoden
- Um schnell zu finden, welche Routen für welche Operationen verwendet werden, nutzen Sie die untenstehenden Tabs

<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="cards" label="Karten">
<p>Verwenden Sie die folgenden Routen, um Operationen an Karten durchzuführen:</p>
<table>
<thead>
<tr>
<th>HTTP-Methode</th>
<th>Route</th>
<th>Beschreibung</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md"> /cards</a></td>
<td>Erhält Daten aller Karten und gibt ein JSON-Objekt mit einem Array von Kartenobjekten zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md"> /cards</a></td>
<td>Erstellt eine neue Karte und gibt ein JSON-Objekt mit einer neuen Karten-ID zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md"> /cards</a></td>
<td>Aktualisiert Daten einer angegebenen Karte und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md"> /cards/id/move</a></td>
<td>Verschiebt Karten an eine angegebene Position</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md"> /cards</a></td>
<td>Löscht Daten einer Karte</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="Zeilen">
<p>Verwenden Sie die folgenden Routen, um Operationen an Zeilen (Swimlanes) durchzuführen:</p>
<table>
<thead>
<tr>
<th>HTTP-Methode</th>
<th>Route</th>
<th>Beschreibung</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md"> /rows</a></td>
<td>Erhält Daten aller Zeilen und gibt ein JSON-Objekt mit einem Array von Objekten mit Zeilen- (Swimlanes-) Daten zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md"> /rows</a></td>
<td>Fügt eine neue Zeile hinzu und gibt ein JSON-Objekt mit der Zeilen-ID zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md"> /rows</a></td>
<td>Aktualisiert Daten einer angegebenen Zeile (Swimlane) und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md"> /rows/id/move</a></td>
<td>Verschiebt eine Zeile an eine angegebene Position</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md"> /rows</a></td>
<td>Löscht Daten einer Zeile</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="Spalten">
    <p>Verwenden Sie die folgenden Routen, um Operationen an Spalten durchzuführen:</p>
    <table>
        <thead>
            <tr>
                <th>HTTP-Methode</th>
                <th>Route</th>
                <th>Beschreibung</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md"> /columns</a></td>
                <td>Erhält Daten aller Spalten und gibt ein JSON-Objekt mit einem Array von Objekten mit Spaltendaten zurück</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md"> /columns</a></td>
                <td>Fügt eine neue Spalte hinzu und gibt ein JSON-Objekt mit der Zeilen-ID zurück</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md"> /columns</a></td>
                <td>Aktualisiert Daten einer angegebenen Spalte und gibt ein leeres JSON-Objekt zurück</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md"> /columns/id/move</a></td>
                <td>Verschiebt eine Spalte an eine angegebene Position</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md"> /columns</a></td>
                <td>Löscht Daten einer Spalte</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="links" label="Verbindungen">
    <p>Verwenden Sie die folgenden Routen, um Operationen an Verbindungen durchzuführen:</p>
    <table>
        <thead>
            <tr>
                <th>HTTP-Methode</th>
                <th>Route</th>
                <th>Beschreibung</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_links_route.md"> /links</a></td>
                <td>Erhält Daten aller Verbindungen und gibt ein JSON-Objekt mit einem Array von Verbindungsobjekten zurück</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_links_route.md"> /links</a></td>
                <td>Erstellt eine neue Verbindung und gibt ein JSON-Objekt mit einer neuen Verbindungs-ID zurück</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md"> /links</a></td>
                <td>Löscht Daten einer Verbindung</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="uploads" label="Uploads">
    <p>Verwenden Sie die folgenden Routen, um Operationen an Uploads (auf den Server hochgeladene Dateien) durchzuführen:</p>
    <table>
        <thead>
            <tr>
                <th>HTTP-Methode</th>
                <th>Route</th>
                <th>Beschreibung</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md"> /uploads</a></td>
                <td>Ruft die angeforderte Binärdatei vom Server ab</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td><a href="api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md"> /uploads</a></td>
                <td>Lädt eine Binärdatei auf den Server hoch und gibt ein JSON-Objekt mit ihrer ID, ihrem Namen und ihrer URL zurück</td>
            </tr>
        </tbody>
    </table>
</TabItem>

</Tabs>
</div>