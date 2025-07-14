---
sidebar_label: What's new
title: What's New
description: You can find out about the latest features and updates in DHTMLX Kanban, check its release history, browse developer guides and API details, try out code samples and live demos, and download a free 30-day trial of DHTMLX Kanban.
---

# What's new

When updating Kanban from an older version, it's a good idea to check [Migration to newer versions](/news/migration) for more info.

## Version 1.6.5

Released on July 14, 2025

### Fixes

- The `disabled: true` config does not work for menu items
- When you add a row to Kanban with no predefined row structure, row headers do not appear

## Version 1.6.4

Released on June 12, 2025

### Fixes

- Cards are lost when added to cols/rows that are removed and then restored
- Missing locale labels for uploader list buttons
- Missing readmes in commercial version packages

## Version 1.6.3

Released April 8, 2025

### Fixes

- The column limit sometimes applies to the whole column incorrectly
- Errors pop up after moving a card and closing the modal editor
- Confirm for deletion shows up behind the modal editor
- The Toolbar's "more" icon appears and disappears during slow window resizing
- The `delete-card` event always closes the editor
- The editor can't be opened if the priority is set to an ID that's not in the options

## Version 1.6.2

Released February 14, 2025

### Fixes

- Wrong expiration date in the trial version
- Drag and drop gives a warning on touch devices
- Setting `add: false` in readonly config doesn't remove the **Add** option from the column menu
- The editor doesn't load for cards with number IDs as strings
- Outdated sample links in the package
- Drag and drop issues when column scroll and lazy rendering are used together
- The `setConfig()` method doesn't update the fixed state of column headers

## Version 1.6.1

Released November 29, 2024

### Fixes

- The Toolbar's "more" icon is misaligned on narrow screens
- `RestDataProvider` doesn't use headers set by `setHeaders()`
- `RestDataProvider.getIDResolver` is not a function error

## Version 1.6

Released November 13, 2024

[Release review on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### New functionality

- You can now set how many assigned users show up on a card with [`cardShape.users.maxCount`](/api/config/js_kanban_cardshape_config) (see [**example**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- Change the content of column headers using [`columnShape`](/api/config/js_kanban_columnshape_config) (see [**example**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- Customize the search results view in the Toolbar search control via [`items.searchResult`](/api/config/toolbar_items_config) (see [**example**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- Open the editor as a modal window with [`editor.placement`](/api/config/js_kanban_editor_config) (see [**example**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- Cards now support voting with a clickable icon using [`cardShape.votes.clickable`](/api/config/js_kanban_cardshape_config) (see [**example**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))
- You can apply a theme using [`setTheme()`](/api/methods/js_kanban_settheme_method)

### Updates

- #### Properties

    - [`cardShape`](/api/config/js_kanban_cardshape_config) now includes ***users.maxCount*** and ***votes.clickable***
    - [`columnShape`](/api/config/js_kanban_columnshape_config) now has ***headerTemplate*** and ***collapsedTemplate***
    - [`editor`](/api/config/js_kanban_editor_config) now includes the ***placement*** option
    - The Toolbar's [`items`](/api/config/toolbar_items_config) property for **search** now has ***searchResult***

- #### Events

    - [`set-edit`](/api/events/js_kanban_setedit_event) now provides an ***eventSource*** parameter (see [**example**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban))

- #### Methods

    - [`setConfig()`](/api/methods/js_kanban_setconfig_method) now works differently:
  - It doesn't change history (history can't be changed this way)
        - Themes aren't changed with this method (use [`setTheme()`](/api/methods/js_kanban_settheme_method) instead)
  - The Kanban datastore isn't destroyed, so you don't need to recreate event listeners or reattach the Toolbar

    - [`setLocale()`](/api/methods/js_kanban_setlocale_method) also doesn't destroy the datastore, so event listeners and Toolbar stay attached
    - The `api` parameter in the Toolbar [`setLocale()`](/api/methods/toolbar_setlocale_method) method is now deprecated

### Fixes

- Removing a comment while editing can make the comment area disappear
- Some localization strings were missing
- Drag and drop didn't work when both [`scrollType: "column"`](/api/config/js_kanban_scrolltype_config) and [`renderType: "lazy"`](/api/config/js_kanban_rendertype_config) are set
- Editor couldn't be closed using the close icon
- In Willow skin, the editor's right side matched the progress bar background color

## Version 1.5.13

Released September 12, 2024

### Fixes

- The "Make cover" button doesn't show up if the file extension is uppercase
- Clicking on a disabled Multiselect causes an error
- After using [`addCard()`](/api/methods/js_kanban_addcard_method), scrolling can cause errors if column scroll and lazy rendering are enabled
- No comments are saved as an empty string instead of an empty array
- Editor styles can get overridden by global styles with the same class name. [Check the migration section](/news/migration/#1512---1513)

## Version 1.5.12

Released May 2, 2024

### Fixes

- Intercept regression: returning `false` doesn't block inner events
- Disabled files still allow file uploads

## Version 1.5.11

Released March 25, 2024

### Fixes

- Kanban CSS variables for *Dark willow* skin are missing in Toolbar and Portals
- Changes to comments and votes aren't saved in form values when autosave is off
- The custom column submenu's **onClick** function gets a `null` argument
- Unable to set Datepickers as editable in the Editor
- Console warnings in Kanban examples

## Version 1.5.10

Released February 29, 2024

### Fixes

- Broken build on npm
- Added `select` parameter to [`duplicate-card`](/api/events/js_kanban_duplicatecard_event) event and [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method) method
- The comment field in the editor has incorrect styles
- Changing the theme caused a regression

## Version 1.5.9

Released February 20, 2024

### Fixes

- Kanban styles affect other widgets
- Custom column submenu items with `disabled: true` are still clickable
- Can't set a custom upload function for the **Uploader** control

## Version 1.5.8

Released November 28, 2023

### Fixes

- The **currentUser** TS definition was missing from **IKanbanConfig**

## Version 1.5.7

Released November 14, 2023

### Updates

- Toolbar's [`setLocale()`](/api/methods/toolbar_setlocale_method) method now has an ***api*** parameter

### Fixes

- `disabled: true` doesn't work for card menu items
- Unwanted console warnings in Kanban examples
- Can't reset the task priority
- Drop-down controls in the editor don't close when clicking outside

## Version 1.5.6

Released September 13, 2023

### Updates

- Kanban can now be imported as an ES module

### Fixes

- Regression in npm packages

## Version 1.5.4

Released August 9, 2023

### Fixes

- Uploaded files stay in the form after switching to another card
- File upload by drag-and-drop doesn't work
- Cards can be deleted by pressing Delete while the form is open
- The "Search in" dropdown goes blank after picking a card in search
- Added links aren't deleted on the backend when undoing an add-link operation

## Version 1.5.1

### Fixes

- Correct TypeScript definitions are now generated

## Version 1.5

Released June 15, 2023

[Release review on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### New functionality

- You can now create and delete links between cards during runtime
- Links between cards can be managed on the server side
- Columns headers can be fixed in place (see [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))

### New API

- #### Methods

    - [`addLink()`](/api/methods/js_kanban_addlink_method)
    - [`deleteLink()`](/api/methods/js_kanban_deletelink_method)
    - [`getLinks()`](/api/provider/rest_methods/js_kanban_getlinks_method)

- #### Routes

    - [`DELETE /links`](/api/provider/rest_routes/delete_routes/js_kanban_delete_links_route)
    - [`GET /links`](/api/provider/rest_routes/get_routes/js_kanban_get_links_route)
    - [`POST /links`](/api/provider/rest_routes/post_routes/js_kanban_post_links_route)

### Updates

- #### Properties

    - [`columnShape`](/api/config/js_kanban_columnshape_config) now includes the ***fixedHeaders*** parameter.

### Fixes

- Links couldn't be parsed, exported, or serialized at runtime
- Creating a comments section failed if the users section wasn't active
- Links in the store changed original data and didn't save correctly
- Lazy rendering broke the hover styles for collapsed columns
- Moving cards to a new column made them disappear
- The textarea for new comments didn't close when editing started

## Version 1.4.2

Released April 13, 2023

### Fixes

- Backend IDs weren't saved to local card/column/row data after adding
- Some TS definitions were missing
- Dark skin styles leaked into other elements

## Version 1.4.1

Released March 29, 2023

### Fixes

- Preserve sorting didn't work right
- Disabling the context menu in **cardShape**, **columnShape**, or **rowShape** didn't work as expected
- Adding links in the editor without data for links didn't work right
- The column menu could match the card's or not show up at all
- Two tasks could be dragged instead of one

## Version 1.4

Released March 21, 2023

[Release review on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### New functionality

- Comments can now be added (see [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- The **material**, **willow**, and **willow-dark** themes are available (see [**example**](https://snippet.dhtmlx.com/jnw54xif?tag=kanban))
- You can limit the number of users (see [**example**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- Set links between cards (see [**example**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Cards can be voted for (see [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### New API

- #### Events

    - [`add-comment`](/api/events/js_kanban_addcomment_event)
    - [`add-link`](/api/events/js_kanban_addlink_event)
    - [`delete-comment`](/api/events/js_kanban_deletecomment_event)
    - [`delete-link`](/api/events/js_kanban_deletelink_event)
    - [`drag-card`](/api/events/js_kanban_dragcard_event)
    - [`end-drag-card`](/api/events/js_kanban_enddragcard_event)
    - [`start-drag-card`](/api/events/js_kanban_startdragcard_event)
    - [`update-comment`](/api/events/js_kanban_updatecomment_event)

- #### Methods

    - [`addComment()`](/api/methods/js_kanban_addcomment_method)
    - [`deleteComment()`](/api/methods/js_kanban_deletecomment_method)
    - [`updateComment()`](/api/methods/js_kanban_updatecomment_method)

- #### Properties

    - [`currentUser`](/api/config/js_kanban_currentuser_config)
    - [`links`](/api/config/js_kanban_links_config)
    - [`theme`](/api/config/js_kanban_theme_config) (Kanban)
    - [`theme`](/api/config/toolbar_items_config) (Toolbar)

### Updates

- #### Methods

    - [`api.getState()`](/api/internal/js_kanban_getstate_method) has new updates

- #### Properties

    - [`cards`](/api/config/js_kanban_cards_config) now supports ***css***, ***comments***, and ***votes***
    - [`cardShape`](/api/config/js_kanban_cardshape_config) now includes ***comments***, ***votes*** (see [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)), and ***css*** (see [**example**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban))
    - [`cardTemplate`](/api/config/js_kanban_cardtemplate_config) can now show a context menu
    - [`columns`](/api/config/js_kanban_columns_config) now includes ***css*** (see [**example**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) and ***overlay*** (see [**example**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban))
    - [`columnShape`](/api/config/js_kanban_columnshape_config) now has ***css*** (see [**example**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - [`editorShape`](/api/config/js_kanban_editorshape_config) adds [***comments***](/guides/configuration/#comments-type), [***links***](/guides/configuration/#links-type), and ***format*** for date/dateRange types
    - [`rows`](/api/config/js_kanban_rows_config) now has ***css*** (see [**example**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - [`rowShape`](/api/config/js_kanban_rowshape_config) now includes ***css*** (see [**example**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Deprecated API

- #### Properties

    - The label in menu item objects under `cardShape.menu.items`, `columnShape.menu.items`, and `rowShape.menu.items` is deprecated

### Fixes

- Menu position is off when Kanban is in a container with margins
- Collapsed columns aren't positioned right if column width is custom
- Dropping a card into a collapsed column makes it disappear
- Collapsed columns don't position properly with custom widths
- In swimlanes, the card context menu can get covered by the editing panel, making it hard to delete cards

## Version 1.3

Released September 29, 2022

[Release review on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### New functionality

- Cards can be duplicated using the API, the 3-dots context menu, or `Ctrl (Command)` + `D` (works for multiple cards)
- Kanban data can be exported as a JSON file
- Kanban history can be managed:
  - Undo and Redo controls in the Toolbar
  - Shortcuts:
        - `Ctrl (Command)`+`Z` for undo
        - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` for redo
  - Through the API

### New API

- **Events:**
    [`duplicate-card`](/api/events/js_kanban_duplicatecard_event)

- **Methods:**
    [`duplicateCard()`](/api/methods/js_kanban_duplicatecard_method),
    [`export.json()`](/api/internal/js_kanban_json_method),
    [`getUsers()`](/api/provider/rest_methods/js_kanban_getusers_method),
    [`redo()`](/api/methods/js_kanban_redo_method),
    [`undo()`](/api/methods/js_kanban_undo_method)

- **Properties:**
    [`editor`](/api/config/js_kanban_editor_config),
    [`history`](/api/config/js_kanban_history_config)

- **Common settings:**
    [`$meta`](/api/common/js_kanban_meta_parameter)

### Deprecated API

- **Properties:**
    [`editorAutoSave`](/api/config/js_kanban_editorautosave_config)

### Updates

- #### Events

    - [`update-card`](/api/events/js_kanban_updatecard_event) event is updated
    - [`update-column`](/api/events/js_kanban_updatecolumn_event) event is updated
    - [`update-row`](/api/events/js_kanban_updaterow_event) event is updated

- #### Methods

    - [`updateCard()`](/api/methods/js_kanban_updatecard_method) is updated
    - [`updateColumn()`](/api/methods/js_kanban_updatecolumn_method) is updated
    - [`updateRow()`](/api/methods/js_kanban_updaterow_method) is updated

- #### Properties

    - Toolbar's [`items`](/api/config/toolbar_items_config) now includes ***"undo"*** and ***"redo"*** controls
    - [`editorShape`](/api/config/js_kanban_editorshape_config) adds ***dateRange*** type

## Version 1.2.2

Released August 30, 2022

### Fixes

- Duplicate icons appeared in menus and toolbar

## Version 1.2.1

Released July 28, 2022

### Fixes

- `cardHeight` didn't work with `scrollType:"column"` enabled
- Uploader didn't show uploaded files in the card editor
- Localization didn't work for "combo" and "progress" fields in the editor

## Version 1.2

Released June 29, 2022

[Release review on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### New functionality

- It's now possible to add new cards via the column menu (see [**example**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Lazy rendering is available (see [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Each column can have its own scroll (see [**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Kanban scrolls to new cards, columns, and rows when created (API and UI) (see [**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Cards can be sorted (API and UI) (see [**example**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### New API

- **Events:**
    [`scroll`](/api/events/js_kanban_scroll_event),
    [`set-edit`](/api/events/js_kanban_setedit_event),
    [`set-sort`](/api/events/js_kanban_setsort_event)

- **Methods:**
    [`scroll()`](/api/methods/js_kanban_scroll_method),
    [`setEdit()`](/api/methods/js_kanban_setedit_method),
    [`setSort()`](/api/methods/js_kanban_setsort_method)

- **Properties:**
    [`cardHeight`](/api/config/js_kanban_cardheight_config),
    [`columnShape`](/api/config/js_kanban_columnshape_config),
    [`rowShape`](/api/config/js_kanban_rowshape_config),
    [`renderType`](/api/config/js_kanban_rendertype_config),
    [`scrollType`](/api/config/js_kanban_scrolltype_config)

### Updates

- #### Methods

    - [`api.getReactiveState()`](/api/internal/js_kanban_getreactivestate_method) is updated
    - [`api.getState()`](/api/internal/js_kanban_getstate_method) is updated
    - [`api.getStores()`](/api/internal/js_kanban_getstores_method) is updated
    - Kanban's [`setLocale()`](/api/methods/js_kanban_setlocale_method) is updated
    - Toolbar's [`setLocale()`](/api/methods/toolbar_setlocale_method) is updated

- #### Properties

    - Toolbar's [`items`](/api/config/toolbar_items_config) is updated
    - [`cardShape`](/api/config/js_kanban_cardshape_config) updates ***start_date***, ***end_date***, ***menu***, and ***users***
    - [`editorShape`](/api/config/js_kanban_editorshape_config) updates the ***multiselect*** type

#### Common

- CSS class prefixes have changed (*see [Stylization](/guides/stylization)*)
- Locale structure updated (*see [Localization](/guides/localization)*)

### Fixes

- Binding cards to swimlanes using the `rowKey` config didn't work right
- Clicking on a card menu opened the editor
- Dragging multiple cards didn't behave as expected
- Editing cards wasn't working when `select: false` (**readonly** config)
- New cards added via `addCard()` couldn't be selected properly
- The `label: false` and `menu: false` settings in `cardShape` didn't work as expected

## Version 1.1.1

Released February 28, 2022

[Release review on the blog](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Fixes

- Custom editor fields didn't work unless defined in cardShape config
- Selecting the right card from the search bar dropdown was tricky

## Version 1.1

Released February 15, 2022

[Release review on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### New functionality

- Columns can be collapsed or expanded with the arrow next to the label
- You can set a limit on the number of cards in columns and swimlanes
- Columns can be moved via the context menu (three dots icon)
- Rows can also be moved using the context menu (three dots icon)
- Multiple cards in the same column can be selected with **Shift** + **click**
- TypeScript definitions are now available for Kanban

### New API

- New **events** for moving columns and rows:
    [`move-column`](/api/events/js_kanban_movecolumn_event),
    [`move-row`](/api/events/js_kanban_moverow_event)
- New **methods** for moving columns and rows:
    [`moveColumn()`](/api/methods/js_kanban_movecolumn_method),
    [`moveRow()`](/api/methods/js_kanban_moverow_method)

### Updates

#### Properties

- [`cards`](/api/config/js_kanban_cards_config) is now optional

- [`columns`](/api/config/js_kanban_columns_config) is now optional and adds:
  - ***collapsed***
  - ***limit***
  - ***strictLimit***

- The ***color*** option in [`cardShape`](/api/config/js_kanban_cardshape_config) has been updated

#### Methods

- [`addColumn`](/api/methods/js_kanban_addcolumn_method) is updated
- [`addRow`](/api/methods/js_kanban_addrow_method) is updated
- [`updateCard`](/api/methods/js_kanban_updatecard_method) is updated
- [`updateColumn`](/api/methods/js_kanban_updatecolumn_method) is updated
- [`updateRow`](/api/methods/js_kanban_updaterow_method) is updated
- [`parse`](/api/methods/js_kanban_parse_method) is updated

#### Events

- [`add-column`](/api/events/js_kanban_addcolumn_event) is updated
- [`add-row`](/api/events/js_kanban_addrow_event) is updated
- [`update-card`](/api/events/js_kanban_updatecard_event) is updated
- [`update-column`](/api/events/js_kanban_updatecolumn_event) is updated
- [`update-row`](/api/events/js_kanban_updaterow_event) is updated

## Version 1.0

Released November 23, 2021

[Release review on the blog](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Initial functionality

- **Cards** can be managed by:
  - adding new cards
  - selecting cards (including multiselection)
  - deleting cards
  - searching for cards
  - reordering cards by dragging them between columns and rows
  - editing card details with an editor:
    - label
    - description
    - progress
    - start date
    - end date
    - color
    - priority
    - attachments (*files* and *pictures*)
    - *custom fields*

- **Columns** and **rows** can be managed by:
  - adding new columns and rows
  - deleting columns and rows
  - renaming columns and rows
  - collapsing or expanding rows

- [Localization](/guides/localization)
- [Backend integration](/guides/working_with_server) (Go and Node)
- Cross-browser compatibility
- Touch device support
