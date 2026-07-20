---
sidebar_label: DHTMLX MCP server
title: DHTMLX Kanban and the MCP server for building with AI
description: The MCP server gives AI tools access to current DHTMLX Kanban documentation, covering cards, columns, swimlanes, editor fields, and REST data sync.
---

# DHTMLX Kanban and the MCP server: build with live docs

A working [DHTMLX Kanban](/) board depends on several pieces fitting together correctly: card fields defined through `cardShape` must share a key with the matching `editorShape` entry, the Toolbar runs as its own widget bound to the board through the `api` parameter, and server sync relies on the exact action handlers exposed by `RestDataProvider`. An outdated training snapshot leaves an AI assistant merging card and editor fields into one config object, folding the Toolbar into the board's own constructor, or reaching for `RestDataProvider` methods that were renamed or removed since.

The DHTMLX MCP server closes that gap by handing the assistant a live line into the Kanban documentation itself. Ask about [binding editor fields to card fields](guides/configuration.md#bind-editor-fields-to-card-fields), [customizing the Toolbar](guides/customization.md#custom-toolbar), or [connecting a RestDataProvider backend](guides/working_with_server.md), and the assistant pulls the current reference before writing any code.

**MCP endpoint**

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX Kanban. The same endpoint and configuration instructions work regardless of which DHTMLX component you are building with.
:::

## What the MCP server unlocks for Kanban

Under the hood, the server keeps a full index of the DHTMLX Kanban documentation, ready to serve requests like these:

- Looking up the current API for Kanban [methods](api/overview/methods_overview.md), [events](api/overview/events_overview.md), and [properties](api/overview/properties_overview.md), including signatures and default values.
- Generating ready-to-run [initialization](guides/initialization.md) code for both the Kanban board and the separate Toolbar constructor.
- Configuring [card and editor fields](guides/configuration.md#cards) (`cardShape`, `editorShape`) and binding them by key, including combo, multiselect, color, date, and file field types.
- [Customizing](guides/customization.md) card templates, context menus, and column headers with the documented template callbacks.
- [Styling](guides/stylization.md) columns, rows, and cards with CSS variables and conditional CSS classes.
- [Localizing](guides/localization.md) the Kanban and Toolbar interfaces with built-in or custom locale objects.
- [Loading, exporting, and mutating](guides/working_with_data.md) cards, columns, rows, links, and comments through the data API.
- Connecting a [REST backend](guides/working_with_server.md) through `RestDataProvider`, or setting up a multiuser board that syncs changes over WebSocket.
- [Integrating](guides/integration.md) Kanban with other DHTMLX widgets such as Gantt and Scheduler, or with [React](guides/integration_with_react.md), [Vue](guides/integration_with_vue.md), [Angular](guides/integration_with_angular.md), and [Svelte](guides/integration_with_svelte.md).

## Under the hood: how the MCP server responds

Ask the MCP server the same question twice and you can get two different kinds of response, because the calling agent picks between two workflows depending on the request. *Search* pulls the matching Kanban reference pages and hands them to the assistant, which writes the answer itself; *Inference* reads those same pages and writes the answer for the assistant instead. Both draw on a Retrieval-Augmented Generation (RAG) index built from the current documentation, reached through the Model Context Protocol (MCP) endpoint.

For example, when you ask *"How do I bind a custom `editorShape` field to a `cardShape` field so the value shows up both on the card and in the editor in DHTMLX Kanban?"*, the assistant sends the prompt through the MCP endpoint. For a code-generation request like this one, it typically calls *Search*: the workflow finds the matching field-binding documentation, returns the relevant reference pages as context, and the assistant turns them into code using whatever the current API actually looks like, not what it looked like at training time. For a question with a single correct answer, the assistant can call *Inference* instead: the workflow reads the reference pages itself and returns a ready-made answer directly, so the assistant relays that answer rather than composing one from raw pages.

## Adding the MCP endpoint to your AI tool

Teams building Kanban boards often keep an AI assistant open alongside the editor to wire up cards, columns, and server sync. Most AI development tools let you add MCP endpoints through a CLI command or a JSON configuration file, in either case by registering the server URL.

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Below are setup instructions for commonly used tools.

### Claude Code

:::info
The [official documentation](https://code.claude.com/docs/en/mcp) covers all options for connecting Claude Code with MCP servers.
:::

To register the server from the command line, run:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

For manual setup, add the following to your `mcp.json`:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor

:::info
The [official documentation](https://cursor.com/en-US/docs/mcp) covers all MCP configuration options for Cursor.
:::

Steps to add the server:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste the following config:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity

#### Antigravity 2.0

:::info
Refer to the [official documentation](https://antigravity.google/docs/mcp) for full details on MCP server integration in Antigravity.
:::

These are the steps to complete for connecting DHTMLX MCP server with Google Antigravity:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
Check the [related guide](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) to learn about migration from Gemini CLI to Antigravity CLI.
:::

To connect the DHTMLX MCP server to Antigravity CLI, create `mcp_config.json` in one of these locations:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Add the following configuration:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Then run `agy` in the terminal.

### ChatGPT

:::info
The [official documentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) covers MCP connector setup for ChatGPT.
:::

Steps to configure the connector:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to **Apps & Connectors** and click "Create"
5. Fill in the connector details:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL:
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

After you create the connector, ChatGPT pulls documentation from the MCP server during conversations.

:::info
For intensive coding workflows, other MCP-aware tools may be a better fit.
:::

### Other tools

Many modern AI coding tools expose MCP support under labels such as "Model Context Protocol", "Context Sources", or similar. Add `https://docs.dhtmlx.com/mcp` as a custom source in the relevant settings panel.

## What the MCP server does with your data

The MCP server is a hosted service: nothing runs on your machine, no files from your project are read, and no personal data is stored.

Debugging and service-improvement work may involve logging queries.

For stricter privacy requirements, organizations can request a commercial deployment with query logging turned off. Reach out to `info@dhtmlx.com` for details.

## Prompts to try for Kanban boards

The API surface DHTMLX Kanban exposes is large, so tell the assistant exactly which piece you mean: a card, a column, the Toolbar, or the REST layer. The prompts below are grouped that way; borrow one and adjust the specifics.

**Cards, columns, and swimlanes**

~~~
How do I let users drag cards between columns and rows in DHTMLX Kanban? Use the docs.
~~~
~~~
How do I limit the number of cards allowed in a specific column or swimlane?
~~~
~~~
How do I duplicate a card and move the copy to a different row using the Kanban API?
~~~

**Editor and field types**

~~~
How do I bind a custom editorShape field to a cardShape field so it appears on the card and in the editor?
~~~
~~~
How do I configure a multiselect field with user avatars in the DHTMLX Kanban editor?
~~~
~~~
How do I enable autosave with a debounce delay in the DHTMLX Kanban editor?
~~~

**Toolbar and board controls**

~~~
How do I add a custom search control to the Kanban Toolbar and bind it to the board?
~~~
~~~
How do I remove the undo and redo controls from the DHTMLX Kanban Toolbar?
~~~

**REST and multiuser sync**

~~~
How do I connect RestDataProvider to a Go backend and load the initial Kanban data?
~~~
~~~
How do I override getHandlers() in RestDataProvider to add a custom action handler?
~~~
~~~
How do I set up a multiuser DHTMLX Kanban board that syncs changes in real time over WebSocket?
~~~

## Getting sharper results from Kanban prompts

- **Name the target element.** Distinguish between the board, a column, a row (swimlane), and a card (for example, "on the Kanban board" vs. "for a specific row" vs. "on a card in the Testing column"). A precise target helps the server retrieve the right reference pages.
- **Specify the field type.** `cardShape` and `editorShape` support many field types (combo, multiselect, color, date, files). Name the type explicitly (for example, "a multiselect field with avatars") instead of "a field" so the assistant pulls the matching configuration reference.
- **Add "Use the docs"** to your prompt. This phrase signals to the assistant that it should trigger an MCP lookup instead of answering from training data alone. It matters most for `RestDataProvider` handlers and field configuration, where the API is most likely to have changed.
- **State whether the operation is client-side or server-side.** Kanban works with local data as well as a `RestDataProvider`-backed REST API. Mention which one applies (for example, "using RestDataProvider" or "without a backend") so the assistant does not mix REST-specific calls into a client-only example.
