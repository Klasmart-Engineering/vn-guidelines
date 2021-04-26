<template>
  <div class="j-w">
    <div class="editor-w clearfix">
      <div class="w-2">
        <div class="editor">
          <vue-json-editor
            v-model="jsonData"
            :show-btns="true"
            :mode="'code'"
            @json-change="onJsonChange"
            @json-save="onJsonSave"
            @has-error="onError"
          >
          </vue-json-editor>
        </div>
      </div>
      <div class="w-2">
        <div class="code-pre">
          <div slot="content">
            <template-a :data="jsonData"></template-a>
          </div>
        </div>
      </div>
    </div>
    <button type="button" @click="resetJson">reset</button>
  </div>
</template>

<script>
import vueJsonEditor from "vue-json-editor";
import TemplateA from "@/components/TemplateA";

export default {
  name: "guidelines-create",
  data() {
    return {
      jsonData: null,
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
    onJsonSave(value) {
      console.log("value:", value);
    },
    onError(value) {
      console.log("value:", value);
    },
    resetJson() {
      this.axios.get("/json/sample.json").then((response) => {
        this.jsonData = response.data;
      });
    },
  },

  mounted() {
    let self = this;
    self.jsonLoad();
  },
};
</script>

<style scoped>
.clearfix {
  *zoom: 1;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.t {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 60px;
}

.editor-w {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 20px;
}

.w-2 {
  float: left;
  width: 50%;
}

.editor {
  padding: 20px 60px;
}
</style>
