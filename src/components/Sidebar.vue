<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="">
      <b-navbar-toggle v-b-toggle.sidebar-1 style="color:black" target="">☰</b-navbar-toggle>
      <b-navbar-brand href="/home"> <img class= "img-fluid changeTailleLogo" src="img/brand/logo_pet.png"></b-navbar-brand>      
      <b-sidebar id="sidebar-1" title="Bonita" shadow class='d-lg-none w-100' bg-variant="menu">
        <div>
          <ul class="navbar-nav navbar-nav-hover align-items-lg-center d-lg-none">
            <base-dropdown-mobil tag="li" class="nav-item bg-menu">
              <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                <span class="nav-link-inner--text menuSidebar">Vêtements</span>
              </a>
              <router-link to="/tout" class="dropdown-item submenuSidebar">Voir tout</router-link>
              <router-link to="/tops" class="dropdown-item submenuSidebar">Tops</router-link>
              <router-link to="/robes" class="dropdown-item submenuSidebar">Robes</router-link>
              <router-link to="/pullsgilets" class="dropdown-item submenuSidebar">Pulls & Gilets </router-link>
              <router-link to="/pantalons" class="dropdown-item submenuSidebar">Pantalons</router-link>
              <router-link to="/jupesshorts" class="dropdown-item submenuSidebar">Jupes & Shorts </router-link>
            </base-dropdown-mobil>
            <base-dropdown-mobil tag="li" class="nav-item bg-menu">
              <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                <span class="nav-link-inner--text menuSidebar">Chaussures</span>
              </a>
              <router-link to="/tout" class="dropdown-item submenuSidebar">Voir tout</router-link>
              <router-link to="/sandals" class="dropdown-item submenuSidebar">Sandals</router-link>
              <router-link to="/sneaker" class="dropdown-item submenuSidebar">Sneakers</router-link>
              <router-link to="/bottines" class="dropdown-item submenuSidebar">Bottines</router-link>
            </base-dropdown-mobil>
            <base-dropdown-mobil tag="li" class="nav-item bg-menu">
              <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                <span class="nav-link-inner--text menuSidebar">Accessoires</span>
              </a>
              <router-link to="/tout" class="dropdown-item submenuSidebar">Voir tout</router-link>
              <router-link to="/sacsportefeilles" class="dropdown-item submenuSidebar">Sacs & Portefeuilles</router-link>
              <router-link to="/bijoux" class="dropdown-item submenuSidebar">Bijoux</router-link>
              <router-link to="/ceintures" class="dropdown-item submenuSidebar">Ceintures</router-link>
            </base-dropdown-mobil>
            <base-dropdown-mobil tag="li" class="nav-item bg-menu">
              <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                <span class="nav-link-inner--text menuSidebar">Maquillage</span>
              </a>
              <router-link to="/tout" class="dropdown-item submenuSidebar">Voir tout</router-link>
              <router-link to="/yeuxsourcils" class="dropdown-item submenuSidebar">Yeux & Sourcils</router-link>
              <router-link to="/levres" class="dropdown-item submenuSidebar">Lèvres</router-link>
            </base-dropdown-mobil>
            <b-navbar-nav>
              <b-nav-form class="pl-3">
                <b-form-input size="sm" class="mr-sm-2" placeholder="Ex. Pantalon"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 btnMenuMobil" type="submit">Recherche</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </ul>
        </div>
      </b-sidebar>
    </b-navbar>
  </div>
</template>
<script> 
import { BSidebar } from "bootstrap-vue/esm/components/sidebar";
import { BImg } from "bootstrap-vue/esm/components/image";
import { BButton } from "bootstrap-vue/esm/components/button";
import { BNavbar} from "bootstrap-vue/esm/components/navbar";  
import { BNavForm } from "bootstrap-vue/esm/components/nav"; 
import { BFormInput } from "bootstrap-vue/esm/components/form-input"; 
import { BDropdownItem } from "bootstrap-vue/esm/components/dropdown"; 
import BaseDropdownMobil from "@/components/BaseDropdownMobil";

export default {
  components: {
    BSidebar,
    BImg,
    BButton,
    BNavbar,
    BaseDropdownMobil,
    BNavForm,
    BFormInput
  }
}
</script>