import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { URL } from '../../../config'
class NewsSlist extends Component{
    state =  {
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    request = (start, end) => {
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response  => {
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }
    renderNews = (type) => {
        let template = null;
        
        switch(type){
            case("card"):
                template  = this.state.items.map( (item, i) =>(
                    <div classNamen="newslist-item" key={i}>
                        <Link to={`/articles/${item.id}`}>
                            {item.title}
                        </Link>
                    </div>
                ))
                break;
            default:
                template = null;
        }
        return template;
    }
    loadMore(){
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }
    render(){
        console.log(this.state.items);
        return(
            <div>
                { this.renderNews( this.props.type ) }
                <div onClick={() => this.loadMore()}>
                    Load More
                </div>
            </div>
        )
    }
}
export default NewsSlist;