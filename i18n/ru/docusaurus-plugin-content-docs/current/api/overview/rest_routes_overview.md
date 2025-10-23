---
sidebar_label: Обзор REST маршрутов
title: Обзор REST маршрутов
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете ознакомиться с внутренними маршрутами Internal RestDataProvider JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Обзор REST маршрутов

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

На этой странице представлен список всех REST маршрутов с кратким описанием и ссылками на страницы с подробной информацией.<br/> Перед тем как изучать описание каждого маршрута, рекомендуется ознакомиться с разделом [Работа с сервером](guides/working_with_server.md).

---

Для быстрой навигации вы можете использовать либо вкладки ниже, либо боковое меню:
- Боковое меню показывает маршруты, сгруппированные по HTTP методам
- Чтобы быстро найти нужные маршруты для определённых операций, используйте вкладки ниже

<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="cards" label="карточки">
<p>Используйте следующие маршруты для операций с карточками:</p>
<table>
<thead>
<tr>
<th>HTTP метод</th>
<th>Маршрут</th>
<th>Описание</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md"> /cards</a></td>
<td>Получает данные по всем карточкам и возвращает JSON объект с массивом объектов карточек</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md"> /cards</a></td>
<td>Создаёт новую карточку и возвращает JSON объект с ID новой карточки</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md"> /cards</a></td>
<td>Обновляет данные указанной карточки и возвращает пустой JSON объект</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md"> /cards/id/move</a></td>
<td>Перемещает карточки на указанную позицию</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md"> /cards</a></td>
<td>Удаляет данные карточки</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="ряды">
<p>Используйте следующие маршруты для операций с рядами (swimlanes):</p>
<table>
<thead>
<tr>
<th>HTTP метод</th>
<th>Маршрут</th>
<th>Описание</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md"> /rows</a></td>
<td>Получает данные по всем рядам и возвращает JSON объект с массивом объектов с данными рядов (swimlanes)</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md"> /rows</a></td>
<td>Добавляет новый ряд и возвращает JSON объект с ID ряда</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md"> /rows</a></td>
<td>Обновляет данные указанного ряда (swimlane) и возвращает пустой JSON объект</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md"> /rows/id/move</a></td>
<td>Перемещает ряд на указанную позицию</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md"> /rows</a></td>
<td>Удаляет данные ряда</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="колонки">
    <p>Используйте следующие маршруты для операций с колонками:</p>
    <table>
        <thead>
            <tr>
                <th>HTTP метод</th>
                <th>Маршрут</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md"> /columns</a></td>
                <td>Получает данные по всем колонкам и возвращает JSON объект с массивом объектов с данными колонок</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md"> /columns</a></td>
                <td>Добавляет новую колонку и возвращает JSON объект с ID ряда</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md"> /columns</a></td>
                <td>Обновляет данные указанной колонки и возвращает пустой JSON объект</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md"> /columns/id/move</a></td>
                <td>Перемещает колонку на указанную позицию</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md"> /columns</a></td>
                <td>Удаляет данные колонки</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="links" label="ссылки">
    <p>Используйте следующие маршруты для операций со ссылками:</p>
    <table>
        <thead>
            <tr>
                <th>HTTP метод</th>
                <th>Маршрут</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_links_route.md"> /links</a></td>
                <td>Получает данные по всем ссылкам и возвращает JSON объект с массивом объектов ссылок</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_links_route.md"> /links</a></td>
                <td>Создаёт новую ссылку и возвращает JSON объект с ID новой ссылки</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md"> /links</a></td>
                <td>Удаляет данные ссылки</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="uploads" label="загрузки">
    <p>Используйте следующие маршруты для операций с загрузками (файлы, загруженные на сервер):</p>
    <table>
        <thead>
            <tr>
                <th>HTTP метод</th>
                <th>Маршрут</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md"> /uploads</a></td>
                <td>Получает запрашиваемый бинарный файл с сервера</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td><a href="api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md"> /uploads</a></td>
                <td>Загружает бинарный файл на сервер и возвращает JSON объект с его id, именем и url</td>
            </tr>
        </tbody>
    </table>
</TabItem>

</Tabs>
</div>