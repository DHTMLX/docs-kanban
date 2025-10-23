---
sidebar_label: What's new
title: What's New
description: You can explore what's new in DHTMLX Kanban and its release history in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Kanban.
---

# What's new

If you're moving to a newer version of Kanban, you might want to look at [Migration to newer versions](news/migration.md) for more info.

## Version 1.7.0

Released October 14, 2025

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-7/)

### Salesforce Integration

From v1.7, JavaScript Kanban can now be used inside Salesforce. Check out this guide for more details: [**Integration with Salesforce**](guides/integration_with_salesforce.md).

There's also a [**GitHub example**](https://github.com/DHTMLX/salesforce-lwc-demo) and an [**Online demo**](https://dhtmlx-dev-ed.develop.lightning.force.com/) (*Login*: ***user***, *Password*: ***demo***).

### New API

- #### Events

    - [`undo`](api/events/js_kanban_undo_event.md)
    - [`redo`](api/events/js_kanban_redo_event.md)

- #### Methods

    - [`getColumnCards()`](api/methods/js_kanban_getcolumncards_method.md)
    - [`detach()`](api/internal/js_kanban_detach_method.md)

### Updates

- #### Methods

    - The [`on`](api/internal/js_kanban_on_method.md) internal method now supports `config.tag` and `config.intercept` parameters
    - The [`intercept`](api/internal/js_kanban_intercept_method.md) internal method now supports `config.tag` and `config.intercept` parameters

- #### Properties

    - The [`links`](api/config/js_kanban_links_config.md) property has changed:
        - `masterId` is now `source`
        - `slaveId` is now `target`

    - The [`editorShape`](api/config/js_kanban_editorshape_config.md) property has changed: `clearButton` is now just `clear`

    - The [`cardShape.menu.items`](api/config/js_kanban_cardshape_config.md) function now uses `readonly` instead of `store`

    - The [`cards[i].attached[i]`](api/config/js_kanban_cards_config.md) property now has a `size` parameter

### Removed API

- The `editorAutoSave` property is gone. You can use [`editor.autoSave`](api/config/js_kanban_editor_config.md) instead

- The `dragItemsCoords` and `dropAreasCoords` parameters are no longer in the [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)

### Fixes

- If someone uploads a batch of files or several large files, the form might update before everything is fully uploaded, and the card data sent to the server is off
- File size only shows up for newly loaded files
- Year and month fields don't update after clicking **Done** in the editor
- When the comment textarea expands, it pushes the button out of the clickable area
- There's a script error if you open a card that's linked to a deleted card

## Version 1.6.5

Released July 14, 2025

### Fixes

- Setting `disabled: true` on menu items wasn't working
- Adding a row to Kanban with no row structure didn't show row headers

## Version 1.6.4

Released June 12, 2025

### Fixes

- Cards would disappear when added to columns/rows that got removed and then brought back
- Locale labels were missing for uploader list buttons
- Commercial version packages were missing readmes

## Version 1.6.3

Released April 8, 2025

### Fixes

- Limits were applying to the whole column in the wrong way
- Moving a card after closing the modal editor caused an error
- Deletion confirmation popped up under the modal editor
- The toolbar "more" icon would flicker during slow window resizing
- The `delete-card` event always closed the editor
- Couldn't open the editor if the priority was set to an ID not in the options

## Version 1.6.2

Released February 14, 2025

### Fixes

- Trial package had the wrong expiration date
- There was a warning during drag and drop on touch devices
- Setting readonly `add: false` didn't remove the **Add** option from the column menu
- Editor didn't show up for cards with number IDs as strings
- Package had an outdated link to samples
- Column scroll with lazy rendering had drag and drop glitches
- The `setConfig()` method didn't update the fixed state of column headers

## Version 1.6.1

Released November 29, 2024

### Fixes

- Toolbar's "more" icon was misaligned on narrow screens
- `RestDataProvider` ignored headers set via `setHeaders()`
- Calling `RestDataProvider.getIDResolver` gave a "not a function" error

## Version 1.6

Released November 13, 2024

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-6/)

### New functionality

- You can now set how many assigned users are shown on a card using [`cardShape.users.maxCount`](api/config/js_kanban_cardshape_config.md) ([**example**](https://snippet.dhtmlx.com/w205dvzg?tag=kanban))
- Column headers can be customized with [`columnShape`](api/config/js_kanban_columnshape_config.md) ([**example**](https://snippet.dhtmlx.com/gq2saz9c?tag=kanban))
- Search results view and content can be adjusted using [`items.searchResult`](api/config/toolbar_items_config.md) in the Toolbar's **search** control ([**example**](https://snippet.dhtmlx.com/2uo2f5mf?tag=kanban))
- Editor can now show up as a modal window via [`editor.placement`](api/config/js_kanban_editor_config.md) ([**example**](https://snippet.dhtmlx.com/vt6pe7qz?tag=kanban))
- Voting for a card is available through the vote icon, controlled by [`cardShape.votes.clickable`](api/config/js_kanban_cardshape_config.md) ([**example**](https://snippet.dhtmlx.com/en76xvi4?tag=kanban))

### Updates

- #### Properties

    - [`cardShape`](api/config/js_kanban_cardshape_config.md) now has ***users.maxCount*** and ***votes.clickable***
    - [`columnShape`](api/config/js_kanban_columnshape_config.md) now has ***headerTemplate*** and ***collapsedTemplate***
    - [`editor`](api/config/js_kanban_editor_config.md) now has ***placement***
    - [`items`](api/config/toolbar_items_config.md) for Toolbar **search** now has ***searchResult***

- #### Events

    - [`set-edit`](api/events/js_kanban_setedit_event.md) now includes ***eventSource*** ([**example**](https://snippet.dhtmlx.com/zh4d9pdb?tag=kanban))

- #### Methods

    - The [`setConfig()`](api/methods/js_kanban_setconfig_method.md) method now:
        - Doesn't affect history (history can't be changed)
        - Doesn't destroy the Kanban datastore, so event listeners and Toolbar stay attached

    - [`setLocale()`](api/methods/js_kanban_setlocale_method.md) also keeps the Kanban datastore intact, so Toolbar and listeners stay as they are
    - The `api` parameter for Toolbar's [`setLocale()`](api/methods/toolbar_setlocale_method.md) is now deprecated

### Fixes

- If you're editing a comment and remove it, the textarea for new comments disappears
- Missing localization strings are now included
- Drag-and-drop didn't work when using [`scrollType: "column"`](api/config/js_kanban_scrolltype_config.md) with [`renderType: "lazy"`](api/config/js_kanban_rendertype_config.md)
- Couldn't close the editor with the close icon
- In the Willow skin, the right part of the editor matched the progress bar background color

## Version 1.5.13

Released September 12, 2024

### Fixes

- "Make cover" button didn't show up if the file extension was uppercase
- Clicking a disabled Multiselect control caused an error
- Scrolling after calling [`addCard()`](api/methods/js_kanban_addcard_method.md) would throw an error with [column scroll](api/config/js_kanban_scrolltype_config.md) and [lazy rendering](api/config/js_kanban_rendertype_config.md)
- No comments were saved as "" instead of []
- Editor styles could be overridden by global styles with a non-unique class selector. [See migration section](news/migration.md/#1512---1513)

## Version 1.5.12

Released May 2, 2024

### Fixes

- Intercept regression: returning `false` didn't stop inner events
- Disabled files could still be uploaded

## Version 1.5.11

Released March 25, 2024

### Fixes

- Kanban CSS variables for the *Dark willow* skin were missing for Toolbar and Portals
- Changes to comments and votes weren't saved to form values when autosave was off
- Custom column submenu got `null` in the **onClick** function argument
- Couldn't set editable mode for Datepickers in Editor
- Console warnings showed up in Kanban examples

## Version 1.5.10

Released February 29, 2024

### Fixes

- npm server had a broken build
- Added the `select` parameter to the [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md) event and [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md) method
- Comment field styles in the Kanban editor were off

## Version 1.5.9

Released February 20, 2024

### Fixes

- Kanban was affecting styles of other widgets
- Custom column submenu items with `disabled: true` were still clickable
- Couldn't set a custom upload function for the **Uploader** control

## Version 1.5.8

Released November 28, 2023

### Fixes

- The **currentUser** TS definition was missing in the **IKanbanConfig** type

## Version 1.5.7

Released November 14, 2023

### Updates

- Toolbar's [`setLocale()`](api/methods/toolbar_setlocale_method.md) now has an ***api*** parameter

### Fixes

- `disabled: true` didn't work for card menu items
- Console warnings appeared in Kanban examples
- Couldn't reset task priority
- Drop-down controls in the Kanban editor didn't close when clicking outside

## Version 1.5.6

Released September 13, 2023

### Updates

- You can now import the component as an ES module

### Fixes

- Regression in npm packages

## Version 1.5.4

Released August 9, 2023

### Fixes

- Files uploaded earlier stuck around in the form after switching to another card
- File upload via drag-and-drop wasn't working
- Cards could be unexpectedly deleted if the Delete key was pressed while the form was open
- The "Search in" dropdown went blank after selecting a card through search
- Added links weren't deleted on the backend when undoing the add-link operation

## Version 1.5.1

### Fixes

- TypeScript definitions are now generated properly

## Version 1.5

Released June 15, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-5/)

### New functionality

- It's now possible to set and remove links between cards on the fly
- Links between cards can be managed on the server
- Column headers can be fixed ([**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))

### New API

- #### Methods

    - [`addLink()`](api/methods/js_kanban_addlink_method.md)
    - [`deleteLink()`](api/methods/js_kanban_deletelink_method.md)
    - [`getLinks()`](api/provider/rest_methods/js_kanban_getlinks_method.md)

- #### Routes

    - [`DELETE /links`](api/provider/rest_routes/delete_routes/js_kanban_delete_links_route.md)
    - [`GET /links`](api/provider/rest_routes/get_routes/js_kanban_get_links_route.md)
    - [`POST /links`](api/provider/rest_routes/post_routes/js_kanban_post_links_route.md)

### Updates

- #### Properties

    - [`columnShape`](api/config/js_kanban_columnshape_config.md) now has ***fixedHeaders***

### Fixes

- Links couldn't be parsed, exported, or serialized at runtime
- Creating the comments section failed if users weren't activated
- Links in store would change the original data and not save right
- Lazy rendering messed up styles for collapsed columns' hover area
- Cards moved to new columns disappeared
- Textarea for a new comment stayed open when editing started

## Version 1.4.2

Released April 13, 2023

### Fixes

- Backend ID wasn't saved to local card/column/row data after adding
- Missing TS definitions are now included
- Dark skin styles were leaking

## Version 1.4.1

Released March 29, 2023

### Fixes

- Sorting wasn't preserved as expected
- Disabling a context menu through **cardShape**, **columnShape**, or **rowShape** didn't work right
- Adding links in the editor without providing links in data caused issues
- The menu on a column could be the same as on a card, or not show up at all
- Dragging two tasks instead of one

## Version 1.4

Released March 21, 2023

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-4/)

### New functionality

- Comments can be added ([**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- User limits can be set ([**example**](https://snippet.dhtmlx.com/2rlg4qvk?tag=kanban))
- Links between cards can be set ([**example**](https://snippet.dhtmlx.com/81qu7qh0?tag=kanban))
- Cards can be voted on ([**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))

### New API

- #### Events

    - [`add-comment`](api/events/js_kanban_addcomment_event.md)
    - [`add-link`](api/events/js_kanban_addlink_event.md)
    - [`delete-comment`](api/events/js_kanban_deletecomment_event.md)
    - [`delete-link`](api/events/js_kanban_deletelink_event.md)
    - [`drag-card`](api/events/js_kanban_dragcard_event.md)
    - [`end-drag-card`](api/events/js_kanban_enddragcard_event.md)
    - [`start-drag-card`](api/events/js_kanban_startdragcard_event.md)
    - [`update-comment`](api/events/js_kanban_updatecomment_event.md)

- #### Methods

    - [`addComment()`](api/methods/js_kanban_addcomment_method.md)
    - [`deleteComment()`](api/methods/js_kanban_deletecomment_method.md)
    - [`updateComment()`](api/methods/js_kanban_updatecomment_method.md)

- #### Properties

    - [`currentUser`](api/config/js_kanban_currentuser_config.md)
    - [`links`](api/config/js_kanban_links_config.md)

### Updates

- #### Methods

    - [`api.getState()`](api/internal/js_kanban_getstate_method.md) is updated

- #### Properties

    - [`cards`](api/config/js_kanban_cards_config.md) now has ***css***, ***comments***, and ***votes***
    - [`cardShape`](api/config/js_kanban_cardshape_config.md) now has ***comments***, ***votes*** ([**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban)), and ***css*** ([**example**](https://snippet.dhtmlx.com/7fvc3rr1?tag=kanban))
    - [`cardTemplate`](api/config/js_kanban_cardtemplate_config.md) can now show a context menu
    - [`columns`](api/config/js_kanban_columns_config.md) now has ***css*** ([**example**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban)) and ***overlay*** ([**example**](https://snippet.dhtmlx.com/nfv59yif?tag=kanban))
    - [`columnShape`](api/config/js_kanban_columnshape_config.md) now has ***css*** ([**example**](https://snippet.dhtmlx.com/fnlvd2g5?tag=kanban))
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) now supports [***comments***](guides/configuration.md#comments-type), [***links***](guides/configuration.md#links-type), and the ***format*** parameter for *date/dateRange* types
    - [`rows`](api/config/js_kanban_rows_config.md) now has ***css*** ([**example**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))
    - [`rowShape`](api/config/js_kanban_rowshape_config.md) now has ***css*** ([**example**](https://snippet.dhtmlx.com/tev4ej9c?tag=kanban))

### Deprecated API

- #### Properties

    - The label in menu item objects in `cardShape.menu.items`, `columnShape.menu.items`, and `rowShape.menu.items` is now deprecated

### Fixes

- Menu position was off when Kanban was inside a container with margins
- Collapsed columns were in the wrong place if you set a custom column width
- Dropping a card into a collapsed column made it disappear
- Collapsed columns were in the wrong place if you set a custom column width
- In swimlanes, the card context menu was covered by the editing panel, so you couldn't delete the card

## Version 1.3

Released September 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-3/)

### New functionality

- Cards can be duplicated using API, a context menu (3 dots icon), or `Ctrl (Command)` + `D` shortcuts (multiple cards can be duplicated at once)
- Kanban data can be exported to a JSON file
- Kanban history can be managed:
    - With *Undo* and *Redo* controls on the Toolbar
    - With shortcuts:
        - `Ctrl (Command)`+`Z` - undo
        - `Ctrl (Command)`+`Y` or `Ctrl (Command)`+`Shift`+`Z` - redo
    - Using API

### New API

- **Events:**
    [`duplicate-card`](api/events/js_kanban_duplicatecard_event.md)

- **Methods:**
    [`duplicateCard()`](api/methods/js_kanban_duplicatecard_method.md),
    [`export.json()`](api/internal/js_kanban_json_method.md),
    [`getUsers()`](api/provider/rest_methods/js_kanban_getusers_method.md),
    [`redo()`](api/methods/js_kanban_redo_method.md), and
    [`undo()`](api/methods/js_kanban_undo_method.md)

- **Properties:**
    [`editor`](api/config/js_kanban_editor_config.md) and
    [`history`](api/config/js_kanban_history_config.md)

- **Common settings:**
    [`$meta`](api/common/js_kanban_meta_parameter.md)

### Deprecated API

- **Properties:**
    [`editorAutoSave`](api/config/js_kanban_editorautosave_config.md)

### Updates

- #### Events

    - [`update-card`](api/events/js_kanban_updatecard_event.md) is updated
    - [`update-column`](api/events/js_kanban_updatecolumn_event.md) is updated
    - [`update-row`](api/events/js_kanban_updaterow_event.md) is updated

- #### Methods

    - [`updateCard()`](api/methods/js_kanban_updatecard_method.md) is updated
    - [`updateColumn()`](api/methods/js_kanban_updatecolumn_method.md) is updated
    - [`updateRow()`](api/methods/js_kanban_updaterow_method.md) is updated

- #### Properties

    - [`items`](api/config/toolbar_items_config.md) for Toolbar now includes ***"undo"*** and ***"redo"*** controls
    - [`editorShape`](api/config/js_kanban_editorshape_config.md) now supports ***dateRange*** type

## Version 1.2.2

Released August 30, 2022

### Fixes

- Some icons were duplicated in menu and toolbar

## Version 1.2.1

Released July 28, 2022

### Fixes​

- The `cardHeight` property didn't work with `scrollType:"column"`
- Uploader didn't show uploaded files in the card editor
- Localization didn't work for "combo" and "progress" fields in the card editor

## Version 1.2

Released June 29, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-2/)

### New functionality 

- New cards can be added via a column menu ([**example**](https://snippet.dhtmlx.com/8eo65gr5?tag=kanban))
- Lazy rendering is available ([**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Columns can be scrolled separately ([**example**](https://snippet.dhtmlx.com/xez9ghqq?tag=kanban))
- Kanban scrolls to newly created cards, columns, and rows (API and UI) ([**example**](https://snippet.dhtmlx.com/5hcx01h4?tag=kanban))
- Cards can be sorted (API and UI) ([**example**](https://snippet.dhtmlx.com/74nyuv14?tag=kanban))

### New API

- **Events:**
    [`scroll`](api/events/js_kanban_scroll_event.md),
    [`set-edit`](api/events/js_kanban_setedit_event.md), and
    [`set-sort`](api/events/js_kanban_setsort_event.md)

- **Methods:**
    [`scroll()`](api/methods/js_kanban_scroll_method.md),
    [`setEdit()`](api/methods/js_kanban_setedit_method.md), and
    [`setSort()`](api/methods/js_kanban_setsort_method.md)

- **Properties:**
    [`cardHeight`](api/config/js_kanban_cardheight_config.md),
    [`columnShape`](api/config/js_kanban_columnshape_config.md),
    [`rowShape`](api/config/js_kanban_rowshape_config.md), 
    [`renderType`](api/config/js_kanban_rendertype_config.md), and
    [`scrollType`](api/config/js_kanban_scrolltype_config.md)

### Updates

- #### Methods

    - [`api.getReactiveState()`](api/internal/js_kanban_getreactivestate_method.md) is updated
    - [`api.getState()`](api/internal/js_kanban_getstate_method.md) is updated
    - [`api.getStores()`](api/internal/js_kanban_getstores_method.md) is updated
    - [`setLocale()`](api/methods/js_kanban_setlocale_method.md) for Kanban is updated
    - [`setLocale()`](api/methods/toolbar_setlocale_method.md) for Toolbar is updated

- #### Properties

    - [`items`](api/config/toolbar_items_config.md) for Toolbar is updated
    - The ***start_date***, ***end_date***, ***menu***, and ***users*** fields of [`cardShape`](api/config/js_kanban_cardshape_config.md) are updated
    - The ***multiselect*** type of [`editorShape`](api/config/js_kanban_editorshape_config.md) is updated

#### Common

- CSS class prefixes changed (*see the [Stylization](guides/stylization.md) section*)
- Locale structure updated (*see the [Localization](guides/localization.md) section*)

### Fixes

- Binding cards to swimlanes using `rowKey` didn't work right
- Clicking the card menu opened the editor
- Dragging several cards didn't work right
- Editing cards with `select: false` (**readonly** config.md) was broken
- Selecting newly added cards with `addCard()` didn't work as expected
- The `label: false` and `menu: false` parameters in `cardShape` didn't behave correctly

## Version 1.1.1

Released February 28, 2022

[Review of release on the blog](https://dhtmlx.com/blog/maintenance-release-kanban-1-1-1/)

### Fixes

- Custom editor field didn't work unless it was defined in cardShape config
- Selecting the right card from the search bar dropdown menu

## Version 1.1

Released February 15, 2022

[Review of release on the blog](https://dhtmlx.com/blog/dhtmlx-kanban-1-1-wip-validation-new-operations-columns-rows-typescript-support/)

### New functionality

- Columns can be *collapsed/expanded* using an arrow next to the label
- Columns and swimlanes can have a card *limit*
- Columns can be *moved* via the context menu (3 dots icon)
- Rows can be *moved* via the context menu (3 dots icon)
- Multiple cards in a column can be selected using **Shift** + **click**
- [TypeScript definitions](guides/typescript_support.md) for Kanban are now available

### New API

- New **events** for moving columns and rows: 
    [`move-column`](api/events/js_kanban_movecolumn_event.md)
    and
    [`move-row`](api/events/js_kanban_moverow_event.md)
- New **methods** for moving columns and rows: 
    [`moveColumn()`](api/methods/js_kanban_movecolumn_method.md) 
    and
    [`moveRow()`](api/methods/js_kanban_moverow_method.md)

### Updates

#### Properties

- [`cards`](api/config/js_kanban_cards_config.md) is now optional

- [`columns`](api/config/js_kanban_columns_config.md) is now optional and has:
    - ***collapsed***
    - ***limit***
    - ***strictLimit***

- The ***color*** parameter in [`cardShape`](api/config/js_kanban_cardshape_config.md) has been updated

#### Methods

- [`addColumn`](api/methods/js_kanban_addcolumn_method.md) is updated
- [`addRow`](api/methods/js_kanban_addrow_method.md) is updated
- [`updateCard`](api/methods/js_kanban_updatecard_method.md) is updated
- [`updateColumn`](api/methods/js_kanban_updatecolumn_method.md) is updated
- [`updateRow`](api/methods/js_kanban_updaterow_method.md) is updated
- [`parse`](api/methods/js_kanban_parse_method.md) is updated

#### Events

- [`add-column`](api/events/js_kanban_addcolumn_event.md) is updated
- [`add-row`](api/events/js_kanban_addrow_event.md) is updated
- [`update-card`](api/events/js_kanban_updatecard_event.md) is updated
- [`update-column`](api/events/js_kanban_updatecolumn_event.md) is updated
- [`update-row`](api/events/js_kanban_updaterow_event.md) is updated

## Version 1.0

Released November 23, 2021

[Review of release on the blog](https://dhtmlx.com/blog/releasing-dhtmlx-kanban-board-v-1-0/)

### Initial functionality

- Cards can be managed in these ways:
    - add new cards
    - select cards (including multiselection)
    - delete cards
    - search for cards
    - reorder cards by dragging to another column or row
    - edit card data in the editor:
        - label
        - description
        - progress
        - start date
        - end date
        - color
        - priority
        - attachments (*files* and *pictures*)
        - *custom fields*

- Columns and rows can be managed like this:
    - add new columns and rows
    - delete columns and rows
    - rename columns and rows
    - collapse/expand rows

- [Localization](guides/localization.md)
- [Integration with backend](guides/working_with_server.md) (Go and Node)
- Works in all major browsers
- Supports touch devices