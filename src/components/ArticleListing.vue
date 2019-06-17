<template lang="pug">
  .wrapper
    .row
      .column-phablet-1-2.column-laptop-1-3.m-b-30(v-for="item in news")
        Article(:article="item")
    Pagination(v-if="paginate" :pagination="{page:page, pages:pages}")
</template>
<script>
import axios from 'axios'
import Article from './Article.vue'
import Pagination from './Pagination.vue'
export default{
  props: ['limit', 'paginate'],
  components: {
    Article,
    Pagination
  },
  data: function(){
    return {
      page: 1,
      pages: 0,

      news : [
        {
          text: 'Happy day ',
          date: '23.23.23'
        },
        {
          text: 'Happy day 1',
          date: '23.23.21'
        }
      ]
    }
  },
  watch: {
    $route: function(){
      this.getNews()
    }
  },
  methods:{
    getNews(){
      console.log(this.$route, 'route')
      var path = 'http://localhost:4000/articles'
      var params = `limit=${this.limit}`
      if(this.$route.query.page){
        params = [params, 'page='+this.$route.query.page].join('&')
      }
      if(this.limit){
        path = [path, params].join('?')
      }
      axios.get(path)
      .then((responce) => {
        console.log(responce)
        this.news = responce.data.docs
        this.page = responce.data.page
        this.pages = responce.data.totalPages
      })
      .catch((errors) => {
        console.log(errors)
      })
    }
  },
  mounted(){
    this.getNews()
  }
}
  
</script>