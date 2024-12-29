const container = document.querySelector('.particles-container');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Propiedades aleatorias para cada partícula
  particle.style.setProperty('--left', `${Math.random() * 100}%`);
  particle.style.setProperty('--size', `${Math.random() * 8 + 2}px`);
  particle.style.setProperty('--duration', `${Math.random() * 10 + 5}s`);
  particle.style.setProperty('--delay', `-${Math.random() * 15}s`);
  particle.style.setProperty('--opacity', `${Math.random() * 0.6 + 0.2}`);
  
  container.appendChild(particle);
  
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('ticketContainer');
  const totalTickets = 1000;
  console.log("hola2")
  // Función para crear un ticket con formato de número
  function formatTicketNumber(number) {
      return number.toString().padStart(4, '0');
  }

  // Crear todos los tickets
  for (let i = 1; i <= totalTickets; i++) {
      const ticket = document.createElement('button');
      ticket.className = 'ticket';
      ticket.textContent = formatTicketNumber(i);
      
      // Agregar evento click para selección
      ticket.addEventListener('click', () => {
          ticket.classList.toggle('selected');
      });

      container.appendChild(ticket);
  }
});