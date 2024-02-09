<script>
import { router } from "./router";

import Navbar from "./components/partials/Navbar.vue";

export default {
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  components: {
    router,
    Navbar,
  },
};

// toggle 'scroll to top' based on scroll position
window.addEventListener("scroll", (e) => {
  const btnScrollToTop = document.getElementById("scroll-to-top-btn");
  btnScrollToTop.style.display = window.scrollY > 20 ? "flex" : "none";
});
</script>

<template>
  <!--* scroll up button -->
  <div
    @click="scrollToTop()"
    class="scroll-up d-lg-none"
    id="scroll-to-top-btn"
  >
    <font-awesome-icon icon="fa-solid fa-chevron-up" />
  </div>

  <Navbar />
  <router-view></router-view>
</template>

<style lang="scss">
@import "./scss/_partials/variables.scss";

.scroll-up {
  background-color: $secondary-color;
  color: $primary-color;
  width: 2rem;
  aspect-ratio: 1;
  border-radius: 50%;

  display: none;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 2rem;
  right: 0.5rem;
  cursor: pointer;
  z-index: 2;

  opacity: 50%;
}
</style>
