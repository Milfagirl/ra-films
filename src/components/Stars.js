import React from 'react'
import StarIcon from './StarIcon'
import { nanoid } from 'nanoid'


export default function Stars(props) {
    const { count } = props;
    if (count >= 1 && count <= 5) {
        const array = []
        for (let i = 0; i < Number(count); i++) {
            array.push(<li key={nanoid()}>{<StarIcon />}</li>);
        }
        return (
            <ul className="card-body-stars u-clearfix">
                {array}
            </ul>
        )
    }
}
Stars.defaultProps = {
    count: 0,
}
