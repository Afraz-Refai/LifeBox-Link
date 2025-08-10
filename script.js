// JavaScript for The LifeBox Link
// Handles simple interactive behaviour such as form submission feedback.

document.addEventListener('DOMContentLoaded', () => {
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