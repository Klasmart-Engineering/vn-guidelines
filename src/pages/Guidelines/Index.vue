<template>
    <main class="page-guidelines">
        <div class="container guidelines-list-container">
            <div class="page">
                <section class="module-heading">
                    <div class="logo-wrap">
                        <router-link to="guidelines">
                            <img src="@/assets/img/kl-logo.svg" alt="">
                        </router-link>
                    </div>
                </section>

                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="unit-group">
                                    <h2>Unit 1: My Kindergarten</h2>
                                    <ul>
                                        <li v-for="(item, index) in guidelines" :key="index">
                                            <router-link :to="'/guidelines/view?' + item">
                                                {{ item.replaceAll('_', ' ') }}
                                            </router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'guidelines-index',
        computed: {
            guidelines: () => {
                const guidelines = require.context(
                    '../../../public/json',
                    true,
                    /^.*\.json$/
                )
                return guidelines.keys().map(item => item.replace('./', '').replace('.json', ''))
            }
        }
    }
</script>
