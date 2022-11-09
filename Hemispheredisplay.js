import React from 'react';
import north from './Images/NorthernHemisphere.jpg'
import south from './Images/SouthernHemisphere.jpg'

const hemisphere = (props) => {

    const hemis = {
        northern:{
            place:'Northern hemisphere',
            img:north
        },
        southern:{
            place:'Southern hemisphere',
            img:south
        }
    };

    const show = props.latitude > 0 ? 'northern' : 'southern';

    return(
        <div>
            <img src={hemis[show].img}></img>
            {hemis[show].place}
        </div>
    )
}
export default hemisphere