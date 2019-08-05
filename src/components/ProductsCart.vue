<template lang="pug">
  #card
    router-link.button(to="order") Кошик
    |{{cart_items.length}} 
    span(
      v-if="!mod_ext_arr.includes(cart_items.length)"
      ) товарів 
    span(
      v-if="mod_ext_arr.includes(cart_items.length)"
      ) товари  
    |на суму: {{full_price}}
</template>
<script>
  import {mapState} from 'vuex'
  export default{
    data: function(){
      return {
        name: '',
        surname: '',
        mod_ext_arr : [1,2,3,4,21,22,23,24,31,32,33,34]
      }
    },
    computed: {
      full_price: function(){
        var price = 0;
        for (var i = this.cart_items.length - 1; i >= 0; i--) {
          price += this.cart_items[i].price*1
        }
        return price
      },
      ...mapState([
        'cart_items'
      ])
    }
  }
</script>