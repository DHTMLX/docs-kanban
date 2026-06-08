---
sidebar_label: POST /uploads
title: API REST-маршрута POST /uploads
description: Ознакомьтесь с API REST-маршрута POST /uploads для DHTMLX Kanban. Узнайте, как загрузить бинарный файл и получить его ID, имя и URL.
---

# POST `/uploads`

### Описание

@short: Загружает бинарный файл на сервер и возвращает JSON объект с id файла, именем и URL

Этот маршрут обрабатывает **HTTP POST** multipart-запрос, отправляемый на путь `/uploads`.

### Тело запроса

Сервер должен получить бинарный файл через запрос с типом **multipart/form-data**. Как и во всех multipart MIME типах, тело запроса должно содержать:

- заголовок **Content-Disposition**, который должен быть установлен в значение **form-data**
  - атрибут **name** со значением **upload**
  - **filename** - оригинальное имя загружаемого файла
- заголовок **Content-Type** - тип содержимого файла

За один запрос можно отправить только один файл.

Пример:

~~~
------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--
~~~

### Ответ

Маршрут возвращает JSON объект с id файла, именем и URL.

Свойство **isCover** указывает, является ли изображение обложкой (true) или нет (false).

Пример:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

HTTP статус код показывает, успешно ли выполнен запрос (response.status == 200) или произошла ошибка (response.status == 500).

---

**Связанные статьи**: [Working with server](guides/working_with_server.md)