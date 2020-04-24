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
      <Layout style={{height: "100vh"}}>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <div className="my-name" style={{float: "left"}}>Mingrui Liu</div>
          <Menu className="nav-bar" theme="dark" mode="horizontal" style={{float: "right"}}>
            <Menu.Item key="1">
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">              
              <NavLink to="/About">About</NavLink>
            </Menu.Item>
            <Menu.Item key="3">              
              <NavLink to="/Contact">Contact</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/About"component={About}/>
            <Route path = "/Contact" component={Contact}/>
          </Switch>
        </Content>
        <Footer style={{fontFamily: "Times, serif"}}>
          <div style={{float: "left"}}>Mingrui Liu</div>
          <div style={{float: "right"}}>Copyright © 2020 - Mingrui Liu. All Rights Reserved</div>
        </Footer>
      </Layout>
    )
  }
}

export default App
