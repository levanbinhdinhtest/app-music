<template> 
    <div class="itemProduct text-secondary font-weight-bold" @click="handleClick">
      <img :src="item.links.images[1].url" alt="">
        <p class="mt-2">{{ item.name }}</p>
    </div>
  
  </template>
  
  <script>
  export default {
    props:{
      item:{
        type:Object
      }
    },
    methods:{
      handleClick(){
        console.log(this.item)
      }
    }
    
  }
  </script>
  
  <style>
  .itemProduct{
  
  }
    .itemProduct img{
      border-radius: 50%;
      width: 150px;
      height: 150px;
      object-fit: fill;
    }
  </style>