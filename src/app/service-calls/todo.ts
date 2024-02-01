import axios from "axios";

export const  getToDoDetailsService = async (id:number)=>{
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const resposne = await axios.get(url)
    return resposne.data
}