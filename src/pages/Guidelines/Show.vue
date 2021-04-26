<template>
    <template-a :data="jsonData" v-if="jsonData"></template-a>
</template>

<script>
    import TemplateA from "@/components/TemplateA"

    export default {
        name: 'guidelines-show',
        components: {
            TemplateA
        },
        data() {
            return {
                jsonData: null
            }
        },
        metaInfo() {
            const regex = /\d-\d_U\d_LP\d_/i;
            const title = this.$store.state.windowURL.replace(regex, '').replaceAll('_', ' ');
            return {
                title: title,
            }
        },
        methods: {
            jsonLoad() {
                this.$store.commit('windowURLGet')
                const getURL = this.$store.state.windowURL
                this.axios.get('/json/'+getURL+'.json').then((response) => {
                    this.jsonData = response.data
                }).catch(error => console.log(error))
            }
        },
        mounted() {
            let self = this
            self.jsonLoad()
        }
    }
</script>
