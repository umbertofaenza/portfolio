<script>
import { router } from "./router";

import Navbar from "./components/partials/Navbar.vue";

export default {
  components: {
    router,
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style lang="scss"></style>
