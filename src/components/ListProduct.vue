<template>
    <div class="product">
        <h2 class="mt-3 mt-3 text-left ml-3 text-secondary">Bài hát phổ biến</h2>
        <div class="list row">
            <div class="list-product col col-sm-3 col-md-3" v-for="(item,index) in listSong" :key="index" >
                <the-item-product
                :item="item"
            />
        </div>
    </div>
    </div>

</template>

<script>
import TheItemProduct from './TheItemProduct.vue';
import { createNamespacedHelpers  } from 'vuex';
const {mapActions, mapState} = createNamespacedHelpers("index");
export default {
    data(){
        return{
           
        }
    }
    ,
    components:{
        TheItemProduct
    }
    ,
    computed:{
        ...mapState({
            listSong:(state)=>state.listSong
        }),


    },
    methods:{
        ...mapActions({
             getAllList : "getAllListAction"
        }),

    },
    created(){
        this.getAllList();
    }
}
</script>

<style>
    .list{
        /* display: flex;
        padding: 10px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center; */
    }
    .list-product{
        text-align: center;
        /* margin-right: 20px; */
        /* width: 23%; */
    }
    .product{
        /* height: 230px; */
        overflow: hidden;
    }
</style>