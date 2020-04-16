<template>
    <header class="header-global fixed-top" style="background-color: white;">
        <div class="row">
            <div class="col-10 col-sm-9 col-md-8 col-lg-6 order-lg-2 d-lg-flex justify-content-center">
                <sidebar></sidebar>
            </div>
            <div class="d-none d-lg-flex col-lg-3 align-items-center  order-lg-3">    
                <recherche></recherche>  
            </div>
            <div class="d-lg-flex col-12 col-lg-3 align-items-center justify-content-center order-2 order-lg-1">     
                <menuIcones class="w-100"></menuIcones>  
            </div>
        </div>          
    </header>    
</template>
<script>
import Sidebar from "@/components/Sidebar";
import Recherche from "@/components/Recherche";
import MenuIcones from "@/components/MenuIcones";

export default {
  components: {
    Sidebar, 
    Recherche,
    MenuIcones
  }
};
</script>
<style>
</style>
