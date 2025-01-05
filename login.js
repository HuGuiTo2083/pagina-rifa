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

    const  buttonLogin = document.getElementById('btLogin')
    const  tb1 = document.getElementById('tb1')
    const  tb2 = document.getElementById('tb2')

    buttonLogin.addEventListener('click', () => {
         console.log("usuario: " + tb1.value)        
         console.log("password: " + tb2.value) 
         if(tb1.value === "admin" && tb2.value === "2083MiguelAngel2083"){
             window.location.href= "admin.html"
         }
        

    })

})