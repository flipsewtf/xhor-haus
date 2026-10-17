# Xhor.haus

This is my corner of the internet. It's also me leaning into my early noughties blog days ~~because I broke up with Tumblr~~.

### Help for brain

#### Commands

| Command           | What it does                             |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site for deployment            |
| `npm run preview` | Preview the production build locally     |
| `rm -r -fo dist`  | Delete the build folder                  |

#### Vite cache

If something looks broken and shouldn't be, clear Vite's cache:

```powershell
rm -r -fo node_modules/.vite
```

#### Timestamps

Always include the timezone offset in frontmatter dates because Astro uses it to sort
and display dates correctly.

| Season        | Offset   | Example                     |
| ------------- | -------- | --------------------------- |
| Winter (CET)  | `+01:00` | `2025-12-08T13:30:00+01:00` |
| Summer (CEST) | `+02:00` | `2025-06-08T13:30:00+02:00` |
