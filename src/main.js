import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'tw-elements';


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



/* add icons to the library */

library.add(faPhone, faEnvelope, faLocationDot, faHeart)

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");