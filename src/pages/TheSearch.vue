<template>
    <div class="wp-search">
      <list-artist/>
      <list-product/>
    </div>
  </template>
  
  <script>
  import ListArtist from '@/components/ListArtist.vue';
  import ListProduct from '@/components/ListProduct.vue';
  export default {
    components:{
      ListArtist,
      ListProduct
    }
  }
  </script>
  
  <style>
    .wp-search{
      height:90%;
      overflow-y: scroll;
      background: #222121;
      border-radius:15px ;
    }
  </style>