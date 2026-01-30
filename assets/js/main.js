document.addEventListener('DOMContentLoaded', () => {

  /* ==============================
     Language Toggle (Skeleton)
  ============================== */

  const translations = {
    // en: { key: "text" },
    // fr: { key: "texte" }
  };

  let currentLang = 'en';

  function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.dataset.key;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  /* ==============================
     ECOWAS MEMBER DATA
  ============================== */

  const memberInfo = {
    "Benin": {
      postal: "La Poste du Bénin",
      since: "1976",
      logo: "/assets/images/flags/benin.svg"
    },
    "Burkina Faso": {
      postal: "SONAPOST",
      since: "1976",
      logo: "/assets/images/flags/burkina-faso.svg"
    },
    "Cape Verde": {
      postal: "Correios de Cabo Verde",
      since: "1977",
      logo: "/assets/images/flags/cape-verde.svg"
    },
    "Côte d'Ivoire": {
      postal: "La Poste de Côte d’Ivoire",
      since: "1976",
      logo: "/assets/images/flags/cote-divoire.svg"
    },
    "Gambia": {
      postal: "Gambia Postal Services",
      since: "1976",
      logo: "/assets/images/flags/gambia.svg"
    },
    "Ghana": {
      postal: "Ghana Post",
      since: "1976",
      logo: "/assets/images/flags/ghana.svg"
    },
    "Guinea": {
      postal: "La Poste Guinéenne",
      since: "1976",
      logo: "/assets/images/flags/guinea.svg"
    },
    "Guinea-Bissau": {
      postal: "Correios da Guiné-Bissau",
      since: "1976",
      logo: "/assets/images/flags/guinea-bissau.svg"
    },
    "Liberia": {
      postal: "Liberia Postal Corporation",
      since: "1976",
      logo: "/assets/images/flags/liberia.svg"
    },
    "Mali": {
      postal: "La Poste du Mali",
      since: "1976",
      logo: "/assets/images/flags/mali.svg"
    },
    "Niger": {
      postal: "La Poste du Niger",
      since: "1976",
      logo: "/assets/images/flags/niger.svg"
    },
    "Nigeria": {
      postal: "NIPOST (Nigerian Postal Service)",
      since: "1976",
      logo: "/assets/images/flags/nigeria.svg"
    },
    "Senegal": {
      postal: "La Poste du Sénégal",
      since: "1976",
      logo: "/assets/images/flags/senegal.svg"
    },
    "Sierra Leone": {
      postal: "Sierra Leone Postal Services",
      since: "1976",
      logo: "/assets/images/flags/sierra-leone.svg"
    },
    "Togo": {
      postal: "La Poste Togolaise",
      since: "1976",
      logo: "/assets/images/flags/togo.svg"
    }
  };

  /* ==============================
     MAP INTERACTION
  ============================== */

  const memberInfoBox = document.getElementById('member-info');
  const countries = document.querySelectorAll('.country');

  const defaultCardHTML = `
    <h3 class="text-2xl font-bold mb-2">West Africa</h3>
    <p class="text-gray-600">
      Hover over a country on the map to view its postal operator and membership details.
    </p>
  `;

  countries.forEach(country => {
    const countryName = country.dataset.name;
    const info = memberInfo[countryName];

    country.addEventListener('mouseenter', () => {
      if (!info) return;

      memberInfoBox.innerHTML = `
        <div class="flex items-center gap-4 mb-4">
          <img src="${info.logo}" class="w-12 h-auto" alt="${countryName} flag">
          <h3 class="text-2xl font-bold">${countryName}</h3>
        </div>
        <p class="font-semibold text-gray-800">${info.postal}</p>
        <p class="text-sm text-gray-500 mt-1">
          Member since ${info.since}
        </p>
      `;
    });

    country.addEventListener('mouseleave', () => {
      memberInfoBox.innerHTML = defaultCardHTML;
      setLanguage(currentLang);
    });

    country.addEventListener('click', () => {
      const slug = countryName
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/'/g, '');

      window.location.href = `/countries/${slug}.html`;
    });
  });

});
