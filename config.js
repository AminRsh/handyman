

fetch('./env.json')
    .then(response => response.json())
    .then(env => {
        window.emailJSConfig = {
            publicKey: env.EMAILJS_PUBLIC_KEY,
            serviceID: env.EMAILJS_SERVICE_ID,
            templateID: env.EMAILJS_TEMPLATE_ID
        };
    })
    .catch(error => console.error("Error loading env.json:", error));
