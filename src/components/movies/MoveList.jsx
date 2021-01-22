import React from 'react'
import fetchJSON from 'fetch-jsonp'
import { Spin ,Alert ,Pagination} from 'antd';
import Item from '@/components/movies/ListItem.jsx'
 export default class extends React.Component{
     constructor(props){
        super(props)
        this.state={
            page:parseInt(props.match.params.page||1),
            type:parseInt(props.match.params.type||1),
            pageSize:12,
            List:[],
            total:0,
            isLoader:true,
        }
     }
    componentDidUpdate(prevProps, prevState) {
        let type=parseInt(this.props.match.params.type || 1)
        let page=parseInt(this.props.match.params.page || 1)
        if(type!=this.state.type || page!=this.state.page){
            this.setState({
                type:type,
                page:page,
                isLoader:true
            },()=>this.getList())
        }
    }
     getList=()=>{
         console.log(this.state.type,this.state.page)
        // fetchJSON(`http://v.juhe.cn/movie/movies.today?key=946acc208791c687340b14b428da6aff&cityid=${this.state.type}`).then(function(Respone){
        //     return Respone.json()
        // }).then((result)=>{
        //     if(result.error_code==0){
        //         this.setState({
        //             isLoader:false,
        //             List:result.result,
        //             total:result.result.length
        //         })
        //     }
        //         console.log(result)
        // })
        const JsonData=require(`./${this.state.type}.json`)
        setTimeout(()=>{
            this.setState({
                isLoader:false,
                List:JsonData.result,
                total:JsonData.result.length
            })
        },500)
     }
  

    render(){
        let content=(<Spin tip="Loading...">  
            <Alert message="电影频道"
            description="稍等片刻，马上回来~."
            type="info"></Alert>
        </Spin>);
        if(!this.state.isLoader){
            content=(
            <div style={{display:"flex",flexWrap:"wrap"}}>
                {this.state.List.map((item,index)=>{
                    return <Item key={index} {...item} history={this.props.history}></Item>
                })}
            </div>)
        }
        return <div>{content}<Pagination current={this.state.page} total={this.state.total}  pageSize={this.state.pageSize} showSizeChanger={false} onChange={this.changePage} /></div>
    }
    componentDidMount(){
        this.getList()
    }
    changePage=(page)=>{
        this.props.history.push(`/movies/${this.state.type}/${page}`)
    }
 }


