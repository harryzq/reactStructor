import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Login from '../pages/login'

import {Provider} from 'react-redux'

/**
 * 它接收两个参数，第一个是初始化的状态数据，第二个是初始化的 reducer，
 * 这里传入的是一个名称为 `key` 的 reducer ，
 * 这里的 `key` 和 `reducer` 
 * 是在 `./src/pages/rootReducer.js` 中定义的，
 * 它用来存储一些通用和全局的状态数据和处理函数的；
 */
import createStore from '../store/createStore';
// import { injectReducer } from '../store/reducerUtils';
import reducer, { key } from '../store/rootReducer';

export const store  = createStore({} , {
  [key]: reducer
 });

 /**
  * `lazyLoader` 函数是用来异步加载组件的，也就是通过不同的 route 来分割代码做按需加载
  */
 const lazyLoader = (importComponent) => (
  class AsyncComponent extends Component {
    state = { C: null }
 
    async componentDidMount () {
      const { default: C } = await importComponent();
      this.setState({ C });
    }
 
    render () {
      const { C } = this.state;
      return C ? <C {...this.props} /> : null;
    }
  }
 );

function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
          <ul>
              <li> <Link to="/">首页</Link> </li>
          </ul>
          {/* exact精准匹配 */}
          <Route path="/" exact component={lazyLoader(() => import('../pages/login'))}
          />
      </Router>
    </Provider>
  );
}
export default AppRouter;