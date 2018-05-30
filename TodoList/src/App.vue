<template>
  <div id="app">
    <Input />
    <List />
  </div>
</template>

<script>
import axios from 'axios';
import Input from './components/Input.vue';
import List from './components/List.vue';
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Input,
    List
  },
  mounted(){
    axios.get('/getCity').then(res=>{
      console.log('res...', res);
    })
  }
}
</script>

<style lang="scss">

</style>
