import axios from "axios";
export const getAllListApi =async()=>{
    const res = await axios({
        method: "GET",
        url: "https://667ed50ff2cb59c38dc72c56.mockapi.io/todolist"
    });
    return res.data;
}
