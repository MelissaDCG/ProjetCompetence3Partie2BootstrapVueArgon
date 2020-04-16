<template>
  <main class="row mb-4" role="main">
    <div class="col-lg-3 col-xl-2">
        <menuDesktop class="d-none d-lg-flex"></menuDesktop>
    </div> 
    <div class="col-lg-9 col-xl-10 mb-5 mb-lg-0">
      <carousel></carousel>
      <menuImages class="d-lg-none"></menuImages>
      <div>
        <router-link to="/look" class="nav-item">
          <h2 class="texteNoir text-center mt-0 mb-1">Achetez le look</h2>
            <img class="img-fluid px-3" src="img/look/look.png" alt="Looks"/>
        </router-link>   
        <h2 class="texteNoir text-center mt-5 mr-4 mb-0">Tendances</h2>
        <div class="d-flex flew-row justify-content-center align-items-center">
          <b-embed  type="iframe"
                    aspect="16by9"
                    src="https://www.youtube.com/embed/2lLhd78Ryls" 
                    allowfullscreen
                    class="video">
          </b-embed>
        </div>
      </div>  
    </div>   
  </main>
</template>
<script>
import MenuDesktop from "../components/MenuDesktop";
import Carousel from "./components/Carousel";
import MenuImages from "../components/MenuImages";
// import BEmbed from "bootstrap-vue/esm/components/embed/embed";

export default {
  name: "home",
  components: {
    MenuDesktop,
    Carousel,
    MenuImages
    // BEmbed
  }
};
</script>

