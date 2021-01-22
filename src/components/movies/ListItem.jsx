import React from 'react'
import Css from '@/css/moveItem.less'
import { Rate } from 'antd';

export default class extends React.Component{
    render(){
        return (
           <div className={Css.moveItemBox} onClick={this.goDetail}>
               <div><img className={Css.img} src={this.props["pic_url"]}/></div>
               <div>电影名:{this.props["movieName"]}</div>
               <div><Rate disabled allowHalf defaultValue={Math.round(Math.random()*5)}/></div>
           </div>
        )
    }
    goDetail=()=>{
        this.props.history.push('/movies/detail/'+this.props.movieId)
    }
 }