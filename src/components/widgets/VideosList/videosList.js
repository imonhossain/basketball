import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { URL } from '../../../config'
import CardInfo from '../../widgets/CardInfo/cardInfo'
import './videoList.css'
class VideoList extends Component{
    state = {
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }
    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }
    request = (start,end) => {
        if(this.state.teams.length < 1){
            axios.get(`${ URL }/teams`)
            .then( response =>{
                this.setState({
                    teams:response.data
                })
            })
        }

        axios.get(`${ URL }/videos?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                videos:[...this.state.videos,...response.data]
            })
        } )

    }
    renderTitle = (title) => {
        return title ? 
        <h3><strong>NBA</strong> videos</h3>
        : null;
    }
    renderVideos = () => {
        let template = null;

        switch(this.props.type){
            case("card"):
                template = this.state.videos.map((item,i)=>(
                    <div key={i} className="video-item">
                    
                        <div className="video-item__image" style={{
                            background:`url(/images/videos/${item.image})`
                        }}>
                        <div></div>
                        </div>
                        <div className="video-item__text-content">
                            <CardInfo teams={this.state.teams} team={item.id} date={item.date} />
                            <h3><Link to={`/videos/${item.id}`}>{item.title}</Link></h3>
                        </div>
                    </div>
                ))
                break;
            default:
                template = null;
        }
        return template;
    }
    render(){
        console.log(this.state.videos)
        return (
            <div className="video-list"> 
                {this.renderTitle(this.props.title)}    
                {this.renderVideos(this.props.type)}
            </div>
        )
    }
}

export default VideoList;