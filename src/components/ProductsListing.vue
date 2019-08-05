<template lang="pug">
  #list
    .row
      .column-laptop-1-3.column-tablet-1-2.bottom-line.m-b-50(
        v-for="item in products"
      )
        .product.relative.m-b-30
          a(href="#").product__link
            -if(labels)
              .product__labels
                each label in labels
                  div(class='product__modificator product__modificator_' + label)
            .product__image
              <!-- img(src="./img/" alt="product image") -->
            .product__description {{item.descr}}
            .product__price
              |{{item.price}}  руб.
          .product__button
            a(@click.prevent="addToCard(item)" data-price=rndPrice).hover-order
              |ЗАКАЗАТЬ
      Pagination(v-if="paginate" :pagination="{page: page, pages:pages}")
</template>
<script>
  var _ = require('lodash') 
  
  import axios from 'axios'
  import Pagination from './Pagination.vue'
  export default{
    data: function(){
      return {
        products: [],
        page: '',
        pages: '',
        paginate: true
      }
    },
    components:{
      Pagination
    },
    methods: {
      addToCard(item){
        console.log(this.$store)
        this.$store.commit('pushToCard', item)
        console.log(this.$store)
      },
      getProducts(){
        console.log(this.$route, 'route')
        var path = 'http://localhost:4000/goods'
        var params = ``
        console.log(params, path)
        if(this.$route.query.page){
          params = [params, 'page='+this.$route.query.page].join('&')
        }
        path = [path, params].join('?')
        
        console.log(path)
        axios.get(path)
        .then((responce) => {
          console.log(responce)
          this.products = responce.data.docs
          this.page = responce.data.page
          this.pages = responce.data.totalPages
        })
        .catch((errors) => {
          console.log(errors)
        })
      }
    },
    watch: {
      $route: function(){
        this.getProducts()
      }
    },
    mounted(){
      this.getProducts()
    }
  }
</script>