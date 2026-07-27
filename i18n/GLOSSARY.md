# Translation Glossary — All documentation template phrases

Purpose: a single reference for translations of recurring template phrases in the documentation
([../docs/](../docs/)). Consult it when translating new articles and when reviewing localizations —
the wording and markdown markup (`**...**`, `### ...`, full-width `：` for zh) must match verbatim.

The **target** form is given: this is the house style all locales are normalized to, not necessarily
the variant that happened to be most frequent before normalization.

---

## 1. Section labels (bold lead before a list)

The colon always goes **inside** the bold markers — `**Label:**`, never `**Label**:`.

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `**Related articles:**` | `**Полезные статьи:**` | `**Verwandte Artikel:**` | `**관련 문서:**` | `**相关文章：**` |
| `**Related article:**` | `**Полезная статья:**` | `**Verwandter Artikel:**` | `**관련 문서:**` | `**相关文章：**` |
| `**Related sample:**` | `**Связанный пример:**` | `**Verwandtes Beispiel:**` | `**관련 샘플:**` | `**相关示例：**` |
| `**Related samples:**` | `**Связанные примеры:**` | `**Verwandte Beispiele:**` | `**관련 예제:**` | `**相关示例：**` |
| `**Change log:**` | `**Журнал изменений:**` | `**Changelog:**` | `**변경 로그:**` | `**更新日志：**` |
| `**Parameters:**` | `**Параметры:**` | `**Parameter:**` | `**매개변수:**` | `**参数：**` |

Singular/plural must follow the English source: `**Related sample:**` (20 pages) and
`**Related samples:**` (5 pages) are not interchangeable.

Not currently used anywhere in `../docs/` — keep the wording if these labels are ever introduced:
`**Related API:**` (ru `**Похожее API:**`, de `**Verwandte API:**`, ko `**관련 API:**`, zh `**相关 API：**`),
`**Example:**` (ru `**Пример:**`, de `**Beispiel:**`, ko `**예제:**`, zh `**示例：**`),
`**Example on GitHub**` (ru `**Пример на GitHub**`, de `**Beispiel auf GitHub**`, ko `**GitHub 예제**`, zh `**GitHub 示例**`).

## 2. Section headings (API-page template)

| EN | ru | de | ko | zh |
|---|---|---|---|---|
| `### Description` | `### Описание` | `### Beschreibung` | `### 설명` | `### 描述` |
| `### Usage` | `### Использование` | `### Verwendung` | `### 사용법` | `### 用法` |
| `### Example` | `### Пример` | `### Beispiel` | `### 예제` | `### 示例` |
| `### Parameters` | `### Параметры` | `### Parameter` | `### 매개변수` | `### 参数` |
| `### Returns` | `### Возвращаемое значение` | `### Rückgabewert` | `### 반환값` | `### 返回值` |
| `### Fixes` | `### Исправления` | `### Fehlerbehebungen` | `### 수정 사항` | `### 修复` |
| `### New functionality` | `### Новый функционал` | `### Neue Funktionalität` | `### 새로운 기능` | `### 新功能` |
| `### Updates` | `### Обновления` | `### Aktualisierungen` | `### 업데이트` | `### 更新` |
| `### Default config` | `### Конфигурация по умолчанию` | `### Standardkonfiguration` | `### 기본 설정` | `### 默认配置` |
| `## What's next` | `## Что дальше` | `## Wie geht es weiter` | `## 다음 단계` | `## 下一步` |
| `## API reference` | `## Справочник API` | `## API-Referenz` | `## API 참조` | `## API 参考` |

Not currently used anywhere in `../docs/`:
`### Breaking changes` (ru `### Критические изменения`, de `### Breaking Changes`, ko `### 주요 변경 사항`, zh `### 重大变更`),
`## Related API and guides` (ru `## Связанные API и гайды`, de `## Verwandte API und Anleitungen`, ko `## 관련 API 및 가이드`, zh `## 相关 API 和指南`).

When a heading carries an explicit anchor (`### Default config {#default-config}`), the anchor is
part of the English contract — translate the text, keep the `{#...}` untouched.

## 3. Version notes (inside `**Change log:**`)

The English source does **not** use bare `Added in vX.X`; it uses full sentences
(`The method was added in v1.4`, `The ***replace*** parameter was added in v1.7`). So this section
constrains the **action word and the placement of the version token**, not a literal string.

The version number is never translated and always keeps its `v` prefix.

| EN action | ru | de | ko | zh |
|---|---|---|---|---|
| `added in vX.X` | `добавлен(о/ы) в vX.X` | `wurde/wurden in vX.X hinzugefügt` | `vX.X에서 추가되었습니다` | `在 vX.X 中新增` |
| `updated in vX.X` | `обновлён(о) в vX.X` | `wurde in vX.X aktualisiert` | `vX.X에서 업데이트되었습니다` | `在 vX.X 中更新` |
| `deprecated in vX.X` | `устарело в vX.X` | `wurde in vX.X veraltet` | `vX.X에서 지원 중단` | `在 vX.X 中弃用` |
| `removed in vX.X` | `удалено в vX.X` | `wurde in vX.X entfernt` | `vX.X에서 제거` | `在 vX.X 中移除` |
| `starting from vX.X, …` | `начиная с vX.X, …` | `Ab vX.X …` | `vX.X부터 …` | `从 vX.X 起，…` |

Do **not** insert a word for "version" around the token: ru `в версии v1.4`, de `in Version 1.4`,
ko `v1.4 버전에서`, zh `在 v1.4 版本中` are all wrong — the token alone carries it.

Code-fence and `<summary>` titles are a separate pattern and are translated:
ru `До vX.X` / `С vX.X`, de `Vor` / `Ab`, ko `vX.X 이전` / `vX.X부터`, zh `vX.X 之前` / `vX.X 起`.

## 4. Admonition block titles (`:::note`, `:::tip` …)

The titles of these blocks come **not from markdown**, but from the `theme.admonition.*` keys in
`i18n/<locale>/code.json` (in EN — Docusaurus built-in defaults). In `.md` the block type (`:::note`,
`:::tip`, …) is not translated — only the `message` in `code.json` changes.

The Docusaurus theme renders the title with `text-transform: uppercase`, so for ru/de the visible
title is always UPPERCASE, while ko/zh have no letter case. Canon: **capitalized first letter**, with
words distinct between types (no `caution`/`warning` duplicates).

| Type | ru | de | ko | zh |
|---|---|---|---|---|
| `:::note` | `Примечание` | `Hinweis` | `노트` | `备注` |
| `:::tip` | `Подсказка` | `Tipp` | `팁` | `提示` |
| `:::info` | `К сведению` | `Info` | `정보` | `信息` |
| `:::warning` | `Предупреждение` | `Warnung` | `경고` | `警告` |
| `:::caution` | `Осторожно` | `Vorsicht` | `주의` | `注意` |
| `:::danger` | `Опасно` | `Gefahr` | `위험` | `危险` |

## 5. Do not translate

Keep these terms in English across all locales.

**Product & modules:**

- `DHTMLX`, `dhx` (the `dhx.*` code namespace)
- `Kanban` — the product name; never `看板` / `канбан` / `칸반`
- `Toolbar` — a shipped component with its own API pages (`api/config/toolbar_*_config.md`)
- `Event Bus`, `RestDataProvider`

**Frameworks & libraries:**

- `React`, `Vue`, `Svelte`, `Angular`
- `Node.js`, `Vite`

**Languages & tooling:**

- `JavaScript`, `TypeScript`
- `npm`, `yarn`, `CLI`

**Data formats & protocols:**

- `JSON`, `REST`, `HTML`, `CSS`

**Services:**

- `GitHub`, `Salesforce`

**Other:**

- `API`, `UI`
- Code identifiers (method / config / event names, `dhx.*`) inside backticks are never translated.

### `Kanban` is the product; `board` is prose

The English source uses both. `Kanban` is the do-not-translate product name; the ordinary noun
`board` is prose and **is** localized (zh `看板`, ko `보드`, de `Board`, ru `доска`). So
`the Kanban board` becomes zh `Kanban 看板`, ko `Kanban 보드` — not `Kanban Kanban`, and not a bare
`看板` standing in for the product name.

Other prose nouns that are localized: `card`, `column`, `row` / `swimlane`, `editor`, `link`,
`comment`, `tag`, `vote`, `Menu` (→ ru "меню"), `context menu`.

### zh typography

Insert a space between Latin and CJK characters: `在 Event Bus 的执行顺序中`, `Kanban 看板`,
`该方法在 v1.4 中新增`. No space is added next to full-width punctuation (`。`, `，`, `）`).
