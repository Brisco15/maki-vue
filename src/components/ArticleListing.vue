<template lang="pug">
  .wrapper
    .row
      .column-phablet-1-2.column-laptop-1-3.m-b-30(v-for="item in news")
        Article(:article="item")
</template>
<script>
import axios from 'axios'
import Article from './Article.vue'
export default{
  components: {
    Article
  },
  data: function(){
    return {
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
  mounted(){
    axios.get('http://localhost:4000/articles')
    .then((data) => {
      console.log(data)
      this.news = data.data.docs
    })
    .catch((errors) => {
      console.log(errors)
    })
  }
}
  
</script>