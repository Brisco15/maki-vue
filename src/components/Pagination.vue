<template lang="pug">
  #pagination
    ul.pagination.m-b-90
      li(v-for="index in pagination.pages" :key="index")
        span(v-if="index == pagination.page") {{index}}
        router-link(
          v-if="index != pagination.page" 
          :to="{ path: 'news', query: { page: index }}"
        ) {{index}}
</template>
<script>
  export default{
    props:['pagination'],
    mounted(){
      console.log(this.$props)
    }
  }
</script>