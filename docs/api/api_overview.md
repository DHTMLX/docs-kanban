---
sidebar_label: API Overview
title: API Overview
description: You can have an API overview of the JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos.
---

# API Overview

## JS Kanban constructor

~~~js
new kanban.Kanban("#root", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters ([check here](#js-kanban-properties)).

## Toolbar constructor

~~~js
new kanban.Toolbar("#toolbar", {
	// configuration parameters
});
~~~

**Parameters**:

- an HTML container (the ID of the HTML container)
- an object of the configuration parameters (check below).

## JS Kanban properties

| Name                                           		         | Description                                              |
| -----------------------------------------------------------| ---------------------------------------------------------|
| [cards](../config/js_kanban_cards_config) 				         | an array of objects containing the cards data 		  	    |
| [cardShape](../config/js_kanban_cardshape_config)          | card configs that manage the appearance of the board     |
| [cardTemplate](../config/js_kanban_cardtemplate)           | returns and applies a new HTML template of the cards     |
| [columnKey](../config/js_kanban_columnkey_config)          | defines belonging the card to the column                 |
| [columns](../config/js_kanban_columns_config)              | an array of objects containing the columns data          |
| [editorAutoSave](../config/js_kanban_editorautosave_config)| enables/disables an autosave mode of JS Kanban           |
| [editorShape](../config/js_kanban_editorshape_config) 	   | editor configs that manage the appearance of the editor	|
| [readonly](../config/js_kanban_readonly_config)            | enables/disables readonly mode of JS Kanban          	  |
| [rowKey](../config/js_kanban_rowkey_config)        	       | defines belonging the card to the row                    |
| [rows](../config/js_kanban_rows_config)                    | an array of objects containing the rows data             |
| (*Toolbar*) [api](../config/toolbar_api_config)  				   | an object with internal api of JS Kanban 		  	        |
| (*Toolbar*) [items](../config/toolbar_items_config)        | an array of controls located in the toolbar              |

## JS Kanban methods

| Name                                         				  		| Description                                            			 |
| ----------------------------------------------------------| -------------------------------------------------------------|
| [addCard()](../methods/js_kanban_addcard_method)  	  		| adds a new card into JS Kanban          				   			 		 |
| [addColumn()](../methods/js_kanban_addcolumn_method)  		| adds a new column into JS Kanban                   		 	 		 |
| [addRow()](../methods/js_kanban_addrow_method)    	  		| adds a new row into JS Kanban                      					 |
| [deleteCard()](../methods/js_kanban_deletecard_method)		| removes a card from JS Kanban                      			   	 |
| [deleteColumn()](../methods/js_kanban_deletecolumn_method)| removes a column from JS Kanban                      			 	 |
| [deleteRow()](../methods/js_kanban_deleterow_method)      | removes a row from JS Kanban                        		   	 |
| [destructor()](../methods/js_kanban_destructor_method)		| removes JS Kanban                   								   			 |
| [getAreaCards()](../methods/js_kanban_getareacards_method)| gets an array of the data objects of the cards               |
| [getCard()](../methods/js_kanban_getcard_method)      		| gets the data object of the card with the specified ID 			 |
| [getSelection()](../methods/js_kanban_getselection_method)| gets an array of IDs of the selected cards			 						 |
| [moveCard()](../methods/js_kanban_movecard_method)      	| moves a card to the specified column (and row)			 				 |
| [parse()](../methods/js_kanban_parse_method)      				| loads data into JS Kanban			 													  	 |
| [selectCard()](../methods/js_kanban_selectcard_method)    | selects a card by the specified ID  											   |
| [serialize()](../methods/js_kanban_serialize_method)      | serializes the widget data to JSON  					          		 |
| [setConfig()](../methods/js_kanban_setconfig_method)      | sets the config parameters 					                  		   |
| [setLocale()](../methods/js_kanban_setlocale_method)      | sets a new locale  			                        		         |
| [setSearch()](../methods/js_kanban_setsearch_method)      | looks for the needed cards by the specified parameters 			 |
| [unselectCard()](../methods/js_kanban_unselectcard_method)| unselects the card(s) by the specified ID			  						 |
| [updateCard()](../methods/js_kanban_updatecard_method)    | updates the card data	by the specified ID	  								 |
| [updateColumn()](../methods/js_kanban_updatecolumn_method)| updates the column data	by the specified ID	  							 |
| [updateRow()](../methods/js_kanban_updaterow_method)      | updates the row data by the specified ID	  								 |

## JS Kanban internal API

### Event Bus methods

| Name                               												| Description                                                  |
| ----------------------------------------------------------| ------------------------------------------------------------ |
| [api.exec()](../internal/js_kanban_exec_method) 				  | allows triggering the inner events                           |
| [api.intercept()](../internal/js_kanban_intercept_method) | allows intercepting and preventing the inner events          |
| [api.on()](../internal/js_kanban_on_method)   						| allows attaching a handler to the inner events               |
| [api.setNext()](../internal/js_kanban_setnext_method)     | allows adding some action into the Event Bus order           |

### State methods

| Name                               																     | Description                                                   |
| -----------------------------------------------------------------------| ------------------------------------------------------------- |
| [api.getReactiveState()](../internal/js_kanban_getreactivestate_method)| gets an object with the reactive properties of the StateStore |
| [api.getState()](../internal/js_kanban_getstate_method)    					   | gets an object with the current properties of the StateStore  |
| [api.getStores()](../internal/js_kanban_getstores_method)    				   | gets an object with the StateStore and DataStore objects      |

### RestDataProvider methods

| Name                               											| Description                          |
| --------------------------------------------------------| -------------------------------------|
| [getCards()](../provider/js_kanban_getcards_method)		  | gets a promise with the cards data   |
| [getColumns()](../provider/js_kanban_getcolumns_method) | gets a promise with the columns data |
| [getRows()](../provider/js_kanban_getrows_method)    		| gets a promise with the rows data    |
