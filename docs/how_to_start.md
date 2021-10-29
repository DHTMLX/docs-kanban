---
sidebar_label: How to Start
title: How to Start with JS Kanban
description: You can have an overview of the JavaScript Kanban documentation. Browse developer guides and API reference and try out code examples and live demos.
---

# How to Start

This clear and comprehensive tutorial will guide your through the steps you need to take in order to get a full-functional JS Kanban on a page.

!!! **the widget baner here**

## Step 1. Including source files

Start from creating an HTML file and call it *index.html*. Then proceed to include JS Kanban source files into the created file.

There are two necessary files:

- the JS file of JS Kanban
- the CSS file of JS Kanban

and

- the link to the Google Fonts source file for the correct rendering of fonts.

~~~html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <title>How to Start with JS Kanban</title>
  <script src="codebase/kanban.js"></script>   

  <link href="codebase/kanban.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Roboto:400,500"
  		rel="stylesheet">
</head>
<body>
	<script>
	  // your code will be here
	</script>
</body>
</html>
~~~

## Step 2. Creating JS Kanban

Now you are ready to add JS Kanban to the page. First, let's create a DIV container and then place JS Kanban into it. So, your steps will be:

- to specify a DIV container in the **index.html** file
- to initialize JS Kanban using the `Kanban` constructor

As parameters, the constructor takes the HTML container where JS Kanban will be placed into and the configuration object of JS Kanban.

~~~html title="index.html"
<!DOCTYPE html>
<html>
<head>
 <title>How to Start with JS Kanban</title>
 <script src="codebase/kanban.js"></script>   

 <link href="codebase/kanban.css" rel="stylesheet">  
 <link href="https://fonts.googleapis.com/css?family=Roboto:400,500"
  	rel="stylesheet">
</head>
<body>
 <div id="root"></div>

 <script>
	new kanban.Kanban("#root", {
		//config options
	});
 </script>
</body>
</html>
~~~

## Step 3. Configuring JS Kanban

Next you can specify additional configuration options you want the JS Kanban component to have when initialized besides the default ones.

To start working with JS Kanban, you need to provide initial data for **columns** and **cards**.
There are several options you can use to adjust the look of JS Kanban to your needs. [Check the details](../guides/configuration).

~~~js
new kanban.Kanban("#root", {
	columns,
	cards
});
~~~

The configuration of JS Kanban is quite flexible, so you can change it at any time. [Read the related guide](../guides/configuration) to go into the basics of configuring JS Kanban.


## What's next

That's all. Just four simple steps and you have a handy tool for visualizing and managing the workflow. Now you can start working with your tasks or keep exploring the inner world of JS Kanban.

- [JS Kanban Overview](../)
- [API Overview](../api/api_overview)
