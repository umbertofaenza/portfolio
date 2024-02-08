<script></script>

<template>
  <div class="container">
    <section id="about">
      <h2 class="section-title">
        Chi sono
        <span class="full-stop">.</span>
      </h2>

      <div class="paragraphs">
        <!-- Paragraph 1 -->
        <div class="par-1 row">
          <div class="col-12 col-lg-3" id="about-img">
            <img
              src="../../../img/foto_profilo.jpg"
              alt="umberto faenza, bianco e nero"
              class="bw-img"
            />
          </div>

          <div class="col-12 col-lg-9">
            <p>
              Mi chiamo <span class="secondary-clr-text">Umberto Faenza</span> e
              sono un Junior Web Developer.
              <br />
              Vengo da Battipaglia, nella provincia di Salerno e sì, ho
              un'ossessione per le mozzarelle.
              <br />
              <br />
              Da qualche mese vivo a Napoli, ma ho passato gli ultimi 10 anni a
              Londra. Nella metropoli inglese ho fatto molte cose diverse,
              partendo dalla ristorazione (un classico), passando per
              l'università, fino ad arrivare a content writing ed un po' di SEO.
              Il codice però continuava ad entrare periodicamente nella mia
              vita. Ogni tot, attratto da questa passione, mi ritrovavo a fare
              qualche piccolo corso online. Eppure nella mia testa mi chiedevo
              sempre: "chissà come sarebbe farlo seriamente".
            </p>
          </div>
        </div>

        <!-- Paragraph 2 -->
        <div class="par-2 row">
          <div class="col-12">
            <p>
              Ed eccoci qui. Tornato in Italia nel 2023, ho deciso di seguire
              questa strada fino in fondo. Mi sono iscritto a Boolean, e ho
              intrapreso il loro percorso di 6 mesi full-time per diventare un
              Junior Web Developer. Grazie a questo corso, ho conosciuto delle
              persone incredibili con cui sono ancora in contatto, ma
              soprattutto ho imparato davvero tanto, merito dell'approccio super
              pratico del bootcamp.
              <br />
              Ed ora? Ora sono alla ricerca della mia prima esperienza
              lavorativa, così che io possa mettere in pratica ciò che ho
              imparato e continuare a crescere ed imparare.
            </p>
          </div>
        </div>

        <!-- Paragraph 3 -->
        <div class="par-3 row">
          <div class="col-12">
            <p>
              Per altre info, trovi il mio indirizzo email e tutti i link utili
              nella pagina
              <router-link :to="{ name: 'contacts' }"
                ><span class="secondary-clr-text">Contatti</span></router-link
              >
              ed il mio CV da scaricare nella
              <router-link :to="{ name: 'home' }"
                ><span class="secondary-clr-text">Homepage.</span></router-link
              >
              <br />
              Ciao!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_partials/variables.scss";

#about {
  margin-top: 1rem;
  color: #eee;
}

.section-title {
  color: $secondary-color;
}

.section-title .full-stop {
  color: #eee;
  margin-left: -0.5rem;
}

.row {
  margin: 1rem 0;
}

img {
  max-width: 100%;
  border-radius: 2rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: right;
}

p {
  font-size: 1.1rem;
  line-height: 2rem;
}

.secondary-clr-text {
  color: $secondary-color;
}

@media only screen and (max-width: 991px) {
  p {
    line-height: normal;
  }

  img {
    max-width: 300px;
    margin-bottom: 1rem;
  }
}

@media only screen and (max-width: 401px) {
  img {
    max-width: 250px;
  }
}
</style>
