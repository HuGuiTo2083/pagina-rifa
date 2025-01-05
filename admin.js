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


// document.addEventListener('DOMContentLoaded', () => { 
//     //----------------Consumo de JSON
 

   const  buttonLogin = document.getElementById('btLogin')
//     const  tb1 = document.getElementById('tb1')

//     buttonLogin.addEventListener('click', () => {
//         fetch('database.json')
//         .then(response => response.json())  // Convertir la respuesta a JSON
//         .then(data => {
//           // Aquí puedes acceder a los datos del JSON
//           //console.log(data); // Imprime el JSON completo
//           //console.log(data.tikets); // Accede a la propiedad 'usuarios'
//           const container = document.getElementById('ticketContainer');
//           const totalTickets = 1000;
//           let i=1
//           // Acceder a los valores de los usuarios
//           data.tickets.forEach(ticket => {
//             if(tb1.value === ticket.ticket){
//                 console.log("oiguales")
//                 ticket.available = false
//                 console.log("si ", ticket.available)
//             }     
       
      
//           });
//         })
//         .catch(error => {
//           console.error('Error al cargar el archivo JSON:', error);
//         });
        

//     })


// });

buttonLogin.addEventListener('click', () => {
    fetch('http://localhost:3000/updateTicket', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ticketNumber: tb1.value })
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        // Aquí puedes actualizar la UI si lo necesitas
    })
    .catch(error => console.error('Error:', error));
});