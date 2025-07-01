---
sidebar_label: Обзор REST маршрутов
title: Обзор REST маршрутов
description: В документации библиотеки DHTMLX JavaScript Kanban вы можете ознакомиться с внутренними маршрутами RestDataProvider для JavaScript Kanban. Изучайте руководства для разработчиков и справочник API, пробуйте примеры кода и живые демонстрации, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# Обзор REST маршрутов

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

На этой странице представлен полный список всех REST маршрутов с кратким описанием и ссылками на подробную документацию.<br /> Перед тем как изучать детали каждого маршрута, рекомендуется ознакомиться с разделом [Работа с сервером](/guides/working_with_server.md).

---

Для удобной навигации вы можете использовать вкладки ниже или боковое меню:
- Боковое меню группирует маршруты по HTTP методам
- Вкладки ниже помогают быстро определить, какие маршруты соответствуют определённым операциям

<div class="custom-border-box">
<Tabs>
<TabItem value="cards" label="карточки">
<p>Эти маршруты обрабатывают операции, связанные с карточками:</p>
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
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_cards_route/"> /cards</a></td>
<td>Получает данные всех карточек и возвращает JSON объект с массивом объектов карточек</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_cards_route/"> /cards</a></td>
<td>Создаёт новую карточку и возвращает JSON объект с ID новой карточки</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_route/"> /cards</a></td>
<td>Обновляет данные указанной карточки и возвращает пустой JSON объект</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route/"> /cards/id/move</a></td>
<td>Перемещает карточки в указанную позицию</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route/"> /cards</a></td>
<td>Удаляет данные указанной карточки</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="ряды">
<p>Эти маршруты используются для управления рядами (swimlanes):</p>
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
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_rows_route/"> /rows</a></td>
<td>Получает данные всех рядов и возвращает JSON объект с массивом объектов рядов (swimlanes)</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_rows_route/"> /rows</a></td>
<td>Добавляет новый ряд и возвращает JSON объект с ID ряда</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_route/"> /rows</a></td>
<td>Обновляет данные указанного ряда (swimlane) и возвращает пустой JSON объект</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route/"> /rows/id/move</a></td>
<td>Перемещает ряд в указанную позицию</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route/"> /rows</a></td>
<td>Удаляет данные указанного ряда</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="колонки">
  <p>Эти маршруты позволяют управлять колонками:</p>
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
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_columns_route/"> /columns</a></td>
  <td>Получает данные всех колонок и возвращает JSON объект с массивом объектов колонок</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_columns_route/"> /columns</a></td>
  <td>Добавляет новую колонку и возвращает JSON объект с ID колонки</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_route/"> /columns</a></td>
  <td>Обновляет данные указанной колонки и возвращает пустой JSON объект</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route/"> /columns/id/move</a></td>
  <td>Перемещает колонку в указанную позицию</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route/"> /columns</a></td>
  <td>Удаляет данные указанной колонки</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="links" label="ссылки">
  <p>Эти маршруты используются для управления ссылками:</p>
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
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_links_route/"> /links</a></td>
  <td>Получает данные всех ссылок и возвращает JSON объект с массивом объектов ссылок</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_links_route/"> /links</a></td>
  <td>Создаёт новую ссылку и возвращает JSON объект с ID новой ссылки</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route/"> /links</a></td>
  <td>Удаляет данные указанной ссылки</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="uploads" label="загрузки">
  <p>Эти маршруты обрабатывают загрузки (файлы, отправленные на сервер):</p>
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
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route/"> /uploads</a></td>
  <td>Получает запрашиваемый двоичный файл с сервера</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route/"> /uploads</a></td>
  <td>Загружает двоичный файл на сервер и возвращает JSON объект с его ID, именем и URL</td>
  </tr>
  </tbody>
  </table>
</TabItem>

</Tabs>
</div>
