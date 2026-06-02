# Project Images Directory

Place all project showcase images in this folder.

## Naming Convention
Use descriptive, kebab-case filenames:
- `robotic-arm-1.png`
- `medical-housing-1.png`
- `ev-transmission-1.png`

## Supported Formats
- `.png` (recommended for CAD renders)
- `.jpg` / `.jpeg` (recommended for photographs)
- `.webp` (recommended for web-optimized images)

## How It Works
Images placed here are referenced by relative path in `projects.js`:
```js
images: [
    "assets/projects/my-project-1.png",
    "assets/projects/my-project-2.png"
]
```

When deployed to GitHub Pages, these paths resolve automatically.
