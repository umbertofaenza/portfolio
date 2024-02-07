<script>
export default {
  methods: {
    closeMenu() {
      const navbarNav = document.getElementById("navbarNav");
      navbarNav.classList.remove("show");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <!--* email -->
      <a
        class="header-email navbar-brand"
        href="mailto:umberto.faenza@gmail.com"
      >
        <font-awesome-icon
          icon="fa-regular fa-paper-plane"
          size="lg"
          class="email-icon"
        />
        <span class="d-none d-md-block">umberto.faenza@gmail.com</span>
      </a>

      <!--* collapsed navbar toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!--* nav links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" :onclick="closeMenu">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>

          <li class="nav-item" :onclick="closeMenu">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'projects' }"
              >Progetti</router-link
            >
          </li>

          <li class="nav-item" :onclick="closeMenu">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'about' }"
              >Chi sono</router-link
            >
          </li>

          <li class="nav-item" :onclick="closeMenu">
            <router-link
              class="nav-link"
              aria-current="page"
              :to="{ name: 'contacts' }"
              >Contatti</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
