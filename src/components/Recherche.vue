<template>
    <div>
        <b-nav-form class="pl-3">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Ex. Pantalon"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0 monBouton" type="submit">Recherche</b-button>
        </b-nav-form>
    </div>    
</template>

<script>
import { BNavForm } from "bootstrap-vue/esm/components/nav";
import { BFormInput } from "bootstrap-vue/esm/components/form-input";
import { BButton } from "bootstrap-vue/esm/components/button"; 

export default {
    components: {
        BNavForm,
        BFormInput,
        BButton
    }    
}
</script>