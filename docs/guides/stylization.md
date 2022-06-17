---
sidebar_label: Stylization
title: Stylization
description: You can learn about the stylization in the documentation of the DHTMLX JavaScript Kanban library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# Stylization

You can stylize any part of the interface of JavaScript Kanban to meet your project requirements. For this, the library provides a wide range of CSS variables. Note, that Kanban includes two types of variables:
- CSS variables related to **Kanban** style
- CSS variables related to the **WX** library style (*controls, calendars etc*)

:::info
Note, that **WX** library is used for inner processes only. It provides some small elements used in Kanban (*controls, calendars etc*)
:::

## Default style

~~~css
.wx-material-theme,
.wx-portal {
/* Kanban css variables */

	/* background color style */
	--wx-kanban-background: #f1f1f1;
	--wx-kanban-background-light: #fff;
	/* end of backgroung color style */

	/* toolbar style */
	--wx-kanban-toolbar-height: 56px;
	--wx-kanban-toolbar-align: center;
	--wx-kanban-toolbar-justify: flex-start;
	/* end of toolbar style */

	/* toolbar controls style */
	--wx-kanban-toolbar-control-hover: rgba(0, 0, 0, 0.07);
	--wx-kanban-toolbar-control-active: rgba(0, 0, 0, 0.15);
	/* end of toolbar controls style */

	/* column dimentions */
	--wx-kanban-column-width: 300px;
	--wx-kanban-column-height: 300px;
	--wx-kanban-collapsed-column-width: 44px;
	/* end of column dimentions */

	/* column header style */
	--wx-kanban-column-header-height: 44px;
	--wx-kanban-over-limit-color: var(--wx-color-danger);
	/* end of column header style */
	
	/* cards style */
	--wx-kanban-card-field-padding: 12px;
	--wx-kanban-card-background: var(--wx-kanban-background-light);
	--wx-kanban-card-border: var(--wx-border);
	--wx-kanban-card-border-radius: 6px;
	/* end of cards style */

	/* user icon dimentions */
	--wx-kanban-user-icon-size: 40px;
	/* end of user icon dimentions */

	/* header dimentions (place for column labels) */
	--wx-kanban-header-height: 68px;
	/* end of header dimentions */

	/* editor dimentions */
	--wx-kanban-editor-width: 300px;
	/* end of editor dimentions */

	--wx-kanban-z-index: 1;

/* end of Kanban css variables */

/* Wx library css variables */

	/* background style */
	--wx-background: var(--wx-kanban-background-light);
	--wx-background-hover: var(--wx-kanban-background);
	/* end of background style */

	/* label font style */
	--wx-label-font-family: var(--wx-font-family);
	--wx-label-font-size: var(--wx-font-size);
	--wx-label-line-height: var(--wx-line-height);
	--wx-label-font-weight: var(--wx-font-weight-md);
	--wx-label-font-color: var(--wx-color-font);
	/* end of label font style */

	/* input style */
	--wx-input-border-radius: 2px;
	--wx-input-border: var(--wx-border);
	--wx-input-padding: 5px 8px;
	/* end of input style */

	/* border style */
	--wx-border: 1px solid #dfdfdf;
	--wx-border-color: #dfdfdf;
	/* end of border style */

	/* color style */
	--wx-color-primary: #2a7fff;
	--wx-color-font: rgba(0, 0, 0, 0.7);
	--wx-color-primary-font: #fff;
	--wx-color-danger: #ff5252;
	--wx-color-secondary-font: rgba(0, 0, 0, 0.7);
	--wx-color-secondary-light
	/* end of color style */

	/* font style */
	--wx-font: var(--wx-font-weight) var(--wx-font-size) var(--wx-font-family);
	--wx-font-family: Roboto, Arial, Helvetica, sans-serif;
	--wx-font-weight: 400;
	--wx-font-weight-md: 500;
	--wx-font-size: 14px;
	--wx-font-size-md: 15px;
	--wx-font-size-sm: 12px;
	--wx-line-height: 20px;
	/* end of font style */

	/* icon color style */
	--wx-icon-color: var(--wx-color-font-alt);
	--wx-icon-color-hover: var(--wx-background-hover);
	/* end of icon color style */
	
	/* label style */
	--wx-label-margin: 0 0 8px;
	--wx-label-padding: 0;
	--wx-label-font-family: var(--wx-font-family);
	--wx-label-font-size: var(--wx-font-size);
	--wx-label-line-height: var(--wx-line-height);
	--wx-label-font-weight: var(--wx-font-weight-md);
	/* end of label style */

	/* controls style */
	--wx-progress-height: 4px;
	--wx-popup-background: var(--wx-kanban-background-light);
	--wx-field-width: 100%;
	/* end of controls style */

	/* padding style */
	--wx-padding: 8px;
	/* end of padding style */

	/* scroll style */
	--wx-styled-scroll-track-color: #fafafa;
	--wx-styled-scroll-thumb-color: #babac0;
	--wx-styled-scroll-width: 16px;
	/* end of scroll style */
	
/* end of WX library css variables */
~~~

:::tip Note
Next versions of Kanban can bring some changes for the variables and their names. Please, do not forget to check the names after updating to the newer versions and modify them in your code to avoid problems with display of the component.
:::

## Scroll style

You can also apply a custom style to a scroll bar of Kanban. For this, you can use the `.wx-styled-scroll` CSS class. Before using it, check compatibility with the modern browsers [here](https://caniuse.com/css-scrollbar).

~~~html {4} title="index.html"
<!--container for Toolbar-->
<div id="toolbar"></div> //
<!--container for Kanban-->
<div id="root" class="wx-styled-scroll"></div> 
~~~

## Custom style

In this snippet you can see how to apply a custom style to Kanban

<iframe src="https://snippet.dhtmlx.com/oj18xwb5?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

**Related articles:** [Customization](../customization)
