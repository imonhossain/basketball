import React from 'react';
import Slick from 'react-slick'
import { Link } from 'react-router-dom'
import './slider.css'
const SliderTemplates = (props) => {
    let template = null;
    const settings = {
        dots:true,
        infinite:true,
        arrows:true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    }
    switch(props.type){
        case ('featured'):
            template = props.data.map( (item, i) =>{
                return(
                    <div key={i}>
                        <div className="feature-item">
                            <div className="feature-image" 
                                style={{
                                    background:`url(../images/articles/${item.image})`
                                }}
                            >
                                <h4 className="feature-item__title"><Link to={`/articles/${item.id}`}>{item.title}</Link></h4>
                            </div>
                        </div>
                    </div>
                )
            })
            break;
        default:
            template = null;

    }
    return(
        <Slick {...settings}>
           {template}
        </Slick>
    )
}
export default SliderTemplates;