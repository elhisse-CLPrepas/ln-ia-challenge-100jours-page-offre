const targetDate = new Date("2026-06-01T00:00:00");

const defaultAdvantages = [
  {
    id: 1,
    titre: "Alignement avec le développement moderne",
    description: "L’atelier introduit une manière actuelle de travailler : structuration, automatisation, documentation, versionnement et amélioration continue."
  },
  {
    id: 2,
    titre: "Multiplication de la production",
    description: "L’IA permet de produire plus vite des textes, supports, plans, pages web, guides, affiches, scripts et documents professionnels."
  },
  {
    id: 3,
    titre: "Gain d’autonomie",
    description: "Les participants apprennent à piloter leurs propres productions sans dépendre constamment d’un prestataire technique."
  },
  {
    id: 4,
    titre: "Organisation du travail numérique",
    description: "L’atelier aide à passer du désordre numérique à un espace de travail clair, classé, exploitable et durable."
  },
  {
    id: 5,
    titre: "Capitalisation des livrables",
    description: "Chaque production devient une ressource réutilisable, améliorable et transmissible."
  },
  {
    id: 6,
    titre: "Longévité et pérennité des projets",
    description: "La documentation, les versions et les méthodes permettent aux projets de vivre, évoluer et se transmettre dans le temps."
  },
  {
    id: 7,
    titre: "Montée en compétence progressive",
    description: "Le challenge est structuré sur 100 jours pour permettre une progression régulière, concrète et mesurable."
  },
  {
    id: 8,
    titre: "Transformation des idées en produits",
    description: "Les participants apprennent à transformer une idée brute en guide, page, offre, support, atelier ou dossier professionnel."
  },
  {
    id: 9,
    titre: "Développement d’une culture IA responsable",
    description: "L’atelier apprend à utiliser l’IA comme assistant de méthode, de production et de réflexion, sans perdre le contrôle humain."
  },
  {
    id: 10,
    titre: "Création d’un écosystème personnel de production",
    description: "À la fin du challenge, chaque participant dispose d’une base de travail, de prompts, de modèles, de documents et d’une méthode reproductible."
  }
];

function formatNumber(value) {
  return String(value).padStart(2, "0");
}

function setCountdownValues(values) {
  Object.entries(values).forEach(([key, value]) => {
    document.querySelectorAll(`[data-countdown='${key}']`).forEach((node) => {
      node.textContent = value;
    });
  });
}

function setCountdownMessage(text) {
  document.querySelectorAll("[data-countdown-message]").forEach((message) => {
    message.textContent = text;
  });
}

function updateCountdown() {
  const countdownNodes = document.querySelectorAll("[data-countdown]");
  if (!countdownNodes.length) return;

  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    setCountdownValues({
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    });
    setCountdownMessage("Le challenge a commencé.");
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  setCountdownValues({
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds)
  });
  setCountdownMessage("");
}

function renderAdvantages(advantages) {
  const grid = document.querySelector("#advantages-grid");
  if (!grid) return;

  grid.innerHTML = advantages.map((advantage) => `
    <article class="card">
      <h3>${advantage.titre}</h3>
      <p>${advantage.description}</p>
    </article>
  `).join("");
}

async function loadAdvantages() {
  try {
    const response = await fetch("data/avantages.json");
    if (!response.ok) throw new Error("Chargement impossible");
    const advantages = await response.json();
    renderAdvantages(advantages);
  } catch (error) {
    renderAdvantages(defaultAdvantages);
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
loadAdvantages();
