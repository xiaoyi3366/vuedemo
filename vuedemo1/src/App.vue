<template>
  <div id="app">
    {{msg}}
    <div>
      <input type="text" v-model="info">
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <!-- 也可以TodoItem -->
      <todo-item v-for="(item,index) in list" :key="index">
        <template v-slot:slotItem="itemProps">
          <span :style="{fontSize:'20px',color:itemProps.checked ? 'red' : 'blue'}">{{item}}</span>
        </template>
      </todo-item>
    </ul>
    <Props
          name="Hello Vue！"
          :type="type"
          :is-visible="false"
          :on-change="handlePropChange"
          title="属性Demo"
          class="test1"
          :class="['test2']"
          :style="{ marginTop: '20px' }"
          style="margin-top: 10px"
        />
  </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue';
import Props from './components/Props.vue'

export default {
  name: 'app',
  components: {
    TodoItem,
    Props
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
