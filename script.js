// Criar e inserir o script do Google Analytics
const script = document.createElement('script');
script.src = "https://www.googletagmanager.com/gtag/js?id=G-Y543GYC547";
script.async = true;
document.head.appendChild(script);

// Definir as variáveis globais
window.dataLayer = window.dataLayer || [];
window.gtag = function() { window.dataLayer.push(arguments); };
window.gtag('js', new Date());

// Configurar o Google Analytics com cookies de primeira parte
window.gtag('config', 'G-Y543GYC547', {
  'cookie_flags': 'SameSite=None;Secure'
});
