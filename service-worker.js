// self.addEventListener('fetch', function(event) {
//     const url = new URL(event.request.url);
  
//     // Verifica si la solicitud es una redirección a WhatsApp
//     if (url.origin === 'https://api.whatsapp.com' && url.pathname === '/send') {
//       event.respondWith((async function() {
//         // Realiza la tarea necesaria aquí (por ejemplo, enviar datos a tu servidor)
//         await performTask();
  
//         // Luego continúa con la redirección
//         return fetch(event.request);
//       })());
//     } else {
//       // Si no es una redirección a WhatsApp, maneja la solicitud normalmente
//       event.respondWith(fetch(event.request));
//     }
//   });
  
//   // Función para realizar la tarea deseada antes de continuar con la redirección
//   async function performTask() {
//     // Aquí puedes realizar cualquier tarea necesaria, como enviar datos a tu servidor
//     console.log('Realizando tarea antes de redirigir a WhatsApp...');
  
//     // Simula una tarea asíncrona (puedes reemplazar esto con tu propia lógica)
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     console.log('Tarea completada.');
//   }
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
  });
  
  self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
  });
  
  self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
  
    // Verifica si la solicitud es una redirección a WhatsApp
    if (url.origin === 'https://api.whatsapp.com' && url.pathname === '/send') {
      event.respondWith((async function() {
        // Realiza la tarea necesaria aquí (por ejemplo, enviar datos a tu servidor)
        await performTask();
  
        // Luego continúa con la redirección
        return fetch(event.request);
      })());
    } else {
      // Si no es una redirección a WhatsApp, maneja la solicitud normalmente
      event.respondWith(fetch(event.request));
    }
  });
  
  // Función para realizar la tarea deseada antes de continuar con la redirección
  async function performTask() {
    // Aquí puedes realizar cualquier tarea necesaria, como enviar datos a tu servidor
    console.log('Realizando tarea antes de redirigir a WhatsApp...');
  
    // Simula una tarea asíncrona (puedes reemplazar esto con tu propia lógica)
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log('Tarea completada.');
  }
  