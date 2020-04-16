<template>
    <div class="container col-sm-9 col-lg-6 inscription">
        <div class="text-center mb-4 maPolice">
            <!-- <img class= "img-fluid" src="img/brand/logo_pet.png" width="250px" height="150px"> -->
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
                    id="emailReg"
                    v-model="form.emailReg"
                    type="email"
                    required
                    placeholder="Email"
                    :state="validationEmail"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationEmail">
                    L'address email n'a pas le bon format
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationEmail">
                </b-form-valid-feedback>
            </b-form-group>

            <b-form-group id="input-group-2" label="Mot de passe:" label-for="motDePasse">
                <b-form-input
                    id="motDePasseReg"
                    type="password"
                    v-model="form.motDePasseReg"
                    required
                    placeholder="Mot de passe"
                    aria-describedby="password-help-block"
                    :state="validationMotDePasse"
                ></b-form-input>
                <b-form-text id="password-help-block">
                    8 caractères minimun
                </b-form-text>
                <b-form-invalid-feedback :state="validationMotDePasse">
                    Le mot de passe ne doit pas faire moins de 8 caractères
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationMotDePasse">
                </b-form-valid-feedback>
            </b-form-group>

            <b-form-group id="input-group-3" label="Corfirmez mot de passe:" label-for="motDePasse2">
                <b-form-input
                    id="motDePasse2"
                    type="password"
                    v-model="form.motDePasse2"
                    required
                    placeholder="Corfirmez votre mot de passe"
                    :state="validationMotDePasse2"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationMotDePasse2">
                    Le mot de passe de confirmation doit être identique à celui d'origine
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationMotDePasse2">
                </b-form-valid-feedback>
            </b-form-group>

            <b-form-group id="input-group-4" label="Prenom:" label-for="prenom">
                <b-form-input
                    id="prenom"
                    type="text"
                    v-model="form.prenom"
                    required
                    placeholder="Prenom"
                    :state="validationPrenom"
                ></b-form-input>
                <b-form-invalid-feedback :state="validationPrenom">
                    Un prénom ne peut pas faire moins de 2 caractères
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="validationPrenom">
                </b-form-valid-feedback>
            </b-form-group>

            <div class="text-center mb-5">
                <b-button type="submit" variant="primary" class="monBouton">S'inscrire</b-button>
            </div>    
        </b-form>
        <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card> -->
    </div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          emailReg: '',
          motDePasseReg: '',
          motDePasse2: '',
          prenom: ''
        },
        show: true
      }
    },
    computed: {
        validationEmail() {        
            let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
            if (this.form.emailReg.length > 0) {
                return (!regex.test(this.form.emailReg.value))
            }
        },
        validationMotDePasse() { 
            if (this.form.motDePasseReg.length > 0) {       
                return this.form.motDePasseReg.length > 8
            }
        },
        validationMotDePasse2() {  
            if (this.form.motDePasse2.length > 0) {      
                return this.form.motDePasseReg === this.motDePasse2
            }
        },
        validationPrenom() {   
            if (this.form.prenom.length > 0) {
                return this.form.prenom.length >= 2
            }
        }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()

        // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.emailReg = ''
        this.form.motDePasseReg = ''
        this.form.motDePasse2 = ''
        this.form.prenom = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>