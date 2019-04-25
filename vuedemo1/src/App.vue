<template>
  <div id="app">
    {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <todo-item v-for="(item,index) in list" :key="index">
        <template v-slot:slotItem="itemProps">
          <span :style="{fontSize:'20px',color:itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'

export default {
  name: 'app',
  components: {
    TodoItem
  },
  data(){
    return{
      msg:'这是一个页面',
      info:'',
      list:[]
    }
  },
  methods:{
    handleClick(){
      this.list.push(this.info)
      this.info='';
    }
  }
}
</script>

<style>

</style>
