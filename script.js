
document.addEventListener('DOMContentLoaded', () => {
  const heroBtn = document.querySelector('.hero button');
  heroBtn.addEventListener('click', () => {
    window.scrollTo({ top: document.getElementById('services').offsetTop - 50, behavior: 'smooth' });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1 });
  gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
  gsap.from('.hero button', { opacity: 0, scale: 0.8, duration: 0.8, delay: 0.6 });

  gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2
    });
  });
});
