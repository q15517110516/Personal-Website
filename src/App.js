import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { NavLink } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

export class App extends Component {
  render() {
    return (
      <Layout style={{minHeight: "100%", minWidth: 640, position: "relative", backgroundColor: "white"}}>
        <Header style={{ position: 'fixed', width: '100%', zIndex: 10, backgroundColor: "black", height: "70px"}}>
          <div className="my-name" style={{float: "left"}}>Mingrui Liu</div>
          <Menu className="nav-bar" theme="dark" mode="horizontal" style={{float: "right", backgroundColor: "black"}}>
            <Menu.Item className="nav-item" key="1">
              <NavLink className="navlink" activeClassName="navlink-active" to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item className="nav-item" key="2">              
              <NavLink className="navlink" activeClassName="navlink-active" to="/About">About</NavLink>
            </Menu.Item>
            <Menu.Item className="nav-item" key="3">              
              <NavLink className="navlink" activeClassName="navlink-active" to="/Contact">Contact</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content" style={{padding: 0}}>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/About"component={About}/>
            <Route path = "/Contact" component={Contact}/>
          </Switch>
        </Content>
        <Footer className="footer">
          <div style={{float: "left"}}>Mingrui Liu</div>
          <div style={{float: "right"}}>Copyright © 2020 - Mingrui Liu. All Rights Reserved</div>
        </Footer>
      </Layout>
    )
  }
}

export default App
