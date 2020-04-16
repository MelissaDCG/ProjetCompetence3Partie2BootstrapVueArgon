<template>
    <section class="section section-lg section-shaped overflow-hidden m-0 p-0 ">
        <div class="container-fluid p-0 m-0">
            <div class="col align-items-center justify-content-center">
                <div class="mb-5 align-items-center">
                    <router-link to="../nouveautes"><h1 class="text-dark text-center">Nouveautés</h1></router-link>
                    <div class="rounded shadow-lg overflow-hidden w-100">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/nouveautes/nouveautes.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/nouveautes/nouveautes2.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/nouveautes/nouveautes3.png"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
