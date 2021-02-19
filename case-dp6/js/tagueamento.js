// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

//Function to send GA click events
function sendClickEvent(category, action, label){
    ga('send',{
        'hitType': 'event',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label
    });
    console.log("Foi");
}

//Function to send GA change of state events
function sendStateChangeEvent(action, category = 'contato', label = 'prencheu'){
    ga('send',{
        'hitType': 'event',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label
    });
}

//Load elements after page full load 
window.onload = _ => {
    //Objects - Links
    var download = document.getElementsByClassName('menu-lista-download')[0];
    var contato = document.getElementsByClassName('menu-lista-contato')[0];
    
    //Objects - Cards
    var cards = document.getElementsByClassName('card card-montadoras');
    var cardLorem = cards[0];
    var cardIpsum = cards[1];
    var cardDolor = cards[2];
    
    //Objects - Form
    var form = document.getElementsByClassName("container")[0];
    var formNome = document.getElementsByName('nome')[0];
    var formEmail = document.getElementsByName('email')[0];
    var formTelefone = document.getElementsByName('telefone')[0];
    var formContato = document.getElementsByName('contato')[0];

    //Events onClick() - Nav Links
    download.setAttribute('onclick','sendClickEvent("menu", "download_pdf", "download_pdf")');
    contato.setAttribute('onclick','sendClickEvent("menu", "entre_em_contato", "link_externo")');
    
    //Events onClick() - Cards
    if (cards.length > 0) {
        cardLorem.setAttribute('onclick',`sendClickEvent("analise", "ver_mais", "${cardLorem.dataset.name}")`);
        cardIpsum.setAttribute('onclick',`sendClickEvent("analise", "ver_mais", "${cardIpsum.dataset.name}")`);
        cardDolor.setAttribute('onclick',`sendClickEvent("analise", "ver_mais", "${cardDolor.dataset.name}")`);
    }

    //Evemts - Form
    if (typeof form !== 'undefined'){
        //EventListeners - Form Inputs
        
        //Nome
        formNome.addEventListener('change', _ => sendStateChangeEvent(formNome.name), false);
        
        //E-mail
        formEmail.addEventListener('change', _ => sendStateChangeEvent(formEmail.name), false);

        //Telefone
        formTelefone.addEventListener('change', _ => sendStateChangeEvent(formTelefone.name), false);
        
        //CheckBox Contato
        formContato.addEventListener('change', _ => sendStateChangeEvent(formContato.name), false);
        
        //Submit Button
        form.addEventListener('submit', _ => sendClickEvent("contato", "enviado", "enviado"));
    }
}
