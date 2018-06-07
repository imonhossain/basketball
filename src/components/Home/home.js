import React, { Component } from 'react';
import NewsSlider from '../widgets/NewsSlider/slider'
import NewsSlist from '../widgets/NewsList/newsList'
import VideoList from '../widgets/VideosList/videosList'
class Home extends Component{
    render(){
        return(
            <div>
                <NewsSlider
                    type="featured"
                    start={0}
                    amount={6}
                    settings={{
                        dots:false
                    }}
                />
                <NewsSlist 
                    type="card"
                    start={3}
                    amount={3}
                />
                <VideoList 
                    type="card"
                    title={true}
                    loadmore={false}
                    start={0}
                    amount={3}
                />
            </div>
        );
    }
}

export default Home;