---
sidebar_label: REST routes overview
title: REST routes overview
description: You can have an Internal RestDataProvider routes overview of JavaScript Kanban in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# REST routes overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page gives you the list of all REST routes with their short description and links to pages with more details.<br> Before you dive into each route description, it's recommended to read about [Working with Server](guides/working_with_server.md).

---

For quick navigation you can use either the tabs below or the side menu:
- The side menu shows routes grouped by HTTP methods
- To quickly find which routes to use for which operations, use the tabs below

<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="cards" label="cards">
<p>Use the next routes to perform operations on cards:</p>
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
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md"> /cards</a></td>
<td>Gets data on all cards and returns a json object with an array of cards objects</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md"> /cards</a></td>
<td>Creates a new card and returns a json object with a new card ID</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md"> /cards</a></td>
<td>Updates data on a specified card and returns an empty json object</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md"> /cards/id/move</a></td>
<td>Moves cards to a specified position</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md"> /cards</a></td>
<td>Deletes data on a card</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="rows">
<p>Use the next routes to perform operations on rows (swimlanes):</p>
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
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md"> /rows</a></td>
<td>Gets data on all rows and returns a json object with an array of objects with rows (swimlanes) data</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md"> /rows</a></td>
<td>Adds a new row and returns a json object with the row ID in it</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md"> /rows</a></td>
<td>Updates data on a specified row (swimlane) and returns an empty json object</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md"> /rows/id/move</a></td>
<td>Moves a row to a specified position</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md"> /rows</a></td>
<td>Deletes data on a row</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="columns">
    <p>Use the next routes to perform operations on columns:</p>
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
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md"> /columns</a></td>
                <td>Gets data on all columns and returns a json object with an array of objects with columns data</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md"> /columns</a></td>
                <td>Adds a new column and returns a json object with the row ID in it</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md"> /columns</a></td>
                <td>Updates data on a specified column and returns an empty json object</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md"> /columns/id/move</a></td>
                <td>Moves a column to a specified position</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md"> /columns</a></td>
                <td>Deletes data on a column</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="links" label="links">
    <p>Use the next routes to perform operations on links:</p>
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
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_links_route.md"> /links</a></td>
                <td>Gets data on all links and returns a json object with an array of links objects</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_links_route.md"> /links</a></td>
                <td>Creates a new link and returns a json object with a new link ID</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md"> /links</a></td>
                <td>Deletes data on a link</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="uploads" label="uploads">
    <p>Use the next routes to perform operations on uploads (files uploaded to the server):</p>
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
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md"> /uploads</a></td>
                <td>Gets the requested binary file from the server</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td><a href="api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md"> /uploads</a></td>
                <td>Uploads a binary file to the server and returns a json object with its id, name, and url</td>
            </tr>
        </tbody>
    </table>
</TabItem>

</Tabs>
</div>
