---
sidebar_label: POST /uploads
title: POST /uploads
description: DHTMLX JavaScript Kanban 라이브러리 문서에서 POST /uploads REST 경로에 대해 알아보세요. 개발자 가이드와 API 참조를 탐색하고, 코드 예제와 라이브 데모를 시도해보며, DHTMLX Kanban의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# POST `/uploads`

### 설명

@short: 이 경로는 서버에 이진 파일을 업로드하고 파일 ID, 이름, URL이 포함된 json 객체를 반환합니다.

이 경로는 `/uploads` 경로로 전송되는 **HTTP POST** 멀티파트 요청을 처리합니다.

### 페이로드

서버는 **multipart/form-data** 요청을 통해 이진 파일을 받아야 합니다. 모든 멀티파트 MIME 타입과 마찬가지로, 요청 본문에는 다음이 포함되어야 합니다:

- **Content-Disposition** 헤더가 **form-data**로 설정되어야 하며,
  - **name** 속성은 **upload** 값을 가져야 합니다.
  - **filename** - 업로드된 파일의 원본 파일 이름
- **Content-Type** 헤더 - 파일 데이터 콘텐츠의 유형

요청당 하나의 파일만 전송할 수 있습니다.

예시:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### 응답

이 경로는 파일 ID, 이름, URL이 포함된 json 객체를 반환합니다.

**isCover** 속성은 이미지가 커버 이미지인지 여부를 나타냅니다 (true는 커버 이미지, false는 아님).

예시:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

HTTP 상태 코드는 요청 성공 여부를 나타냅니다 (response.status == 200은 성공, response.status == 500은 실패).

---

**관련 문서**: [서버 작업하기](guides/working_with_server.md)