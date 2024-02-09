const latestProjectData = {
  title: "BoolBnb - Replica didattica di AirBnb (Progetto finale Boolean)",
  technologies:
    "HTML, CSS (scss), BOOTSTRAP, VUEJS, LARAVEL, MYSQL + API (interna)",
  description: {
    firstPar:
      'BoolBnb è stato il progetto finale del mio percorso con Boolean. È stato realizzato in team e rappresenta la somma delle competenze acquisite durante il bootcamp di sei mesi. Si tratta di una replica "didattica" di AirBnb, focalizzata principalmente sulle funzionalità della web app, mentre l\'aspetto grafico èstato considerato, in questo caso, di secondo piano.',
    secondPar:
      "All'arrivo sulla homepage, sviluppata con Vue, gli utenti trovano un elenco di tutti gli appartamenti presenti nel database (creato da noi), ottenuti tramite una chiamata API (anch'essa creata da noi) Gli appartamenti sponsorizzati sono visualizzati in cima, seguiti dagli altri. Grazie alla barra di ricerca, gli utenti possono trovare gli appartamenti in base all'indirizzo e accedere alla pagina di ricerca avanzata. Qui possono visualizzare gli appartamenti entro un raggio di 20 km dalla posizione cercata e filtrarli secondo le proprie esigenze. Ogni scheda appartamento include dettagli aggiuntivi e una mappa del quartiere, oltre a un modulo per contattare il proprietario.",
    thirdPar:
      "Il back-office è dedicato ai proprietari ed è stato sviluppato con Laravel. Gli utenti possono registrarsi, effettuare il login e accedere al pannello di controllo dei propri appartamenti. Possono aggiungere, modificare o eliminare appartamenti esistenti. Inoltre, è possibile promuovere gli appartamenti attraverso vari piani di promozione. Il sistema di pagamento è simulato, in questo caso, grazie alla piattaforma Braintree di PayPal. Gli appartamenti promossi vengono evidenziati nella homepage per il periodo stabilito dal piano di promozione selezionato.",
  },
};

const projectsData = [
  {
    title: "Game Hoax",
    technologies: "HTML, CSS (scss), BOOTSTRAP, VUEJS",
    description: {
      firstPar:
        "Game Hoax è stato il mio progetto conclusivo del modulo front-end. Ho avuto l'opportunità di replicare autonomamente la parte grafica (e non solo) di un sito web dedicato alla vendita di videogiochi e accessori videoludici, partendo da un’immagine statica fornitaci dai tutor.",
      secondPar:
        "Il progetto è stato realizzato utilizzando Vue.js, sfruttando al massimo la sua capacità di riuso dei componenti. A seconda della sezione del sito, i componenti ricevevano le informazioni pertinenti da visualizzare.",
      thirdPar:
        "Oltre a implementare vari effetti in hover e posizionare elementi in modo sovrapposto per creare un'esperienza visiva accattivante, sono inclusi tre caroselli e uno slider temporizzato, programmati utilizzando JavaScript vanilla.",
    },
    link: "https://github.com/umbertofaenza/proj-html-vuejs",
  },
  {
    title: "Spotify Web Replica",
    technologies: "HTML, CSS",
    description: {
      firstPar:
        "Questo progetto consiste nella replica grafica della ben nota web app di Spotify. È stato realizzato utilizzando esclusivamente HTML e CSS, il che lo ha reso un esercizio pratico estremamente utile per consolidare le mie competenze nella creazione di layout e nel posizionamento degli elementi, senza dipendere da framework esterni.",
      secondPar:
        "Come evidenziato nel video, la web app è completamente responsive, garantendo un'ottima esperienza d'uso su dispositivi di tutte le dimensioni, compresi gli smartphone. Poiché non sono stati impiegati framework, la gestione della responsività è stata interamente realizzata attraverso CSS, sfruttando le media queries.",
    },
    link: "https://github.com/umbertofaenza/html-css-spotifyweb",
  },
  {
    title: "Boolflix",
    technologies: "HTML, CSS (scss), BOOTSTRAP, VUEJS + API (esterna)",
    description: {
      firstPar:
        "Boolflix è stato uno dei progetti chiave che mi ha introdotto alle API esterne. Questa replica semplificata del sistema di ricerca di Netflix funziona tramite chiamate Axios all'API fornita da The Movie Database (TMDB).",
      secondPar:
        "La web app è stata sviluppata con Vue: i dati ricevuti dall'API sono memorizzati in uno store e poi richiamati dai vari componenti presenti sulla piattaforma. Un semplice effetto hover sulle schede dei film consente di visualizzare alcuni dettagli relativi alla pellicola selezionata.",
    },
    link: "https://github.com/umbertofaenza/vite-boolflix",
  },
  {
    title: "Boolzapp",
    technologies: "HTML, CSS, BOOTSTRAP, VUEJS",
    description: {
      firstPar:
        "Nonostante poi la complessità sia cresciuta durante il corso, Boolzapp è stato sicuramente uno dei progetti più entusiasmanti. Per la prima volta, ho avuto l'opportunità di popolare la mia applicazione utilizzando informazioni provenienti da una sorta di database, rappresentato da un file JavaScript contenente un array di oggetti.",
      secondPar:
        "Inoltre, sempre grazie a JavaScript, ho implementato diverse funzionalità, tra cui l'eliminazione dei messaggi esistenti, la scrittura e l'invio di nuovi messaggi, e la ricezione di una risposta preimpostata. Questo progetto mi ha offerto un'esperienza significativa nell'implementazione di logiche di interazione dinamiche all'interno di un'applicazione web.",
    },
    link: "https://github.com/umbertofaenza/vue-boolzapp",
  },
  {
    title: "Discord",
    technologies: "HTML, CSS",
    description: {
      firstPar:
        "Durante questo progetto, mi sono impegnato a replicare la parte grafica del sito di Discord utilizzando HTML e CSS. Dopo un'attenta analisi dell'immagine di riferimento, ho strutturato il layout del sito utilizzando tag semantici per identificare le diverse sezioni e gli elementi principali.",
      secondPar:
        'Grazie a selettori CSS cosiddetti "di utilità", ho simulato il comportamento di una griglia come quella offerta da frameworks come Bootstrap. Successivamente, ho applicato le regole CSS per stilizzare gli elementi, cercando di ricreare fedelmente colori, dimensioni e stili presenti nell\'immagine originale.',
    },
    link: "https://github.com/umbertofaenza/htmlcss-discord",
  },
];

export { latestProjectData, projectsData };
