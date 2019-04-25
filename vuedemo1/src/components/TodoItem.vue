<template>
    <li class="item">
      <input type="checkbox" v-model="checked">
      <slot name="slotItem" v-bind="{checked}">{{item}}</slot>
    </li>
</template>

<script>
    export default {
        name: 'TodoList',
        props: ["item"],
        data(){
          return{
            checked: false
          }
        }
    }
</script>

<style>
  .item{
    color:red;
  }
  
</style>