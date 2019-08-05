<template>
  <div class="order">
    <OrderList></OrderList>
  </div>
</template>

<script>
// @ is an alias to /src
import OrderList from '../components/OrderList.vue'
import axios from 'axios'
export default {
  data: function(){
    return {
    }
  },
  components:{
    OrderList
  },
  mounted(){
    
  }
}
</script>