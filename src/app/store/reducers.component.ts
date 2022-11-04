import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store.component";
export const counterSlice =createSlice({
    name: 'counter',
    initialState: {
        value: 4,
        name:'',
        index:0,
        token:0,
        title:'',
        channel:0,
        image:'',
    },
    reducers: {
        setName:(state:any,name:any)=>{
            state.name=name;
        },
        deleteName:(state:any)=>{
            state.name='';
        },
        added:(state:any)=>{
            console.log('add');
        },
        deleteed:(state:any)=>{
            console.log("del");
        },
        setTokened:(state:any,token:any)=>{
            state.token=token;
            console.log("设置token");
        },
        removeTokened:(state:any)=>{
            state.token=null;
            console.log("删除token");
        },
        setTitle:(state:any,title:any)=>{
            state.title=title;
        },
        deleteTitle:(state:any)=>{
            state.title='';
        },
        setChannel:(state:any,channel:any)=>{
            state.channel=channel;
        },
        deleteChannel:(state:any)=>{
            state.channel=0;  
        },
        setIndex:(state:any,index:any)=>{
            state.index=index;
        },
        deleteIndex:(state:any)=>{
            state.index=0
        },
        setImage:(state:any,image:any)=>{
            state.image=image;
        },
    }
})
export const{setName,deleteName,setIndex,deleteIndex,added,deleteed,setTokened,removeTokened,setTitle,deleteTitle,setChannel,deleteChannel,setImage}=counterSlice.actions