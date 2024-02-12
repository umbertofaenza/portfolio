<script></script>

<template>
  <div class="container">
    <section id="contacts" class="row animate__animated animate__fadeIn">
      <h2 class="section-title">
        Contatti
        <span class="full-stop">.</span>
      </h2>
      <p>Vuoi metterti in contatto con me?</p>

      <!-- email -->
      <div class="contacts-email col-12">
        Scrivimi un'email:
        <span class="email-span animate__animated animate__fadeInLeft"
          >umberto.faenza@gmail.com</span
        >
      </div>

      <!-- socials -->
      <div class="contacts-social-links col-12">
        Oppure trovami su:
        <br />
        <p class="animate__animated animate__fadeInLeft">
          <a href="https://www.linkedin.com/in/umbertofaenza/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" class="fw-icon" />
          </a>
          <a href="https://github.com/umbertofaenza" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github" class="fw-icon" />
          </a>
        </p>
      </div>

      <!-- other info -->
      <div class="other-info col-12">
        Inoltre, ti ricordo che puoi trovare altre informazioni sul mio
        <a href="docs/UmbertoFaenza_CV.pdf" download
          ><span class="secondary-clr-text">CV</span></a
        >
        o sulla pagina
        <router-link :to="{ name: 'about' }"
          ><span class="secondary-clr-text">Chi sono</span></router-link
        >.
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/_partials/variables.scss";

.container {
  margin-top: 1rem;
  margin-bottom: 3rem;
  font-size: 1.1rem;
}

#contacts {
  width: 100%;
  color: #eee;
}

.section-title {
  color: $secondary-color;
}

.section-title .full-stop {
  color: #eee;
  margin-left: -0.5rem;
}

.contacts-email,
.contacts-social-links {
  color: $secondary-color;
  padding-top: 2rem;
}

.contacts-email {
  margin-top: 3rem;
}

.email-span {
  display: block;
  color: #eee;
  font-size: 1.8rem;
}

.contacts-social-links {
  margin-bottom: 3rem;
}

.contacts-social-links .fw-icon {
  font-size: 2.5rem;
  margin: 1rem 2rem 0 0;
  color: #eee;
}

.other-info {
  margin-top: 5rem;
}

.fw-icon:hover {
  transform: scale(1.1);
}

.secondary-clr-text {
  color: $secondary-color;
}

@media only screen and (max-width: 430px) {
  .email-span {
    font-size: 1.7rem;
  }
}

@media only screen and (max-width: 410px) {
  .email-span {
    font-size: 1.6rem;
  }
}

@media only screen and (max-width: 385px) {
  .email-span {
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 360px) {
  .email-span {
    font-size: 1.4rem;
  }
}

@media only screen and (max-width: 340px) {
  .email-span {
    font-size: 1.3rem;
  }
}
</style>
