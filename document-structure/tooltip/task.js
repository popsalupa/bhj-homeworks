const hasTooltips = document.querySelectorAll('.has-tooltip');
const tooltip = document.createElement('div');

Array.from(hasTooltips).forEach((element) => {
    element.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (tooltip.classList.contains('tooltip_active') && tooltip.textContent === element.title) {
        tooltip.classList.toggle('tooltip_active');
        return;
    }

    if (document.querySelector('.active') !== null) {
        document.querySelector('.active').classList.remove('.active');
    }

    const top = element.getBoundingClientRect().top + 20;
    const left = element.getBoundingClientRect().left;

    tooltip.textContent = element.title;
    tooltip.classList.add('tooltip_active', 'tooltip');
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;

    element.after(tooltip);
    element.classList.add('active');
    });
  });