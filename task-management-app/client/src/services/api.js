import axios from "axios";
import { CREATE_TASK, DELETE_TASK, LOGIN, MARK_TASK, REGISTER, TASK_LIST } from "./apiConstants.js";
export const login= async(data)=>{
    return axios.post( LOGIN ,data)
}

export const register= async(data)=>{
    return axios.post( REGISTER ,data)
}

export const createTaskApi= async(data)=>{
    let token = getToken();
    console.log(token,"token");
    return axios.post( CREATE_TASK ,data,{
        headers:{
            auth:token
        }
    })
}

export const getTaskListApi= async(data)=>{
    let token = getToken();
    console.log(token,"token");
    return axios.get( TASK_LIST ,{
        headers:{
            auth:token
        }
    })
}

export const deleteTaskApi= async(data)=>{
    let token = getToken();
    console.log(token,"token");
    return axios.post( DELETE_TASK,data,{
        headers:{
            auth:token
        }
        
    })
}

export const markTaskApi= async(data)=>{
    let token = getToken();
    
    return axios.post( MARK_TASK,data,{
        headers:{
            auth:token
        }
        
    })
}


export function getToken(){
    let user = localStorage.getItem("user");
    if(!user) return
    const userObj=JSON.parse(user);
    return userObj.token;

}