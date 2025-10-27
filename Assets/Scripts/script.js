// Localization
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = langData[key];
  });
}

function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

async function fetchLanguageData(lang) {
  const response = await fetch(`Assets/lang/${lang}.json`);
  return response.json();
}

async function changeLanguage(lang) {
  await setLanguagePreference(lang);

  const langData = await fetchLanguageData(lang);
  updateContent(langData);
}

window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
});

/* document.querySelector("body").classList.remove("hidden"); */
// LANGUAGE BUTTONS
document.getElementById("language-fr").addEventListener("click", () => {
  setLanguagePreference("fr");
});

document.getElementById("language-en").addEventListener("click", () => {
  setLanguagePreference("en");
});

document.getElementById("language-ro").addEventListener("click", () => {
  setLanguagePreference("ro");
});
