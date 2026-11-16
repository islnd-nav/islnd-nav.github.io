# Islnd

A floating bar at the bottom centre of every page: site favicon and domain, address, search, back, forward, reload, home, new tab, close tab and commands typed after `/`.

It works in any Chromium-based browser that supports Manifest V3 extensions.

## Installation

1. Open the browser's extensions page: type `chrome://extensions` in the address bar (Chromium-based browsers accept this address even when they use their own name for it).
2. Turn on **Developer mode**.
3. Click **Load unpacked** and choose this folder.
4. Tabs that are already open get Islnd straight away, without reloading them.

After changing the files, click the reload icon on the extension's card in the extensions page.

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

**History suggestions.** As you type an address or a search (not a "/" command), up to 10 pages of your history that match it appear, with favicon, title and the full address underneath: first the addresses that start with what you typed (`git` → github.com), then those with a word that does, then any match, the most visited and recent first. Nothing is selected at first, so **↩** goes to what you typed; **↓ ↑** choose a page, **↩** opens it, **⌘↩** in a new tab, **Esc** closes the list. With the field untouched, ↑ ↓ still open the commands. They work in the shortcut window too, and can be turned off in the settings › General › Behaviour. The history is read only inside the browser.

The favicon is the one the browser shows on the tab: it comes from the browser's cache, so it makes no requests to the site and updates by itself when it changes (for example an unread-message counter).

On web pages **⌘L** (Ctrl+L on Windows and Linux) opens Islnd instead of the browser's address bar, also when you are typing inside an embedded editor. On the browser's new tab page (also the one a new window opens on) ⌘L keeps its usual job: there **⇧⌘K** opens a small window with the same field. It closes with **Esc**, ⌘L or a click elsewhere. The extension's icon in the toolbar does the same. On excluded sites Islnd is not loaded at all: ⌘L is the browser's again, and ⇧⌘K or the icon open the small window. On the browser's other pages (settings, history, extensions, Islnd's own settings...) Islnd stays off: its icon is greyed out and ⇧⌘K does nothing.

## Commands

Type **/** at the start of the field and the list of commands opens above Islnd (below it when Islnd is at the top). **↑** or **↓** open it too, as long as nothing has been typed yet (the field still shows the page's address, or is empty). Keep typing to filter it: `/dup` finds Duplicate tab, `/zoom` the three zoom commands. **↑ ↓** (or Tab) choose, **↩** or a click runs, **Esc** closes. The commands work in the shortcut window too.

| Group | Commands |
|---|---|
| Tabs | New tab, Duplicate tab, Pin tab / Unpin tab, Mute tab / Unmute tab, Reopen closed tab, Close tab, Close other tabs (pinned tabs stay), Move tab to new window, Previous tab, Next tab (the tab on the left or on the right; after the last one comes the first) |
| Copy | Copy URL, Copy clean URL (without tracking parameters such as `utm_…`, `fbclid`, `gclid`), Copy link (pastes as the page title linked to its address in mail and documents; as the plain address elsewhere) |
| Navigation | Back, Forward, Reload, Hard reload (skips the cache), Home |
| Page | Zoom in, Zoom out, Reset zoom, Print, Screenshot, Full page screenshot, Scroll to top, Scroll to bottom |
| Bookmarks | Bookmark page (into the bookmarks bar) / Remove bookmark |
| Browser | New window, New private window, History, Downloads, Bookmarks, Extensions, Browser settings |
| Islnd | Islnd settings, Minimize Islnd / Restore Islnd, Move Islnd to top / Move Islnd to bottom (the Position setting), Hide on this site (adds the site to the excluded sites: Islnd leaves its open tabs at once) |

In the settings › **Commands** each command can be turned off or moved: the list shows them in that order, and while you type the best matches come first. On the right of a command the list shows its shortcut, when there is one: the browser's default shortcut for the same action (on Windows and Linux they use Ctrl and Alt), or Islnd's own.

**Shortcuts of Islnd.** The commands the browser has no shortcut for can have one of their own, set in the settings › Commands: click the key next to the command and press the combination (it needs ⌘, Ctrl on Windows and Linux), ⌫ removes it. By default Minimize Islnd is **⇧⌘L**, Copy URL **⌥⇧⌘C**, Screenshot **⇧⌘S**, Full page screenshot **⌥⇧⌘S** and Close other tabs **⌥⌘W**. A shortcut runs its command straight away, without opening the list, wherever ⌘L works (see [Shortcuts](#shortcuts)), also when the command is turned off in the list.

**Links.** At the top of the settings › Commands, paste an address in **Add a link**: the link joins the list with the page's title (the site's name for a home page) and its favicon, both read from the site. Click the name to change it, drag the link like a command, give it a shortcut, or remove it. In the "/" list it is found by its name or its site; **↩** opens it in the tab, **⌘↩** in a new tab. Up to 20 links; their favicons are kept in this browser only.

Names that depend on the tab follow it: on a pinned tab the list shows Unpin tab, on a bookmarked page Remove bookmark. After copying, zooming, pinning or muting, Islnd shows a short confirmation in place of the domain. In the shortcut window, the commands that need a web page (Print, Screenshot, Scroll, Hide on this site) are left out on the new tab page.

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
| Excluded sites | Sites (subdomains included) where Islnd is not loaded at all; ⇧⌘K and the toolbar icon open the small window there. Taking a site off the list brings Islnd back to its open tabs without reloading them |
| Shortcuts | The key that opens Islnd (⌘L): see [Shortcuts](#shortcuts) |
| Commands | The "/" commands and your links in the list's order. Each command has a switch (the ones turned off leave the list; their shortcuts keep working) and, when the browser has none, a shortcut of Islnd. Drag a row by its handle to move it, or select the handle and press ↑ ↓; a command turned off moves below the ones on, as the "/" list leaves it out. At the top: **Add a link**, **Search commands** (shows only the ones whose name has what you type) and **All commands**, a switch that turns every command on or off at once |

## Shortcuts

- **⌘L** opens Islnd (Ctrl+L on Windows and Linux); the commands and links have their own shortcuts, such as **⇧⌘L** for Minimize Islnd (see [Commands](#commands)). Islnd handles them itself, on web pages (embedded editors included) and in the shortcut window, before the page's and the browser's own shortcuts. Browsers never let an extension take over their own keys on their own pages, so there they keep the browser's meaning. On excluded sites, where Islnd is not loaded, and during full-screen video, all of them are left to the page.
- To change them, open the settings › **Shortcuts** (⌘L) or **Commands** (the others), click the key and press the new combination: it needs ⌘ (Ctrl on Windows and Linux) together with another key, and it can add ⇧, ⌥ or ⌃. **Esc** cancels, **⌫** removes a command's shortcut. Not accepted: the keys for editing text (⌘A, ⌘C, ⌘V, ⌘X, ⌘Z), a combination already used by Islnd or by one of the browser's shortcuts listed in Commands, and the browser's keys that never reach a page, such as ⌘T or ⌘W.
- **⇧⌘K** is the browser shortcut: it works on every page, the browser's own included. Change it at `chrome://extensions/shortcuts` (there is also a **Change shortcut** button in the settings). If the key is already used by the browser or another extension, the browser does not assign it and the field stays empty: choose one there.
