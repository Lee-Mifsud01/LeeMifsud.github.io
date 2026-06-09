function openImageModal(imageSrc, imageAlt) {
  const modalImage = document.getElementById('modalImage');
  const modalElement = document.getElementById('imageModal');
  if (!modalImage || !modalElement || !window.bootstrap) return;
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt || 'Portfolio project image';
  new bootstrap.Modal(modalElement).show();
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach((element) => observer.observe(element));
} else {
  revealItems.forEach((element) => element.classList.add('is-visible'));
}
