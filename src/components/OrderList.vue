<template lang="pug">
  #orderList
    |order list works
    table
      thead
        tr
          td
            |Ім'я
          td
            |Ціна
          td
            |Кількість 
          td
            |Сумма
      tbody
        tr(v-for="item, index in list")
          td {{item.descr}}
          td {{item.price}}
          td 
            input(v-model="counts[index]")
          td ???
</template>
<script type="text/javascript">
  import {mapState} from 'vuex'
  export default{
    data: function(){
      return {
        list: [],
        counts: []
      }
    },
    computed: {
      ...mapState([
        'cart_items'
      ])
    },
    mounted(){
      for (var i = this.cart_items.length - 1; i >= 0; i--) {
        var index = this.list.findIndex((x)=>{
          return x.id == this.cart_items[i].id
        });
        if(index> -1){
          this.counts[index] = this.counts[index]+1
        }else{
          this.list.push(this.cart_items[i])
          this.counts.push(1);
        }
        
      }
      
    }
  }
</script>