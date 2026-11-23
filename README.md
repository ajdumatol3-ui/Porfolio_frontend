# Arbrent John Dumat-ol — Portfolio Website

A personal portfolio website for **Arbrent John Dumat-ol**, a 3rd-year BS Information Technology (BSINT) student at Negros Oriental State University – Bayawan-Sta. Catalina Campus (NORSU-BSC). It presents my work as a **web developer**, **graphic designer** and **anime-inspired traditional artist**.

- **Live website:** https://arbrent-portfolio.vercel.app
- **Source code:** https://github.com/ajdumatol3-ui/Porfolio_frontend

Project for **ITS 300 – Section C**.

---

## Built with

- **HTML5**: page structure ([index.html](index.html))
- **CSS3**: layout, theme and animations ([css/style.css](css/style.css))
- **JavaScript**: interactivity ([js/script.js](js/script.js))
- **[anime.js](https://animejs.com) v4.5.0**: advanced animations ([js/anime-effects.js](js/anime-effects.js))
- **Adobe Animate + CreateJS**: the embedded Word Blaster game
- **Vercel**: hosting, with automatic deployment on every push to `main`

No frameworks or build tools. The site runs on plain HTML, CSS and JavaScript.

## Sections

| Section | What it shows |
|---|---|
| **Home** | Animated intro with my name, typing effect and a stacked photo you can click to switch |
| **About** | Short bio, photo and quick facts (3rd year, BSINT, NORSU) |
| **Tools & Skills** | Adobe Illustrator, InDesign, Animate, Photoshop and Web Development |
| **Work** | 4 projects (see below) |
| **Certificates** | 6 certificates; click to view full size |
| **Seminars** | Photo gallery from the "Think. Code. Build. Innovate." seminar |
| **Location** | Embedded Google Map of the campus |
| **Contact** | Email and Facebook links |

### Projects in the Work section
1. **Polygonal Wild Animal** (Adobe Illustrator): low-poly peregrine falcon.
2. **Our Academic Design Works** (Adobe InDesign): a 12-page magazine with a page-flip viewer, thumbnails and swipe support.
3. **Word Blaster Typing Game** (Adobe Animate): a playable HTML5 typing game embedded in the page, with fullscreen mode, phone keyboard support and a demo video.
4. **Anime Sketches & Drawings** (traditional art): graphite, colored pencil and ballpoint pen drawings, plus photos from my "Art Sketching" exhibit.

## Features and effects

**CSS / JavaScript**
- Animated loading intro with my name
- Scroll-reveal animations and a scroll progress bar
- Glass-style navigation bar that hides on scroll and reappears when the mouse is near the top
- Active menu highlighting for the current section
- Typing text effect, count-up numbers and skill bars
- Low-poly network background on canvas that reacts to the mouse
- 3D tilt and shine on images
- Lightbox viewer with keyboard (← → Esc) support
- Click particle burst and button ripple
- Fully responsive layout with a mobile menu

**anime.js**
- Hero headline letters pop in with an elastic stagger
- Section headings rise letter by letter on scroll
- Tool badges spin smoothly on hover
- Draggable skill badges on the hero photo that spring back
- Fireworks when clicking the Contact card

**Accessibility**
- Respects the "reduce motion" setting (animations turn off)
- Alt text on images, keyboard-usable controls and readable color contrast

## Folder structure

```
Porfolio/
├── index.html              # the whole page
├── css/style.css           # all styles
├── js/
│   ├── script.js           # main interactivity
│   ├── anime-effects.js    # anime.js animations
│   └── vendor/             # anime.js library (local copy)
├── images/                 # photos, artworks, magazine pages, seminar photos
├── certificates/           # certificate images
├── games/word-blaster/     # Adobe Animate HTML5 game (+ CreateJS library)
└── videos/                 # Word Blaster demo video
```

## Run it locally

1. Clone the repository:
   ```
   git clone https://github.com/ajdumatol3-ui/Porfolio_frontend.git
   ```
2. Open the folder in VS Code and start **Live Server** (or open `index.html` in a browser).
   The game works best through Live Server, since browsers limit some features on `file://` pages.

## Credits

- [anime.js](https://animejs.com) by Julian Garnier (MIT License)
- [CreateJS](https://createjs.com) (MIT License), used by the Adobe Animate export
- Fonts: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) and [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- All artworks, designs, photos and the game are my own work.

© Arbrent John Dumat-ol · BSINT, NORSU-BSC
