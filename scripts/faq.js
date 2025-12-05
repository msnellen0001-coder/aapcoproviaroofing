/* JS FAQ Page Accordion */

const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle('open');
  });
});