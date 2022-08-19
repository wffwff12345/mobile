import { createSlice } from "@reduxjs/toolkit";
export const counterSlice =createSlice({
    name: 'counter',
    initialState: {
        value: 4,
        name:"jack",
        token:0,
        title:'',
        channel:0
    },
    reducers: {
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
    }
})
export const{added,deleteed,setTokened,removeTokened,setTitle,setChannel}=counterSlice.actions