---
sidebar_label: Localization
title: Localization
description: You can learn about the localization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Localization

You can localize all labels in the interface of JavaScript Kanban. For this you need to create a new locale or modify a built-in one and apply it to Kanban and Toolbar (*separately*).

## Default locale

The **English** locale is used by default:

~~~jsx
const en = {
	kanban: { // translations of the Kanabn labels
		"Save": "Save",
		"Close": "Close",
		"Delete": "Delete",
		"Name": "Name",
		"Description": "Description",
		"Type": "Type",
		"Start date": "Start date",
		"End date": "End date",
		"Result": "Result",
		"No results": "No results",
		"Search": "Search",
		"Search in": "Search in",
		"Add new row": "Add new row",
		"Add new column": "Add new column",
		"Add new card": "Add new card",
		"Edit card": "Edit card",
		"Edit": "Edit",
		"Everywhere": "Everywhere",
		"Label": "Label",
		"Status": "Status",
		"Color": "Color",
		"Date": "Date",
		"Untitled": "Untitled",
		"Rename": "Rename",
		"Move up": "Move up",
		"Move down": "Move down",
		"Move left": "Move left",
		"Move right": "Move right",
		"Sort": "Sort",
		"Label (a-z)": "Label (a-z)",
		"Label (z-a)": "Label (z-a)",
		"Description (a-z)": "Description (a-z)",
		"Description (z-a)": "Description (z-a)"
	},
	calendar: { // translations and settings of the calendar
		monthFull: [
			"January", "February", "March", "April",
			"May", "June", "July", "August", 
			"September", "October", "November", "December"
		],
		monthShort: [
			"Jan", "Feb", "Mar", "Apr",
			"May", "Jun", "Jul", "Aug",
			"Sep", "Oct", "Nov", "Dec"
		],
		dayFull: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		hours: "Hours",
		minutes: "Minutes",
		done: "Done",
		clear: "Clear",
		today: "Today",
		am: ["am", "AM"],
		pm: ["pm", "PM"],
		weekStart: 7,
		timeFormat: 24
	},
	core: { // translations of the core elements
		ok: "OK",
		cancel: "Cancel"
	}
};
~~~

## Custom locale

To apply a new locale you need to:

- create a custom locale (or modify the default one) and provide translations for all text labels (it can be any language you need)
:::info
**TODO** - descride custom locales from github repo
:::
- apply the new locale to **Kanabn** via its [`locale`](api/config/js_kanban_locale_config.md) property or use the [`setLocale()`](api/methods/js_kanban_setlocale_method.md) method
- apply the new locale to **Toolbar** via its [`locale`](api/config/toolbar_locale_config.md) property or use the [`setLocale()`](api/methods/toolbar_setlocale_method.md) method

## Example

In this snippet you can see how to switch through the *EN*, *RU* and *CN* locales:

<iframe src="https://snippet.dhtmlx.com/hrblf1mm?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>