
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
    fetch('https://pagina-rifa.onrender.com/admin.html/updateTicket', {
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