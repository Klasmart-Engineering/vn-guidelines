<template>
    <div>
      <template-b :data="jsonData" v-if="jsonData"></template-b>
    </div>
</template>

<script>
    import TemplateB from "@/components/TemplateB"

    export default {
        name: 'guidelines-show-b',
        components: {
            TemplateB,
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
                this.axios.get('/jsonb/'+getURL+'.json?v='+ new Date().getTime()).then((response) => {
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
