/* HTML
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<template>
  <div id="app">
    <Header />
    <router-view />
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Footer />
  </div>
</template>


/* Script
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<script>
import Header from "@/components/Header.vue";
import Breadcrumb from "@/components/BreadclumbList.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Breadcrumb,
    Footer
  },
  computed: {
    breadcrumbs: function() {
      return {
        data: [
          {
            name: "トップページ",
            path: "/"
          },
          {
            name: "カテゴリー名",
            path: "/category/"
          },
          {
            name: "記事タイトルです"
          }
        ]
      };
    }
  }
};
</script>

/* Style
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
<style>
</style>
