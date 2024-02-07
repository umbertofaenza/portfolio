<script>
import Navbar from "../partials/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<template>
  <!-- main -->
  <main>
    <!--# jumbo -->
    <div id="jumbo">
      <div class="container">
        <div class="jumbo row">
          <!--* jumbo text -->
          <div class="col-12">
            <div id="jumbo-text">
              <!-- text -->
              <span class="jumbo-hello">Ciao, mi chiamo</span>
              <!-- name -->
              <h2 class="name">umberto faenza</h2>
              <!-- text -->
              <span class="jumbo-hello">e sono un</span>
              <!-- role -->
              <h1 class="role">
                junior web developer
                <span class="full-stop">.</span>
              </h1>
            </div>
          </div>

          <!--* jumbo buttons -->
          <div class="col-12">
            <div id="jumbo-buttons">
              <div>
                <!-- cv download -->
                <a
                  class="btn jumbo-btn"
                  href="../../../img/UmbertoFaenza_CV.pdf"
                  download
                >
                  <font-awesome-icon
                    icon="fa-regular fa-circle-down"
                    class="fa-icon"
                  />
                  Il mio CV
                </a>
              </div>

              <div>
                <!-- link to projects -->
                <router-link class="btn jumbo-btn" :to="{ name: 'projects' }">
                  <font-awesome-icon
                    icon="fa-solid fa-list-check"
                    class="fa-icon"
                  />
                  I miei progetti
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "../../scss/_partials/variables.scss";

//* JUMBO

#jumbo {
  width: 100%;
  height: calc(100vh - 154px);
}

#jumbo > .container {
  height: 100%;

  display: flex;
  align-items: center;
}

#jumbo-text {
  padding: 2rem 0;
}

.jumbo-hello {
  font-size: 2rem;
  font-weight: 300;
  color: $secondary-color;
}

.name,
.role {
  font-size: 4rem;
  color: #eee;

  width: fit-content;
}

.full-stop {
  color: $secondary-color;
  margin-left: -1rem;
}

.jumbo-btn {
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: #eee;

  color: $primary-color;
  font-weight: 500;
  font-size: 1.2rem;

  margin: 1rem 1rem 1rem 0;
}

.jumbo-btn:hover {
  background-color: $secondary-color;
  color: $primary-color;
}

#jumbo-buttons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

#jumbo-buttons .fa-icon {
  margin-right: 0.5rem;
}

#social-links {
  margin: 3rem 0 3rem 0.3rem;
  color: #eee;
  font-size: 1.2rem;

  display: flex;
}

#social-links li {
  margin-right: 2rem;
}

@media only screen and (max-width: 399px) {
  #jumbo-text {
    font-size: 10%;
  }
}

@media only screen and (max-width: 399px) {
  .name,
  .role {
    font-size: 3.5rem;
  }
}

@media only screen and (max-width: 319px) {
  .name,
  .role {
    font-size: 3.2rem;
  }
}

@media only screen and (max-width: 345px) {
}
</style>
