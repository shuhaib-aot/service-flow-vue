import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";
import authentication from "@/plugins/authentication";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(authentication);

Vue.$keycloak
  .init({
    onLoad: "login-required",
    checkLoginIframe: false,
  })
  .then(() => {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  });
