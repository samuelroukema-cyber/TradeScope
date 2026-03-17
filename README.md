[README.md](https://github.com/user-attachments/files/26068613/README.md)
# TradeScope

International trade analytics and economic indicator summaries for major economies.

## Files

```
tradescope/
├── index.html       ← main dashboard
├── about.html       ← about page
├── css/
│   └── style.css    ← all styles
├── js/
│   ├── data.js      ← country data (edit this to update figures)
│   └── app.js       ← rendering logic
└── README.md
```

## How to deploy on GitHub Pages

### Step 1 — Create a GitHub account
Go to github.com and sign up for a free account if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** button in the top right → **New repository**
2. Name it `tradescope` (or anything you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the files
1. On your new repository page, click **uploading an existing file**
2. Drag and drop ALL the files and folders from this project:
   - `index.html`
   - `about.html`
   - `css/style.css`
   - `js/data.js`
   - `js/app.js`
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to **main**, folder to **/ (root)**
5. Click **Save**

### Step 5 — Your site is live
After about 60 seconds, your site will be live at:
`https://YOUR-USERNAME.github.io/tradescope/`

---

## Updating the data

All country figures live in `js/data.js`. To update a number:
1. Open `js/data.js` on GitHub (click the file, then the pencil icon)
2. Edit the value (e.g. change `gdp: "$27.4T"` to `"$27.9T"`)
3. Scroll down and click **Commit changes**

The site updates automatically within a minute.

## Data sources
- World Bank Open Data: data.worldbank.org
- IMF World Economic Outlook: imf.org/en/Publications/WEO
- OECD Statistics: stats.oecd.org
