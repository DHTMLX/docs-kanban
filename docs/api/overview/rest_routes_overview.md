---
sidebar_label: REST routes overview
title: REST routes overview
description: You can have an Internal RestDataProvider routes overview of JavaScript Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# REST routes overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page provides a complete list of all REST routes, along with brief descriptions and links to detailed documentation.<br /> Before exploring the details of each route, it's a good idea to review [Working with Server](/guides/working_with_server.md).

---

For easy navigation, you can use the tabs below or the side menu:
- The side menu groups routes by HTTP methods
- The tabs below help quickly identify which routes correspond to specific operations

<div class="custom-border-box">
<Tabs>
<TabItem value="cards" label="cards">
<p>These routes handle operations related to cards:</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_cards_route/"> /cards</a></td>
<td>Retrieves data for all cards and returns a JSON object containing an array of card objects</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_cards_route/"> /cards</a></td>
<td>Creates a new card and returns a JSON object with the ID of the new card</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_route/"> /cards</a></td>
<td>Updates the data of a specified card and returns an empty JSON object</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route/"> /cards/id/move</a></td>
<td>Moves cards to a specified position</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route/"> /cards</a></td>
<td>Deletes the specified card data</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="rows">
<p>These routes are used for managing rows (swimlanes):</p>
<table>
<thead>
<tr>
<th>HTTP method</th>
<th>Route</th>
<th>Description</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_rows_route/"> /rows</a></td>
<td>Retrieves data for all rows and returns a JSON object with an array of row (swimlane) objects</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_rows_route/"> /rows</a></td>
<td>Adds a new row and returns a JSON object containing the row ID</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_route/"> /rows</a></td>
<td>Updates data for a specified row (swimlane) and returns an empty JSON object</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route/"> /rows/id/move</a></td>
<td>Moves a row to a specified position</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route/"> /rows</a></td>
<td>Deletes the data of a specified row</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="columns">
  <p>These routes allow managing columns:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP method</th>
  <th>Route</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_columns_route/"> /columns</a></td>
  <td>Retrieves data for all columns and returns a JSON object with an array of column objects</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_columns_route/"> /columns</a></td>
  <td>Adds a new column and returns a JSON object containing the column ID</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_route/"> /columns</a></td>
  <td>Updates data for a specified column and returns an empty JSON object</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route/"> /columns/id/move</a></td>
  <td>Moves a column to a specified position</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route/"> /columns</a></td>
  <td>Deletes data for a specified column</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="links" label="links">
  <p>These routes are used to manage links:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP method</th>
  <th>Route</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_links_route/"> /links</a></td>
  <td>Retrieves data for all links and returns a JSON object with an array of link objects</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_links_route/"> /links</a></td>
  <td>Creates a new link and returns a JSON object with the new link ID</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route/"> /links</a></td>
  <td>Deletes data for a specified link</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="uploads" label="uploads">
  <p>These routes handle uploads (files sent to the server):</p>
  <table>
  <thead>
  <tr>
  <th>HTTP method</th>
  <th>Route</th>
  <th>Description</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route/"> /uploads</a></td>
  <td>Retrieves the requested binary file from the server</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route/"> /uploads</a></td>
  <td>Uploads a binary file to the server and returns a JSON object containing its ID, name, and URL</td>
  </tr>
  </tbody>
  </table>
</TabItem>

</Tabs>
</div>
