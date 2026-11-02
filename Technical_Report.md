# Technical Report: Developing a Single Page Application (SPA) Simulation

**Project name:** Nova — A Simple Digital Studio  
**Technology used:** HTML5, CSS3 and JavaScript (Vanilla JS)  
**Project type:** Front-end Single Page Application simulation

## 1. Introduction

The aim of this project was to create a small Single Page Application (SPA) that changes the content shown on the screen without repeatedly loading a new HTML page. I created **Nova**, a fictional digital studio website, to demonstrate how a visitor can move between Home, About, Services and Contact sections through one continuous interface.

I chose plain HTML, CSS and JavaScript because they make the basic ideas behind an SPA easier to understand. The project does not depend on a framework or external package.

## 2. Project plan

I divided the work into four practical stages:

1. **Structure:** Create the main HTML document, navigation menu, application container and footer.
2. **Design:** Build a consistent visual style with readable typography, cards, spacing, responsive layouts and small transitions.
3. **Functionality:** Write JavaScript to read the URL hash, display the matching content, update navigation states and handle browser history.
4. **Testing:** Visit every route, use Back and Forward, check an invalid route, resize the browser and test the contact form.

## 3. Project architecture

The project keeps its files separate so that each one has a clear responsibility:

- `index.html` provides the common page shell and the `#app` container.
- `css/style.css` controls colours, typography, layout, responsiveness and animation.
- `js/app.js` contains the page content, routing logic, DOM updates, menu interaction and form validation.
- `README.md` explains the project and how to run it.
- `report/Technical_Report.md` records the plan, implementation and testing.

The application uses **hash-based routing**. A URL such as `index.html#about` identifies the About view. The JavaScript reads the part after `#` and selects the matching page template.

## 4. Implementation details

### Dynamic content management

The `pages` object in `app.js` stores a function for each page. When a route is selected, `renderPage()` checks whether it exists and places the matching HTML inside the main application container using `innerHTML`. The browser keeps the original document loaded, so navigation does not require a full page refresh.

### URL and browser navigation

Navigation links use hash URLs such as `#home`, `#services` and `#contact`. The browser's `hashchange` event calls `renderPage()` whenever the hash changes. This also allows the browser's Back and Forward buttons to move between previously visited views.

### State and user feedback

The active navigation link is updated after each render. The mobile menu closes after a route change. The contact form uses built-in browser validation and JavaScript to display a confirmation message. The form is only a front-end demonstration and does not send data to a server.

### Visual design

I used a soft background, purple accent colour, rounded cards, clear typography and subtle hover/page-entry animations. CSS media queries adjust the layout for smaller screens, including a collapsible navigation menu on mobile.

## 5. Challenges and solutions

| Challenge | Approach taken |
|---|---|
| Changing page content without reloading | Used a single main container and rendered the selected page with JavaScript. |
| Keeping the URL in sync | Used hash-based routes so the current view is reflected in the address bar. |
| Supporting Back and Forward buttons | Added a `hashchange` event listener that renders the route again. |
| Handling an unknown URL | Added a simple 404 view with a link back to Home. |
| Keeping navigation usable on mobile | Added a menu toggle and responsive CSS media queries. |
| Validating the contact form | Used required fields, input types and `reportValidity()` before showing success feedback. |

## 6. Testing performed

The following checks should be completed in the browser before submission:

- [ ] Open the home page and confirm that the layout appears correctly.
- [ ] Select Home, About, Services and Contact; confirm that the content changes.
- [ ] Confirm that the URL hash changes with each navigation selection.
- [ ] Use the browser Back and Forward buttons.
- [ ] Enter an unknown hash such as `#unknown` and confirm that the 404 view appears.
- [ ] Resize the browser to desktop and mobile widths.
- [ ] Submit the contact form empty, then try valid sample details.
- [ ] Confirm that the page does not perform a full reload during normal navigation.

## 7. Result

The completed project demonstrates the main behaviour of a small SPA: one HTML shell, dynamically updated content, URL-based navigation, browser history support and a responsive interface. The code is separated into HTML, CSS and JavaScript files to make it easier to read and maintain.

## 8. Conclusion

While completing this task, I learned how JavaScript can update the DOM based on a route and how the browser's History-related URL behaviour can support navigation. I also understood why responsive design, input validation and clear error handling are important parts of a good user experience.

This project is a basic learning example rather than a production website. A future version could use the History API with server fallback support, connect the contact form to a backend and add automated tests. Overall, the task helped me connect the concepts of HTML structure, CSS presentation and JavaScript interaction in one working application.
