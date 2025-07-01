---
sidebar_label: POST /uploads
title: POST /uploads
description: Вы можете ознакомиться с REST маршрутом POST /uploads в документации библиотеки DHTMLX JavaScript Kanban. Изучайте руководства для разработчиков и справочник по API, пробуйте примеры кода и живые демо, а также скачивайте бесплатную 30-дневную пробную версию DHTMLX Kanban.
---

# POST `/uploads`

### Описание

@short: Загружает бинарный файл на сервер и возвращает JSON объект с id файла, именем и URL

Этот маршрут принимает **HTTP POST** multipart-запрос, отправленный на эндпоинт `/uploads`.

### Тело запроса

Сервер ожидает бинарный файл, отправленный через запрос **multipart/form-data**. Как и все multipart MIME запросы, тело должно содержать:

- заголовок **Content-Disposition** со значением **form-data**
  - атрибут **name** со значением **upload**
  - поле **filename** с оригинальным именем загружаемого файла
- заголовок **Content-Type**, указывающий тип данных файла

В каждом запросе разрешён только один файл.

Пример:

~~~

------WebKitFormBoundarySlwgXDBw7kcKSI4p
Content-Disposition: form-data; name="upload"; filename="myImage.png"
Content-Type: image/png

------WebKitFormBoundarySlwgXDBw7kcKSI4p--

~~~

### Ответ

Сервер возвращает JSON объект, содержащий id файла, имя и URL.

Свойство **isCover** указывает, является ли изображение обложкой (`true`) или нет (`false`).

Пример:

~~~ json
{
   "id":4,
   "name":"myImage.png",
   "url":"http://localhost:3000/uploads/4/myImage.png",
   "isCover":false
}
~~~

HTTP статус код указывает, был ли запрос успешным (`response.status == 200`) или произошла ошибка (`response.status == 500`).

---

**Связанные статьи**: [Работа с сервером](/guides/working_with_server.md)
