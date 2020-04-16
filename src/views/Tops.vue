<template>
  <main class="row mb-4" role="main">
    <div class="col-lg-3 col-xl-2">
        <menuDesktop class="d-none d-lg-flex"></menuDesktop>
    </div> 
    <div class="col-lg-9 col-xl-10 mb-5">
        <h3 class="text-center mt-3">Tops</h3>
        <div class= "container">    
            <div class="row">
                <div v-for="(item, index) in items" v-bind:key="index" class="col-6 col-sm-4 col-lg-3">
                    <router-link to="/produit">
                        <b-card title="" v-bind:img-src= "'img/tops/'+item.img" img-alt="Image" class="mb-3" img-top>
                            <b-card-text><small class="text-muted"> {{ item.nom }} </small>
                            </b-card-text>
                            <b-card-text class="font-weight-bold text-menu"> {{ item.prix }} <span> €</span>
                            </b-card-text>
                        </b-card>  
                    </router-link>      
                </div> 
            </div>
        </div>       
    </div>
  </main>
</template>
<script>
import MenuDesktop from "../components/MenuDesktop";

export default {
    name: "nouveautes",
    components: {
        MenuDesktop
    }
    ,
    data() {
        return {
            items: [
                {
                    img: "t014.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }, 
                {
                    img: "t001.png",
                    nom: "Topcrop jaune",
                    prix: 12
                },
                {
                    img: "t002.png",
                    nom: "Topcrop jaune",
                    prix: 12
                },
                {
                    img: "t003.png",
                    nom: "Topcrop jaune",
                    prix: 12
                },
                {
                    img: "t004.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }, 
                {
                    img: "t005.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }, 
                {
                    img: "t006.png",
                    nom: "Topcrop blanc",
                    prix: 10
                },
                {
                    img: "t007.png",
                    nom: "Topcrop jaune",
                    prix: 12
                },
                {
                    img: "t008.png",
                    nom: "Topcrop jaune",
                    prix: 12
                },
                {
                    img: "t009.png",
                    nom: "Topcrop jaune",
                    prix: 12
                },
                {
                    img: "t010.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }, 
                {
                    img: "t011.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }, 
                {
                    img: "t012.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }, 
                {
                    img: "t013.png",
                    nom: "Topcrop jaune",
                    prix: 12
                }
            ]
        }
    } 
};
</script>

