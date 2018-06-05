import React, { Component } from 'react';
import NewsSlider from '../widgets/NewsSlider/slider'
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
            </div>
        );
    }
}

export default Home;