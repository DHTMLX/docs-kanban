---
sidebar_label: REST 路由概览
title: REST 路由概览
description: 您可以在 DHTMLX JavaScript 看板库的文档中查看 JavaScript 看板的内部 RestDataProvider 路由概览。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载 DHTMLX 看板的免费 30 天试用版。
---

# REST 路由概览

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本页提供所有 REST 路由的列表，包含简短描述及指向详细说明页面的链接。<br/> 在深入了解每个路由描述之前，建议先阅读[与服务器交互](guides/working_with_server.md)。

---

快速导航可使用下方标签页或侧边菜单：
- 侧边菜单按 HTTP 方法分组显示路由
- 若想快速查找适用于不同操作的路由，请使用下方标签页

<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="cards" label="卡片">
<p>使用以下路由对卡片执行操作：</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>路由</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md"> /cards</a></td>
<td>获取所有卡片数据，返回包含卡片对象数组的 JSON 对象</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md"> /cards</a></td>
<td>创建新卡片，返回包含新卡片 ID 的 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md"> /cards</a></td>
<td>更新指定卡片的数据，返回空 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md"> /cards/id/move</a></td>
<td>将卡片移动到指定位置</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md"> /cards</a></td>
<td>删除卡片数据</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="行">
<p>使用以下路由对行（泳道）执行操作：</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>路由</th>
<th>描述</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md"> /rows</a></td>
<td>获取所有行数据，返回包含行（泳道）对象数组的 JSON 对象</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md"> /rows</a></td>
<td>添加新行，返回包含行 ID 的 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md"> /rows</a></td>
<td>更新指定行（泳道）数据，返回空 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md"> /rows/id/move</a></td>
<td>将行移动到指定位置</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md"> /rows</a></td>
<td>删除行数据</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="列">
    <p>使用以下路由对列执行操作：</p>
    <table>
        <thead>
            <tr>
                <th>HTTP 方法</th>
                <th>路由</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md"> /columns</a></td>
                <td>获取所有列数据，返回包含列对象数组的 JSON 对象</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md"> /columns</a></td>
                <td>添加新列，返回包含列 ID 的 JSON 对象</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md"> /columns</a></td>
                <td>更新指定列数据，返回空 JSON 对象</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md"> /columns/id/move</a></td>
                <td>将列移动到指定位置</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md"> /columns</a></td>
                <td>删除列数据</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="links" label="链接">
    <p>使用以下路由对链接执行操作：</p>
    <table>
        <thead>
            <tr>
                <th>HTTP 方法</th>
                <th>路由</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_links_route.md"> /links</a></td>
                <td>获取所有链接数据，返回包含链接对象数组的 JSON 对象</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_links_route.md"> /links</a></td>
                <td>创建新链接，返回包含新链接 ID 的 JSON 对象</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md"> /links</a></td>
                <td>删除链接数据</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="uploads" label="上传">
    <p>使用以下路由对上传（上传到服务器的文件）执行操作：</p>
    <table>
        <thead>
            <tr>
                <th>HTTP 方法</th>
                <th>路由</th>
                <th>描述</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>`GET`</td>
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md"> /uploads</a></td>
                <td>从服务器获取请求的二进制文件</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td><a href="api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md"> /uploads</a></td>
                <td>上传二进制文件至服务器，返回包含文件 id、名称和 url 的 JSON 对象</td>
            </tr>
        </tbody>
    </table>
</TabItem>

</Tabs>
</div>