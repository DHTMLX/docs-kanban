---
sidebar_label: REST 경로 개요
title: REST 경로 개요
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 JavaScript Kanban의 Internal RestDataProvider 경로 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 체험하며, DHTMLX Kanban의 30일 무료 평가판을 다운로드하세요.
---

# REST 경로 개요

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

이 페이지에서는 모든 REST 경로 목록과 간단한 설명, 그리고 자세한 내용을 확인할 수 있는 페이지 링크를 제공합니다.<br/> 각 경로 설명을 살펴보기 전에 [서버 작업하기](guides/working_with_server.md)를 읽는 것을 권장합니다.

---

빠른 탐색을 위해 아래 탭이나 사이드 메뉴를 사용할 수 있습니다:
- 사이드 메뉴는 HTTP 메서드별로 그룹화된 경로를 보여줍니다.
- 어떤 작업에 어떤 경로를 사용할지 빠르게 찾으려면 아래 탭을 이용하세요.

<div style="border: solid #F8F8F8">
<Tabs>
<TabItem value="cards" label="cards">
<p>카드 작업을 수행하려면 다음 경로를 사용하세요:</p>
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
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_cards_route.md"> /cards</a></td>
<td>모든 카드 데이터를 가져오며, 카드 객체 배열이 포함된 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td><a href="api/provider/rest_routes/post_routes/js_kanban_post_cards_route.md"> /cards</a></td>
<td>새 카드를 생성하며, 새 카드 ID가 포함된 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_route.md"> /cards</a></td>
<td>지정된 카드 데이터를 업데이트하며, 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_cards_move_route.md"> /cards/id/move</a></td>
<td>카드를 지정된 위치로 이동합니다</td>
</tr>

<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_cards_route.md"> /cards</a></td>
<td>카드 데이터를 삭제합니다</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="rows" label="rows">
<p>행(스윔레인) 작업을 수행하려면 다음 경로를 사용하세요:</p>
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
<td><a href="api/provider/rest_routes/get_routes/js_kanban_get_rows_route.md"> /rows</a></td>
<td>모든 행 데이터를 가져오며, 행(스윔레인) 데이터 객체 배열이 포함된 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`POST`</td>
<td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_rows_route.md"> /rows</a></td>
<td>새 행을 추가하며, 행 ID가 포함된 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_route.md"> /rows</a></td>
<td>지정된 행(스윔레인) 데이터를 업데이트하며, 빈 json 객체를 반환합니다</td>
</tr>
<tr>
<td>`PUT`</td>
<td><a href="api/provider/rest_routes/put_routes/js_kanban_put_rows_move_route.md"> /rows/id/move</a></td>
<td>행을 지정된 위치로 이동합니다</td>
</tr>
<tr>
<td>`DELETE`</td>
<td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_rows_route.md"> /rows</a></td>
<td>행 데이터를 삭제합니다</td>
</tr>
</tbody>
</table>
</TabItem>

<TabItem value="columns" label="columns">
    <p>열 작업을 수행하려면 다음 경로를 사용하세요:</p>
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
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_columns_route.md"> /columns</a></td>
                <td>모든 열 데이터를 가져오며, 열 데이터 객체 배열이 포함된 json 객체를 반환합니다</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_columns_route.md"> /columns</a></td>
                <td>새 열을 추가하며, 행 ID가 포함된 json 객체를 반환합니다</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_route.md"> /columns</a></td>
                <td>지정된 열 데이터를 업데이트하며, 빈 json 객체를 반환합니다</td>
            </tr>
            <tr>
                <td>`PUT`</td>
                <td><a href="api/provider/rest_routes/put_routes/js_kanban_put_columns_move_route.md"> /columns/id/move</a></td>
                <td>열을 지정된 위치로 이동합니다</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_columns_route.md"> /columns</a></td>
                <td>열 데이터를 삭제합니다</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="links" label="links">
    <p>링크 작업을 수행하려면 다음 경로를 사용하세요:</p>
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
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_links_route.md"> /links</a></td>
                <td>모든 링크 데이터를 가져오며, 링크 객체 배열이 포함된 json 객체를 반환합니다</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td ><a href="api/provider/rest_routes/post_routes/js_kanban_post_links_route.md"> /links</a></td>
                <td>새 링크를 생성하며, 새 링크 ID가 포함된 json 객체를 반환합니다</td>
            </tr>
            <tr>
                <td>`DELETE`</td>
                <td><a href="api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md"> /links</a></td>
                <td>링크 데이터를 삭제합니다</td>
            </tr>
        </tbody>
    </table>
</TabItem>

<TabItem value="uploads" label="uploads">
    <p>업로드(서버에 업로드된 파일) 작업을 수행하려면 다음 경로를 사용하세요:</p>
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
                <td><a href="api/provider/rest_routes/get_routes/js_kanban_get_uploads_route.md"> /uploads</a></td>
                <td>서버에서 요청된 이진 파일을 가져옵니다</td>
            </tr>
            <tr>
                <td>`POST`</td>
                <td><a href="api/provider/rest_routes/post_routes/js_kanban_post_uploads_route.md"> /uploads</a></td>
                <td>서버에 이진 파일을 업로드하며, 파일의 id, 이름, url이 포함된 json 객체를 반환합니다</td>
            </tr>
        </tbody>
    </table>
</TabItem>

</Tabs>
</div>