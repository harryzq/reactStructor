import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import {changeInputAction , addItemAction,getFileList} from '../../store/actionCreaters'
import {connect} from 'react-redux'  //引入连接器

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //   精简化
    // let {inputValue ,inputChange,clickButton,list} = this.props;
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            onChange={this.props.inputChange}
            placeholder={this.props.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
          />
          <Button type="primary" onClick={this.addList.bind(this)}>增加</Button>
        </div>
        <div>{this.props.inputValue}</div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}
// 映射关系就是把原来的state映射成组件中的props属性
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list : state.list,
    }
}
const dispatchToProps = (dispatch) =>{
    return {
        inputChange(e){
            let action = {
                type:'changeInput',
                value:e.target.value
            }
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(Login);;
