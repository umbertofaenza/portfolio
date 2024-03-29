import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Projects from "../components/pages/Projects.vue";
import Contacts from "../components/pages/Contacts.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

export { router };
