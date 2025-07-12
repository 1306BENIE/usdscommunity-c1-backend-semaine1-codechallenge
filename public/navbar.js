class Navbar {
  static render() {
    return `
      <header>
        <nav>
          <div class="nav-container">
            <h1>🏢 Gestion des Clients</h1>
            <ul>
              <li><a href="/" class="nav-link">Accueil</a></li>
              <li><a href="/clients" class="nav-link">Clients</a></li>
              <li><a href="/about" class="nav-link">À propos</a></li>
            </ul>
          </div>
        </nav>
      </header>
    `;
  }

  static init() {
    // Insérer la navbar au début du body
    document.body.insertAdjacentHTML("afterbegin", this.render());

    // Définir le lien actif
    this.setActiveLink();

    // Ajouter les événements
    this.addEventListeners();
  }

  static setActiveLink() {
    const currentPath = window.location.pathname;
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  }

  static addEventListeners() {
    // Animation au survol des liens
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });
  }
}

// Initialiser la navbar quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  Navbar.init();
});
