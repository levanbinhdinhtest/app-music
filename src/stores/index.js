import { getAllListApi } from "@/utils/api";


const state = ()=>{
    return{
        listSong:[],
    }
};
const getters = {
    listAuthorBySet:state=>{
        const listAuthor  = [...new Set(state.listSong.map(item => item.author))]    
        return listAuthor
    }
};

const mutations = {
    getAllListMutation(state,value){
        state.listSong = value;
        console.log(state.listSong)
    }
};
const actions = {
    async getAllListAction(context){
        const value = await getAllListApi()
        try {
            context.commit("getAllListMutation",value);
            
        } catch (error) {
            console.log("loi roi",error)
        }

    }
    
};
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
