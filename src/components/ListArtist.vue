<template>
    <div class="artist">
        <h2 class="mt-3 text-left ml-3 text-secondary">Nghệ sĩ phổ biến</h2>
        <div class="list row">
            <div class="list-artist col col-sm-3 col-md-3" v-for="(item,index) in listSong" :key="index" >
                <the-item-artist
                :item="item"
            />
        </div>
    </div>
    </div>

</template>

<script>
import TheItemArtist from './TheItemArtist.vue';
import { createNamespacedHelpers  } from 'vuex';
const {mapActions, mapState, mapGetters} = createNamespacedHelpers("index");
export default {
    data(){
        return{
           
        }
    }
    ,
    components:{
        TheItemArtist
    }
    ,
    computed:{
        ...mapState({
            listSong:(state)=>state.listSong
        }),
        ...mapGetters({
            author:"listAuthorBySet"
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
    .list-artist{
        text-align: center;
        /* margin-right: 20px;
        width: 23%; */
    }
    .artist{
        height: 260px;
        overflow: hidden;
    }
</style>