<template>
    <div>
        <ul class="nav align-items-lg-center bgMenuIcones justify-content-around w-100">
            <li class="nav-item">
                <a class="nav-link nav-link-icon" @click="modals.modal3 = true" data-toggle="tooltip" title="Se connecter">
                    <!-- <i class="fa fa-user iconCouleur"></i>  -->
                    <b-icon icon="person" class="iconCouleur"></b-icon>
                </a>
                <modal :show.sync="modals.modal3"
                        body-classes="p-0"
                        modal-classes="modal-dialog-centered modal-sm">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="bg-white px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div>
                                <div class="text-center mb-4 maPolice">
                                    <img class= "img-fluid" src="img/brand/logo_pet.png">
                                    <h2>Se connecter</h2>
                                </div>
                                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                                    <b-form-group
                                        id="input-group-1"
                                        label="Email:"
                                        label-for="email"
                                        description=""
                                    >
                                        <b-form-input
                                            id="email"
                                            v-model="form.email"
                                            type="email"
                                            required
                                            placeholder="Email"
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-2" label="Mot de Passe:" label-for="motDePasse">
                                        <b-form-input
                                            id="motDePasse"
                                            type="password"
                                            v-model="form.password"
                                            required
                                            placeholder="Mot de passe"
                                        ></b-form-input>
                                    </b-form-group>

                                    <b-form-group id="input-group-3">
                                        <b-form-checkbox 
                                            id="seSouvenir"
                                            v-model="form.checked" 
                                            value="me">Se souvenir
                                        </b-form-checkbox>
                                    </b-form-group>
                                    <div class="text-center">
                                        <b-button type="submit" variant="primary" class="monBouton" @click="modals.modal3 = false">Se connecter</b-button>
                                        <p class="text-body">Vous n'avez pas de compte?<br />
                                            <router-link to="/register" class="text-body font-weight-bold">
                                            <span  @click="modals.modal3 = false">Inscrivez-vous</span>
                                        </router-link>
                                        </p>
                                        <router-link to="/recupererMotdepasse" class="text-body font-weight-bold">Mot de passe oublié ?</router-link>
                                    </div>    
                                </b-form>
                                <!-- POUR VOIR LES DONNES -->
                                <!-- <b-card class="mt-3" header="Form Data Result">
                                <pre class="m-0">{{ form }}</pre>
                                </b-card> -->
                            </div>
                        </template>
                    </card>
                </modal>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener" data-toggle="tooltip" title="Messagerie">
                    <!-- <i class="fa fa-envelope iconCouleur"></i>  -->
                    <b-icon icon="envelope" class="iconCouleur"></b-icon>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener" data-toggle="tooltip" title="Favorites">
                    <!-- <i class="fa fa-heart iconCouleur"></i>  -->
                    <b-icon icon="heart" class="iconCouleur"></b-icon>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link nav-link-icon" href="#" target="_blank" rel="noopener" data-toggle="tooltip" title="Panier">
                    <!-- <i class="ni ni-basket iconCouleur"></i>  -->
                    <b-icon icon="bag" class="iconCouleur"></b-icon>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import BaseInput from "./BaseInput";
import Login from "./Login";
export default {
    components: {
        Modal,
        BaseInput,
        Login
    },
    data() {
        return {
            modals: {
                modal3: false
            },
            form: {
                email: '',
                motDePasse: '',
            checked: ""
            },
            show: true
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        modals.modal3 = false;
        // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.motDePasse = ''
        this.form.checked = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }    
}
</script>