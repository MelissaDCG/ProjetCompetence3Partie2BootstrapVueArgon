<template>
    <footer class="footer bgFooter">
        <div class="container-fluid">
            <hr class="mb-1">
            <div class="row align-items-center justify-content-md-between p-2">
                <div class="col-6">
                    <ul class="nav nav-footer justify-content-start">
                        <li class="nav-item">
                            <a href="#" class="nav-link pl-0 texteNoir" target="_blank" rel="noopener">Livraison/Retour</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link texteNoir" target="_blank" rel="noopener">Payment</a>
                        </li>
                    </ul>    
                    <div class="copyright text-dark">
                        &copy; {{year}}
                        <span>Bonita</span>
                    </div>
                </div>
                <div class="col-6 text-right btn-wrapper">                    
                     <a target="_blank" rel="noopener" href="https://www.instagram.com/creativetimofficial"
                        class="btn btn-neutral btn-icon-only btn-instagram btn-round btn-lg" data-toggle="tooltip"
                        data-original-title="Follow us">
                         <i class="fa fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://twitter.com/meliche"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fa fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/melissa.a.garcia"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
