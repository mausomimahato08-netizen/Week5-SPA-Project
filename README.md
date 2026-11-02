# Nova — Single Page Application (SPA)

A small, responsive SPA simulation built with **HTML, CSS and vanilla JavaScript** for Week 5.

## Features
- Home, About, Services and Contact views.
- Hash-based client-side routing (`#home`, `#about`, `#services`, `#contact`).
- Browser back/forward support through the `hashchange` event.
- Dynamic DOM rendering without a full page refresh.
- Active navigation state, mobile menu and a custom 404 view.
- Contact form validation and friendly front-end feedback.
- Responsive layout, hover effects and page transitions.

## Project structure
```text
Week5_SPA_Project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── report/
│   └── Technical_Report.md
└── README.md
```

## How to run
1. Make the folder week5.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the Live Server extension in VS Code.
4. Click the navigation links and test the browser Back and Forward buttons.

No package installation or build step is required.

## Note
The contact form is a front-end demonstration only. It validates the fields and displays a confirmation message; it does not transmit or store submitted data.
