import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";

//# scss
import "./scss/styles.scss";

//# bootstrap's js
import * as bootstrap from "bootstrap";

//# animate.style
import "../node_modules/animate.css/animate.css";

//# fontawesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faCircleDown } from "@fortawesome/free-regular-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faPaperPlane,
  faCircleDown,
  faListCheck,
  faLinkedin,
  faGithub,
  faInstagram,
  faChevronUp
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
