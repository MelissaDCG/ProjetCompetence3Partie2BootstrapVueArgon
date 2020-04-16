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

            <b-form-group id="input-group-2" label="Mot de passe:" label-for="motDePasse">
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
                    value="me">Se souvenir de moi
                </b-form-checkbox>
            </b-form-group>
            <div class="text-center">
                <b-button type="submit" variant="primary" class="monBouton">Se connecter</b-button>
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