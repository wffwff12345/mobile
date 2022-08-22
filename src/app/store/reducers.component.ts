import { createSlice } from "@reduxjs/toolkit";
import { store } from "./store.component";
export const counterSlice =createSlice({
    name: 'counter',
    initialState: {
        value: 4,
        name:"jack",
        index:0,
        token:0,
        title:'',
        channel:0
    },
    reducers: {
        setName:(state:any,name:any)=>{
            state.name=name;
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
            state.token=0;
            console.log("删除token");
        },
        setTitle:(state:any,title:any)=>{
            state.title=title;
        },
        setChannel:(state:any,channel:any)=>{
            state.channel=channel;
        },
        setIndex:(state:any,index:any)=>{
            state.index=index;
        }
    }
})
export const{setName,setIndex,added,deleteed,setTokened,removeTokened,setTitle,setChannel}=counterSlice.actions