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
                                <div class="unit-group" v-for="(item, index) in units" :key="index">
                                    <h2>{{ item.name }}</h2>
                                    <ul>
                                        <li v-for="(object, key) in lessons" :key="key">
                                            <router-link :to="'/guidelines/view?' + object" v-if="object.indexOf('U'+(index+1)) > 0">
                                                {{ object.replaceAll('_', ' ') }}
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
        metaInfo: {
            title: 'Guidelines List',
        },
        data() {
            return {
                units: []
            }
        },
        computed: {
            lessons: () => {
                const lessons = require.context(
                    '../../../public/json',
                    true,
                    /^.*\.json$/
                )

                return lessons.keys().map(item => item.replace('./', '').replace('.json', ''))
            }
        },
        methods: {
            unitLoads() {
                this.axios.get('/unit/list.json').then((response) => {
                    this.units = response.data.list
                })
                return this.units
            }
        },
        mounted() {
            let self = this
            self.unitLoads()
        }
    }
</script>
