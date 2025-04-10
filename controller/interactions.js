export function accordionInteration() {
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        const header = card.querySelector('.project-header');
        const wrapper = card.querySelector('.project-description-wrapper');

        header.addEventListener('click', () => {
            const isActive = card.classList.contains('active');

            if (isActive) {
                // collapse
                wrapper.style.height = wrapper.scrollHeight + 'px'; // set current height to allow transition
                requestAnimationFrame(() => {
                    wrapper.style.height = '0';
                });
            } else {
                // expand
                wrapper.style.height = wrapper.scrollHeight + 'px';
            }

            card.classList.toggle('active');
        });

        wrapper.addEventListener('transitionend', () => {
            if (!card.classList.contains('active')) {
                wrapper.style.height = '0';
            } else {
                wrapper.style.height = 'auto';
            }
        });
    });
}