<template>
    <main class="page-content-parser">
        <div class="container-fluid">
            <div class="row pb-5">
                <div class="col-12">
                    <div class="editor-wrap">
                        <vue-json-editor
                            v-model="jsonData"
                            :mode="'code'"
                            @json-change="onJsonChange"
                            @has-error="onError"
                        >
                        </vue-json-editor>
                        <div class="actions-wrap">
                            <router-link
                                to="/"
                                class="btn btn-info back-to-home"
                            >
                                Back to home
                            </router-link>
                            <div class="input-name-wrap">
                                <input
                                    type="text"
                                    placeholder="Input file name..."
                                    v-model="fileName"
                                />
                            </div>
                            <button
                                type="button"
                                @click="exportCsv()"
                                class="btn btn-secondary btn-reset"
                            >
                                EXPORT CSV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12">
                    <content-table
                        :data="jsonData"
                        v-if="jsonData"
                    ></content-table>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import moment from 'moment'
import vueJsonEditor from 'vue-json-editor'
import ContentTable from '@/components/ContentTable'

export default {
    name: 'content-parser',
    data() {
        return {
            jsonData: {
                msg: 'put json content here',
            },
            fileName: '',
        }
    },
    metaInfo() {
        return {
            title: 'Content Parser',
        }
    },
    components: {
        vueJsonEditor,
        ContentTable,
    },
    methods: {
        onJsonChange(value) {
            console.log('value:', value)
        },
        onError(value) {
            console.log('value:', value)
        },
        exportCsv() {
            const arrData = JSON.parse(JSON.stringify(this.jsonData.list))
            // Extract only chosen information
            let arrExtractedData = arrData.map((item) => ({
                id: item.id,
                name: item.name,
                content_type_name: item.content_type_name,
                keywords: item.keywords.join(','),
                description: item.description,
                items_count: item.items_count,
                publish_status: item.publish_status,
                author_name: item.author_name,
                create_at: moment(item.create_at * 1000).format(
                    'YYYY-MM-DD HH:mm:ss'
                ),
            }))
            if (this.fileName.length) {
                let csvContent = 'data:text/csv;charset=utf-8,'
                csvContent += [
                    Object.keys(arrExtractedData[0]).join(';'), // titles
                    ...arrExtractedData.map((item) =>
                        Object.values(item).join(';')
                    ), // values
                ]
                    .join('\n')
                    .replace(/(^\[)|(\]$)/gm, '')

                const data = encodeURI(csvContent)
                const link = document.createElement('a')
                link.setAttribute('href', data)
                link.setAttribute('download', this.fileName)
                link.click()
            } else {
                alert('Please input file name')
            }
        },
        mounted() {},
    },
}
</script>
