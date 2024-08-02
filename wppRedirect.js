(function() {
    // Función para detectar y manejar redirecciones a WhatsApp
    function handleWhatsAppRedirect(event) {
        console.log("hola")
        const target = event.target;
        if (target.tagName === 'A' && target.href.includes('https://api.whatsapp.com/send')) {
            event.preventDefault();
            const href = target.href;

            // Realizar la tarea específica aquí
            performTask().then(() => {
                // Redirigir a WhatsApp después de completar la tarea
                window.location.href = href;
            }).catch((error) => {
                console.error('Error al realizar la tarea:', error);
                // Redirigir a WhatsApp incluso si hay un error
                window.location.href = href;
            });
        }
    }

    // Función para realizar la tarea específica (puede ser una llamada a un API o cualquier otra tarea)
    function performTask() {
        return new Promise((resolve, reject) => {
            // Simular una tarea asíncrona (por ejemplo, enviar datos a un servidor)
            setTimeout(() => {
                console.log('Tarea realizada');
                resolve();
            }, 5000); // Simulación de una tarea que tarda 1 segundo
        });
    }

    // Añadir un escuchador de eventos a todo el documento
    document.addEventListener('click', handleWhatsAppRedirect, true);

    // Interceptar todos los enlaces dinámicamente
    new MutationObserver(() => {
        document.addEventListener('click', handleWhatsAppRedirect, true);
    }).observe(document.body, { childList: true, subtree: true });
})();
