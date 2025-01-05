const container = document.querySelector('.particles-container');
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // // Propiedades aleatorias para cada partícula
  // particle.style.setProperty('--left', `${Math.random() * 100}%`);
  // particle.style.setProperty('--size', `${Math.random() * 8 + 2}px`);
  // particle.style.setProperty('--duration', `${Math.random() * 10 + 5}s`);
  // particle.style.setProperty('--delay', `-${Math.random() * 15}s`);
  // particle.style.setProperty('--opacity', `${Math.random() * 0.6 + 0.2}`);
  
  //container.appendChild(particle);
  
}

document.addEventListener('DOMContentLoaded', () => {

  function formatTicketNumber(number) {
    return number.toString().padStart(4, '0');
  }

  //----------------Consumo de JSON
  fetch('database.json')
  .then(response => response.json())  // Convertir la respuesta a JSON
  .then(data => {
    // Aquí puedes acceder a los datos del JSON
    //console.log(data); // Imprime el JSON completo
    console.log(data.tikets); // Accede a la propiedad 'usuarios'
    const container = document.getElementById('ticketContainer');
    
    let i=1
    // Acceder a los valores de los usuarios
    data.tickets.forEach(ticket => {
      //console.log(`Numero: ${ticket.ticket}, Disponible: ${ticket.available}`);
      const ticket2 = document.createElement('button');
      ticket2.className = 'ticket';
      ticket2.textContent = formatTicketNumber(i);
      //console.log("contenido: ", formatTicketNumber(i))
      //console.log("array: " + ticket.ticket)
      if(!ticket.available){
        ticket2.className = 'not-available';
        ticket2.disabled = true
        ticket2.classList.add('no-hover')
      }
      i++; 
      
      // Agregar evento click para selección
      ticket2.addEventListener('click', () => {
          ticket2.classList.toggle('selected');
          window.open(`https://wa.me/+525532981032?text=Me%20interesa%20adquirir%20el%20boleto%20${ticket.ticket}`, '_blank')
      });

      
         container.appendChild(ticket2);


      

 

    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });

  //-----------------------
  
  //console.log("hola2")
  // Función para crear un ticket con formato de número
  




});