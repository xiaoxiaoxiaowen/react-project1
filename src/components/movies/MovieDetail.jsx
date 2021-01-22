import React from 'react'
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import fetchJSON from 'fetch-jsonp'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{}
        }
    }
    render(){
        return (
           <div >
              <Button type="primary" icon={<LeftOutlined />} onClick={this.goBack}>返回电影列表页面</Button>
              <div style={{textAlign:"center"}}>
                  <p><img style={{width:400}} src={this.state.data.poster}/></p>
                  <h3>{this.state.data.title}</h3>
                  <h5>{this.state.data["plot_simple"]}</h5>
              </div>
           </div>
        )
    }
    componentDidMount(){
        fetchJSON(`http://v.juhe.cn/movie/query?key=946acc208791c687340b14b428da6aff&movieid=${this.props.match.params.id}`).then(function (rep){
            return rep.json()
        }).then((data)=>{
            console.log(data)
            if(parseInt(data.resultcode)===200){
                this.setState({
                    data:data.result
                })
            }
           
        })
    }
    goBack=()=>{
        this.props.history.go(-1)
    }
 }