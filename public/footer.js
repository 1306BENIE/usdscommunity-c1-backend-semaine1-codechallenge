class Footer {
  static render() {
    const currentYear = new Date().getFullYear();
    return `
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Gestion des Clients</h3>
              <p>Application de gestion des clients développée avec Express.js</p>
            </div>
            <div class="footer-section">
              <h4>Liens rapides</h4>
              <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/clients">Gestion des clients</a></li>
                <li><a href="/about">À propos</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>API REST</h4>
              <ul>
                <li><code>GET /api/clients</code></li>
                <li><code>POST /api/clients</code></li>
                <li><code>DELETE /api/clients/:id</code></li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; ${currentYear} Gestion des Clients - Développé par B613-codeur</p>
            <div class="footer-social">
              <span class="footer-tech">
                <svg width="22" height="22" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Express.js" style="vertical-align:middle;margin-right:7px;"><g><path d="M370.6 344.7c-7.7 0-14.2-2.7-19.5-8.1-5.3-5.4-8-11.9-8-19.5 0-7.7 2.7-14.2 8-19.5 5.3-5.3 11.8-8 19.5-8 7.7 0 14.2 2.7 19.5 8 5.3 5.3 8 11.8 8 19.5 0 7.7-2.7 14.2-8 19.5-5.3 5.4-11.8 8.1-19.5 8.1zm0-10.7c4.1 0 7.6-1.4 10.5-4.3 2.9-2.9 4.3-6.4 4.3-10.5 0-4.1-1.4-7.6-4.3-10.5-2.9-2.9-6.4-4.3-10.5-4.3-4.1 0-7.6 1.4-10.5 4.3-2.9 2.9-4.3 6.4-4.3 10.5 0 4.1 1.4 7.6 4.3 10.5 2.9 2.9 6.4 4.3 10.5 4.3z" fill="#fff"/><path d="M222.2 352.2c-6.2 0-11.5-2.2-15.9-6.6-4.4-4.4-6.6-9.7-6.6-15.9 0-6.2 2.2-11.5 6.6-15.9 4.4-4.4 9.7-6.6 15.9-6.6 6.2 0 11.5 2.2 15.9 6.6 4.4 4.4 6.6 9.7 6.6 15.9 0 6.2-2.2 11.5-6.6 15.9-4.4 4.4-9.7 6.6-15.9 6.6zm0-8.7c3.2 0 5.9-1.1 8.1-3.3 2.2-2.2 3.3-4.9 3.3-8.1 0-3.2-1.1-5.9-3.3-8.1-2.2-2.2-4.9-3.3-8.1-3.3-3.2 0-5.9 1.1-8.1 3.3-2.2 2.2-3.3 4.9-3.3 8.1 0 3.2 1.1 5.9 3.3 8.1 2.2 2.2 4.9 3.3 8.1 3.3z" fill="#fff"/><path d="M32 256C32 132.3 132.3 32 256 32s224 100.3 224 224-100.3 224-224 224S32 379.7 32 256zm224 192c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" fill="#fff"/><text x="120" y="350" font-size="120" font-family="Arial, Helvetica, sans-serif" fill="#fff">express</text></g></svg>
                Express.js
              </span>
              <span class="footer-tech">
                <svg width="22" height="22" viewBox="0 0 256 272" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Node.js" style="vertical-align:middle;margin-right:7px;"><g><path d="M128 0l110.9 64v144L128 272 17.1 208V64L128 0z" fill="#393"/><path d="M128 20.5L34.2 74.7v122.6L128 251.5l93.8-54.2V74.7L128 20.5zm0-20.5l110.9 64v144L128 272 17.1 208V64L128 0z" fill="#fff" fill-opacity=".1"/><path d="M128 20.5L34.2 74.7v122.6L128 251.5l93.8-54.2V74.7L128 20.5zm0-20.5l110.9 64v144L128 272 17.1 208V64L128 0z" fill="#393"/><path d="M128 20.5L34.2 74.7v122.6L128 251.5l93.8-54.2V74.7L128 20.5zm0-20.5l110.9 64v144L128 272 17.1 208V64L128 0z" fill="#fff" fill-opacity=".1"/><text x="70" y="180" font-size="70" font-family="Arial, Helvetica, sans-serif" fill="#fff">Node</text><text x="70" y="220" font-size="40" font-family="Arial, Helvetica, sans-serif" fill="#fff">.js</text></g></svg>
                Node.js
              </span>
              <span class="footer-tech">
                <svg width="22" height="22" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CSS3" style="vertical-align:middle;margin-right:7px;"><g><path d="M71 460L30 0h451l-41 460-185 52" fill="#264de4"/><path d="M256 472l149-41 35-394H256" fill="#2965f1"/><path d="M256 208h-60l-4-44h64V120h-80l1 12 8 88h71v-12zm0 88h-54l-4-44h58v-44h-98l1 12 8 88h89v-12zm0 88h-1l-54-15-3-33h-44l5 56 97 27h1v-35zm0 0v35l97-27 5-56h-44l-3 33-54 15zm0-176v44h58l-4 44h-54v44h89l8-88 1-12h-98zm0-88v44h64l-4 44h-60v-44h-64l-4-44h68z" fill="#fff"/><text x="180" y="370" font-size="120" font-family="Arial, Helvetica, sans-serif" fill="#fff">3</text></g></svg>
                CSS3
              </span>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  static init() {
    // Insérer le footer à la fin du body
    document.body.insertAdjacentHTML("beforeend", this.render());

    // Ajouter les événements
    this.addEventListeners();
  }

  static addEventListeners() {
    // Animation au survol des liens
    document.querySelectorAll("footer a").forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.color = "#667eea";
        this.style.transform = "translateX(5px)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.color = "";
        this.style.transform = "translateX(0)";
      });
    });

    // Animation pour les badges techno
    document.querySelectorAll(".footer-social span").forEach((badge) => {
      badge.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.background =
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      });

      badge.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
        this.style.background = "";
      });
    });
  }
}

// Initialiser le footer quand le DOM est chargé
document.addEventListener("DOMContentLoaded", () => {
  Footer.init();
});
