// JavaScript for The LifeBox Link
// Handles simple interactive behaviour such as form submission feedback.

document.addEventListener('DOMContentLoaded', () => {
  // Language selector: redirect to Google Translate for selected language
  const languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.addEventListener('change', function () {
      const lang = this.value;
      if (lang) {
        const currentUrl = encodeURIComponent(window.location.href);
        window.location.href = `https://translate.google.com/translate?sl=auto&tl=${lang}&u=${currentUrl}`;
      }
    });
  }
  const supportForm = document.getElementById('support-form');
  if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(
        'Thank you for your interest! We will be in touch soon with opportunities to support The LifeBox Link.'
      );
      supportForm.reset();
    });
  }
});