<template>
    <div class="page-guidelines index">
        <header>
            <router-link to="/" class="logo-wrap">
                <img src="@/assets/img/kl-logo.svg" alt="">
                <span>Welcome to Guidelines site</span>
            </router-link>
            <router-link to="/editor" class="btn btn-primary editor-btn">
                Go Editor
            </router-link>
        </header>
        <main>
            <section class="guidelines-list-container">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="unit-group" v-for="(item, index) in units" :key="index">
                                <h2>{{ item.name }}</h2>
                                <ul>
                                    <li v-for="(object, key) in lessons" :key="key">
                                        <router-link :to="'/view?' + object" v-if="object.indexOf('U'+(index+1)) > 0">
                                            {{ object.replaceAll('_', ' ') }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
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
