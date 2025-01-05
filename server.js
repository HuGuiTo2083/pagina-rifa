const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

// Habilitar CORS y JSON parsing
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Servir archivos estáticos (tu HTML, CSS, JS)
app.use(express.static('./'));

// Endpoint para modificar ticket
app.post('/updateTicket', (req, res) => {
    const ticketNumber = req.body.ticketNumber;
    
    // Leer el JSON
    fs.readFile('database.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error leyendo archivo:', err);
            return res.status(500).send('Error leyendo archivo');
        }
        
        try {
            const jsonData = JSON.parse(data);
            let ticketFound = false;
            
            // Buscar y actualizar el ticket
            jsonData.tickets.forEach(ticket => {
                if (ticket.ticket === ticketNumber) {
                    ticket.available = false;
                    ticketFound = true;
                }
            });
            
            if (!ticketFound) {
                return res.status(404).send('Ticket no encontrado');
            }
            
            // Guardar los cambios
            fs.writeFile('database.json', JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    console.error('Error guardando:', err);
                    return res.status(500).send('Error guardando cambios');
                }
                res.send('Ticket actualizado correctamente');
            });
            
        } catch (error) {
            console.error('Error procesando JSON:', error);
            res.status(500).send('Error procesando datos');
        }
    });
});

// Configuración del puerto
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});