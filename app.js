/* Client-side routing, rendering and small UI interactions for Nova SPA. */
const app = document.getElementById("app");
const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");
const toast = document.getElementById("toast");
document.getElementById("year").textContent = new Date().getFullYear();

const pages = {
  home: () => `
    <section class="page">
      <div class="hero">
        <div>
          <span class="eyebrow">A little more clarity. A lot more impact.</span>
          <h1>Ideas deserve a <span class="accent">beautiful</span> digital home.</h1>
          <p class="lead">Welcome to Nova — a simple demonstration of how a modern website can feel quick, connected and effortless. Explore the pages without waiting for a full reload.</p>
          <div class="hero-actions"><a class="button" href="#services">Explore what we do <span>↗</span></a><a class="button secondary" href="#about">Get to know us</a></div>
        </div>
        <div class="hero-art" aria-label="Decorative dashboard illustration">
          <div class="art-card"><div class="art-top"><span>✦ NOVA OVERVIEW</span><span>•••</span></div><div class="art-title">A brighter<br>way forward.</div><div class="art-sub">Small steps. Meaningful progress.</div><div class="chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>
          <div class="float-pill one">✦ Made with purpose</div><div class="float-pill two">↗ Progress, in motion</div>
        </div>
      </div>
      <div class="stats"><div class="stat"><strong>01</strong><span>One smooth experience</span></div><div class="stat"><strong>0</strong><span>Unnecessary page reloads</span></div><div class="stat"><strong>100%</strong><span>Responsive by design</span></div></div>
      <div class="section-heading"><span class="eyebrow">The Nova approach</span><h2>Simple on the surface.<br>Thoughtful underneath.</h2><p class="lead">Good digital experiences make complicated things feel natural.</p></div>
      <div class="card-grid">
        <article class="info-card"><div class="card-icon">⌘</div><h3>Clear structure</h3><p>Well-organised sections help visitors find what they need without confusion.</p></article>
        <article class="info-card"><div class="card-icon">↗</div><h3>Fluid navigation</h3><p>Client-side routing changes the visible page while keeping the experience continuous.</p></article>
        <article class="info-card"><div class="card-icon">✧</div><h3>Made for every screen</h3><p>A flexible layout adapts gracefully to laptops, tablets and mobile devices.</p></article>
      </div>
    </section>`,
  about: () => `
    <section class="page">
      <div class="section-heading"><span class="eyebrow">A little about Nova</span><h1>Technology should feel <span class="accent">human.</span></h1><p class="lead">Nova is a fictional creative studio created for this SPA project. Its purpose is to demonstrate a clean layout, accessible navigation and smooth client-side page changes.</p></div>
      <div class="content-panel two-col">
        <div><span class="eyebrow">Our perspective</span><h2>Less friction.<br>More possibility.</h2><p class="lead">We believe a website should guide people rather than make them work to understand it. Every detail — from the navigation to the smallest interaction — should have a reason.</p></div>
        <div><h3>What guides this experience</h3><ul class="check-list"><li>Keep the interface clear and consistent.</li><li>Make navigation predictable and accessible.</li><li>Respect the browser's back and forward buttons.</li><li>Design for small screens as well as large ones.</li></ul></div>
      </div>
    </section>`,
  services: () => `
    <section class="page">
      <div class="section-heading"><span class="eyebrow">What we focus on</span><h1>Useful work, <span class="accent">beautifully</span> delivered.</h1><p class="lead">These sample service cards make this page feel like a real small-business website while demonstrating dynamic route rendering.</p></div>
      <div class="card-grid">
        <article class="info-card"><div class="card-icon">✦</div><h3>Web experiences</h3><p>Responsive, user-friendly interfaces designed to make information easy to explore.</p></article>
        <article class="info-card"><div class="card-icon">▤</div><h3>Visual identity</h3><p>Consistent colours, typography and layout that help a brand feel recognisable.</p></article>
        <article class="info-card"><div class="card-icon">⌁</div><h3>Digital strategy</h3><p>Thoughtful planning that connects a project's goals with the needs of its visitors.</p></article>
        <article class="info-card"><div class="card-icon">◎</div><h3>Interaction design</h3><p>Small, meaningful interactions that make a product easier and more pleasant to use.</p></article>
        <article class="info-card"><div class="card-icon">▦</div><h3>Responsive layouts</h3><p>Flexible components that remain comfortable to use across different screen sizes.</p></article>
        <article class="info-card"><div class="card-icon">↗</div><h3>Ongoing improvement</h3><p>Testing and refinement to make the experience more reliable over time.</p></article>
      </div>
    </section>`,
  contact: () => `
    <section class="page">
      <div class="section-heading"><span class="eyebrow">Start a conversation</span><h1>Have an idea? Let's <span class="accent">talk.</span></h1><p class="lead">This sample form demonstrates front-end validation and feedback. It does not send information to a server.</p></div>
      <div class="contact-layout">
        <aside class="contact-note"><h2>Good things start with a hello.</h2><p>Share a little about what you are thinking. The form will check the required details and show a confirmation message on this page.</p><p>✉ hello@novastudio.example</p><p>⌖ Working everywhere, from anywhere</p></aside>
        <form class="content-panel contact-form" id="contactForm" novalidate>
          <div class="field"><label for="name">Your name</label><input id="name" name="name" type="text" placeholder="e.g. Alex Morgan" required minlength="2"></div>
          <div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" placeholder="alex@example.com" required></div>
          <div class="field"><label for="message">Your message</label><textarea id="message" name="message" placeholder="Tell us a little about your idea…" required minlength="10"></textarea></div>
          <div class="form-message" id="formMessage" aria-live="polite"></div>
          <button class="button" type="submit">Send message <span>↗</span></button>
        </form>
      </div>
    </section>`
};

function getRoute() {
  const route = window.location.hash.replace(/^#\/?/, "").trim().toLowerCase();
  return route || "home";
}

function renderPage() {
  const route = getRoute();
  const isKnownRoute = Object.prototype.hasOwnProperty.call(pages, route);
  app.innerHTML = isKnownRoute ? pages[route]() : `
    <section class="page not-found"><div class="number">404</div><h2>That page wandered off.</h2><p class="lead" style="margin: 0 auto 25px">The page you are looking for does not exist. Let's get you back on track.</p><a class="button" href="#home">Back to home ↗</a></section>`;
  document.title = `${isKnownRoute ? route[0].toUpperCase() + route.slice(1) : "Page not found"} | Nova`;
  document.querySelectorAll("[data-route]").forEach(link => {
    const active = link.dataset.route === route;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  app.focus({ preventScroll: true });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// hashchange fires for link clicks and browser back/forward navigation.
window.addEventListener("hashchange", renderPage);
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

// Event delegation keeps the form handler working after its page is re-rendered.
app.addEventListener("submit", event => {
  if (event.target.id !== "contactForm") return;
  event.preventDefault();
  const form = event.target;
  const messageBox = document.getElementById("formMessage");
  if (!form.reportValidity()) {
    messageBox.textContent = "Please check the highlighted fields and try again.";
    messageBox.style.color = "#b54747";
    return;
  }
  const name = form.elements.name.value.trim();
  form.reset();
  messageBox.textContent = `Thanks, ${name}! Your sample message has been validated.`;
  messageBox.style.color = "#16865d";
  showToast("Form validated successfully.");
});

// Initial route is rendered once; later route changes update only the app container.
renderPage();
