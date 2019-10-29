import { CHANGE_INPUT , ADD_ITEM  ,GET_FILE} from './actionTypes'
const defaultState = {
    inputValue : 'Write Something',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ],
    // data:null
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝state
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.list.push(action.value)
        return newState
    }
    if(action.type === GET_FILE){
        let newState = JSON.parse(JSON.stringify(state)) 
        console.log('12')
        newState['data'] = action.value
        return newState
    }
    return state
}