<template>
    <main class="page-guidelines create-mode">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="editor-wrap">
                        <vue-json-editor
                            v-model="jsonData"
                            :show-btns="true"
                            :mode="'code'"
                            @json-change="onJsonChange"
                            @json-save="onJsonSave"
                            @has-error="onError"
                        >
                        </vue-json-editor>
                        <div class="actions-wrap">
                            <router-link
                                to="/new"
                                class="btn btn-info back-to-home"
                            >
                                Back to home
                            </router-link>
                            <button
                                type="button"
                                @click="resetJson"
                                class="btn btn-secondary btn-reset"
                            >
                                reset
                            </button>

                            <div class="input-name-wrap">
                                <input
                                    type="text"
                                    placeholder="Input file name..."
                                    v-model="fileName"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <template-b :data="jsonData" v-if="jsonData"></template-b>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import vueJsonEditor from 'vue-json-editor'
import TemplateB from '@/components/TemplateB'

export default {
    name: 'guidelines-create-b',
    data() {
        return {
            jsonData: null,
            fileName: '',
        }
    },
    metaInfo() {
        return {
            title: 'Editor',
        }
    },
    components: {
        vueJsonEditor,
        TemplateB,
    },
    methods: {
        jsonLoad() {
            this.$store.commit('windowURLGet')
            const getURL = this.$store.state.windowURL
            const fileName = getURL ? `${getURL}.json` : 'sample.json'
            this.axios
                .get(`/jsonb/${fileName}?v=` + new Date().getTime())
                .then((response) => {
                    this.jsonData = response.data
                })
                .catch((error) => console.log(error))
        },
        onJsonChange() {
            // do nothing
        },
        onJsonSave() {
            this.saveFile()
        },
        onError(value) {
            console.log('value:', value)
        },
        resetJson() {
            this.axios
                .get('/json/sample.json?v=' + new Date().getTime())
                .then((response) => {
                    this.jsonData = response.data
                })
                .catch((error) => console.log(error))
        },
        saveFile: function () {
            const data = JSON.stringify(this.jsonData)
            const blob = new Blob([data], { type: 'text/plain' })
            const e = document.createEvent('MouseEvents'),
                a = document.createElement('a')
            if (this.fileName.length) {
                a.download = this.fileName
                a.href = window.URL.createObjectURL(blob)
                a.dataset.downloadurl = ['text/json', a.download, a.href].join(
                    ':'
                )
                e.initEvent(
                    'click',
                    true,
                    false,
                    window,
                    0,
                    0,
                    0,
                    0,
                    0,
                    false,
                    false,
                    false,
                    false,
                    0,
                    null
                )
                a.dispatchEvent(e)
            } else {
                alert('Please input file name')
            }
        },
    },

    mounted() {
        let self = this
        self.jsonLoad()

        if (window.location.search) {
            this.fileName = window.location.search.split('?')[1] + '.json'
        }
    },
}
</script>
