import React from 'react';
import FontAwesome from 'react-fontawesome'
const CardInfo = (props) => {
    const teamName = (teams,team) => {
        let data = teams.find((item)=>{
            return item.id === team
        });
        if(data){
            return data.name;
        }
    }
    return(
        <div className="cardinfo">
            <span className="team-name">
                {teamName(props.teams, props.team)}
            </span>
            <span className="cardinfo__date">
                <FontAwesome name="clock-o"/>
                {props.date}
            </span>
        </div>
    )
}
export default CardInfo;