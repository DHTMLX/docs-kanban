---
sidebar_label: REST routes overview
title: REST routes overview
description: You can find an overview of Internal RestDataProvider routes for JavaScript Kanban in the DHTMLX JavaScript Kanban library documentation. Explore developer guides and API references, experiment with code samples and live demos, and download a free 30-day trial version of DHTMLX Kanban.
---

# REST routes overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page lists all REST routes along with brief descriptions and links to detailed pages.<br/> It’s a good idea to check out [Working with Server](guides/working_with_server.md) before exploring the individual routes.

---

For easy navigation, you can use either the tabs below or the side menu:
- The side menu organizes routes by HTTP methods
- The tabs below help you quickly identify which routes correspond to different operations

<div style="border: solid #F8F8F8">
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
<td>[/cards](api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md)</td>
<td>Retrieves all cards and returns a JSON object containing an array of card objects</td>
</tr>
<tr>
<td>`POST`</td>
<td>[/cards](api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md)</td>
<td>Adds a new card and returns a JSON object with the new card’s ID</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/cards](api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md)</td>
<td>Updates a specific card’s data and returns an empty JSON object</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/cards/id/move](api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md)</td>
<td>Moves cards to a designated position</td>
</tr>

<tr>
<td>`DELETE`</td>
<td>[/cards](api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md)</td>
<td>Removes a card’s data</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="rows">
<p>These routes cover operations on rows (swimlanes):</p>
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
<td>[/rows](api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md)</td>
<td>Retrieves all rows and returns a JSON object with an array of swimlane data objects</td>
</tr>
<tr>
<td>`POST`</td>
<td >[/rows](api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md)</td>
<td>Adds a new row and returns a JSON object containing the row ID</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/rows](api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md)</td>
<td>Updates a specific row’s data and returns an empty JSON object</td>
</tr>
<tr>
<td>`PUT`</td>
<td>[/rows/id/move](api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md)</td>
<td>Moves a row to a specified position</td>
</tr>
<tr>
<td>`DELETE`</td>
<td>[/rows](api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md)</td>
<td>Deletes data for a row</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="columns">
    <p>These routes handle operations on columns:</p>
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
                <td>[/columns](api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md)</td>
                <td>Retrieves all columns and returns a JSON object with an array of column data objects</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td >[/columns](api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md)</td>
                <td>Adds a new column and returns a JSON object with the column ID</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td>[/columns](api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md)</td>
                <td>Updates data for a specific column and returns an empty JSON object</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td>[/columns/id/move](api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md)</td>
                <td>Moves a column to a chosen position</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td>[/columns](api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md)</td>
                <td>Deletes a column’s data</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="links" label="links">
    <p>These routes are for managing links:</p>
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
                <td>[/links](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)</td>
                <td>Retrieves all links and returns a JSON object with an array of link objects</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td >[/links](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)</td>
                <td>Creates a new link and returns a JSON object with the new link ID</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td>[/links](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)</td>
                <td>Deletes a link’s data</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="uploads" label="uploads">
    <p>These routes manage uploads (files sent to the server):</p>
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
                <td>[/uploads](api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md)</td>
                <td>Fetches a requested binary file from the server</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td>[/uploads](api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md)</td>
                <td>Uploads a binary file to the server and returns a JSON object with its ID, name, and URL</td>
            </tr>
        </tbody>
    </table>
</TabItem>

</Tabs>
</div>