---
sidebar_label: Configuration
title: Configuration
description: You can study the developer guide in the documentation of the JavaScript Kanban library. Browse API reference, try out code examples and live demos.
---

# Configuration

You can adjust the desired settings of JS Kanban to meet your needs. The available configuration options allow you to load data for *columns*, *rows* and *cards*, configure the card and editor settings.

## Toolbar

The toolbar of JS Kanban consists of the search bar and the controls for adding columns and rows. To display the Toolbar you need to initialize it in a separate container using the `new kanban.Toolbar()` constructor.

!!![TODO] **Добавить ссылку на сниппет c тулбаром**

<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>

## Board

The board of JS Kanban consists of the cards separated with columns and rows. You can configure the cards appearance using the [cardShape](api/config/js_kanban_cardshape_config.md) configuration option and distribute the cards to the needed columns and rows.

!!![TODO] **Добавить сниппет с максимальными настройками карт**
<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>

## Editor

Since the structure of JS Kanban Editor is flexible, you can configure the editing bar to get the desired look and feel of the component. Use the [editorShape](api/config/js_kanban_editorshape_config.md) configuration option to set the editing bar.

!!![TODO] **Добавить сниппет с максимальными настройками редактора**
<iframe src="" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>
