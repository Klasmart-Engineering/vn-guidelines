<template>
    <div class="page-guidelines index">
        <header>
            <router-link to="/" class="logo-wrap">
                <img src="@/assets/img/kl-logo.svg" alt="" />
                <span>Welcome to Guidelines site</span>
            </router-link>
        </header>
        <main>
            <section class="guidelines-list-container">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div
                                class="unit-group"
                                v-for="(item, index) in units"
                                :key="index"
                            >
                                <h2>{{ item.name }}</h2>
                                <ul>
                                    <li
                                        v-for="(object, key) in lessons"
                                        :key="key"
                                    >
                                        <div
                                            class="d-flex align-items-center"
                                            v-if="
                                                object.indexOf(
                                                    'U' + (index + 1)
                                                ) >= 0 ||
                                                object.indexOf(
                                                    'Unit_' + (index + 1)
                                                ) >= 0
                                            "
                                        >
                                            <router-link
                                                :to="'/view-b?' + object"
                                            >
                                                {{ object.replace(/_/g, ' ') }}
                                            </router-link>
                                            <div class="actions-wrap">
                                                <router-link
                                                    :to="'/editor-b?' + object"
                                                    class=""
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="pencil-alt"
                                                        class="
                                                            svg-inline--fa
                                                            fa-pencil-alt
                                                            fa-w-16
                                                        "
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                    >
                                                        <path
                                                            fill="currentColor"
                                                            d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                                                        ></path>
                                                    </svg>
                                                </router-link>
                                            </div>
                                        </div>
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
            units: [],
        }
    },
    computed: {
        lessons: () => {
            const lessons = require.context(
                '../../../public/jsonb',
                true,
                /^.*\.json$/
            )

            return lessons
                .keys()
                .map((item) => item.replace('./', '').replace('.json', ''))
        },
    },
    methods: {
        unitLoads() {
            this.axios
                .get('/unit/list-b.json?v=' + new Date().getTime())
                .then((response) => {
                    this.units = response.data.list
                })
            return this.units
        },
    },
    mounted() {
        let self = this
        self.unitLoads()
    },
}
</script>
