import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "../../store";
import {changeInputAction , addItemAction,getFileList} from '../../store/actionCreaters'


class TodoList extends Component {
  constructor(props) {
    super(props);
    //关键代码-----------start
    this.state = store.getState();
    //关键代码-----------end
    // console.log(this.state);
    this.storeChange = this.storeChange.bind(this)  //转变this指向
    store.subscribe(this.storeChange) //订阅Redux的状态,store发生变化时

  }
  componentDidMount(){
    const action = getFileList()
    store.dispatch(action)
}
  storeChange(){
      this.setState(store.getState())
  }
  changeValue(e){
    const action =changeInputAction(e.target.value)
    store.dispatch(action)
  }
  addList(){
    const action = addItemAction(this.state.inputValue)
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            onChange={this.changeValue.bind(this)}
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
          />
          <Button type="primary" onClick={this.addList.bind(this)}>增加</Button>
        </div>
        <div>{this.state.inputValue}</div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            //关键代码-----------start
            dataSource={this.state.list}
            //关键代码-----------end
            renderItem={item => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }
}
export default TodoList;
