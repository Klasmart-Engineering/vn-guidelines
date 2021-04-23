<template>
    <section class="page-home-wrap">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="wrap">
                        <router-link to="/" class="logo">
                            <img src="../assets/img/kl-logo.svg" alt="">
                        </router-link>
                        <h1>Welcome to KidsLoop VietNam</h1>
                        <router-link to="/guidelines" class="btn btn-primary cta">
                            Go Guidelines List
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>
