---
sidebar_label: Localization
title: Localization
description: You can study developer and user guides in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---
# Localization

You can localize labels in the interface of JavaScript Kanban and present it in any necessary language. You just need to provide localized strings for labels and apply your locale to the component.

## Default locale

The English locale is used by default:

~~~js
const en = {
		lang: "en",
		__dates: {
				days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				months: [
		        "January",
		        "February",
		        "March",
		        "April",
		        "May",
		        "June",
		        "July",
		        "August",
		        "September",
		        "October",
		        "November",
		        "December"
		    ]
		},
		kanban: {
				Save: "Save",
				Close: "Close",
				Delete: "Delete",
				Name: "Name",
				Description: "Description",
				Type: "Type",
				"Start date": "Start date",
				"End date": "End date",
				Result: "Result",
				"No results": "No results",
				Search: "Search",
				"Search in": "Search in",
				"Add new row": "Add new row",
				"Add new column": "Add new column",
				"Add new card": "Add new card",
				"Edit card": "Edit card",
				Edit: "Edit",
				Everywhere: "Everywhere",
				Label: "Label",
				Status: "Status",
				Cover: "Cover",
				Date: "Date",
				Untitled: "Untitled"
		}
};
~~~

:::info
Besides the ***en*** locale, JS Kanban also includes the built-in ***ru*** and ***cn*** locales
:::

<details>
<summary><b>ru</b> locale</summary>

~~~jsx
const days = ["Вск", "Пон", "Втр", "Срд", "Чет", "Птн", "Суб"];
const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
];
const ru = {
		lang: "ru",
		__dates: {
				months,
				days,
		},
		kanban: {
				Save: "Сохранить",
				Close: "Закрыть",
				Delete: "Удалить",
				Name: "Задача",
				Description: "Описание",
				Type: "Тип",
				"Start Date": "Дата выполнения",
				"End Date": "Дата окончания",
				Result: "Результат",
				"No results": "Ничего не найдено",
				Search: "Поиск",
				"Search in": "Поиск",
				"Add new row": "Новая строка",
				"Add new column": "Новая колонка",
				"Add new card": "Добавить новую карточку",
				"Edit card": "Редактировать карточку",
				Edit: "Редактировать",
				Everywhere: "Всюду",
				Label: "Заголовок",
				Status: "Статус",
				Cover: "Обложка",
				Date: "Дата",
				Untitled: "Без названия"
		}
};
~~~
</details>

<details>
<summary><b>cn</b> locale</summary>

~~~jsx
const days_cn = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
const months_cn = [
		"一月",
		"二月",
		"三月",
		"四月",
		"五月",
		"六月",
		"七月",
		"八月",
		"九月",
		"十月",
		"十一月",
		"十二月"
];
const cn = {
		lang: "cn",
		__dates: {
				months: months_cn,
				days: days_cn,
		},
		kanban: {
				Save: "保存",
				Close: "关闭",
				Delete: "删除",
				Name: "名称",
				Description: "描述",
				Type: "类型",
				"Start Date": "开始日期",
				"End Date": "结束日期",
				// [todo] need translation verification
				Result: "结果",
				"No results": "没有结果",
				Search: "搜索",
				"Search in": "搜索",
				"Add new row": "添加新行",
				"Add new column": "添加新列",
				"Add new card": "添加新卡",
				"Edit card": "编辑卡片",
				Edit: "编辑",
				Everywhere: "无处不在",
				Label: "标签",
				Status: "状态",
				Cover: "封面",
				Date: "日期",
				Untitled: "无题"
		}
};
~~~
</details>



## Custom locale

To apply a different locale you need to:

- provide translation for all text labels in JS Kanban, e.g. the Russian locale (it can be any language you need)
- apply the new locale by calling the **setLocale()** method, that takes an object with translation (custom locale) as a parameter

!!![TODO] **Добавить ссылку на сниппет с локализацией**

<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>