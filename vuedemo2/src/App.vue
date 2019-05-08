<template>
  <div id="app">
    {{count}}
    <br>
    {{$store.getters.doubleCount}}
    <button @click="$store.commit('increment')">count++</button>
    <button @click="$store.dispatch('increment')">actions++</button>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{

    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  }
}
</script>

<style>

</style>
