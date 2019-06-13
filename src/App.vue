<template lang="pug">
  <div id="app">
    router-view
    .wrapper
      .row
        .column-phablet-1-2.column-laptop-1-3.m-b-30(v-for="item in news")
          Article(:article="item")
  </div>
</template>

<script>
  import axios from 'axios'
  import HelloWorld from './components/HelloWorld.vue'
  import Article from './components/Article.vue'
  export default {
    name: 'app',

    components: {
      HelloWorld,
      Article
    },
    data: function(){
      return {
        news : [
        {
          text: 'Happy day',
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
      .then((data)=>{
        console.log(data)
        this.news = data.data.docs
      })
      Catch((errors)=>{
        console.log(errors)
      })
    }
  }
</script>

  
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
