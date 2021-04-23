<template>
    <div v-if="jsonData">
        <gl-template-01 :data="jsonData"></gl-template-01>
    </div>
</template>

<script>
    import glTemplate01 from "../components/GuideLinesTemplate01"

    export default {
        name: 'guidelines-detail',
        components: {
            glTemplate01
        },
        data() {
            return {
                jsonData: null
            }
        },
        methods: {
            jsonLoad() {
                this.$store.commit('windowURLGet')
                const getURL = this.$store.state.windowURL
                this.axios.get('json/'+getURL+'.json').then((response) => {
                    this.jsonData = response.data
                })
            }
        },
        mounted() {
            let self = this
            self.jsonLoad()
        }
    }
</script>
