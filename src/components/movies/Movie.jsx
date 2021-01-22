import React from 'react'
import { Layout, Menu } from 'antd'
import {Link,Route,Switch} from 'react-router-dom'
import MoveList from '@/components/movies/MoveList'
import MoveDetail from '@/components/movies/MovieDetail'


const {  Content, Sider } = Layout;
 export default class extends React.Component{
    render(){
        return (
            <Layout style={{height:"100%"}}>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={[window.location.hash.split("/")[2]]}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                  <Menu.Item key="1">
                    <Link to="/movies/1/1">正在热映</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/movies/2/1">即将上映</Link>
                  </Menu.Item>
                  <Menu.Item key="3"> 
                    <Link to="/movies/3/1">top250</Link>
                  </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ paddingLeft: '1px' }}>
              <Content
                style={{
                  padding: 5,
                  margin: 0,
                  minHeight: 280,
                  background:"#ffffff",
                  overflow:"auto"
                }}
              >
              <Switch>
                <Route exact path="/movies/detail/:id" component={MoveDetail}></Route>
                <Route exact path="/movies/:type/:page" component={MoveList}></Route>
              </Switch>
              </Content>
            </Layout>
          </Layout>
        )
    }
 }
