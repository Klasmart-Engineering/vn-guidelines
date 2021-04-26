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
              <div class="input-name-wrap">
                <input type="text" placeholder="Input file name..." v-model="fileName">
              </div>
              <button type="button" @click="resetJson" class="btn btn-danger btn-reset">reset</button>
            </div>
            <a href="/" class="btn btn-success back-to-home">Back to home</a>
          </div>
        </div>
        <div class="col-12 col-lg-6">
          <template-a :data="jsonData" v-if="jsonData"></template-a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
import TemplateA from "@/components/TemplateA";

export default {
  name: "guidelines-create",
  data() {
    return {
      jsonData: null,
      fileName: ''
    };
  },
  components: {
    vueJsonEditor,
    TemplateA,
  },
  methods: {
    jsonLoad() {
        this.axios.get("/json/sample.json").then((response) => {
          this.jsonData = response.data;
        });
    },
    onJsonChange(value) {
      console.log("value:", value);
    },
    onJsonSave() {
      // console.log("value:", value);
      this.saveFile()
    },
    onError(value) {
      console.log("value:", value);
    },
    resetJson() {
      this.axios.get("/json/sample.json").then((response) => {
        this.jsonData = response.data;
      });
    },
    saveFile: function() {
      const data = JSON.stringify(this.jsonData)
      const blob = new Blob([data], {type: 'text/plain'})
      const e = document.createEvent('MouseEvents'),
              a = document.createElement('a')
      if (this.fileName.length) {
        a.download = this.fileName
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
      } else {
        alert('Please input file name')
      }
    }
  },

  mounted() {
    let self = this;
    self.jsonLoad();
  },
};
</script>