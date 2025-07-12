class Dashboard {
  constructor() {
    this.init();
  }

  init() {
    this.initParticles();
    this.initCounters();
    this.initFeatureCards();
    this.initScrollAnimations();
    this.loadRealStats();
  }

  // Animation de particules en arrière-plan
  initParticles() {
    const particlesContainer = document.querySelector(".particles");
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";
      particlesContainer.appendChild(particle);
    }
  }

  // Compteurs animés pour les statistiques
  initCounters() {
    const counters = document.querySelectorAll(".stat-number");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute("data-target"));
            this.animateCounter(counter, target);
            observer.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => observer.observe(counter));
  }

  animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, 30);
  }

  // Animations des cartes de fonctionnalités
  initFeatureCards() {
    const cards = document.querySelectorAll(".feature-card-premium");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
        card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
        card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
      });

      // Animation au clic
      card.addEventListener("click", () => {
        card.style.transform = "scale(0.98)";
        setTimeout(() => {
          card.style.transform = "scale(1)";
        }, 150);
      });
    });
  }

  // Animations au scroll
  initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer les sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }

  // Charger les vraies statistiques depuis l'API
  async loadRealStats() {
    try {
      const response = await fetch("/api/clients");
      const clients = await response.json();

      // Mettre à jour le compteur de clients
      const clientCounter = document.querySelector(
        '[data-stat="clients"] .stat-number'
      );
      if (clientCounter) {
        clientCounter.setAttribute("data-target", clients.length);
        this.animateCounter(clientCounter, clients.length);
      }

      // Mettre à jour le pourcentage de performance basé sur le nombre de clients
      const performanceCounter = document.querySelector(
        '[data-stat="performance"] .stat-number'
      );
      if (performanceCounter) {
        const performance = Math.min(99, 85 + clients.length * 2);
        performanceCounter.setAttribute("data-target", performance);
        this.animateCounter(performanceCounter, performance);
      }
    } catch (error) {
      console.log("Erreur lors du chargement des statistiques:", error);
    }
  }
}


// Initialiser le dashboar' quand'le DOM est chargé
  new Dashboard(); compteurs s'animer puis on masque les cartes vides
  setTimeout(hideEmptyStatCards, 800);
});

// Effet de parallaxe subtil pour le hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-premium");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Animation des boutons hero
document.addEventListener("DOMContentLoaded", () => {
  const heroButtons = document.querySelectorAll(".btn-hero");

  heroButtons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      const icon = button.querySelector("svg");
      if (icon) {
        icon.style.transform = "translateX(5px)";
      }
    });

    button.addEventListener("mouseleave", () => {
      const icon = button.querySelector("svg");
      if (icon) {
        icon.style.transform = "translateX(0)";
      }
    });
  });
});
