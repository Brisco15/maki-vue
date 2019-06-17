<template lang="pug">
  #news_page
    ArticleListing(:limit="6" :paginate="true")
</template>
<script>
  import ArticleListing from '../components/ArticleListing.vue'
  export default{
    components: {
      ArticleListing
    }
  }
</script> 