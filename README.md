# V Cube Tech Solution - website

Plain HTML, CSS and JavaScript. No build step, no frameworks.

## Files
- `index.html`  - page structure and all text
- `style.css`   - colours, layout, animations, mobile layout
- `script.js`   - scroll animations, hero tags, mobile menu, consultation form
- `assets/`     - `logo-full.webp` (About section), `logo-mark.webp` (menu + browser icon)

## Run in VS Code
1. File > Open Folder > select this folder.
2. Install the "Live Server" extension, right-click `index.html` > Open with Live Server.
   (Or in a terminal: `python -m http.server 5500`, then open http://localhost:5500)
3. Test phone view: browser DevTools (F12) > device toolbar (Ctrl+Shift+M).

## Easy edits
- Email / WhatsApp number: top of the form code in `script.js` (`OFFICE`, `WA`) and the Contact section in `index.html`.
- Colours: the `:root{...}` variables at the top of `style.css`.
- Fonts load from Google Fonts, so the first view needs internet.

## Publish
Upload all files (keep the `assets` folder) to GitHub and turn on Pages (Settings > Pages > main / root).
