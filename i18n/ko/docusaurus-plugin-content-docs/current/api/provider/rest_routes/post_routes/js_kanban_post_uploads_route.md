---
sidebar_label: POST /uploads
title: POST /uploads
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /uploads REST 경로에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도하며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# POST `/uploads`

### 설명

@short: 이진 파일을 서버에 업로드하고 파일 ID, 이름, URL이 포함된 JSON 객체를 반환합니다.

이 경로는 `/uploads` 엔드포인트로 전송되는 **HTTP POST** 멀티파트 요청을 받습니다.

### 페이로드

서버는 **multipart/form-data** 요청을 통해 전송된 이진 파일을 기대합니다. 모든 멀티파트 MIME 요청과 마찬가지로, 본문에는 다음이 포함되어야 합니다:

- **Content-Disposition** 헤더가 **form-data**로 설정되어야 하며
  - **name** 속성은 **upload** 값을 가져야 합니다.
  - **filename** 필드는 업로드된 파일의 원래 이름을 포함해야 합니다.
- 파일 데이터 유형을 지정하는 **Content-Type** 헤더

각 요청에는 하나의 파일만 허용됩니다.

예시:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### 응답

서버는 파일의 id, 이름, url이 포함된 JSON 객체로 응답합니다.

**isCover** 속성은 이미지가 커버 이미지인지(`true`) 아닌지(`false`)를 나타냅니다.

예시:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

HTTP 상태 코드는 요청이 성공했는지(`response.status == 200`) 또는 오류가 발생했는지(`response.status == 500`)를 나타냅니다.

---

**관련 문서**: [Working with server](/guides/working_with_server.md)
