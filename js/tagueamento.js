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

function sendClickEvent(category, action, label){
    {ga('send',{
        'hitType': 'event',
        'eventCategory': category,
        'eventAction': action,
        'eventLabel': label
    });
    console.log(category, action, label);
}

window.onload = _ => {
    var download = document.getElementsByClassName('menu-lista-download')[0];
    var contato = document.getElementsByClassName('menu-lista-contato')[0];

    var cards = document.getElementsByClassName('card card-montadoras');
    var cardLorem = cards[0];
    var cardIpsum = cards[1];
    var cardDolor = cards[2];

    download.setAttribute('onclick','sendClickEvent("menu", "download_pdf", "download_pdf")');
    contato.setAttribute('onclick','sendClickEvent("menu", "entre_em_contato", "link_externo")');
    if (cards.length > 0) {
        cardLorem.setAttribute('onclick',`sendClickEvent("analise", "ver_mais", "${cardLorem.dataset.name}")`);
        cardIpsum.setAttribute('onclick',`sendClickEvent("analise", "ver_mais", "${cardIpsum.dataset.name}")`);
        cardDolor.setAttribute('onclick',`sendClickEvent("analise", "ver_mais", "${cardDolor.dataset.name}")`);
    }
}