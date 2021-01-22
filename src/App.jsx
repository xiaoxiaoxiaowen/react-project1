import React from 'react'
import { HashRouter, Route, Switch ,Link} from "react-router-dom";
import AppCss from '@/css/App.less'
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout
import 'antd/dist/antd.css'
import Home from '@/components/home/Home'
import Movies from '@/components/movies/Movie'
import About from '@/components/about/About'
export default class App extends React.Component{
    render(){
        return (
            <HashRouter>
                <Layout className="layout" style={{height:"100%"}}>
                    <Header>
                        <div className={AppCss.logo} />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split("/")[1]||"home"]}>
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="movies">
                                <Link to="/movies/1/1">电影</Link>
                            </Menu.Item>
                            <Menu.Item key="about"> 
                                <Link to="/about">关于</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0' ,flex:1}}>
                        <div className={AppCss["site-layout-content"]}>
                        
                            <Route path="/" component={Home} exact ></Route>
                            <Route path="/home">
                                <Home/>
                            </Route>
                            <Route path="/movies/:type/:page">
                                <Movies/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}> ©2021 Created by hcw</Footer>
                </Layout>
            </HashRouter>
        )
    }
}