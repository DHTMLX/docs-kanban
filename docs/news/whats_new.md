---
sidebar_label: What's new
title: What's New
description: You can explore what's new in DHTMLX Kanban and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# What's new

If you are updating Kanban from an older version, check [Migration to newer versions](news/migration.md) for details.

## Version 1.6.4 

Released on June 12, 2025

### Fixes

- Cards are lost when added to cols/rows that are removed and then restored
- Missing locale labels for uploader list buttons
- Missing readmes in commercial version packages

## Version 1.6.3

Released on April 8, 2025

### Fixes

- Limit applies to the whole column incorrectly
- Error occurs when moving a card after modal editor close
- Confirm for deletion is shown below the modal editor
- Toolbar "more" icon appears then disappears unexpectedly during slow window resizing
- The `delete-card` event always closes the editor
- The editor cannot be opened if the priority is set to ID outside of provided options

## Version 1.6.2

Released on February 14, 2025

### Fixes

- Wrong expiration date in the trial package
- Warning during drag and drop on touch devices
- Readonly `add: false` configuration does not remove the **Add** option from the column menu
- The editor is not rendered for cards with number IDs as strings
- Outdated link to samples in the package
- Column scroll with lazy rendering has drag and drop issues
- The `setConfig()` method fails to update the fixed state of the column headers

## Version 1.6.1

Released on November 29, 2024

### Fixes

- Toolbar on narrow screens has a misaligned "more" icon
- `RestDataProvider` ignores headers defined via `setHeaders()`
- `RestDataProvider.getIDResolver` is not a function error

## Version 1.6

Released on November 13, 2024

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### New functionality

- The ability to change how many assigned users are displayed on a card via the [`cardShape.users.maxCount`](../../api/config/js_kanban_cardshape_config) property (see the [**example**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- The ability to change the content of column headers via the [`columnShape`](../../api/config/js_kanban_columnshape_config) property (see the [**example**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- The ability to change the view and content of search results via the [`items.searchResult`](../../api/config/toolbar_items_config) property of the Toolbar **search** control (see the [**example**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- The ability to display the editor as a modal window via the [`editor.placement`](../../api/config/js_kanban_editor_config) property (see the [**example**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- The ability to enable voting for a card (using the vote icon on the card) via the [`cardShape.votes.clickable`](../../api/config/js_kanban_cardshape_config) property (see the [**example**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))
- The ability to apply a theme via the [`setTheme()`](../../api/methods/js_kanban_settheme_method) method

### Updates

- #### Properties

    - The [`cardShape`](../../api/config/js_kanban_cardshape_config) property is extended by the ***users.maxCount*** and ***votes.clickable*** parameters
    - The [`columnShape`](../../api/config/js_kanban_columnshape_config) property is extended by the ***headerTemplate*** and ***collapsedTemplate*** parameters
    - The [`editor`](../../api/config/js_kanban_editor_config) property is extended by the ***placement*** parameter
    - The [`items`](../../api/config/toolbar_items_config) property of the Toolbar **search** control is extended by the ***searchResult*** parameter

- #### Events

    - The [`set-edit`](../../api/events/js_kanban_setedit_event) event is extended by the ***eventSource*** parameter  (see the [**example**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban))

- #### Methods

    - The [`setConfig()`](../../api/methods/js_kanban_setconfig_method) method functionality was updated in the following way:

        - The method doesn't change history (you cannot change history at all)
        - The method doesn't change themes (use the new [`setTheme()`](../../api/methods/js_kanban_settheme_method) method instead)
        - The method doesn't destroy Kanban datastore. You don't need to recreate event listeners and reattach Toolbar to Kanban

    - The [`setLocale()`](../../api/methods/js_kanban_setlocale_method) method doesn't destroy Kanban datastore. You don't need to recreate event listeners and reattach Toolbar to Kanban
    - The `api` parameter of the Toolbar [`setLocale()`](../../api/methods/toolbar_setlocale_method) method was deprecated

### Fixes

- A comment in progress of editing can be removed and text area for new comments disappears
- Add missing localization strings
- Drag-n-drop does not work if you combine [`scrollType: "column"`](../../api/config/js_kanban_scrolltype_config) and [`renderType: "lazy"`](../../api/config/js_kanban_rendertype_config) settings
- The editor cannot be closed via the close icon
- The right part of the editor has same color as the progress bar background (in the Willow skin only)

## Version 1.5.13

Released on September 12, 2024

### Fixes

- The "Make cover" button does not appear if the extention is uppercase
- Clicking on a disabled Multiselect control occurs an error
- Scrolling after the [`addCard()`](../../api/methods/js_kanban_addcard_method) method call throws an error with [column scroll](../../api/config/js_kanban_scrolltype_config) and [lazy rendering](../../api/config/js_kanban_rendertype_config)
- No comments are saved as "" instead of []
- Editor style is overridden by global styles with a same-name non-unique class selector. [See the migration section](news/migration.md/#1512---1513)

## Version 1.5.12

Released on May 2, 2024

### Fixes

- Intercept regression: return `false` does not prevent inner events
- Disabled files allow files

## Version 1.5.11

Released on March 25, 2024

### Fixes

- Kanban CSS variables of the *Dark willow* skin are lost for Toolbar and Portals
- Comments and votes changes are not applied to form values when autosave is disabled
- Custom column submenu receives `null` in **onClick** function argument
- Unable to set editable mode for Datepickers in Editor
- Console warnings in Kanban examples

## Version 1.5.10

Released on February 29, 2024

### Fixes

- Broken build on npm server
- Add the `select` parameter into the [`duplicate-card`](../../api/events/js_kanban_duplicatecard_event) event and the [`duplicateCard()`](../../api/methods/js_kanban_duplicatecard_method) method
- Incorrect styles for the comment field in the Kanban editor
- Regression in changing theme

## Version 1.5.9

Released on February 20, 2024

### Fixes

- Kanban affects other widget styles
- Custom column submenu items with `disabled: true` are still active
- Inability to set custom upload function for the **Uploader** control

## Version 1.5.8

Released on November 28, 2023

### Fixes

- The missing **currentUser** TS definition in the **IKanbanConfig** type

## Version 1.5.7

Released on November 14, 2023

### Updates

- The [`setLocale()`](../../api/methods/toolbar_setlocale_method) method of Toolbar was extended by the ***api*** parameter

### Fixes

- The `disabled: true` configuration doesn't work for card menu items
- Unwanted console warnings in Kanban examples
- It is not possible to reset the priority of a task
- Drop-down controls in the Kanban editor don't close on click outside

## Version 1.5.6

Released on September 13, 2023

### Updates

- An ability to import component as ES module

### Fixes

- Regression in npm packages

## Version 1.5.4

Released on August 9, 2023

### Fixes

- Previously uploaded files remain in the form after switching to another card
- File upload via drag-and-drop doesn't work
- Unexpected deletion of cards while the user presses the Delete key and the form is opens
- The "Search in" dropdown input becomes empty after a card was selected through search
- Added links are not deleted on the backend when the add-link operation is undone

## Version 1.5.1

### Fixes

- correct TypeScript definitions generation

## Version 1.5

Released on June 15, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### New functionality

- An ability to set and delete links between cards at runtime
- An ability to manage links between cards on the server side
- An ability to fix column headers (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))

### New API

- #### Methods

    - [`addLink()`](../../api/methods/js_kanban_addlink_method)
    - [`deleteLink()`](../../api/methods/js_kanban_deletelink_method)
    - [`getLinks()`](../../api/provider/rest_methods/js_kanban_getlinks_method)

- #### Routes

    - [`DELETE /links`](../../api/provider/rest_routes/delete_routes/js_kanban_delete_links_route)
    - [`GET /links`](../../api/provider/rest_routes/get_routes/js_kanban_get_links_route)
    - [`POST /links`](../../api/provider/rest_routes/post_routes/js_kanban_post_links_route)

### Updates

- #### Properties

    - The [`columnShape`](../../api/config/js_kanban_columnshape_config) property is extended by the ***fixedHeaders*** parameter.

### Fixes

- Links cannot be parsed at runtime, exported, or serialized
- Creating comments section fails if users section was not activated
- Links in store mutates original data and aren't saved properly
- Lazy rendering breaks styles of collapsed columns hover area
- Cards moved to newly created columns disappear
- Textarea for a new comment is not closed when start editing

## Version 1.4.2

Released on April 13, 2023

### Fixes

- Backend ID is not saved to local card/column/row data after add actions
- Add missing TS definitions
- Dark skin is leaking its styles

## Version 1.4.1

Released on March 29, 2023

### Fixes

- Incorrect behavior of the preserve sorting
- Incorrect behavior when a context menu is disabled via the **cardShape**, **columnShape** or **rowShape** properties
- Incorrect behavior when you add links in the editor but do not provide links in data
- The menu on the column can be the same as in the card or not displayed
- Two tasks are dragged instead of one

## Version 1.4

Released on March 21, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### New functionality

- An ability to add comments (see the [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- An ability to apply the **material**, **willow** and **willow-dark** themes (see the [**example**](https://snippet.dhtmlx.com/jnw54xif?tag=kanban))
- An ability to limit users (see the [**example**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- An ability to set links between cards (see the [**example**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- An ability to votes for a card (see the [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### New API

- #### Events

    - [`add-comment`](../../api/events/js_kanban_addcomment_event)
    - [`add-link`](../../api/events/js_kanban_addlink_event)
    - [`delete-comment`](../../api/events/js_kanban_deletecomment_event)
    - [`delete-link`](../../api/events/js_kanban_deletelink_event)
    - [`drag-card`](../../api/events/js_kanban_dragcard_event)
    - [`end-drag-card`](../../api/events/js_kanban_enddragcard_event)
    - [`start-drag-card`](../../api/events/js_kanban_startdragcard_event)
    - [`update-comment`](../../api/events/js_kanban_updatecomment_event)

- #### Methods

    - [`addComment()`](../../api/methods/js_kanban_addcomment_method)
    - [`deleteComment()`](../../api/methods/js_kanban_deletecomment_method)
    - [`updateComment()`](../../api/methods/js_kanban_updatecomment_method)

- #### Properties

    - [`currentUser`](../../api/config/js_kanban_currentuser_config)
    - [`links`](../../api/config/js_kanban_links_config)
    - [`theme`](../../api/config/js_kanban_theme_config) (Kanban)
    - [`theme`](../../api/config/toolbar_items_config) (Toolbar)

### Updates

- #### Methods

    - The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method is updated

- #### Properties

    - The [`cards`](../../api/config/js_kanban_cards_config) property is extended by the ***css***, ***comments*** and ***votes*** parameters
    - The [`cardShape`](../../api/config/js_kanban_cardshape_config) property is extended by the ***comments***, ***votes*** (see the [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)) and ***css*** (see the [**example**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban)) parameters.
    - The [`cardTemplate`](../../api/config/js_kanban_cardtemplate_config) property has an ability to display context menu
    - The [`columns`](../../api/config/js_kanban_columns_config) property is extended by the ***css*** (see the [**example**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) and ***overlay*** (see the [**example**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban)) parameters
    - The [`columnShape`](../../api/config/js_kanban_columnshape_config) property is extended by the ***css*** parameter (see the [**example**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - The [`editorShape`](../../api/config/js_kanban_editorshape_config) property is extended by the [***comments***](../../guides/configuration/#comments-type) and [***links***](../../guides/configuration/#links-type) types, and ***format*** parameter for *date/dateRange* types
    - The [`rows`](../../api/config/js_kanban_rows_config) property is extended by the ***css***  parameter (see the [**example**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - The [`rowShape`](../../api/config/js_kanban_rowshape_config) property is extended by the ***css*** parameter (see the [**example**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Deprecated API

- #### Properties

    - label in menu item objects in `cardShape.menu.items`, `columnShape.menu.items`, and `rowShape.menu.items`

### Fixes

- Menu position is wrong when Kanban is inside a container with margins
- Wrong position of collapsed columns in case of custom column width
- Dropping a card into a collapsed column results in the card's disappearing
- Wrong position of collapsed columns in case of custom column width
- Swimlanes. The context menu of the card is overlapped by the editing panel and therefore the card cannot be deleted

## Version 1.3

Released on September 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### New functionality

- Duplicating cards via API, a context menu (3 dots icon) or the `Ctrl (Command)` + `D` shortcuts (allows duplicating multiple cards)
- Exporting Kanban data to a JSON file
- Managing Kanban history:
    - via *Undo* and *Redo* controls on Toolbar
    - via shortcuts:
        - `Ctrl (Command)`+`Z` - undo action
        - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` - redo action
    - via API

### New API

- **Events:**
    [`duplicate-card`](../../api/events/js_kanban_duplicatecard_event)

- **Methods:**
    [`duplicateCard()`](../../api/methods/js_kanban_duplicatecard_method),
    [`export.json()`](../../api/internal/js_kanban_json_method),
    [`getUsers()`](../../api/provider/rest_methods/js_kanban_getusers_method),
    [`redo()`](../../api/methods/js_kanban_redo_method) and
    [`undo()`](../../api/methods/js_kanban_undo_method)

- **Properties:**
    [`editor`](../../api/config/js_kanban_editor_config) and
    [`history`](../../api/config/js_kanban_history_config)

- **Common settings:**
    [`$meta`](../../api/common/js_kanban_meta_parameter)

### Deprecated API

- **Properties:**
    [`editorAutoSave`](../../api/config/js_kanban_editorautosave_config)

### Updates

- #### Events

    - The [`update-card`](../../api/events/js_kanban_updatecard_event) event of Kanban is updated
    - The [`update-column`](../../api/events/js_kanban_updatecolumn_event) event of Kanban is updated
    - The [`update-row`](../../api/events/js_kanban_updaterow_event) event of Kanban is updated

- #### Methods

    - The [`updateCard()`](../../api/methods/js_kanban_updatecard_method) method of Kanban is updated
    - The [`updateColumn()`](../../api/methods/js_kanban_updatecolumn_method) method of Kanban is updated
    - The [`updateRow()`](../../api/methods/js_kanban_updaterow_method) method of Kanban is updated

- #### Properties

    - The [`items`](../../api/config/toolbar_items_config) property of Toolbar is extended by the ***"undo"*** and ***"redo"*** parameters (controls)
    - The [`editorShape`](../../api/config/js_kanban_editorshape_config) property is extended by the ***dateRange*** type

## Version 1.2.2

Released on August 30, 2022

### Fixes

- Duplicating of some icons in menu and toolbar

## Version 1.2.1

Released on July 28, 2022

### Fixes​

- The `cardHeight` property doesn't work with the enabled `scrollType:"column"` config
- Uploader doesn't show uploaded files in card editor
- Localization doesn't work for "combo" and "progress" fields in card editor

## Version 1.2

Released on June 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### New functionality 

- Adding new cards via a column menu (see the [**example**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Lazy rendering (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Scrolling for separate columns (see the [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Scrolling Kanban to the new created cards, columns and rows (API and UI) (see the [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Sorting cards (API and UI) (see the [**example**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### New API

- **Events:**
    [`scroll`](../../api/events/js_kanban_scroll_event),
    [`set-edit`](../../api/events/js_kanban_setedit_event), and
    [`set-sort`](../../api/events/js_kanban_setsort_event)

- **Methods:**
    [`scroll()`](../../api/methods/js_kanban_scroll_method),
    [`setEdit()`](../../api/methods/js_kanban_setedit_method) and
    [`setSort()`](../../api/methods/js_kanban_setsort_method)

- **Properties:**
    [`cardHeight`](../../api/config/js_kanban_cardheight_config),
    [`columnShape`](../../api/config/js_kanban_columnshape_config),
    [`rowShape`](../../api/config/js_kanban_rowshape_config), 
    [`renderType`](../../api/config/js_kanban_rendertype_config), and
    [`scrollType`](../../api/config/js_kanban_scrolltype_config)

### Updates

- #### Methods

    - The [`api.getReactiveState()`](../../api/internal/js_kanban_getreactivestate_method) method is updated
    - The [`api.getState()`](../../api/internal/js_kanban_getstate_method) method is updated
    - The [`api.getStores()`](../../api/internal/js_kanban_getstores_method) method is updated
    - The [`setLocale()`](../../api/methods/js_kanban_setlocale_method) method of Kanban is updated
    - The [`setLocale()`](../../api/methods/toolbar_setlocale_method) method of Toolbar is updated

- #### Properties

    - The [`items`](../../api/config/toolbar_items_config) property of Toolbar is updated
    - The ***start_date***, ***end_date***, ***menu*** and ***users*** parameters (fields) of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property are updated
    - The ***multiselect*** type of the [`editorShape`](../../api/config/js_kanban_editorshape_config) property is updated

#### Common

- Prefixes of CSS classes (*see the [Stylization](../../guides/stylization) section*)
- Locale structure (*see the [Localization](../../guides/localization) section*)

### Fixes

- Binding cards to swimlanes via the `rowKey` config works incorrectly
- Clicking on card menu opens editor
- Dragging several cards works incorrectly
- Editing cards when `select: false` (**readonly** config) works incorrectly
- Selecting new added cards via the `addCard()` method works incorrectly
- The `label: false` and `menu: false` parameters of the `cardShape` property work incorrectly

## Version 1.1.1

Released on February 28, 2022

[Review of release on the blog](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Fixes

- Custom editor field doesn't work without defining it in a cardShape config
- Selecting the required card from the dropdown menu of the search bar

## Version 1.1

Released on February 15, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### New functionality

- The ability to *collapse/expand* columns using an arrow on the left of the column label
- The ability to *limit* the number of cards for the columns and swimlanes
- The ability to *move* columns via the context menu (a 3 dots icon)
- The ability to *move* rows via the context menu (a 3 dots icon)
- The ability to *select multiple cards* of the same column using the familiar **Shift** + **click** combination
- The ability to use [TypeScript definitions](../../guides/typescript_support) of Kanban

### New API

- New **events** for moving columns and rows: 
    [`move-column`](../../api/events/js_kanban_movecolumn_event)
    and
    [`move-row`](../../api/events/js_kanban_moverow_event)
- New **methods** for moving columns and rows: 
    [`moveColumn()`](../../api/methods/js_kanban_movecolumn_method) 
    and
    [`moveRow()`](../../api/methods/js_kanban_moverow_method)

### Updates

#### Properties

- The [`cards`](../../api/config/js_kanban_cards_config) property is became optional

- The [`columns`](../../api/config/js_kanban_columns_config) property is became optional and extended by the following parameters:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- The ***color*** parameter of the [`cardShape`](../../api/config/js_kanban_cardshape_config) property is updated

#### Methods

- The [`addColumn`](../../api/methods/js_kanban_addcolumn_method) method is updated
- The [`addRow`](../../api/methods/js_kanban_addrow_method) method is updated
- The [`updateCard`](../../api/methods/js_kanban_updatecard_method) method is updated
- The [`updateColumn`](../../api/methods/js_kanban_updatecolumn_method) method is updated
- The [`updateRow`](../../api/methods/js_kanban_updaterow_method) method is updated
- The [`parse`](../../api/methods/js_kanban_parse_method) method is updated

#### Events

- The [`add-column`](../../api/events/js_kanban_addcolumn_event) event is updated
- The [`add-row`](../../api/events/js_kanban_addrow_event) event is updated
- The [`update-card`](../../api/events/js_kanban_updatecard_event) event is updated
- The [`update-column`](../../api/events/js_kanban_updatecolumn_event) event is updated
- The [`update-row`](../../api/events/js_kanban_updaterow_event) event is updated

## Version 1.0

Released on November 23, 2021

[Review of release on the blog](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Initial functionality

- The ability to work with **cards** in the following way:
    - add new cards
    - select cards (multiselection)
    - delete cards
    - search for cards
    - reorder cards by dragging them to the desired column (and row)
    - manage the card data via the editor:
        - label
        - description
        - progress
        - start date
        - end date
        - color
        - priority
        - attachment (*files* and *pictures*)
        - *custom fields*

- Ability to work with **columns** and **rows** in the following way:
    - add new columns and rows
    - delete columns and rows
    - rename columns and rows
    - collapse/expand rows

- [Localization](../../guides/localization)
- [Integration with backend](../../guides/working_with_server) (Go and Node)
- Cross browser compatibility
- Touch support
