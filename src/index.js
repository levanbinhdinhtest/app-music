import { createStore } from "vuex";
import index from "./stores/index";
const store = createStore ({
    modules:{
        index,
    }
});
export default store;