<script>
import { latestProjectData } from "../../data/data";
import { projectsData } from "../../data/data";

export default {
  data() {
    return {
      latestProjectData,
      projectsData,
    };
  },
};
</script>

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
            {{ latestProjectData.title }}
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
                      src="../../../img/boolbnb_frontoffice.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="carousel-caption d-none d-md-block mb-5">
                    <h5 class="text-dark"></h5>
                  </div>
                </div>
                <!-- item -->
                <div class="carousel-item">
                  <!-- video -->
                  <video controls muted>
                    <source
                      src="../../../img/boolbnb_backoffice.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div class="carousel-caption d-none d-md-block mb-5">
                    <h5 class="text-dark"></h5>
                  </div>
                </div>
              </div>

              <!-- prev, next controls -->
              <button
                class="carousel-control-prev h-50 m-auto"
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
                class="carousel-control-next h-50 m-auto"
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
                {{ latestProjectData.technologies }}
              </p>
            </div>

            <!--* description -->
            <div class="latest-project-description">
              <h6>Descrizione</h6>
              <p>
                {{ latestProjectData.description.firstPar }}
                <br />
                <br class="d-sm-none" />
                <span class="d-sm-none"
                  >NB. Più info nella versione desktop del sito</span
                >
              </p>

              <p class="d-none d-sm-block">
                <span class="desc-p-title">Front-office</span>
                <br />
                {{ latestProjectData.description.secondPar }}
              </p>

              <p class="d-none d-sm-block">
                <span class="desc-p-title">Back-office</span>
                <br />
                {{ latestProjectData.description.thirdPar }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!--# projects grid -->
      <div class="row g-5">
        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">
              {{ projectsData[0].title }}
            </h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/gamehoax.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>
                {{ projectsData[0].technologies }}
              </p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                {{ projectsData[0].description.firstPar }}
                <br />
                <br />
                {{ projectsData[0].description.secondPar }}
                <br />
                <br />
                {{ projectsData[0].description.thirdPar }}
              </p>
            </div>

            <!-- link -->
            <div class="btn link">
              <a :href="projectsData[0].link" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" class="fw-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">
              {{ projectsData[1].title }}
            </h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/spotifyweb.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>
                {{ projectsData[1].technologies }}
              </p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                {{ projectsData[1].description.firstPar }}
                <br />
                <br />
                {{ projectsData[1].description.secondPar }}
              </p>
            </div>

            <!-- link -->
            <div class="btn link">
              <a :href="projectsData[1].link" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" class="fw-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">
              {{ projectsData[2].title }}
            </h5>

            <!-- media -->
            <video
              height="400"
              class="w-100"
              poster="../../../img/starwars_thumbnail.png"
              controls
              muted
            >
              <source src="../../../img/boolflix.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>
                {{ projectsData[2].technologies }}
              </p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                {{ projectsData[2].description.firstPar }}
                <br />
                <br />
                {{ projectsData[2].description.secondPar }}
              </p>
            </div>

            <!-- link -->
            <div class="btn link">
              <a :href="projectsData[2].link" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" class="fw-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">
              {{ projectsData[3].title }}
            </h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/boolzapp.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>
                {{ projectsData[3].technologies }}
              </p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                {{ projectsData[3].description.firstPar }}
                <br />
                <br />
                {{ projectsData[3].description.secondPar }}
              </p>
            </div>

            <!-- link -->
            <div class="btn link">
              <a :href="projectsData[3].link" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" class="fw-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-xl-6">
          <div class="card h-100">
            <!-- title -->
            <h5 class="project-title">
              {{ projectsData[4].title }}
            </h5>

            <!-- media -->
            <video height="400" class="w-100" controls muted>
              <source src="../../../img/discord.mp4" type="video/mp4" />
            </video>

            <!-- technologies -->
            <div class="technologies">
              <h6>Tecnologie</h6>
              <p>
                {{ projectsData[4].technologies }}
              </p>
            </div>

            <!-- description -->
            <div class="description">
              <h6>Descrizione</h6>
              <p>
                {{ projectsData[4].description.firstPar }}
                <br />
                <br />
                {{ projectsData[4].description.secondPar }}
              </p>
            </div>

            <!-- link -->
            <div class="btn link">
              <a :href="projectsData[4].link" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" class="fw-icon" />
                GitHub
              </a>
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

.fw-icon {
  font-size: 1.5rem;
}

.btn.link {
  color: $primary-color;
  width: max-content;
  border: 1.5px solid $primary-color;
  padding: 0.5rem;
  border-radius: 2rem;

  margin-top: auto;
}

.btn.link:hover {
  border: 1.5px solid $primary-color;
  transform: scale(1.05);
}
</style>
