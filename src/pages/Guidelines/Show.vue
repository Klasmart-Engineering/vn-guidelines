<template>
    <div v-if="jsonData">
        <template-a :data="jsonData"></template-a>
    </div>
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
                })
            }
        },
        mounted() {
            let self = this
            self.jsonLoad()
        }
    }
</script>
