import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Register from "./views/Register.vue";
import Tops from "./views/Tops.vue";
import Home from "./views/Home.vue";
import Nouveautes from "./views/Nouveautes.vue";
import Produit from "./views/Produit.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Home,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/nouveautes",
      name: "nouveautes",
      components: {
        header: AppHeader,
        default: Nouveautes,
        footer: AppFooter
      }
    },
    {
      path: "/tops",
      name: "tops",
      components: {
        header: AppHeader,
        default: Tops,
        footer: AppFooter
      }
    },
    {
      path: "/produit",
      name: "produit",
      components: {
        header: AppHeader,
        default: Produit,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
