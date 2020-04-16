<template>
    <div class="container">
        <div class="row">
            <div class="col-6 col-md-3 mb-4">
                <div class="px-4">
                    <router-link to="/vetements" class="nav-item">
                        <img v-lazy="'img/menu/vetementsCarre.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 100px;">
                        <div class="pt-2 text-center">
                            <h5 class="title">Vêtements</h5>                               
                        </div>    
                    </router-link>   
                </div>
            </div>
            <div class="col-6 col-md-3 mb-4">
                <div class="px-4">
                    <router-link to="/chaussures" class="nav-item">
                        <img v-lazy="'img/menu/chaussuresCarre.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 100px;">
                        <div class="pt-2 text-center">
                            <h5 class="title">Chaussures</h5>                               
                        </div>    
                    </router-link>   
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="px-4">
                    <router-link to="/accesoires" class="nav-item">
                        <img v-lazy="'img/menu/accessoiresCarre.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 100px;">
                        <div class="pt-2 text-center">
                            <h5 class="title">Accessoires</h5>                               
                        </div>    
                    </router-link>   
                </div>
            </div>
            <div class="col-6 col-md-3">
                <div class="px-4">
                    <router-link to="/maquillage" class="nav-item">
                        <img v-lazy="'img/menu/maquillageCarre.jpg'"
                             class="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                             style="width: 100px;">
                        <div class="pt-2 text-center">
                            <h5 class="title">Maquillage</h5>                               
                        </div>    
                    </router-link>   
                </div>
            </div>
        </div>
    </div>
</template>