---
sidebar_label: Übersicht der REST-Routen
title: Übersicht der REST-Routen
description: Sie können eine interne Übersicht der RestDataProvider-Routen von JavaScript Kanban in der Dokumentation der DHTMLX JavaScript Kanban-Bibliothek finden. Durchstöbern Sie Entwicklerleitfäden und API-Referenzen, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Kanban herunter.
---

# Übersicht der REST-Routen

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Diese Seite bietet eine vollständige Liste aller REST-Routen mit kurzen Beschreibungen und Links zur detaillierten Dokumentation.<br /> Bevor Sie die Details jeder Route erkunden, empfiehlt es sich, [Arbeiten mit dem Server](/guides/working_with_server.md) durchzulesen.

---

Für eine einfache Navigation können Sie die untenstehenden Tabs oder das Seitenmenü verwenden:
- Das Seitenmenü gruppiert die Routen nach HTTP-Methoden
- Die untenstehenden Tabs helfen dabei, schnell zu erkennen, welche Routen zu bestimmten Operationen gehören

<div class="custom-border-box">
<Tabs>
<TabItem value="cards" label="Karten">
<p>Diese Routen behandeln Operationen im Zusammenhang mit Karten:</p>
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
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_cards_route/"> /cards</a></td>
<td>Ruft Daten aller Karten ab und gibt ein JSON-Objekt mit einem Array von Kartenobjekten zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_cards_route/"> /cards</a></td>
<td>Erstellt eine neue Karte und gibt ein JSON-Objekt mit der ID der neuen Karte zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_route/"> /cards</a></td>
<td>Aktualisiert die Daten einer angegebenen Karte und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route/"> /cards/id/move</a></td>
<td>Verschiebt Karten an eine angegebene Position</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route/"> /cards</a></td>
<td>Löscht die Daten der angegebenen Karte</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="Zeilen">
<p>Diese Routen werden zur Verwaltung von Zeilen (Swimlanes) verwendet:</p>
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
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_rows_route/"> /rows</a></td>
<td>Ruft Daten aller Zeilen ab und gibt ein JSON-Objekt mit einem Array von Zeilen-(Swimlane)-Objekten zurück</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_rows_route/"> /rows</a></td>
<td>Fügt eine neue Zeile hinzu und gibt ein JSON-Objekt mit der Zeilen-ID zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_route/"> /rows</a></td>
<td>Aktualisiert Daten einer angegebenen Zeile (Swimlane) und gibt ein leeres JSON-Objekt zurück</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route/"> /rows/id/move</a></td>
<td>Verschiebt eine Zeile an eine angegebene Position</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route/"> /rows</a></td>
<td>Löscht die Daten einer angegebenen Zeile</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="Spalten">
  <p>Diese Routen ermöglichen die Verwaltung von Spalten:</p>
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
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_columns_route/"> /columns</a></td>
  <td>Ruft Daten aller Spalten ab und gibt ein JSON-Objekt mit einem Array von Spaltenobjekten zurück</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_columns_route/"> /columns</a></td>
  <td>Fügt eine neue Spalte hinzu und gibt ein JSON-Objekt mit der Spalten-ID zurück</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_route/"> /columns</a></td>
  <td>Aktualisiert Daten einer angegebenen Spalte und gibt ein leeres JSON-Objekt zurück</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route/"> /columns/id/move</a></td>
  <td>Verschiebt eine Spalte an eine angegebene Position</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route/"> /columns</a></td>
  <td>Löscht die Daten einer angegebenen Spalte</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="links" label="Links">
  <p>Diese Routen werden zur Verwaltung von Links verwendet:</p>
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
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_links_route/"> /links</a></td>
  <td>Ruft Daten aller Links ab und gibt ein JSON-Objekt mit einem Array von Link-Objekten zurück</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_links_route/"> /links</a></td>
  <td>Erstellt einen neuen Link und gibt ein JSON-Objekt mit der neuen Link-ID zurück</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route/"> /links</a></td>
  <td>Löscht die Daten eines angegebenen Links</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="uploads" label="Uploads">
  <p>Diese Routen behandeln Uploads (Dateien, die an den Server gesendet werden):</p>
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
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route/"> /uploads</a></td>
  <td>Ruft die angeforderte Binärdatei vom Server ab</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route/"> /uploads</a></td>
  <td>Lädt eine Binärdatei auf den Server hoch und gibt ein JSON-Objekt mit deren ID, Name und URL zurück</td>
  </tr>
  </tbody>
  </table>
</TabItem>

</Tabs>
</div>
