# <img style="width: 60px; margin-bottom: -10px;" src="https://avatars.githubusercontent.com/u/357562754" /> Islnd

A floating bar at the bottom centre of every page: site favicon and domain, address, search, back, forward, reload, home, new tab, close tab and commands typed after `/`.

<img width="100%" src="https://github.com/user-attachments/assets/89311cd3-6aac-4245-9665-92931d42847f" />

It works in any Chromium-based browser that supports Manifest V3 extensions.

## Installation

1. Download the zip of the [latest release](https://github.com/islnd-nav/islnd-nav.github.io/releases/latest) and unzip it.
2. Open the browser's extensions page: type `chrome://extensions` in the address bar (Chromium-based browsers accept this address even when they use their own name for it).
3. Turn on **Developer mode**.
4. Click **Load unpacked** and choose the unzipped folder.
5. Tabs that are already open get Islnd straight away, without reloading them.

To update Islnd, unzip a newer release into the same folder and click the reload icon on the extension's card in the extensions page.

## Usage

| Action | How |
|---|---|
| Type an address or a search | Click the domain, or press **⌘L** (press it again to close) |
| Go back to a page you visited | Start typing: the matching pages of your history appear; **↓ ↑** choose, **↩** opens |
| Run a command | Type **/** in the field, or press **↑** or **↓** before typing: see [Commands](#commands) |
| Open in a new tab | The **+** button, or **⌘↩** while typing |
| Close the tab | The **×** button on the right |
| Cancel | **Esc**, or click outside Islnd |
| Back, forward, reload | Buttons on the left |
| Go to the home page | The **Home** button (the house): opens the new tab page, or the page chosen in the settings |
| Bring back Islnd when hidden | Scroll up, or move the mouse to the bottom of the window |
| Minimize or restore Islnd | **⇧⌘L** (Ctrl+Shift+L on Windows and Linux), or the key chosen in the settings |

Resting the mouse on a button shows its name. Islnd slides away when you scroll down and comes back when you scroll up. Searches use the browser's default search engine.

**History suggestions.** As you type an address or a search (not a "/" command), up to 10 pages of your history that match it appear, with favicon, title and the full address underneath: first the addresses that start with what you typed (`git` → github.com), then those with a word that does, then any match, the most visited and recent first. Nothing is selected at first, so **↩** goes to what you typed; **↓ ↑** choose a page, **↩** opens it, **⌘↩** in a new tab, **Esc** closes the list. With the field untouched, ↑ ↓ still open the commands. They can be turned off in the settings › General › Behaviour. The history is read only inside the browser.

The favicon is the one the browser shows on the tab: it comes from the browser's cache, so it makes no requests to the site and updates by itself when it changes (for example an unread-message counter).

On web pages **⌘L** (Ctrl+L on Windows and Linux) opens Islnd instead of the browser's address bar, also when you are typing inside an embedded editor; the extension's icon in the toolbar does the same. Where Islnd cannot appear (the new tab page and the browser's other pages, the extension store, excluded sites, full-screen video) ⌘L keeps its usual job and the icon is greyed out.

## Commands

Type **/** at the start of the field and the list of commands opens above Islnd (below it when Islnd is at the top). **↑** or **↓** open it too, as long as nothing has been typed yet (the field still shows the page's address, or is empty). Keep typing to filter it: `/dup` finds Duplicate tab, `/zoom` the three zoom commands. **↑ ↓** (or Tab) choose, **↩** or a click runs, **Esc** closes.

| Group | Commands |
|---|---|
| Tabs | New tab, Duplicate tab, Pin tab / Unpin tab, Mute tab / Unmute tab, Reopen closed tab, Close tab, Close other tabs (pinned tabs stay), Move tab to new window, Add tab to split view / Exit split view (the tab and a new tab side by side; only in browser versions that let extensions do it), Previous tab, Next tab (the tab on the left or on the right; after the last one comes the first), Search tabs (the open tabs of every window, the most recently used first: type to filter them, **↩** or a click goes to the selected one, **Esc** closes) |
| Copy | Copy URL, Copy clean URL (without tracking parameters such as `utm_…`, `fbclid`, `gclid`), Copy link (pastes as the page title linked to its address in mail and documents; as the plain address elsewhere) |
| Navigation | Back, Forward, Reload, Hard reload (skips the cache), Home |
| Page | Zoom in, Zoom out, Reset zoom, Print, Screenshot, Full page screenshot, Scroll to top, Scroll to bottom |
| Bookmarks | Bookmark page (into the bookmarks bar) / Remove bookmark |
| Browser | New window, New private window, History, Downloads, Bookmarks, Extensions, Browser settings |
| Islnd | Islnd settings, Minimize Islnd / Restore Islnd, Move Islnd to top / Move Islnd to bottom (the Position setting), Switch to dark theme / Switch to light theme (the Theme setting; from Automatic, the opposite of the one shown), Hide on this site (adds the site to the excluded sites: Islnd leaves its open tabs at once) |

In the settings › **Commands** each command can be turned off or moved: the list shows them in that order, and while you type the best matches come first. On the right of a command the list shows its shortcut, when there is one: the browser's default shortcut for the same action (on Windows and Linux they use Ctrl and Alt), or Islnd's own.

**Presets.** At the top of the settings › Commands, **Preset** turns on a ready-made set of commands, in its order, and turns all the others off; links and shortcuts stay as they are. **Essentials**: Close tab, New tab, Duplicate tab, Reopen closed tab, Pin tab, Move tab to new window, Minimize Islnd, Move Islnd, Switch theme and Islnd settings; a new install starts with it. **All**: every command, in the default order. Any change by hand makes the list **Custom**. After a preset, the message at the bottom of the window offers **Undo** for a few seconds.

**Shortcuts of Islnd.** The commands the browser has no shortcut for can have one of their own, set in the settings › Commands: click the key next to the command and press the combination (it needs ⌘, Ctrl on Windows and Linux), ⌫ removes it. By default Minimize Islnd is **⇧⌘L**, Copy URL **⌥⇧⌘C**, Screenshot **⇧⌘S**, Full page screenshot **⌥⇧⌘S**, Close other tabs **⌥⌘W** and Move Islnd **⇧⌘K**. A shortcut runs its command straight away, without opening the list, wherever ⌘L works (see [Shortcuts](#shortcuts)), also when the command is turned off in the list.

**Links.** At the top of the settings › Commands, paste an address in **Add a link**: the link joins the top of the list with the page's title (the site's name for a home page) and its favicon, both read from the site. Click the name to change it, drag the link like a command, give it a shortcut, or remove it. In the "/" list it is found by its name or its site; **↩** opens it in the tab, **⌘↩** in a new tab. Up to 20 links; their favicons are kept in this browser only.

Names that depend on the tab follow it: on a pinned tab the list shows Unpin tab, on a bookmarked page Remove bookmark. After copying, zooming, pinning or muting, Islnd shows a short confirmation in place of the domain.

**Screenshot** takes the visible part of the page, **Full page screenshot** the whole page from top to bottom: the page scrolls by itself, one screenful at a time, and the pieces are joined (on a long page it takes a few seconds). Islnd is never in the picture, and fixed bars (a site's header, a cookie banner) appear only once, at the top. On web apps where only a part of the window scrolls, the full page is that part. Very long pages stop at 32,767 screen pixels, the biggest image the browser can build (about 16,000 px of page on a Retina screen). The picture opens in a new tab, with **Copy** and **Save** (a PNG file named after the site and the time).

**Minimize Islnd** shrinks Islnd to a small circle with the site's favicon, on every page and after reloading too, until **Restore Islnd**. Resting the mouse on the circle opens Islnd in full; it shrinks back shortly after the mouse leaves. ⌘L and a command's confirmation open it as well. The circle hides while scrolling like Islnd, and shows Islnd's icon when Site favicon is off.

## Settings

Right-click the Islnd icon in the toolbar › **Options**, or open the extensions page › Islnd › **Details** › **Extension options**. The page has two tabs: **General**, with everything in the table below except Commands, and **Commands**, with the "/" commands and the links. Every change is saved automatically, with a short "Saved" at the bottom of the window, and applies straight away to open tabs, without reloading them; the preview at the top of General shows the result.

| Setting | What it changes |
|---|---|
| Position | Islnd at the bottom or at the top |
| Size | Default (44 px high), Large (52 px) or Extra large (60 px): buttons, icons and text grow, and the width grows in proportion |
| Width | 320 to 560 px at rest with the Default size; bigger sizes widen it in proportion |
| Theme | Automatic (follows the system), light or dark |
| Site favicon | Shows or hides the icon next to the domain |
| Buttons | Which of back, forward, reload, home, new tab and close tab to show (close tab is off at first) |
| Home page | The page opened by the Home button; empty = the new tab page |
| Hide while scrolling | When off, Islnd always stays visible |
| History suggestions | The pages of your history that match what you type in the field |
| Excluded sites | Sites (subdomains included) where Islnd is not loaded at all. Taking a site off the list brings Islnd back to its open tabs without reloading them |
| Shortcuts | The key that opens Islnd (⌘L): see [Shortcuts](#shortcuts) |
| Commands | The "/" commands and your links in the list's order. Each command has a switch (the ones turned off leave the list; their shortcuts keep working) and, when the browser has none, a shortcut of Islnd. Drag a row by its handle to move it, or select the handle and press ↑ ↓; a command turned off moves below the ones on, as the "/" list leaves it out. At the top: **Preset** (Essentials, All or Custom: see [Commands](#commands)), **Add a link** and **Search commands** (shows only the ones whose name has what you type) |

**Export and import.** At the bottom of the settings, **Export settings** saves every setting in `islnd-settings.json`, to keep or to pass on; **Import settings** reads such a file and applies it at once, with **Undo** in the message for a few seconds. The file is plain JSON, readable and editable by hand:

```json
{
  "islnd": 1,
  "position": "bottom",
  "theme": "auto",
  "excludedSites": ["meet.google.com"],
  "commands": ["close", "newtab", { "title": "GitHub", "url": "https://github.com/" }],
  "shortcuts": { "open": "⌘L", "minimize": "⇧⌘L", "https://github.com/": "⌥⌘G" }
}
```

`commands` lists the commands turned on, in their order, with links as title and address; all the others are turned off. `shortcuts` lists every shortcut in use, written as on a Mac or as on Windows and Linux (`Ctrl+Shift+L`); a command left out has none. An exported file also holds size, width, buttons, home page and the other switches. Anything missing from a file stays as it is, and what cannot be used (an unknown command, a shortcut already taken or the browser's own) is skipped and counted in the message. Not in the file: whether Islnd is minimized, and the links' favicons, read again from the sites.

## Shortcuts

- **⌘L** opens Islnd (Ctrl+L on Windows and Linux); the commands and links have their own shortcuts, such as **⇧⌘L** for Minimize Islnd (see [Commands](#commands)). Islnd handles them itself, on web pages (embedded editors included), before the page's and the browser's own shortcuts. Browsers never let an extension take over their own keys on their own pages, so there they keep the browser's meaning. On excluded sites, where Islnd is not loaded, and during full-screen video, all of them are left to the page.
- To change them, open the settings › **Shortcuts** (⌘L) or **Commands** (the others), click the key and press the new combination: it needs ⌘ (Ctrl on Windows and Linux) together with another key, and it can add ⇧, ⌥ or ⌃. **Esc** cancels, **⌫** removes a command's shortcut. Not accepted: the keys for editing text (⌘A, ⌘C, ⌘V, ⌘X, ⌘Z), a combination already used by Islnd or by one of the browser's shortcuts listed in Commands, and the browser's keys that never reach a page, such as ⌘T or ⌘W.

## License

[MIT](https://github.com/islnd-nav/islnd-nav.github.io/blob/main/LICENSE)
