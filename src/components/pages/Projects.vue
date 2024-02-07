<script></script>

<template>
  <div class="container">
    <section id="projects row">
      <!--# projects header -->
      <div id="projects-header" class="col-12">
        <h2 class="section-title">Progetti <span class="full-stop">.</span></h2>

        <p>
          Ho selezionato alcuni dei progetti che ho realizzato negli ultimi sei
          mesi, ma puoi trovarne altri sul mio Github.
          <br />
          Spoiler: il mio ultimo progetto in realtà è questo portfolio!
        </p>
      </div>

      <!--# latest project -->
      <section id="latest-project-section" class="col-12">
        <!-- project -->
        <div id="latest-project-card" class="card mb-5">
          <!--* title -->
          <h5 class="latest-project-title">
            BoolBnb - Replica didattica di AirBnb (Progetto finale Boolean)
          </h5>

          <!--* media -->
          <div class="latest-project-media">
            <div id="carouselExampleCaptions" class="carousel slide">
              <!-- carousel inner -->
              <div class="carousel-inner">
                <!-- item -->
                <div class="carousel-item active">
                  <!-- video -->
                  <video controls>
                    <source
                      src="../../../img/boolbnb_frontend.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="carousel-caption d-none d-md-block mb-5">
                    <h5 class="text-dark">BoolBnb - "Front office"</h5>
                  </div>
                </div>
                <!-- item -->
                <div class="carousel-item">
                  <!-- video -->
                  <video controls>
                    <source
                      src="../../../img/boolbnb_backend.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="carousel-caption d-none d-md-block mb-5">
                    <h5 class="text-dark">BoolBnb - "Back office"</h5>
                  </div>
                </div>
              </div>

              <!-- prev, next controls -->
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div class="latest-project-text">
            <!--* technologies -->
            <div class="latest-project-technologies">
              <h6>Tecnologie</h6>
              <p>
                HTML, CSS (scss), BOOTSTRAP, VUEJS, LARAVEL, MYSQL + API
                (interna)
              </p>
            </div>

            <!--* description -->
            <div class="latest-project-description">
              <h6>Descrizione</h6>
              <p>
                BoolBnb è stato il progetto finale del mio percorso con Boolean.
                È stato realizzato in team e rappresenta la somma delle
                competenze acquisite durante il bootcamp di sei mesi. Si tratta
                di una replica "didattica" di AirBnb, focalizzata principalmente
                sulle funzionalità della web app, mentre l'aspetto grafico è
                stato considerato, in questo caso, di secondo piano.
                <br />
                <br />
                <span class="desc-p-title">Front-office</span>
                <br />
                All'arrivo sulla homepage, sviluppata con Vue, gli utenti
                trovano un elenco di tutti gli appartamenti presenti nel
                database (creato da noi), ottenuti tramite una chiamata API
                (anch'essa creata da noi). Gli appartamenti sponsorizzati sono
                visualizzati in cima, seguiti dagli altri. Grazie alla barra di
                ricerca, gli utenti possono trovare gli appartamenti in base
                all'indirizzo e accedere alla pagina di ricerca avanzata. Qui
                possono visualizzare gli appartamenti entro un raggio di 20 km
                dalla posizione cercata e filtrarli secondo le proprie esigenze.
                Ogni scheda appartamento include dettagli aggiuntivi e una mappa
                del quartiere, oltre a un modulo per contattare il proprietario.
                <br />
                <br />
                <span class="desc-p-title">Back-office</span>
                <br />
                Il back-office è dedicato ai proprietari ed è stato sviluppato
                con Laravel. Gli utenti possono registrarsi, effettuare il login
                e accedere al pannello di controllo dei propri appartamenti.
                Possono aggiungere, modificare o eliminare appartamenti
                esistenti. Inoltre, è possibile promuovere gli appartamenti
                attraverso vari piani di promozione. Il sistema di pagamento è
                simulato, in questo caso, grazie alla piattaforma Braintree di
                PayPal. Gli appartamenti promossi vengono evidenziati nella
                homepage per il periodo stabilito dal piano di promozione
                selezionato.
              </p>
            </div>

            <!--* links -->
            <div class="project-links"></div>
          </div>
        </div>
      </section>

      <!--# projects grid -->
      <div class="row g-5">
        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">Game Hoax</h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/gamehoax.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>HTML, CSS (scss), BOOTSTRAP, VUEJS</p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                Game Hoax è stato il mio progetto conclusivo del modulo
                front-end. Ho avuto l'opportunità di replicare autonomamente la
                parte grafica (e non solo) di un sito web dedicato alla vendita
                di videogiochi e accessori videoludici, partendo da un’immagine
                statica fornitaci dai tutor.
                <br />
                <br />
                Il progetto è stato realizzato utilizzando Vue.js, sfruttando al
                massimo la sua capacità di riuso dei componenti. A seconda della
                sezione del sito, i componenti ricevevano le informazioni
                pertinenti da visualizzare.
                <br />
                <br />
                Oltre a implementare vari effetti in hover e posizionare
                elementi in modo sovrapposto per creare un'esperienza visiva
                accattivante, sono inclusi tre caroselli e uno slider
                temporizzato, programmati utilizzando JavaScript vanilla.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">Spotify Web Replica</h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/spotifyweb.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>HTML, CSS</p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                Questo progetto consiste nella replica grafica della ben nota
                web app di Spotify. È stato realizzato utilizzando
                esclusivamente HTML e CSS, il che lo ha reso un esercizio
                pratico estremamente utile per consolidare le mie competenze
                nella creazione di layout e nel posizionamento degli elementi,
                senza dipendere da framework esterni.
                <br />
                <br />
                Come evidenziato nel video, la web app è completamente
                responsive, garantendo un'ottima esperienza d'uso su dispositivi
                di tutte le dimensioni, compresi gli smartphone. Poiché non sono
                stati impiegati framework, la gestione della responsività è
                stata interamente realizzata attraverso CSS, sfruttando le media
                queries.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">Boolflix</h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/boolflix.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>HTML, CSS (scss), BOOTSTRAP, VUEJS + API (esterna)</p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                Boolflix è stato uno dei progetti chiave che mi ha introdotto
                alle API esterne. Questa replica semplificata del sistema di
                ricerca di Netflix funziona tramite chiamate Axios all'API
                fornita da The Movie Database (TMDB).
                <br />
                <br />
                La web app è stata sviluppata con Vue: i dati ricevuti dall'API
                sono memorizzati in uno store e poi richiamati dai vari
                componenti presenti sulla piattaforma. Un semplice effetto hover
                sulle schede dei film consente di visualizzare alcuni dettagli
                relativi alla pellicola selezionata.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">Boolzapp</h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/boolzapp.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>HTML, CSS, BOOTSTRAP, VUEJS</p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                Nonostante abbia affrontato progetti più complessi più in là
                durante il corso, Boolzapp è stato sicuramente uno dei più
                entusiasmanti. Per la prima volta, ho avuto l'opportunità di
                popolare la mia applicazione utilizzando informazioni
                provenienti da una sorta di database, rappresentato da un file
                JavaScript contenente un array di oggetti.
                <br />
                <br />
                Inoltre, sempre grazie a JavaScript, ho implementato diverse
                funzionalità, tra cui l'eliminazione dei messaggi esistenti, la
                scrittura e l'invio di nuovi messaggi, e persino la ricezione di
                una risposta preimpostata. Questo progetto mi ha offerto
                un'esperienza significativa nell'implementazione di logiche di
                interazione dinamiche all'interno di un'applicazione web.
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">Discord</h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/discord.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>HTML, CSS</p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                Durante questo progetto, mi sono impegnato a replicare la parte
                grafica del sito di Discord utilizzando HTML e CSS. Dopo
                un'attenta analisi dell'immagine di riferimento, ho strutturato
                il layout del sito utilizzando tag semantici per identificare le
                diverse sezioni e gli elementi principali.
                <br />
                <br />
                Grazie a selettori CSS cosiddetti “di utilità”, ho simulato il
                comportamento di una griglia come quella offerta da frameworks
                come Bootstrap. Successivamente, ho applicato le regole CSS per
                stilizzare gli elementi, cercando di ricreare fedelmente colori,
                dimensioni e stili presenti nell'immagine originale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_partials/variables.scss";

.container {
  margin-top: 1rem;
  margin-bottom: 3rem;
}

#projects-header {
  margin-bottom: 3rem;
  font-size: 1.1rem;

  color: #eee;
}

#projects-header .section-title {
  color: $secondary-color;
}

#projects-header .section-title .full-stop {
  color: #eee;
  margin-left: -0.5rem;
}

.latest-project-text {
  text-align: start;
}

.card {
  padding: 2rem;
  border: none;
  background-color: #eee;
  color: $primary-color;
}

.carousel-control-next-icon {
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");

  margin-left: auto;
}

.carousel-control-prev-icon {
  background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");

  margin-right: auto;
}

video {
  border-radius: 1rem;

  margin: 0 0 1rem 0;

  width: 100%;
  height: auto;
}

.latest-project-technologies h6,
.latest-project-description h6,
.technologies h6,
.description h6 {
  width: max-content;
  background-color: $secondary-color;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
}

.desc-p-title {
  font-style: italic;
  font-weight: 500;
}

.project-title,
.latest-project-title {
  padding-bottom: 1rem;
  border-bottom: 1px solid $primary-color;
}
</style>
