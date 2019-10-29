import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../pages/login'
import Home from '../pages/home'
import ToDoList from '../pages/todolist'
import {Provider} from 'react-redux'
import store from '../store'
function AppRouter() {
  return (
    <Provider store={store}>
      <Router>
          <ul>
              <li> <Link to="/">首页</Link> </li>
              <li><Link to="/Login/">Login</Link> </li>
              <li><Link to="/ToDoList/">Login</Link> </li>
          </ul>
          {/* exact精准匹配 */}
          <Route path="/" exact component={Home} />
          <Route path="/Login/" component={Login} />
          <Route path="/ToDoList/" component={ToDoList} />
      </Router>
    </Provider>
  );
}
export default AppRouter;