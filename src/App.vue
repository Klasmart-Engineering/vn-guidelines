<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    titleTemplate: "%s | KidsLoop VN Hummingbird Guidelines",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "KidsLoop VN Hummingbird lesson guidelines for teachers",
      },
    ],
  }
};
</script>
