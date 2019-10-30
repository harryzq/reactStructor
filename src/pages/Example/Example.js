import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, doubleAsync, key } from './reducer';

const mapStateToProps = (state) => ({
  count: state[key].count
});

const mapDispatchTpProps = {
  increment: () => increment(1),
  doubleAsync
};

class Home extends Component {
  UNSAFE_componentWillMount(){
    console.log('componentWillMount----组件将要挂载到页面的时刻')
}
componentDidMount(){
    console.log('componentDidMount----组件挂载完成的时刻执行')
} 
shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate---组件发生改变前执行')
    return true
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
  render() {
    const { count, increment, doubleAsync } = this.props;

    return (
      <div className='home__container'>
        <h3>Counter: { count }</h3>
        <button onClick={increment}>Increment</button>
        <br />
        <button onClick={doubleAsync}>Double(Async)</button>
      </div>
    );
  }
};

export default connect(mapStateToProps,mapDispatchTpProps)(Home);