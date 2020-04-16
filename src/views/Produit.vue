<template>
    <main class="row mb-4" role="main">
        <div class="col-lg-3 col-xl-2">
            <menuDesktop class="d-none d-lg-flex"></menuDesktop>
        </div> 
        <div class="col-lg-9 col-xl-10 mt-3 mb-5">
            <div class="d-flex flex-column flex-lg-row">
                <div class="col-lg-8 d-flex justify-content-center align-items-center">
                    <b-carousel id="carousel1"
                                controls
                                indicators
                                :interval="3000">
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/produit/p001a.png"></b-carousel-slide>
                        <b-carousel-slide img-src="img/produit/p001b.png"></b-carousel-slide>
                        <b-carousel-slide img-src="img/produit/p001c.png"></b-carousel-slide>
                    </b-carousel>
                </div>
            
                <div class="container col-8 col-lg-4 p-0 d-flex justify-content-center justify-content-lg-start">
                    <div>
                        <span class="descriptionProduit">Polka Dot Rufle Top</span> <br />
                        <span class="font-weight-bold prix">13 €</span><br/>
                        <div class="mt-2 w-100">
                            <b-button variant="outline-menu"><b-icon icon="heart"></b-icon></b-button>
                            <b-button variant="outline-menu"><b-icon icon="bag"></b-icon></b-button>
                        </div>    
                        <div class="mt-3">
                            <p class="font-weight-bold mt-2">Taille:</p>
                            <b-button-group>
                                <b-button variant="menu">XS</b-button>
                                <b-button variant="menu">S</b-button>
                                <b-button variant="menu">M</b-button>
                                <b-button variant="menu">L</b-button>
                                <b-button variant="menu">XL</b-button>
                            </b-button-group>
                        </div>
                        <p class="font-weight-bold mt-2">Descripcion</p> 
                        <p>Style:	        Décontracté<br />
                        Couleur:	        Noir<br />
                        Type de motif:	Polka Dot<br />
                        Encolure:        Bretelles Spaghetti<br />
                        Saison:	        Été<br />
                        Composition: 	35% Coton, 65% Polyester<br />
                        Materiel:	    Polyester</p>
                    </div>     
                </div>    
            </div>                    
        </div>
    </main>        
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import MenuDesktop from "../components/MenuDesktop";

export default {
  components: {
    MenuDesktop,
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>
