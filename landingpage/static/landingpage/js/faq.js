document.addEventListener("DOMContentLoaded", function() {
    let faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        let question = item.querySelector('.faq-question');
        let answer = item.querySelector('.faq-answer');
        let icon = item.querySelector('.faq-icon img');

        let plusImg = icon.dataset.plusImg;
        let minusImg = icon.dataset.minusImg;

        question.addEventListener('click', () => {
            let isExpanded = question.getAttribute('aria-expanded') === 'true';
            question.setAttribute('aria-expanded', !isExpanded);
            answer.style.display = isExpanded ? 'none' : 'block';

            if (isExpanded) {
                icon.src = plusImg;
            } else {
                icon.src = minusImg;
            }

            // Close other questions
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    let otherQuestion = otherItem.querySelector('.faq-question');
                    let otherAnswer = otherItem.querySelector('.faq-answer');
                    let otherIcon = otherItem.querySelector('.faq-icon img');

                    otherQuestion.setAttribute('aria-expanded', false);
                    otherAnswer.style.display = 'none';
                    otherIcon.src = plusImg;
                }
            });
        });
    });
});