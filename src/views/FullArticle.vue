<template lang="pug">
  <div class="home">
   <h1>{{article.title}}</h1>
   <data>{{article.pub_date | formatDate}}</data>
  </div>
</template>
<script>
// @ is an alias to /src
import FullArticle from '@/views/FullArticle.vue'
import axios from 'axios'

export default {
  data: function(){
    return {
      article: {}
    }
  },
  mounted(){
    let id = this.$route.params.id;
    console.log(id)
    axios.get('http://localhost:4000/articles/'+id)
      .then((data)=> {
        console.log(data)
        this.article = data.data
      })
      .catch(()=>{
        this.$router.push("/");
      })
  }
  
  
}
</script>
