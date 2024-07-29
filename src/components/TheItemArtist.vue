<template> 
  <div class="itemArtist text-secondary font-weight-bold " @click="handleClick">
    <img :src="item.links.images[0].url" alt="">
      <p class="mt-2">{{ item.author }}</p>
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
.itemArtist{

}
  .itemArtist img{
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: fill;
  }
</style>