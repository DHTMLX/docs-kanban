---
sidebar_label: Basic API overview
title: Basic API Overview
description: You can have an API overview of the JavaScript Kanban library in the documentation. Browse developer guides and API reference, try out code examples and live demos.
---

# API overview

## Constructor

~~~js
const { Kanban } = app;
const kanban = new Kanban("#root", {
	columns,
    cards
});
~~~

Parameters:

- an HTML container (or the ID of an HTML container)
- a hash of config options (check below)

## JS Kanban Methods

| Name                                         				  		| Description                                            			 |
| ----------------------------------------------------------| -------------------------------------------------------------|
| [addCard()](../methods/js_kanban_addcard_method)  	  		| adds a new card into JS Kanban          				   			 		 |
| [addColumn()](../methods/js_kanban_addcolumn_method)  		| adds a new column into JS Kanban                   		 	 		 |
| [addRow()](../methods/js_kanban_addrow_method)    	  		| adds a new row into JS Kanban                      					 |
| [deleteCard()](../methods/js_kanban_deletecard_method)		| removes a card from JS Kanban                      			   	 |
| [destructor()](../methods/js_kanban_destructor_method)		| removes JS Kanban                   								   			 |
| [getAreaCards()](../methods/js_kanban_getareacards_method)| gets an array of the data objects of all cards of the column |
| [getCard()](../methods/js_kanban_getcard_method)      		| gets the data object of the card with the specified ID 			 |
| [getSelection()](../methods/js_kanban_getselection_method)| gets an array of IDs of the selected cards			 						 |
| [moveCard()](../methods/js_kanban_movecard_method)      	| moves a card to the specified column (and row)			 				 |
| [parse()](../methods/js_kanban_parse_method)      				| loads data into JS Kanban			 													  	 |
| [removeSearch()](../methods/js_kanban_removesearch_method)| clears highlighting and *removes values of the search bar?*  |
| [selectCard()](../methods/js_kanban_selectcard_method)    | selects the card by its ID  														 		 |
| [serialize()](../methods/js_kanban_serialize_method)      | serializes the widget data to JSON  					          		 |
| [setConfig()](../methods/js_kanban_setconfig_method)      | sets the configuration parameters 					          		   |
| [setLocale()](../methods/js_kanban_setlocale_method)      | sets new locale  			                        		           |
| [setSearch()](../methods/js_kanban_setsearch_method)      | looks for the needed cards by the required parameters 			 |
| [unselectCard()](../methods/js_kanban_unselectcard_method)| unselects card(s) by its ID			  													 |
| [updateCard()](../methods/js_kanban_updatecard_method)    | updates the card data	by its ID	  													 |
| [updateColumn()](../methods/js_kanban_updatecolumn_method)| updates the column data	by its ID	  												 |
| [updateRow()](../methods/js_kanban_updaterow_method)      | updates the row data	by its ID	  													 |

## JS Kanban Inner Methods

| Name                               																  | Description                               |
| ------------------------------------------------------------------- | ----------------------------------------- |
| [api.exec()](../inner/js_kanban_exec_method) 												|      |
| [api.getReactiveState()](../inner/js_kanban_getreactivestate_method)|      |
| [api.getState()](../inner/js_kanban_getstate_method)    					  |      |
| [api.getStores()](../inner/js_kanban_getstores_method)    				  |      |
| [api.intercept()](../inner/js_kanban_intercept_method)   					  |      |
| [api.on()](../inner/js_kanban_on_method)   													|      |
| [api.setNext()](../inner/js_kanban_setnext_method)     							|      |

## JS Kanban Properties

| Name                                           		         | Description                                           |
| -----------------------------------------------------------| ----------------------------------------------------- |
| [cards](../config/js_kanban_cards_config) 				         |  				|
| [cardShape](../config/js_kanban_cardshape_config)          |  				|
| [cardTemplate](../config/js_kanban_cardtemplate)           |          |
| [columns](../config/js_kanban_columns_config)              |          |
| [editorAutoSave](../config/js_kanban_editorautosave_config)|          |
| [editorShape](../config/js_kanban_editorshape_config) 	   |  				|
| [lane](../config/js_kanban_lane_config)        	           |          |
| [readonly](../config/js_kanban_readonly_config)            |      	  |
| [rows](../config/js_kanban_rows_config)                    |          |
| [stage](../config/js_kanban_stage_config)                  |          |
