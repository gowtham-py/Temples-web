// script.js
document.querySelectorAll('.info-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const infoSection = button.nextElementSibling;
      if (infoSection.style.display === 'block') {
        infoSection.style.display = 'none';
        button.textContent = 'Show Info';
      } else {
        infoSection.style.display = 'block';
        button.textContent = 'Hide Info';
      }
    });
  });
  