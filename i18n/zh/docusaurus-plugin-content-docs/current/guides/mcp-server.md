---
sidebar_label: DHTMLX MCP 服务器
title: 面向看板与 REST 同步的 DHTMLX Kanban MCP 集成
description: MCP 服务器让 AI 工具能够访问最新的 DHTMLX Kanban 文档，涵盖卡片、列、泳道、编辑器字段以及 REST 数据同步。
---

# DHTMLX Kanban MCP 服务器：卡片、编辑器与 REST 同步

一个真正可用的 [DHTMLX Kanban](/) 看板依赖多个部分的正确配合：卡片字段与编辑器字段需要[共用同一个 key](guides/configuration.md#bind-editor-fields-to-card-fields)，[Toolbar](guides/customization.md#custom-toolbar) 作为独立的 widget 绑定到看板上运行，而[服务器同步](guides/working_with_server.md)则依赖一组特定的操作处理器。只有当卡片字段与编辑器字段使用相同的 key、Toolbar 单独接入、服务器同步基于当前的操作处理器（而不是训练时的旧快照）时，生成的代码才站得住脚。

DHTMLX MCP 服务器让助手基于最新的 Kanban 文档工作，而不是凭猜测作答。无论您询问[将编辑器字段绑定到卡片字段](guides/configuration.md#bind-editor-fields-to-card-fields)、[自定义 Toolbar](guides/customization.md#custom-toolbar)，还是[接入 RestDataProvider 后端](guides/working_with_server.md)，助手都会先取回最新的参考文档，然后再编写代码。

### MCP 端点

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 服务器覆盖所有主要的 DHTMLX 产品，而不仅仅是 DHTMLX Kanban。无论您使用哪个 DHTMLX 组件进行开发，端点和配置方法都完全相同。
:::

## 通过 MCP 服务器获取 Kanban 文档

在底层，服务器维护着一份完整的 DHTMLX Kanban 文档索引，可随时响应以下这类请求：

- 查询 Kanban [方法](api/overview/methods_overview.md)、[事件](api/overview/events_overview.md)和[属性](api/overview/properties_overview.md)的最新 API，包括签名和默认值。
- 为 Kanban 看板以及独立的 Toolbar 构造函数生成可直接运行的[初始化](guides/initialization.md)代码。
- 配置[卡片与编辑器字段](guides/configuration.md#cards)（`cardShape`、`editorShape`）并通过 key 进行绑定，包括 combo、multiselect、color、date 和 files 等字段类型。
- 使用文档中的模板 callback [自定义](guides/customization.md)卡片模板、右键菜单和列标题。
- 通过 CSS 变量和条件 CSS 类[美化](guides/stylization.md)列、行和卡片。
- 使用内置或自定义的 locale 对象[本地化](guides/localization.md) Kanban 和 Toolbar 界面。
- 通过数据 API [加载、导出和修改](guides/working_with_data.md)卡片、列、行、链接和评论。
- 通过 `RestDataProvider` 接入 [REST 后端](guides/working_with_server.md)，或搭建通过 WebSocket 同步变更的多用户看板。
- 将 Kanban 与 Gantt、Scheduler 等其他 DHTMLX widget [集成](guides/integration.md)，或与 [React](guides/integration_with_react.md)、[Vue](guides/integration_with_vue.md)、[Angular](guides/integration_with_angular.md) 和 [Svelte](guides/integration_with_svelte.md) 集成。

## 一条 Kanban 提示词在 MCP 中触发了什么

DHTMLX MCP 服务器基于 Model Context Protocol（MCP）之上的检索增强生成（RAG）流水线来回答 Kanban 问题，并把每个请求分配给两种工作流：*Search* 负责取回匹配的参考页面供助手参考，*Inference* 则自行阅读这些页面并直接给出答案。在此之前，助手会先判断请求中哪一部分确实需要查阅文档，其余部分则用自身知识回答。

以提示词 *“如何接入 DHTMLX Kanban，让用户新增卡片时自动与我的后端数据库同步？”* 为例：

1. 助手识别出需要查阅文档的部分：`RestDataProvider` 如何把新卡片同步到服务器。
2. 服务器将其匹配到服务器集成相关的文档。
3. 由于作答需要生成代码，请求交由 *Search* 处理（只有唯一正确答案的问题则会交给 *Inference*）。
4. *Search* 从基于最新 Kanban 文档构建的向量索引中取出匹配页面。
5. 助手收到这些页面作为上下文。
6. 助手依据该上下文为 `add-card` 操作配置 `RestDataProvider`，再用自身知识补全与后端相关的请求细节，而不是去猜测 Kanban API。

这样一来，Kanban 的代码建议始终与当前生效的 API 保持一致。

## 在各类工具中注册 MCP 服务器

无论您习惯使用终端还是配置文件，两种方式都是把工具指向下面这个 URL；注册完成后，您在该工具中构建的每一个 Kanban 看板都能访问它。

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

下面列出了常用工具的配置步骤。

### Claude Code

:::info
注册 MCP 服务器的所有受支持方式，请参见 Claude Code 自己的[文档](https://code.claude.com/docs/en/mcp)。
:::

若要从命令行注册服务器，请运行：

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

想手动配置？把下面这段内容添加到 `.mcp.json` 中：

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
Cursor 支持的全部 MCP 配置方式，请查看其[官方文档](https://cursor.com/en-US/docs/mcp)。
:::

添加服务器的步骤：

1. 打开 Settings（Mac 上为 `Cmd+Shift+J`，Windows/Linux 上为 `Ctrl+Shift+J`）
2. 进入 **Tools & MCP**
3. 点击 **Add Custom MCP**
4. 粘贴以下配置：

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
Antigravity 的完整 MCP 集成说明见[官方文档](https://antigravity.google/docs/mcp)。
:::

将 DHTMLX MCP 服务器接入 Google Antigravity 的步骤如下：

1. 打开命令面板
2. 输入 “mcp add”
3. 选择 “HTTP”
4. 填入以下值：
- 名称：
~~~jsx
dhtmlx-mcp
~~~
- URL：
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI

:::info
[相关指南](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)介绍了从 Gemini CLI 迁移到 Antigravity CLI 的方法。
:::

若要将 DHTMLX MCP 服务器接入 Antigravity CLI，请在以下位置之一创建 `mcp_config.json`：

- 全局：`~/.gemini/config/mcp_config.json`
- 工作区：`.agents/mcp_config.json`

添加以下配置：

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

然后在终端中运行 `agy`。

### ChatGPT

:::info
ChatGPT 的[官方文档](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)完整介绍了 MCP 连接器的配置流程。
:::

配置连接器的步骤：

1. 进入 **Settings** → **Apps & Connectors**
2. 点击 **Advanced settings**
3. 启用 **Developer mode**
4. 返回 **Apps & Connectors** 并点击 “Create”
5. 填写连接器信息：
- 名称：
~~~jsx
dhtmlx-mcp
~~~
- URL：
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- 身份验证：`No authentication`
6. 点击 **Create**

创建连接器后，ChatGPT 会在对话过程中从 MCP 服务器拉取文档。

:::info
对于高强度的编码工作流，其他支持 MCP 的工具可能更合适。
:::

### 其他工具

本文未单独列出的工具通常同样支持 MCP，在设置中一般标注为 “Model Context Protocol” 或 “Context Sources”。在那里把 `https://docs.dhtmlx.com/mcp` 添加为自定义来源即可。

## MCP 服务器如何处理您的数据

MCP 服务器是一项托管服务：您的机器上不运行任何程序，不读取项目中的任何文件，也不存储任何个人数据。

在调试和改进服务的过程中，查询可能会被记录。

如有更严格的隐私要求，企业可申请关闭查询日志的商业部署方案。详情请联系 `info@dhtmlx.com`。

## 可直接借用的 Kanban 看板提示词

下列提示词按其针对的 API 部分分组。挑一条拿来用，再根据自己的看板调整细节即可。

**卡片、列与泳道**

~~~
在 DHTMLX Kanban 中，如何让用户把卡片在列和行之间拖动？请查阅文档。
~~~
~~~
如何限制某个特定列或泳道中允许放置的卡片数量？
~~~
~~~
如何使用 Kanban API 复制一张卡片，并把副本移动到另一行？
~~~

**编辑器与字段类型**

~~~
如何把自定义编辑器字段绑定到卡片字段，使其同时显示在卡片上和编辑器中？
~~~
~~~
如何在 DHTMLX Kanban 编辑器中配置带用户头像的 multiselect 字段？
~~~
~~~
如何在 DHTMLX Kanban 编辑器中启用带 debounce 延迟的自动保存？
~~~

**Toolbar 与看板控件**

~~~
如何为 Kanban Toolbar 添加自定义搜索控件并将其绑定到看板？
~~~
~~~
如何从 DHTMLX Kanban Toolbar 中移除撤销和重做控件？
~~~

**REST 与多用户同步**

~~~
如何把 DHTMLX Kanban 接入 Go 后端并加载初始数据？
~~~
~~~
如何自定义 DHTMLX Kanban 将某个特定操作同步到我的后端的方式？
~~~
~~~
如何搭建一个通过 WebSocket 实时同步变更的多用户 DHTMLX Kanban 看板？
~~~

## 让 Kanban 提示词得到更好的结果

- **明确指出目标元素。** 区分看板、列、行（泳道）和卡片（例如“在 Kanban 看板上”“针对某一特定行”“在 Testing 列的某张卡片上”）。目标越明确，服务器越能检索到正确的参考页面。
- **指明字段类型。** `cardShape` 和 `editorShape` 支持多种字段类型（combo、multiselect、color、date、files）。与其笼统地说“一个字段”，不如明确类型（例如“带头像的 multiselect 字段”），这样助手才会取回对应的配置参考。
- **在提示词中加上“请查阅文档”。** 这句话会提示助手触发 MCP 查询，而不是仅凭训练数据作答。对于 `RestDataProvider` 处理器和字段配置这类 API 最可能发生变化的内容，这一点尤其重要。
- **说明操作发生在客户端还是服务器端。** Kanban 既能处理本地数据，也能通过 `RestDataProvider` 对接 REST API。请指明适用哪一种（例如“使用 RestDataProvider”或“不使用后端”），以免助手把 REST 专用的调用混进纯客户端示例中。
