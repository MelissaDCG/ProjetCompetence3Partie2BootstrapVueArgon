<template>
    <div class="menuDesktop" >
        <b-nav vertical>
            <div class="row align-items-center justify-content-start flex-nowrap">
                <img v-lazy="'img/menu/vetementsCarre.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover mt-3 ml-4 mr-1"
                                style="width: 120px;">
                <b-nav-item-dropdown id="my-nav-dropdown"
                                    text="Vêtements"
                                    toggle-class="nav-link-custom texteNoir"
                                    left 
                                    class="ml-0 texteNoir">
                    <b-dropdown-item link-class="submenuDesktop">Voir tout</b-dropdown-item>
                    <b-dropdown-item to="/tops" link-class="submenuDesktop">Tops</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Robes</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Pulls & Gilets</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Pantalons</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Jupes & Shorts</b-dropdown-item>                    
                </b-nav-item-dropdown>
            </div>  
            <div class="row align-items-center justify-content-start flex-nowrap">
                <img v-lazy="'img/menu/chaussuresCarre.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover mt-3 ml-4 mr-1"
                                style="width: 120px;">
                <b-nav-item-dropdown id="my-nav-dropdown"
                                    text="Chaussures"
                                    toggle-class="nav-link-custom  texteNoir"
                                    left 
                                    class="ml-0 texteNoir">
                    <b-dropdown-item link-class="submenuDesktop">Voir tout</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Sandals</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Sneakers</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Bottines</b-dropdown-item>
                </b-nav-item-dropdown>
            </div>
            <div class="row align-items-center justify-content-start flex-nowrap">
                <img v-lazy="'img/menu/accessoiresCarre.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover mt-3 ml-4 mr-1"
                                style="width: 120px;">
                <b-nav-item-dropdown id="my-nav-dropdown"
                                    text="Accessoires"
                                    toggle-class="nav-link-custom  texteNoir"
                                    left 
                                    class="ml-0 texteNoir">
                    <b-dropdown-item link-class="submenuDesktop">Voir tout</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Sacs & Portefeuilles</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Bijoux</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Ceintures</b-dropdown-item>
                </b-nav-item-dropdown>
            </div>
            <div class="row align-items-center justify-content-start flex-nowrap">
                <img v-lazy="'img/menu/maquillageCarre.jpg'"
                                class="rounded-circle img-center img-fluid shadow shadow-lg--hover mt-3 ml-4 mr-1 mb-2"
                                style="width: 120px;">
                <b-nav-item-dropdown id="my-nav-dropdown"
                                    text="Maquillage"
                                    toggle-class="nav-link-custom texteNoir"
                                    left 
                                    class="ml-0">
                    <b-dropdown-item link-class="submenuDesktop">Voir tout</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Yeux & Sourcils</b-dropdown-item>
                    <b-dropdown-item link-class="submenuDesktop">Lèvres</b-dropdown-item>
                </b-nav-item-dropdown>
            </div>
        </b-nav>
    </div>  
</template>

<script>
import { BNav, BNavItemDropdown } from "bootstrap-vue/esm/components/nav";
// import BDropdownItem from "bootstrap-vue/esm/components/dropdown/dropdown-item"
export default {
    components : {
        BNav, 
        BNavItemDropdown,
        // BDropdownItem
    }
}
</script>