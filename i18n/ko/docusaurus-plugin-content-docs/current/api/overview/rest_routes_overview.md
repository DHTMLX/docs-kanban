---
sidebar_label: REST 경로 개요
title: REST 경로 개요
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 JavaScript Kanban의 Internal RestDataProvider 경로 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드하세요.
---

# REST 경로 개요

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

이 페이지에서는 모든 REST 경로의 전체 목록과 간략한 설명, 상세 문서 링크를 제공합니다.<br /> 각 경로의 세부 내용을 살펴보기 전에 [서버 작업하기](/guides/working_with_server.md)를 먼저 확인하는 것이 좋습니다.

---

편리한 탐색을 위해 아래 탭 또는 사이드 메뉴를 사용할 수 있습니다:
- 사이드 메뉴는 HTTP 메서드별로 경로를 그룹화합니다
- 아래 탭은 특정 작업에 해당하는 경로를 빠르게 식별하는 데 도움이 됩니다

<div class="custom-border-box">
<Tabs>
<TabItem value="cards" label="cards">
<p>이 경로들은 카드 관련 작업을 처리합니다:</p>
<table>
<thead>
<tr>
<th>HTTP 메서드</th>
<th>경로</th>
<th>설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_cards_route/"> /cards</a></td>
<td>모든 카드 데이터를 조회하고 카드 객체 배열을 포함하는 JSON 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_cards_route/"> /cards</a></td>
<td>새 카드를 생성하고 새 카드 ID를 포함한 JSON 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_route/"> /cards</a></td>
<td>지정된 카드의 데이터를 업데이트하고 빈 JSON 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route/"> /cards/id/move</a></td>
<td>카드를 지정된 위치로 이동합니다</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route/"> /cards</a></td>
<td>지정된 카드 데이터를 삭제합니다</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="rows">
<p>이 경로들은 행(스윔레인)을 관리하는 데 사용됩니다:</p>
<table>
<thead>
<tr>
<th>HTTP 메서드</th>
<th>경로</th>
<th>설명</th>

</tr>
</thead>
<tbody>
<tr>
<td>`GET`</td>
<td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_rows_route/"> /rows</a></td>
<td>모든 행 데이터를 조회하고 행(스윔레인) 객체 배열을 포함하는 JSON 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_rows_route/"> /rows</a></td>
<td>새 행을 추가하고 행 ID를 포함하는 JSON 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_route/"> /rows</a></td>
<td>지정된 행(스윔레인)의 데이터를 업데이트하고 빈 JSON 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route/"> /rows/id/move</a></td>
<td>행을 지정된 위치로 이동합니다</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route/"> /rows</a></td>
<td>지정된 행 데이터를 삭제합니다</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="columns">
  <p>이 경로들은 열을 관리할 수 있습니다:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP 메서드</th>
  <th>경로</th>
  <th>설명</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_columns_route/"> /columns</a></td>
  <td>모든 열 데이터를 조회하고 열 객체 배열을 포함하는 JSON 객체를 반환합니다</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_columns_route/"> /columns</a></td>
  <td>새 열을 추가하고 열 ID를 포함하는 JSON 객체를 반환합니다</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_route/"> /columns</a></td>
  <td>지정된 열 데이터를 업데이트하고 빈 JSON 객체를 반환합니다</td>
  </tr>
  <tr>
                <td>`PUT`</td>
  <td><a href="/api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route/"> /columns/id/move</a></td>
  <td>열을 지정된 위치로 이동합니다</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route/"> /columns</a></td>
  <td>지정된 열 데이터를 삭제합니다</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="links" label="links">
  <p>이 경로들은 링크를 관리하는 데 사용됩니다:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP 메서드</th>
  <th>경로</th>
  <th>설명</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_links_route/"> /links</a></td>
  <td>모든 링크 데이터를 조회하고 링크 객체 배열을 포함하는 JSON 객체를 반환합니다</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td ><a href="/api/provider/rest_routes/post_routes/js_kanban_post_links_route/"> /links</a></td>
  <td>새 링크를 생성하고 새 링크 ID를 포함하는 JSON 객체를 반환합니다</td>
  </tr>
  <tr>
                <td>`DELETE`</td>
  <td><a href="/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route/"> /links</a></td>
  <td>지정된 링크 데이터를 삭제합니다</td>
  </tr>
  </tbody>
  </table>
</TabItem>

<TabItem value="uploads" label="uploads">
  <p>이 경로들은 업로드(서버로 전송된 파일)를 처리합니다:</p>
  <table>
  <thead>
  <tr>
  <th>HTTP 메서드</th>
  <th>경로</th>
  <th>설명</th>
  </tr>
  </thead>
  <tbody>
  <tr>
                <td>`GET`</td>
  <td><a href="/api/provider/rest_routes/get_routes/js_kanban_get_uploads_route/"> /uploads</a></td>
  <td>서버에서 요청된 바이너리 파일을 가져옵니다</td>
  </tr>
  <tr>
                <td>`POST`</td>
  <td><a href="/api/provider/rest_routes/post_routes/js_kanban_post_uploads_route/"> /uploads</a></td>
  <td>바이너리 파일을 서버에 업로드하고 ID, 이름, URL을 포함하는 JSON 객체를 반환합니다</td>
  </tr>
  </tbody>
  </table>
</TabItem>

</Tabs>
</div>
