import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { URL } from '../../../config'
import CardInfo from '../../widgets/CardInfo/cardInfo'
class NewsSlist extends Component{
    state = {
        teams:[],
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end);
    }
    request = (start, end) => {
        if( this.state.teams.length < 1 ){
            axios.get(`${URL}/teams`)
            .then( response => {
                this.setState({
                    teams:response.data
                })
            })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                items:[...this.state.items, ...response.data]
            })
        })
    }
    renderNews = (type) => {
        let template = null;
        switch(type){
            case("card"):
                template = this.state.items.map( (item, i)  => (
                    <div key={i} className="newslist-item">
                        <CardInfo  
                            teams={this.state.teams} team={item.team} date={item.date}
                        />
                        <Link to={`/articles/${item.id}`}><h3>{item.title}</h3></Link>
                    </div>
                ) )
                break;
            default:
                template = null;
        }
        return template;
    }
    loadMore(){
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end);
    }
    render(){
        return(
            <div>
                { this.renderNews( this.props.type ) }
                <button type="button" onClick={()=>this.loadMore()}>Load More</button>
            </div>
        )
    }
}
export default NewsSlist;