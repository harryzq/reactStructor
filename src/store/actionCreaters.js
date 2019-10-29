import {CHANGE_INPUT , ADD_ITEM,GET_FILE}  from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})

export const addItemAction = (value)=>({
    type:ADD_ITEM,
    value
})

export const getFiles = (value)=>({
    type:GET_FILE,
    value
})

export const getFileList = () =>{
    return (dispatch)=>{
        axios.get('/').then((res)=>{
            const action = getFiles({
                data:121
            })
            dispatch(action)
        })
    }
}