import React,{Component,Fragment} from 'react'
import PropTypes from 'prop-types';

class Home extends Component{
    constructor(props){
        super(props) //调用父类的构造函数，固定写法
        this.state={
            inputValue:'s' , // input中的值
            list:['a','b']    //服务列表
        }
    }
    handleChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    UNSAFE_componentWillMount(){
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    componentDidMount(){
        console.log('componentDidMount----组件挂载完成的时刻执行')
    } 
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate---组件发生改变前执行')
        // 未更新时不渲染
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }
        //shouldComponentUpdate返回true才会被执行。
        UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate----组件更新之后执行')
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }
    //当组件从页面中删除的时候执行
    UNSAFE_componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }
    handleAdd(){
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        })
    }
    handleLi(index){
        console.log(index)
    }
    handleSendToFather(val){

    }
    render(){
        console.log('render---组件挂载中.......')
        return(
            <Fragment>
                <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}></input>
                <div onClick={this.handleAdd.bind(this)}>ADD</div>
                <ul>
                    {
                        this.state.list.map((val,index)=>{
                            return <li key={index+val} onClick={this.handleLi.bind(this,index)}>{val}</li>
                        })
                    }
                </ul>
                {/* from father */}
                <div>{this.props.content}</div>
            </Fragment>
        )
    }
}
Home.propTypes = {
    inputValue:PropTypes.string
}

export default Home