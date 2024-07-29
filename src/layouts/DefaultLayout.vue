<template>
  <div class="default-layout"> 
    <div class="side-bar">
        <side-bar/> 
    </div>       
    <div class="header-content">
         <the-header/>
       <!-- <the-search/>  -->
       <router-view />
    </div>             
                
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import SideBar from '../components/SideBar.vue';
// import TheSearch from '@/pages/TheSearch.vue';
export default {
    components:{
        TheHeader,
        SideBar,
        // TheSearch
    }
}
</script>

<style>
    .default-layout{
      display: flex;
      height: 100vh;
    }
    .side-bar{
        width: 24%;
        margin-right: 10px;
       
    }
    .header-content{
        width: 76%;
       height: 100%;

    }
    @media screen and (max-width: 1020px) {
  .side-bar {
    width: 100%;
    height: 100%;
    /* z-index: 1000; */
    top: 0;
    left: 0;
    /* margin-bottom:20px ; */
  }
  .header-content {
    width: 100%;
    margin-top: 10px; 
  }
  .default-layout{
    flex-direction: column;
  }
  }
</style>