---
sidebar_label: REST 路由概览
title: REST 路由概览
description: 您可以在 DHTMLX JavaScript 看板库的文档中查看 JavaScript 看板的 Internal RestDataProvider 路由概览。浏览开发者指南和 API 参考，试用代码示例和在线演示，并下载免费的 30 天评估版 DHTMLX 看板。
---

# REST 路由概览

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

本页面提供了所有 REST 路由的完整列表，附带简要说明和详细文档链接。<br />在深入了解每个路由的细节之前，建议先阅读[与服务器交互](/guides/working_with_server.md)。

---

为了便于导航，您可以使用下面的标签页或侧边菜单:
- 侧边菜单按 HTTP 方法对路由进行分组
- 下面的标签页可帮助快速识别对应具体操作的路由

<div class="custom-border-box">
<Tabs>
<TabItem value="cards" label="卡片">
<p>这些路由处理与卡片相关的操作:</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>路由</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_cards_route/"> /cards</a></td>
<td>获取所有卡片的数据，返回包含卡片对象数组的 JSON 对象</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_cards_route/"> /cards</a></td>
<td>创建新卡片，返回包含新卡片 ID 的 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_route/"> /cards</a></td>
<td>更新指定卡片的数据，返回空的 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route/"> /cards/id/move</a></td>
<td>将卡片移动到指定位置</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route/"> /cards</a></td>
<td>删除指定卡片的数据</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="行">
<p>这些路由用于管理行（泳道）:</p>
<table>
<thead>
<tr>
<th>HTTP 方法</th>
<th>路由</th>
<th>说明</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_rows_route/"> /rows</a></td>
<td>获取所有行的数据，返回包含行（泳道）对象数组的 JSON 对象</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_rows_route/"> /rows</a></td>
<td>添加新行，返回包含行 ID 的 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_route/"> /rows</a></td>
<td>更新指定行（泳道）数据，返回空的 JSON 对象</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route/"> /rows/id/move</a></td>
<td>将行移动到指定位置</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route/"> /rows</a></td>
<td>删除指定行的数据</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="列">
  <p>这些路由允许管理列:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP 方法</th>
  <th>路由</th>
  <th>说明</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_columns_route/"> /columns</a></td>
  <td>获取所有列的数据，返回包含列对象数组的 JSON 对象</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_columns_route/"> /columns</a></td>
  <td>添加新列，返回包含列 ID 的 JSON 对象</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_route/"> /columns</a></td>
  <td>更新指定列的数据，返回空的 JSON 对象</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route/"> /columns/id/move</a></td>
  <td>将列移动到指定位置</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route/"> /columns</a></td>
  <td>删除指定列的数据</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="links" label="链接">
  <p>这些路由用于管理链接:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP 方法</th>
  <th>路由</th>
  <th>说明</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_links_route/"> /links</a></td>
  <td>获取所有链接的数据，返回包含链接对象数组的 JSON 对象</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_links_route/"> /links</a></td>
  <td>创建新链接，返回包含新链接 ID 的 JSON 对象</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route/"> /links</a></td>
  <td>删除指定链接的数据</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="uploads" label="上传">
  <p>这些路由处理上传（发送到服务器的文件）:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP 方法</th>
  <th>路由</th>
  <th>说明</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route/"> /uploads</a></td>
  <td>从服务器获取请求的二进制文件</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route/"> /uploads</a></td>
  <td>上传二进制文件到服务器，返回包含文件 ID、名称和 URL 的 JSON 对象</td>
  </tr>
  </tbody>
  </table>
</TabItem>

</Tabs>
</div>
